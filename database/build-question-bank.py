#!/usr/bin/env python3
"""Build the 4,500-question external bank used by the SQL seed generator.

Inputs are the public BertaQA English parquet and the professionally translated
Spanish (Latin America) MMMLU parquet. BertaQA is translated locally with Argos
Translate; no question text is sent to a translation service.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path

import pyarrow.parquet as parquet


TARGET_PER_CATEGORY = 225

MMMLU_QUOTAS = {
    "Ciencia": 200,
    "Matemáticas": 225,
    "Naturaleza": 125,
    "Negocios": 225,
    "Política": 225,
    "Religión": 125,
    "Salud": 225,
    "Tecnología": 225,
}

MMMLU_SUBJECTS = {
    "Ciencia": {
        "astronomy", "college_chemistry", "college_physics",
        "conceptual_physics", "high_school_chemistry", "high_school_physics",
    },
    "Matemáticas": {
        "abstract_algebra", "college_mathematics", "elementary_mathematics",
        "high_school_mathematics", "high_school_statistics",
    },
    "Naturaleza": {
        "college_biology", "high_school_biology", "prehistory",
    },
    "Negocios": {
        "business_ethics", "econometrics", "high_school_macroeconomics",
        "high_school_microeconomics", "management", "marketing",
        "professional_accounting", "public_relations",
    },
    "Política": {
        "high_school_government_and_politics", "international_law",
        "jurisprudence", "security_studies", "sociology",
        "us_foreign_policy",
    },
    "Religión": {
        "moral_disputes", "philosophy", "world_religions",
    },
    "Salud": {
        "anatomy", "clinical_knowledge", "college_medicine", "human_aging",
        "human_sexuality", "medical_genetics", "nutrition",
        "professional_medicine", "virology",
    },
    "Tecnología": {
        "college_computer_science", "computer_security",
        "electrical_engineering", "high_school_computer_science",
        "machine_learning",
    },
}

BERTA_PLAN = {
    "Kultura eta artea": [
        ("Arte", 225),
        ("Arquitectura", 225),
        ("Religión", 100),
    ],
    "Zinema eta ikuskizunak": [
        ("Cine", 225),
        ("TV & Series", 225),
        ("Pop Culture", 147),
    ],
    "Kirola eta aisialdia": [
        ("Deportes", 225),
        ("Pop Culture", 78),
    ],
    "Gizartea eta ohiturak": [
        ("Gastronomía", 225),
    ],
    "Geografia eta Historia": [
        ("Geografía", 225),
        ("Historia", 225),
    ],
    "Euskara eta literatura": [
        ("Idiomas", 225),
        ("Literatura", 225),
    ],
    "Musika eta dantza": [
        ("Música", 225),
    ],
    "Zientzia eta teknologia": [
        ("Ciencia", 25),
        ("Naturaleza", 100),
    ],
}

KEYWORDS = {
    "Arte": ("paint", "sculpt", "artist", "museum", "art", "canvas", "style"),
    "Arquitectura": (
        "architect", "building", "palace", "castle", "cathedral", "church",
        "tower", "bridge", "theatre", "monument",
    ),
    "Religión": (
        "relig", "church", "saint", "god", "bible", "christ", "muslim",
        "jew", "monastery", "temple",
    ),
    "Cine": ("film", "movie", "cinema", "actor", "actress", "director", "oscar"),
    "TV & Series": (
        "tv", "television", "series", "episode", "show", "programme",
        "character", "soap opera",
    ),
    "Pop Culture": (
        "game", "comic", "character", "celebrity", "hobby", "toy", "festival",
        "popular", "leisure",
    ),
    "Deportes": (
        "sport", "team", "player", "championship", "league", "race", "football",
        "basketball", "cycling", "olympic", "match",
    ),
    "Gastronomía": (
        "food", "dish", "cook", "drink", "wine", "bread", "cheese", "recipe",
        "eat", "restaurant",
    ),
    "Geografía": (
        "where", "river", "mount", "country", "city", "island", "sea", "ocean",
        "capital", "border", "located",
    ),
    "Historia": (
        "when", "year", "century", "war", "king", "queen", "empire",
        "revolution", "ancient", "history",
    ),
    "Idiomas": (
        "language", "word", "dialect", "grammar", "translation", "mean",
        "alphabet", "lingu",
    ),
    "Literatura": (
        "book", "novel", "writer", "author", "poet", "poem", "literature",
        "story", "play",
    ),
    "Música": (
        "music", "song", "singer", "band", "album", "instrument", "dance",
        "composer", "orchestra",
    ),
    "Ciencia": (
        "science", "chemical", "physics", "unit", "element", "planet", "energy",
        "temperature", "laboratory",
    ),
    "Naturaleza": (
        "animal", "plant", "tree", "bird", "fish", "species", "forest",
        "nature", "ecology", "insect",
    ),
}


def normalize(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def stable_rank(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", str(text)).strip()


def select_mmmlu(rows: list[dict]) -> list[dict]:
    selected: list[dict] = []
    used_questions: set[str] = set()
    for category, quota in MMMLU_QUOTAS.items():
        candidates = [
            row for row in rows
            if row["Subject"] in MMMLU_SUBJECTS[category]
            and all(clean_text(row[key]) for key in ("Question", "A", "B", "C", "D"))
            and row["Answer"] in {"A", "B", "C", "D"}
        ]
        candidates.sort(key=lambda row: stable_rank(f"{category}:{row['Question']}"))
        category_rows = []
        for row in candidates:
            question = clean_text(row["Question"])
            key = normalize(question)
            if key in used_questions:
                continue
            used_questions.add(key)
            choices = [clean_text(row[key]) for key in ("A", "B", "C", "D")]
            category_rows.append({
                "category": category,
                "question": question,
                "choices": choices,
                "correctOption": row["Answer"],
                "source": "MMMLU",
            })
            if len(category_rows) == quota:
                break
        if len(category_rows) != quota:
            raise RuntimeError(f"{category}: MMMLU returned {len(category_rows)} of {quota}")
        selected.extend(category_rows)
    return selected


def score_for_target(row: dict, target: str) -> tuple[int, str]:
    haystack = normalize(" ".join([row["question"], *row["candidates"]]))
    score = sum(1 for keyword in KEYWORDS.get(target, ()) if keyword in haystack)
    return score, stable_rank(f"{target}:{row['id']}:{row['question']}")


def select_berta(rows: list[dict]) -> list[dict]:
    selected: list[dict] = []
    used_questions: set[str] = set()
    for source_category, assignments in BERTA_PLAN.items():
        available = [
            row for row in rows
            if row["category"] == source_category
            and clean_text(row["question"])
            and len(row["candidates"]) == 3
            and row["answer"] in (0, 1, 2)
            and all(clean_text(choice) for choice in row["candidates"])
        ]
        for target, quota in assignments:
            available.sort(
                key=lambda row: (
                    -score_for_target(row, target)[0],
                    score_for_target(row, target)[1],
                )
            )
            chosen = []
            remaining = []
            for row in available:
                question_key = normalize(row["question"])
                if len(chosen) < quota and question_key not in used_questions:
                    chosen.append(row)
                    used_questions.add(question_key)
                else:
                    remaining.append(row)
            available = remaining
            if len(chosen) != quota:
                raise RuntimeError(f"{target}: BertaQA returned {len(chosen)} of {quota}")
            for row in chosen:
                selected.append({
                    "category": target,
                    "question": clean_text(row["question"]),
                    "choices": [clean_text(choice) for choice in row["candidates"]],
                    "correctIndex": int(row["answer"]),
                    "source": "BertaQA",
                })
    return selected


def translate_berta(rows: list[dict]) -> None:
    import ctranslate2
    import argostranslate.settings
    import argostranslate.translate

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

    unique_questions = list(dict.fromkeys(row["question"] for row in rows))
    unique_choices = list(dict.fromkeys(
        choice for row in rows for choice in row["choices"]
    ))
    question_results = translator.translate_batch(
        [package.tokenizer.encode(text) for text in unique_questions],
        replace_unknowns=True, max_batch_size=256, batch_type="tokens",
        beam_size=4, num_hypotheses=4,
    )
    question_translations = {
        text: [
            clean_text(package.tokenizer.decode(hypothesis))
            for hypothesis in result.hypotheses
        ]
        for text, result in zip(unique_questions, question_results, strict=True)
    }
    choice_results = translator.translate_batch(
        [package.tokenizer.encode(text) for text in unique_choices],
        replace_unknowns=True, max_batch_size=256, batch_type="tokens",
        beam_size=1, num_hypotheses=1,
    )
    choice_translations = {
        text: clean_text(package.tokenizer.decode(result.hypotheses[0]))
        for text, result in zip(unique_choices, choice_results, strict=True)
    }
    print(
        f"Translated {len(unique_questions)} questions and "
        f"{len(unique_choices)} choices in two batches",
        flush=True,
    )

    used_questions: set[str] = set()
    for row in rows:
        question_alternatives = question_translations[row["question"]]
        question = next(
            (
                alternative for alternative in question_alternatives
                if normalize(alternative) not in used_questions
            ),
            None,
        )
        if question is None:
            raise RuntimeError(f"No unique Spanish translation for: {row['question']}")
        used_questions.add(normalize(question))
        row["question"] = question
        row["choices"] = [choice_translations[choice] for choice in row["choices"]]
        row["correctOption"] = "ABC"[row.pop("correctIndex")]


def assign_difficulty(rows: list[dict]) -> None:
    by_category: dict[str, list[dict]] = {}
    for row in rows:
        by_category.setdefault(row["category"], []).append(row)
    for category_rows in by_category.values():
        category_rows.sort(key=lambda row: stable_rank(row["question"]))
        for index, row in enumerate(category_rows):
            row["difficulty"] = "HARD" if index % 5 == 4 else "MEDIUM"


def repair_choices(rows: list[dict]) -> None:
    by_category: dict[str, list[dict]] = {}
    for row in rows:
        by_category.setdefault(row["category"], []).append(row)
    for category_rows in by_category.values():
        answer_pool = [
            row["choices"][ord(row["correctOption"]) - ord("A")]
            for row in category_rows
        ]
        for row in category_rows:
            answer = row["choices"][ord(row["correctOption"]) - ord("A")]
            choices = []
            used = set()
            for choice in row["choices"]:
                key = normalize(choice)
                if key not in used:
                    choices.append(choice)
                    used.add(key)
            candidates = sorted(
                answer_pool,
                key=lambda candidate: stable_rank(f"{row['question']}:{candidate}"),
            )
            for candidate in candidates:
                if len(choices) == 4:
                    break
                key = normalize(candidate)
                if key not in used:
                    choices.append(candidate)
                    used.add(key)
            if len(choices) != 4:
                raise RuntimeError(f"Could not repair choices: {row['question']}")
            row["choices"] = choices
            row["correctOption"] = "ABCD"[
                next(
                    index for index, choice in enumerate(choices)
                    if normalize(choice) == normalize(answer)
                )
            ]


def validate(rows: list[dict]) -> None:
    if len(rows) != 4500:
        raise RuntimeError(f"Expected 4,500 external questions, got {len(rows)}")
    counts = Counter(row["category"] for row in rows)
    if set(counts.values()) != {TARGET_PER_CATEGORY}:
        raise RuntimeError(f"Expected 225 questions per category, got {counts}")
    normalized = [normalize(row["question"]) for row in rows]
    duplicates = [key for key, count in Counter(normalized).items() if count > 1]
    if duplicates:
        raise RuntimeError(f"Found {len(duplicates)} duplicate question texts")
    for row in rows:
        choices = row["choices"]
        if len(set(map(normalize, choices))) != len(choices):
            raise RuntimeError(f"Repeated choices: {row['question']}")
        correct_index = ord(row["correctOption"]) - ord("A")
        if not 0 <= correct_index < len(choices):
            raise RuntimeError(f"Invalid answer: {row['question']}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--berta", type=Path, required=True)
    parser.add_argument("--mmmlu", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--skip-translation", action="store_true")
    args = parser.parse_args()

    berta_rows = parquet.read_table(args.berta).to_pylist()
    mmmlu_rows = parquet.read_table(args.mmmlu).to_pylist()
    selected = select_mmmlu(mmmlu_rows)
    berta_selected = select_berta(berta_rows)
    if not args.skip_translation:
        translate_berta(berta_selected)
    selected.extend(berta_selected)
    repair_choices(selected)
    assign_difficulty(selected)
    selected.sort(key=lambda row: (row["category"], stable_rank(row["question"])))
    validate(selected)
    args.output.write_text(
        json.dumps(selected, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(selected)} questions to {args.output}")


if __name__ == "__main__":
    main()
