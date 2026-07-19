# Fuentes del banco de preguntas

El banco activo contiene 5.000 preguntas en español:

- 500 preguntas directas curadas en el proyecto;
- preguntas de opción múltiple de **MMMLU**, configuración `ES_LA`;
- preguntas temáticas de **Trivia Single Choice**, traducidas localmente;
- una selección final de filas cortas de **BertaQA**.

Fuentes públicas de Hugging Face:

- **MMMLU** — licencia MIT:
  <https://huggingface.co/datasets/openai/MMMLU>
- **Trivia Single Choice (4 options)**:
  <https://huggingface.co/datasets/Mihaiii/trivia_single_choice-4-options>
- **BertaQA** — licencia CC BY 4.0:
  <https://huggingface.co/datasets/HiTZ/BertaQA>

`build-hf-question-bank.py` clasifica por el campo temático explícito de Trivia
Single Choice y traduce únicamente en local con Argos Translate. El generador
prioriza esta fuente y MMMLU; BertaQA se utiliza solo después de aplicar todos
los filtros de visualización.

El banco final garantiza:

- 1.000 preguntas `FREE_TEXT` y 4.000 `MULTIPLE_CHOICE`;
- 50 preguntas de escritura libre en cada una de las 20 categorías;
- una sola versión directa de cada enunciado, sin versión inversa;
- enunciados de hasta 100 caracteres;
- respuestas y opciones de hasta 45 caracteres;
- cuatro opciones diferentes en cada pregunta tipo test;
- ausencia de notación matemática o símbolos incompatibles;
- 20 % de dificultad alta y 80 % media dentro de cada formato y categoría.

Los snapshots JSON permiten regenerar el SQL sin red. Antes de cargar los datos,
`seed-questions.sql` vuelve a validar los recuentos, duplicados y límites.
