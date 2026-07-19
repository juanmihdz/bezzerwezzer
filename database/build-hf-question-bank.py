#!/usr/bin/env python3
"""Build a balanced, display-safe trivia bank from a Hugging Face snapshot.

The input is Mihaiii/trivia_single_choice-4-options.  Its ``topic`` field is
used to assign only questions with an explicit thematic match to one of the
game categories.  Selected English text is translated locally with Argos.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

import pyarrow.parquet as parquet


TARGET_PER_CATEGORY = 225
CANDIDATE_LIMIT_PER_CATEGORY = 400
QUESTION_LIMIT = 100
OPTION_LIMIT = 45
FORBIDDEN_SYMBOLS = re.compile(r"[≤≥≠≈√∑∫×÷→←↔±∞²³⁰¹⁴⁵⁶⁷⁸⁹^]")

# The topic labels are English and unusually detailed.  Requiring one of these
# category-specific expressions is much safer than splitting broad buckets.
CATEGORY_TERMS = {
    "Arquitectura": (
        "architect", "architecture", "building", "skyscraper", "cathedral",
        "castle", "palace", "bridge design", "urban design", "monument",
    ),
    "Arte": (
        "art", "painting", "painter", "sculpt", "museum", "photograph",
        "renaissance artist", "impressionis", "surrealis", "artwork",
    ),
    "Ciencia": (
        "physics", "chemistry", "astronom", "space", "scientific",
        "element", "quantum", "thermodynamic", "geology", "biochemistry",
    ),
    "Cine": (
        "film", "movie", "cinema", "actor", "actress", "director",
        "oscar", "hollywood", "pixar", "studio ghibli",
    ),
    "Deportes": (
        "sport", "football", "soccer", "basketball", "baseball", "tennis",
        "olympic", "formula 1", "wrestling", "golf", "chess", "esports",
    ),
    "Gastronomía": (
        "food", "cuisine", "culinary", "cook", "dish", "recipe", "cheese",
        "pastry", "wine", "beer", "coffee", "sushi", "gastronom",
    ),
    "Geografía": (
        "geograph", "country", "countries", "capital cit", "river",
        "mountain", "island", "ocean", "sea ", "desert", "continent",
    ),
    "Historia": (
        "history", "historical", "ancient", "medieval", "empire", "dynasty",
        "war", "revolution", "century", "archaeolog", "civilization",
    ),
    "Idiomas": (
        "language", "linguistic", "grammar", "dialect", "etymolog",
        "alphabet", "vocabulary", "idiom", "word origin", "translation",
        "slang", "morse code", "hieroglyph", "sign language", "rune",
        "esperanto",
    ),
    "Literatura": (
        "literature", "literary", "book", "novel", "writer", "author",
        "poet", "poetry", "shakespeare", "tolkien", "dostoyevsky",
    ),
    "Matemáticas": (
        "math", "algebra", "geometry", "calculus", "theorem", "fibonacci",
        "number theory", "statistics", "topology", "mathematician",
        "probability", "combinator", "equation", "arithmetic", "trigonom",
        "matrix", "matrices", "prime number", "logic puzzle", "number puzzle",
        "numerical", "number", "decimal", "fraction", "number sequence", "measurement",
        "mathematical puzzle", "math puzzle", "geometry puzzle", "formal logic",
        "logical reasoning",
    ),
    "Música": (
        "music", "song", "singer", "band", "album", "composer", "jazz",
        "rock ", "opera", "orchestra", "guitar", "piano", "discography",
    ),
    "Naturaleza": (
        "animal", "wildlife", "plant", "bird", "insect", "marine life",
        "ecology", "ecosystem", "forest", "dinosaur", "species", "flora",
    ),
    "Negocios": (
        "business", "finance", "economic", "marketing", "management",
        "entrepreneur", "stock market", "company", "corporate", "trade",
        "banking", "commerce", "industry", "startup", "cryptocurrency",
    ),
    "Política": (
        "politic", "government", "election", "president", "parliament",
        "diplomac", "geopolitic", "public policy", "international relations",
        "constitution", "democracy", "monarch", "prime minister", "law ",
        "congress", "senate", "legal system", "supreme court",
    ),
    "Pop Culture": (
        "video game", "gaming", "comic", "anime", "manga", "pokemon",
        "pop culture", "celebrity", "fashion", "toy", "meme", "superhero",
    ),
    "Religión": (
        "religion", "theology", "bible", "christian", "islam", "muslim",
        "buddh", "hindu", "judaism", "church", "spiritual", "mythology",
        "myth", "deity", "deities", "goddess", "gospel", "sacred",
    ),
    "Salud": (
        "medicine", "medical", "health", "anatom", "disease", "syndrome",
        "genetic", "neuroscience", "brain", "nutrition", "surgery",
        "psycholog", "immunolog", "virus", "bacteria", "pharmac", "human body",
    ),
    "TV & Series": (
        "television", "tv series", "tv show", "sitcom", "season ",
        "episode", "netflix", "doctor who", "star trek", "friends",
        "stranger things", "game of thrones", "breaking bad", "rick and morty",
        "cartoon", "animated series",
    ),
    "Tecnología": (
        "computer", "programming", "software", "internet", "cyber",
        "algorithm", "artificial intelligence", "machine learning",
        "smartphone", "operating system", "data science", "robot",
    ),
}

CATEGORY_PRIORITY = (
    "Matemáticas", "Idiomas", "TV & Series", "Negocios", "Política", "Salud",
    "Religión", "Arquitectura", "Tecnología", "Gastronomía", "Deportes",
    "Geografía", "Literatura", "Música", "Cine", "Pop Culture", "Naturaleza",
    "Ciencia", "Arte", "Historia",
)
PRIORITY_INDEX = {category: index for index, category in enumerate(CATEGORY_PRIORITY)}


def clean(value: object) -> str:
    return re.sub(r"\s+", " ", html.unescape(str(value))).strip()


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def stable_rank(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def matching_categories(topic: str) -> list[tuple[str, int]]:
    normalized_topic = f" {normalize(topic)} "
    matches = []
    for category, terms in CATEGORY_TERMS.items():
        score = sum(1 for term in terms if normalize(term) in normalized_topic)
        if score:
            matches.append((category, score))
    return sorted(matches, key=lambda item: (PRIORITY_INDEX[item[0]], -item[1]))


def select_rows(rows: list[dict], strict: bool = True) -> tuple[list[dict], Counter]:
    candidates: dict[str, list[dict]] = defaultdict(list)
    used_questions: set[str] = set()
    for source in rows:
        question = clean(source["question"])
        choices = [clean(source[f"option_{letter}"]) for letter in "ABCD"]
        correct = clean(source["correct_option"]).upper()
        matches = matching_categories(clean(source["topic"]))
        if not matches or correct not in "ABCD" or any(not value for value in choices):
            continue
        if len({normalize(value) for value in choices}) != 4:
            continue
        question_key = normalize(question)
        if question_key in used_questions:
            continue
        used_questions.add(question_key)
        category = matches[0][0]
        candidates[category].append({
            "category": category,
            "question": question,
            "choices": choices,
            "correctOption": correct,
            "source": "HF Trivia Single Choice",
        })

    selected = []
    candidate_counts = Counter()
    for category in CATEGORY_TERMS:
        category_rows = sorted(
            candidates[category],
            key=lambda row: stable_rank(f"{category}:{row['question']}"),
        )
        candidate_counts[category] = len(category_rows)
        if strict and len(category_rows) < TARGET_PER_CATEGORY:
            raise RuntimeError(
                f"{category}: only {len(category_rows)} unambiguous candidates"
            )
        selected.extend(category_rows[:CANDIDATE_LIMIT_PER_CATEGORY])
    return selected, candidate_counts


def translate_rows(rows: list[dict]) -> None:
    import argostranslate.settings
    import argostranslate.translate
    import ctranslate2

    source = argostranslate.translate.get_language_from_code("en")
    target = argostranslate.translate.get_language_from_code("es")
    if source is None or target is None:
        raise RuntimeError("Install the Argos Translate en_es package first")
    translation = source.get_translation(target).underlying
    package = translation.pkg
    translator = ctranslate2.Translator(
        str(package.package_path / "model"),
        device=argostranslate.settings.device,
        inter_threads=argostranslate.settings.inter_threads,
        intra_threads=argostranslate.settings.intra_threads,
        compute_type=argostranslate.settings.compute_type,
    )
    values = list(dict.fromkeys(
        value for row in rows for value in [row["question"], *row["choices"]]
    ))
    results = translator.translate_batch(
        [package.tokenizer.encode(value) for value in values],
        replace_unknowns=True,
        max_batch_size=256,
        batch_type="tokens",
        beam_size=1,
        num_hypotheses=1,
    )
    translations = {
        value: clean(package.tokenizer.decode(result.hypotheses[0]))
        for value, result in zip(values, results, strict=True)
    }
    for row in rows:
        row["question"] = translations[row["question"]]
        row["choices"] = [translations[value] for value in row["choices"]]


def compact(value: str, limit: int) -> str:
    replacements = (
        (r"^¿Cuál de las siguientes opciones ", "¿Qué "),
        (r"^¿Cuál de los siguientes ", "¿Qué "),
        (r"^¿Cuál de estas ", "¿Qué "),
        (r"^¿Cuál de estos ", "¿Qué "),
        (r"^¿Qué opción de las siguientes ", "¿Qué "),
        (r"\s*\([^)]{12,}\)", ""),
        (r"\s*,\s*(?:que|el cual|la cual)\s+[^?]{25,}(?=\?)", ""),
    )
    value = clean(value)
    for pattern, replacement in replacements:
        candidate = clean(re.sub(pattern, replacement, value, flags=re.IGNORECASE))
        if candidate:
            value = candidate
    if len(value) <= limit:
        return value
    return ""


def validate(rows: list[dict]) -> None:
    normalized_questions = [normalize(row["question"]) for row in rows]
    if len(normalized_questions) != len(set(normalized_questions)):
        raise RuntimeError("Duplicate translated questions")
    for row in rows:
        values = [row["question"], *row["choices"]]
        if len(row["question"]) > QUESTION_LIMIT:
            raise RuntimeError(f"Long question: {row['question']}")
        if any(len(choice) > OPTION_LIMIT for choice in row["choices"]):
            raise RuntimeError(f"Long option: {row['question']}")
        if any(FORBIDDEN_SYMBOLS.search(value) for value in values):
            raise RuntimeError(f"Unsupported symbol: {row['question']}")
        if len({normalize(choice) for choice in row["choices"]}) != 4:
            raise RuntimeError(f"Repeated choices: {row['question']}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    source_rows = parquet.read_table(args.input).to_pylist()
    selected, candidate_counts = select_rows(source_rows, strict=False)
    if args.dry_run:
        print(candidate_counts)
        return
    translate_rows(selected)
    for row in selected:
        row["question"] = compact(row["question"], QUESTION_LIMIT)
        row["choices"] = [compact(choice, OPTION_LIMIT) for choice in row["choices"]]
    # Translation may expand text beyond mobile-safe limits. Keep only valid
    # rows and fail explicitly; callers can raise the candidate buffer safely.
    display_safe = []
    used_questions = set()
    for row in selected:
        question_key = normalize(row["question"])
        if (
            not row["question"]
            or not all(row["choices"])
            or question_key in used_questions
            or len({normalize(choice) for choice in row["choices"]}) != 4
            or any(
                FORBIDDEN_SYMBOLS.search(value)
                for value in [row["question"], *row["choices"]]
            )
        ):
            continue
        used_questions.add(question_key)
        display_safe.append(row)
    selected = display_safe
    by_category = defaultdict(list)
    for row in selected:
        by_category[row["category"]].append(row)
    for category_rows in by_category.values():
        category_rows.sort(key=lambda row: stable_rank(row["question"]))
        for index, row in enumerate(category_rows):
            row["difficulty"] = "HARD" if index % 5 == 4 else "MEDIUM"
    selected.sort(key=lambda row: (row["category"], stable_rank(row["question"])))
    validate(selected)
    args.output.write_text(
        json.dumps(selected, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(selected)} questions to {args.output}")


if __name__ == "__main__":
    main()
