# Fuentes del banco de preguntas

El banco de 5.000 preguntas combina 500 preguntas curadas en el proyecto con
4.500 preguntas independientes procedentes de estos conjuntos públicos:

- **MMMLU**, configuración `ES_LA`: traducción profesional al español
  latinoamericano del conjunto MMLU. Licencia MIT.
  <https://huggingface.co/datasets/openai/MMMLU>
- **BertaQA**, configuración `en`: preguntas de trivia general y cultura vasca.
  Licencia CC BY 4.0. La traducción al español se realiza localmente con
  Argos Translate.
  <https://huggingface.co/datasets/HiTZ/BertaQA>

`build-question-bank.py` documenta la selección, el reparto por categorías y
la traducción. El archivo generado `question-bank.json` queda incluido en el
repositorio para que regenerar el SQL no requiera red ni dependencias Python.
