-- ============================================================
-- Bezzerwizzer Online – Seed Data (Spanish)
-- 20 categories × 20 questions each = 400 questions
-- Mix of MULTIPLE_CHOICE (~5) and FREE_TEXT (~5) per category
-- ============================================================

-- ==================== CATEGORIES ====================

INSERT INTO categories (name, icon, color, locale) VALUES
('Arte',          'palette',        '#E91E63', 'es'),
('Arquitectura',  'building',       '#9C27B0', 'es'),
('Ciencia',       'flask',          '#2196F3', 'es'),
('Cine',          'film',           '#F44336', 'es'),
('Deportes',      'trophy',         '#4CAF50', 'es'),
('Gastronomía',   'utensils',       '#FF9800', 'es'),
('Geografía',     'globe',          '#00BCD4', 'es'),
('Historia',      'landmark',       '#795548', 'es'),
('Idiomas',       'languages',      '#607D8B', 'es'),
('Literatura',    'book-open',      '#3F51B5', 'es'),
('Matemáticas',   'calculator',     '#009688', 'es'),
('Música',        'music',          '#FF5722', 'es'),
('Naturaleza',    'leaf',           '#8BC34A', 'es'),
('Negocios',      'briefcase',      '#455A64', 'es'),
('Política',      'landmark-dome',  '#B71C1C', 'es'),
('Pop Culture',   'star',           '#E040FB', 'es'),
('Religión',      'church',         '#BF360C', 'es'),
('Salud',         'heart-pulse',    '#EF5350', 'es'),
('Tecnología',    'cpu',            '#1565C0', 'es'),
('TV & Series',   'tv',             '#AB47BC', 'es');

-- ==================== ARTE (category_id = 1) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(1, '¿Quién pintó "La noche estrellada"?', 'MULTIPLE_CHOICE', 'Claude Monet', 'Vincent van Gogh', 'Pablo Picasso', 'Salvador Dalí', 'B', 1, 'es'),
(1, '¿En qué museo se encuentra "La Gioconda" (Mona Lisa)?', 'MULTIPLE_CHOICE', 'Museo del Prado', 'Museo Británico', 'Museo del Louvre', 'Galería Uffizi', 'C', 1, 'es'),
(1, '¿Qué movimiento artístico lideró Salvador Dalí?', 'MULTIPLE_CHOICE', 'Impresionismo', 'Cubismo', 'Surrealismo', 'Expresionismo', 'C', 1, 'es'),
(1, '¿Quién esculpió "El David"?', 'MULTIPLE_CHOICE', 'Donatello', 'Miguel Ángel', 'Bernini', 'Rodin', 'B', 1, 'es'),
(1, '¿Qué técnica pictórica usa puntos pequeños de color?', 'MULTIPLE_CHOICE', 'Acuarela', 'Puntillismo', 'Fresco', 'Óleo', 'B', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(1, '¿Quién pintó "El Guernica"?', 'FREE_TEXT', 'Pablo Picasso', ARRAY['Picasso', 'P. Picasso'], 1, 'es'),
(1, '¿Cómo se llama el famoso cuadro de Edvard Munch que muestra una figura gritando?', 'FREE_TEXT', 'El Grito', ARRAY['El grito', 'The Scream', 'Grito'], 1, 'es'),
(1, '¿Qué artista mexicana es famosa por sus autorretratos?', 'FREE_TEXT', 'Frida Kahlo', ARRAY['Frida', 'Kahlo'], 2, 'es'),
(1, '¿Qué pintor holandés se cortó parte de la oreja?', 'FREE_TEXT', 'Vincent van Gogh', ARRAY['Van Gogh', 'van Gogh', 'Vincent Van Gogh'], 1, 'es'),
(1, '¿Qué artista es conocido por sus latas de sopa Campbell?', 'FREE_TEXT', 'Andy Warhol', ARRAY['Warhol', 'A. Warhol'], 2, 'es');

-- ==================== ARQUITECTURA (category_id = 2) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(2, '¿Quién diseñó la Sagrada Familia de Barcelona?', 'MULTIPLE_CHOICE', 'Santiago Calatrava', 'Antoni Gaudí', 'Oscar Niemeyer', 'Le Corbusier', 'B', 1, 'es'),
(2, '¿En qué ciudad se encuentra el Coliseo?', 'MULTIPLE_CHOICE', 'Atenas', 'Roma', 'Estambul', 'Alejandría', 'B', 1, 'es'),
(2, '¿Qué estilo arquitectónico se caracteriza por arcos apuntados y bóvedas de crucería?', 'MULTIPLE_CHOICE', 'Románico', 'Barroco', 'Gótico', 'Renacentista', 'C', 2, 'es'),
(2, '¿Quién diseñó el Museo Guggenheim de Bilbao?', 'MULTIPLE_CHOICE', 'Zaha Hadid', 'Frank Gehry', 'Renzo Piano', 'Norman Foster', 'B', 2, 'es'),
(2, '¿En qué país se encuentra el Taj Mahal?', 'MULTIPLE_CHOICE', 'Pakistán', 'Irán', 'India', 'Turquía', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(2, '¿Cómo se llama la torre inclinada más famosa del mundo, ubicada en Italia?', 'FREE_TEXT', 'Torre de Pisa', ARRAY['Torre inclinada de Pisa', 'Pisa'], 1, 'es'),
(2, '¿Qué estructura de París fue construida para la Exposición Universal de 1889?', 'FREE_TEXT', 'Torre Eiffel', ARRAY['Eiffel', 'La Torre Eiffel'], 1, 'es'),
(2, '¿Qué arquitecta iraquí-británica fue la primera mujer en ganar el Premio Pritzker?', 'FREE_TEXT', 'Zaha Hadid', ARRAY['Hadid', 'Zaha'], 3, 'es'),
(2, '¿Cómo se llama el palacio real de los reyes de Francia en las afueras de París?', 'FREE_TEXT', 'Palacio de Versalles', ARRAY['Versalles', 'Versailles', 'Château de Versailles'], 1, 'es'),
(2, '¿Qué pirámide de cristal se encuentra en el patio del Museo del Louvre?', 'FREE_TEXT', 'Pirámide del Louvre', ARRAY['Piramide del Louvre', 'La Pirámide', 'Pirámide de cristal del Louvre'], 2, 'es');

-- ==================== CIENCIA (category_id = 3) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(3, '¿Cuál es el símbolo químico del oro?', 'MULTIPLE_CHOICE', 'Ag', 'Au', 'Fe', 'Cu', 'B', 1, 'es'),
(3, '¿Qué planeta es conocido como el "Planeta Rojo"?', 'MULTIPLE_CHOICE', 'Venus', 'Júpiter', 'Marte', 'Saturno', 'C', 1, 'es'),
(3, '¿Cuántos huesos tiene el cuerpo humano adulto?', 'MULTIPLE_CHOICE', '186', '206', '216', '256', 'B', 2, 'es'),
(3, '¿Qué gas es el más abundante en la atmósfera terrestre?', 'MULTIPLE_CHOICE', 'Oxígeno', 'Dióxido de carbono', 'Nitrógeno', 'Argón', 'C', 1, 'es'),
(3, '¿Cuál es la velocidad de la luz en km/s (aproximadamente)?', 'MULTIPLE_CHOICE', '150.000 km/s', '300.000 km/s', '450.000 km/s', '600.000 km/s', 'B', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(3, '¿Cuál es la fórmula química del agua?', 'FREE_TEXT', 'H2O', ARRAY['h2o', 'H₂O'], 1, 'es'),
(3, '¿Quién formuló la teoría de la relatividad?', 'FREE_TEXT', 'Albert Einstein', ARRAY['Einstein', 'A. Einstein'], 1, 'es'),
(3, '¿Cómo se llama la tabla que organiza los elementos químicos?', 'FREE_TEXT', 'Tabla periódica', ARRAY['Tabla periodica', 'Tabla periódica de los elementos'], 1, 'es'),
(3, '¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?', 'FREE_TEXT', 'Newton', ARRAY['newton', 'N', 'Newtons'], 2, 'es'),
(3, '¿Qué científica descubrió la radioactividad junto a su esposo Pierre?', 'FREE_TEXT', 'Marie Curie', ARRAY['Curie', 'Maria Curie', 'M. Curie'], 2, 'es');

-- ==================== CINE (category_id = 4) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(4, '¿Quién dirigió "El Padrino"?', 'MULTIPLE_CHOICE', 'Martin Scorsese', 'Francis Ford Coppola', 'Steven Spielberg', 'Ridley Scott', 'B', 1, 'es'),
(4, '¿Qué película ganó el primer Óscar a Mejor Película en 1929?', 'MULTIPLE_CHOICE', 'Alas', 'El cantor de jazz', 'Metrópolis', 'El maquinista de la General', 'A', 3, 'es'),
(4, '¿En qué saga de películas aparece el personaje de Darth Vader?', 'MULTIPLE_CHOICE', 'Star Trek', 'El Señor de los Anillos', 'Star Wars', 'Matrix', 'C', 1, 'es'),
(4, '¿Qué director mexicano ganó el Óscar por "La forma del agua"?', 'MULTIPLE_CHOICE', 'Alfonso Cuarón', 'Alejandro González Iñárritu', 'Guillermo del Toro', 'Robert Rodríguez', 'C', 2, 'es'),
(4, '¿Qué actor interpretó a Jack en "Titanic"?', 'MULTIPLE_CHOICE', 'Brad Pitt', 'Tom Hanks', 'Leonardo DiCaprio', 'Johnny Depp', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(4, '¿Cómo se llama el mago protagonista de la saga creada por J.K. Rowling?', 'FREE_TEXT', 'Harry Potter', ARRAY['harry potter', 'Potter'], 1, 'es'),
(4, '¿Qué director es famoso por películas como "Psicosis" y "Los pájaros"?', 'FREE_TEXT', 'Alfred Hitchcock', ARRAY['Hitchcock', 'A. Hitchcock'], 2, 'es'),
(4, '¿Cuál es la película más taquillera de la historia (hasta 2025)?', 'FREE_TEXT', 'Avatar', ARRAY['avatar'], 2, 'es'),
(4, '¿Qué actor español ganó dos premios Óscar como actor de reparto?', 'FREE_TEXT', 'Javier Bardem', ARRAY['Bardem', 'J. Bardem'], 2, 'es'),
(4, '¿En qué película de animación aparece el personaje Buzz Lightyear?', 'FREE_TEXT', 'Toy Story', ARRAY['toy story', 'Toy story'], 1, 'es');

-- ==================== DEPORTES (category_id = 5) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(5, '¿Cada cuántos años se celebran los Juegos Olímpicos de verano?', 'MULTIPLE_CHOICE', '2 años', '3 años', '4 años', '5 años', 'C', 1, 'es'),
(5, '¿En qué deporte se usa un "shuttlecock" o volante?', 'MULTIPLE_CHOICE', 'Tenis', 'Bádminton', 'Squash', 'Pádel', 'B', 2, 'es'),
(5, '¿Qué selección ha ganado más Copas del Mundo de fútbol?', 'MULTIPLE_CHOICE', 'Alemania', 'Argentina', 'Brasil', 'Italia', 'C', 1, 'es'),
(5, '¿Cuántos jugadores tiene un equipo de baloncesto en cancha?', 'MULTIPLE_CHOICE', '4', '5', '6', '7', 'B', 1, 'es'),
(5, '¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?', 'MULTIPLE_CHOICE', 'Atlanta', 'Seúl', 'Barcelona', 'Sídney', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(5, '¿Quién tiene más Balones de Oro en la historia del fútbol?', 'FREE_TEXT', 'Lionel Messi', ARRAY['Messi', 'Leo Messi', 'L. Messi'], 1, 'es'),
(5, '¿En qué deporte se compite en el Tour de France?', 'FREE_TEXT', 'Ciclismo', ARRAY['ciclismo', 'Ciclismo de ruta'], 1, 'es'),
(5, '¿Cómo se llama la máxima competición de clubes de fútbol europeo?', 'FREE_TEXT', 'Champions League', ARRAY['UEFA Champions League', 'Liga de Campeones', 'champions league', 'Champions'], 1, 'es'),
(5, '¿Qué tenista español tiene más títulos de Roland Garros?', 'FREE_TEXT', 'Rafael Nadal', ARRAY['Nadal', 'Rafa Nadal', 'R. Nadal'], 1, 'es'),
(5, '¿Qué país inventó el béisbol?', 'FREE_TEXT', 'Estados Unidos', ARRAY['EEUU', 'USA', 'EE.UU.', 'EUA'], 2, 'es');

-- ==================== GASTRONOMÍA (category_id = 6) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(6, '¿De qué país es originario el sushi?', 'MULTIPLE_CHOICE', 'China', 'Corea', 'Japón', 'Tailandia', 'C', 1, 'es'),
(6, '¿Cuál es el ingrediente principal de la paella valenciana tradicional?', 'MULTIPLE_CHOICE', 'Pasta', 'Patata', 'Arroz', 'Quinoa', 'C', 1, 'es'),
(6, '¿Qué fruto seco es la base del mazapán?', 'MULTIPLE_CHOICE', 'Nuez', 'Avellana', 'Almendra', 'Pistacho', 'C', 2, 'es'),
(6, '¿De qué país es originario el guacamole?', 'MULTIPLE_CHOICE', 'Colombia', 'México', 'Perú', 'España', 'B', 1, 'es'),
(6, '¿Qué tipo de vino se produce principalmente en la región de Champagne?', 'MULTIPLE_CHOICE', 'Tinto', 'Rosado', 'Espumoso', 'Dulce', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(6, '¿Cómo se llama el plato japonés de pescado crudo en láminas finas?', 'FREE_TEXT', 'Sashimi', ARRAY['sashimi', 'Sashimi'], 2, 'es'),
(6, '¿Qué especia le da el color amarillo al curry?', 'FREE_TEXT', 'Cúrcuma', ARRAY['curcuma', 'Turmeric', 'Cúrcuma'], 2, 'es'),
(6, '¿Cuál es el ingrediente principal del hummus?', 'FREE_TEXT', 'Garbanzos', ARRAY['garbanzo', 'garbanzos', 'Garbanzo'], 1, 'es'),
(6, '¿De qué país es originario el croissant, a pesar de su nombre francés?', 'FREE_TEXT', 'Austria', ARRAY['austria', 'Viena'], 3, 'es'),
(6, '¿Cómo se llama la sopa fría española hecha con tomate, pimiento y pepino?', 'FREE_TEXT', 'Gazpacho', ARRAY['gazpacho', 'Gaspacho'], 1, 'es');

-- ==================== GEOGRAFÍA (category_id = 7) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(7, '¿Cuál es el río más largo del mundo?', 'MULTIPLE_CHOICE', 'Amazonas', 'Nilo', 'Yangtsé', 'Misisipi', 'B', 1, 'es'),
(7, '¿Cuántos continentes hay?', 'MULTIPLE_CHOICE', '5', '6', '7', '8', 'C', 1, 'es'),
(7, '¿Cuál es el país más grande del mundo por superficie?', 'MULTIPLE_CHOICE', 'China', 'Canadá', 'Estados Unidos', 'Rusia', 'D', 1, 'es'),
(7, '¿En qué continente se encuentra el desierto del Sahara?', 'MULTIPLE_CHOICE', 'Asia', 'África', 'Oceanía', 'América', 'B', 1, 'es'),
(7, '¿Cuál es la montaña más alta del mundo?', 'MULTIPLE_CHOICE', 'K2', 'Monte Everest', 'Kangchenjunga', 'Mont Blanc', 'B', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(7, '¿Cuál es la capital de Australia?', 'FREE_TEXT', 'Canberra', ARRAY['canberra'], 2, 'es'),
(7, '¿En qué país se encuentra Machu Picchu?', 'FREE_TEXT', 'Perú', ARRAY['Peru', 'perú', 'peru'], 1, 'es'),
(7, '¿Cuál es el océano más grande del mundo?', 'FREE_TEXT', 'Océano Pacífico', ARRAY['Pacifico', 'Pacífico', 'Oceano Pacifico', 'El Pacífico'], 1, 'es'),
(7, '¿Cuál es la capital de Canadá?', 'FREE_TEXT', 'Ottawa', ARRAY['ottawa'], 2, 'es'),
(7, '¿Qué país tiene forma de bota?', 'FREE_TEXT', 'Italia', ARRAY['italia'], 1, 'es');

-- ==================== HISTORIA (category_id = 8) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(8, '¿En qué año cayó el Muro de Berlín?', 'MULTIPLE_CHOICE', '1987', '1989', '1991', '1993', 'B', 1, 'es'),
(8, '¿Quién fue el primer presidente de Estados Unidos?', 'MULTIPLE_CHOICE', 'Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams', 'C', 1, 'es'),
(8, '¿En qué año llegó Cristóbal Colón a América?', 'MULTIPLE_CHOICE', '1482', '1492', '1502', '1512', 'B', 1, 'es'),
(8, '¿Qué civilización construyó las pirámides de Giza?', 'MULTIPLE_CHOICE', 'Maya', 'Romana', 'Griega', 'Egipcia', 'D', 1, 'es'),
(8, '¿En qué siglo comenzó la Revolución Industrial?', 'MULTIPLE_CHOICE', 'Siglo XVI', 'Siglo XVII', 'Siglo XVIII', 'Siglo XIX', 'C', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(8, '¿Quién fue el líder de la Revolución Cubana en 1959?', 'FREE_TEXT', 'Fidel Castro', ARRAY['Castro', 'Fidel', 'F. Castro'], 1, 'es'),
(8, '¿Cómo se llamaba el barco en el que viajó Cristóbal Colón en 1492 (la nave capitana)?', 'FREE_TEXT', 'Santa María', ARRAY['Santa Maria', 'La Santa María', 'Nao Santa María'], 2, 'es'),
(8, '¿Qué imperio fue gobernado por Julio César?', 'FREE_TEXT', 'Imperio Romano', ARRAY['Roma', 'Romano', 'El Imperio Romano', 'República Romana'], 1, 'es'),
(8, '¿En qué ciudad japonesa se lanzó la primera bomba atómica?', 'FREE_TEXT', 'Hiroshima', ARRAY['hiroshima'], 1, 'es'),
(8, '¿Quién pintó los frescos del techo de la Capilla Sixtina?', 'FREE_TEXT', 'Miguel Ángel', ARRAY['Miguel Angel', 'Michelangelo', 'Michelangelo Buonarroti'], 1, 'es');

-- ==================== IDIOMAS (category_id = 9) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(9, '¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?', 'MULTIPLE_CHOICE', 'Inglés', 'Español', 'Chino mandarín', 'Hindi', 'C', 1, 'es'),
(9, '¿De qué idioma proviene la palabra "álgebra"?', 'MULTIPLE_CHOICE', 'Latín', 'Griego', 'Árabe', 'Persa', 'C', 2, 'es'),
(9, '¿Cuántos idiomas oficiales tiene Suiza?', 'MULTIPLE_CHOICE', '2', '3', '4', '5', 'C', 2, 'es'),
(9, '¿Qué idioma es el oficial de Brasil?', 'MULTIPLE_CHOICE', 'Español', 'Portugués', 'Francés', 'Italiano', 'B', 1, 'es'),
(9, '¿Qué significa "Carpe Diem" en latín?', 'MULTIPLE_CHOICE', 'Buena suerte', 'Aprovecha el día', 'Paz interior', 'Vive y deja vivir', 'B', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(9, '¿Cómo se dice "gracias" en japonés?', 'FREE_TEXT', 'Arigatō', ARRAY['Arigato', 'arigatou', 'arigatō', 'Arigatou gozaimasu'], 2, 'es'),
(9, '¿Cómo se dice "hola" en francés?', 'FREE_TEXT', 'Bonjour', ARRAY['bonjour', 'Salut', 'salut'], 1, 'es'),
(9, '¿De qué idioma proviene la palabra "tsunami"?', 'FREE_TEXT', 'Japonés', ARRAY['japones', 'Japonés', 'Japones'], 1, 'es'),
(9, '¿Cuál es la lengua romance más hablada del mundo?', 'FREE_TEXT', 'Español', ARRAY['español', 'Castellano', 'castellano'], 1, 'es'),
(9, '¿Cómo se dice "amor" en italiano?', 'FREE_TEXT', 'Amore', ARRAY['amore'], 1, 'es');

-- ==================== LITERATURA (category_id = 10) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(10, '¿Quién escribió "Don Quijote de la Mancha"?', 'MULTIPLE_CHOICE', 'Lope de Vega', 'Miguel de Cervantes', 'Francisco de Quevedo', 'Calderón de la Barca', 'B', 1, 'es'),
(10, '¿En qué idioma escribió originalmente Shakespeare?', 'MULTIPLE_CHOICE', 'Latín', 'Francés', 'Inglés', 'Alemán', 'C', 1, 'es'),
(10, '¿Quién escribió "Cien años de soledad"?', 'MULTIPLE_CHOICE', 'Pablo Neruda', 'Mario Vargas Llosa', 'Gabriel García Márquez', 'Julio Cortázar', 'C', 1, 'es'),
(10, '¿Qué género literario se caracteriza por elementos mágicos en contextos realistas?', 'MULTIPLE_CHOICE', 'Ciencia ficción', 'Realismo mágico', 'Fantasía épica', 'Naturalismo', 'B', 2, 'es'),
(10, '¿Quién escribió "1984"?', 'MULTIPLE_CHOICE', 'Aldous Huxley', 'Ray Bradbury', 'George Orwell', 'H.G. Wells', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(10, '¿Cómo se llama el protagonista de "Don Quijote"?', 'FREE_TEXT', 'Don Quijote', ARRAY['Don Quijote de la Mancha', 'Alonso Quijano', 'Quijote'], 1, 'es'),
(10, '¿Quién escribió "El Principito"?', 'FREE_TEXT', 'Antoine de Saint-Exupéry', ARRAY['Saint-Exupéry', 'Saint Exupery', 'Saint-Exupery'], 1, 'es'),
(10, '¿Quién escribió la saga "El Señor de los Anillos"?', 'FREE_TEXT', 'J.R.R. Tolkien', ARRAY['Tolkien', 'JRR Tolkien', 'J. R. R. Tolkien'], 1, 'es'),
(10, '¿Cómo se llama el detective creado por Arthur Conan Doyle?', 'FREE_TEXT', 'Sherlock Holmes', ARRAY['Holmes', 'Sherlock'], 1, 'es'),
(10, '¿Qué poeta chileno ganó el Nobel de Literatura en 1971?', 'FREE_TEXT', 'Pablo Neruda', ARRAY['Neruda', 'P. Neruda'], 2, 'es');

-- ==================== MATEMÁTICAS (category_id = 11) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(11, '¿Cuánto es la raíz cuadrada de 144?', 'MULTIPLE_CHOICE', '10', '11', '12', '14', 'C', 1, 'es'),
(11, '¿Qué número es conocido como "Pi" (aproximado)?', 'MULTIPLE_CHOICE', '2.14', '3.14', '4.14', '1.14', 'B', 1, 'es'),
(11, '¿Cómo se llama un polígono de 8 lados?', 'MULTIPLE_CHOICE', 'Hexágono', 'Heptágono', 'Octógono', 'Decágono', 'C', 1, 'es'),
(11, '¿Cuál es el resultado de 2 elevado a la 10?', 'MULTIPLE_CHOICE', '512', '1024', '2048', '256', 'B', 2, 'es'),
(11, '¿Qué tipo de número es el "0"?', 'MULTIPLE_CHOICE', 'Natural', 'Primo', 'Par', 'Impar', 'C', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(11, '¿Cómo se llama el teorema que relaciona los catetos con la hipotenusa?', 'FREE_TEXT', 'Teorema de Pitágoras', ARRAY['Pitagoras', 'Pitágoras', 'Teorema de Pitagoras'], 1, 'es'),
(11, '¿Cuánto es el factorial de 5 (5!)?', 'FREE_TEXT', '120', ARRAY['ciento veinte'], 2, 'es'),
(11, '¿Cómo se llama la rama de las matemáticas que estudia las formas y el espacio?', 'FREE_TEXT', 'Geometría', ARRAY['Geometria', 'geometría', 'geometria'], 1, 'es'),
(11, '¿Cuál es el siguiente número primo después del 7?', 'FREE_TEXT', '11', ARRAY['once'], 1, 'es'),
(11, '¿Qué matemático griego es considerado el "padre de la geometría"?', 'FREE_TEXT', 'Euclides', ARRAY['Euclid', 'euclides'], 2, 'es');

-- ==================== MÚSICA (category_id = 12) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(12, '¿Cuántas cuerdas tiene una guitarra estándar?', 'MULTIPLE_CHOICE', '4', '5', '6', '8', 'C', 1, 'es'),
(12, '¿Qué compositor es conocido como el "genio de Bonn" y quedó sordo?', 'MULTIPLE_CHOICE', 'Mozart', 'Bach', 'Beethoven', 'Chopin', 'C', 1, 'es'),
(12, '¿Qué banda de rock británica lanzó el álbum "Abbey Road"?', 'MULTIPLE_CHOICE', 'The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'B', 1, 'es'),
(12, '¿Qué género musical nació en Nueva Orleans a principios del siglo XX?', 'MULTIPLE_CHOICE', 'Rock', 'Blues', 'Jazz', 'Country', 'C', 2, 'es'),
(12, '¿Qué cantante es conocida como la "Reina del Pop"?', 'MULTIPLE_CHOICE', 'Whitney Houston', 'Beyoncé', 'Madonna', 'Lady Gaga', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(12, '¿Quién compuso "Las cuatro estaciones"?', 'FREE_TEXT', 'Antonio Vivaldi', ARRAY['Vivaldi', 'A. Vivaldi'], 2, 'es'),
(12, '¿Qué cantante español es conocido como "El Pito"? (pista: canta "Corazón partío")', 'FREE_TEXT', 'Alejandro Sanz', ARRAY['Sanz', 'A. Sanz'], 1, 'es'),
(12, '¿Cómo se llama la nota musical más larga en duración?', 'FREE_TEXT', 'Redonda', ARRAY['redonda', 'Nota redonda'], 2, 'es'),
(12, '¿Qué instrumento toca un pianista?', 'FREE_TEXT', 'Piano', ARRAY['piano', 'El piano'], 1, 'es'),
(12, '¿Qué banda de rock cantó "Bohemian Rhapsody"?', 'FREE_TEXT', 'Queen', ARRAY['queen'], 1, 'es');

-- ==================== NATURALEZA (category_id = 13) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(13, '¿Cuál es el animal terrestre más rápido?', 'MULTIPLE_CHOICE', 'León', 'Guepardo', 'Gacela', 'Antílope', 'B', 1, 'es'),
(13, '¿Qué gas producen las plantas durante la fotosíntesis?', 'MULTIPLE_CHOICE', 'Nitrógeno', 'Dióxido de carbono', 'Oxígeno', 'Hidrógeno', 'C', 1, 'es'),
(13, '¿Cuál es el mamífero más grande del mundo?', 'MULTIPLE_CHOICE', 'Elefante africano', 'Ballena azul', 'Jirafa', 'Orca', 'B', 1, 'es'),
(13, '¿Cuántas patas tiene una araña?', 'MULTIPLE_CHOICE', '6', '8', '10', '12', 'B', 1, 'es'),
(13, '¿Qué animal puede regenerar sus extremidades?', 'MULTIPLE_CHOICE', 'Lagarto', 'Salamandra', 'Rana', 'Tortuga', 'B', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(13, '¿Cuál es el árbol más alto del mundo por especie?', 'FREE_TEXT', 'Secuoya', ARRAY['Secoya', 'Sequoia', 'secuoya', 'Secuoya roja'], 2, 'es'),
(13, '¿Cómo se llama la cría de la rana antes de desarrollar patas?', 'FREE_TEXT', 'Renacuajo', ARRAY['renacuajo', 'Renacuajos'], 1, 'es'),
(13, '¿Cuál es la flor nacional de Japón?', 'FREE_TEXT', 'Cerezo', ARRAY['Flor de cerezo', 'Sakura', 'sakura', 'Crisantemo'], 2, 'es'),
(13, '¿Qué animal es el único mamífero que puede volar?', 'FREE_TEXT', 'Murciélago', ARRAY['Murcielago', 'murciélago', 'murcielago', 'Bat'], 1, 'es'),
(13, '¿Cómo se llama el proceso por el cual las orugas se convierten en mariposas?', 'FREE_TEXT', 'Metamorfosis', ARRAY['metamorfosis', 'La metamorfosis'], 1, 'es');

-- ==================== NEGOCIOS (category_id = 14) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(14, '¿Quién fundó Amazon?', 'MULTIPLE_CHOICE', 'Bill Gates', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg', 'C', 1, 'es'),
(14, '¿Qué significa "PIB"?', 'MULTIPLE_CHOICE', 'Producto Interno Bruto', 'Presupuesto Industrial Base', 'Programa de Inversión Bancaria', 'Plan Integral de Bienes', 'A', 1, 'es'),
(14, '¿En qué ciudad se encuentra Wall Street?', 'MULTIPLE_CHOICE', 'Chicago', 'Los Ángeles', 'Nueva York', 'Washington D.C.', 'C', 1, 'es'),
(14, '¿Qué empresa creó el iPhone?', 'MULTIPLE_CHOICE', 'Samsung', 'Nokia', 'Apple', 'Google', 'C', 1, 'es'),
(14, '¿Qué moneda se utiliza en Japón?', 'MULTIPLE_CHOICE', 'Won', 'Yuan', 'Yen', 'Ringgit', 'C', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(14, '¿Cuál es la moneda oficial de la Unión Europea?', 'FREE_TEXT', 'Euro', ARRAY['euro', 'EUR', 'El euro'], 1, 'es'),
(14, '¿Quién fundó Microsoft?', 'FREE_TEXT', 'Bill Gates', ARRAY['Gates', 'Bill Gates y Paul Allen', 'B. Gates'], 1, 'es'),
(14, '¿Cómo se llama el índice bursátil principal de la bolsa de Nueva York?', 'FREE_TEXT', 'Dow Jones', ARRAY['dow jones', 'DJIA', 'Dow Jones Industrial Average'], 2, 'es'),
(14, '¿Qué red social compró Facebook en 2012 por 1.000 millones de dólares?', 'FREE_TEXT', 'Instagram', ARRAY['instagram', 'IG'], 1, 'es'),
(14, '¿Qué empresa es el mayor buscador de internet del mundo?', 'FREE_TEXT', 'Google', ARRAY['google', 'Alphabet'], 1, 'es');

-- ==================== POLÍTICA (category_id = 15) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(15, '¿Cuántos países forman parte de la Unión Europea (2025)?', 'MULTIPLE_CHOICE', '25', '27', '30', '32', 'B', 2, 'es'),
(15, '¿Qué organismo internacional tiene su sede en Nueva York?', 'MULTIPLE_CHOICE', 'OTAN', 'ONU', 'UE', 'OSCE', 'B', 1, 'es'),
(15, '¿Quién fue el primer presidente de la democracia española tras Franco?', 'MULTIPLE_CHOICE', 'Felipe González', 'Adolfo Suárez', 'Leopoldo Calvo-Sotelo', 'José María Aznar', 'B', 2, 'es'),
(15, '¿Qué tipo de gobierno tiene el Reino Unido?', 'MULTIPLE_CHOICE', 'República', 'Monarquía parlamentaria', 'Dictadura', 'Teocracia', 'B', 1, 'es'),
(15, '¿En qué año se firmó la Declaración Universal de los Derechos Humanos?', 'MULTIPLE_CHOICE', '1945', '1948', '1950', '1955', 'B', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(15, '¿Quién fue el líder del movimiento por los derechos civiles en EEUU que dio el discurso "I have a dream"?', 'FREE_TEXT', 'Martin Luther King', ARRAY['Martin Luther King Jr', 'MLK', 'Luther King', 'Martin Luther King Jr.'], 1, 'es'),
(15, '¿Cómo se llama la cámara baja del parlamento español?', 'FREE_TEXT', 'Congreso de los Diputados', ARRAY['Congreso', 'congreso de los diputados', 'El Congreso'], 1, 'es'),
(15, '¿Quién fue el primer presidente negro de Sudáfrica?', 'FREE_TEXT', 'Nelson Mandela', ARRAY['Mandela', 'N. Mandela'], 1, 'es'),
(15, '¿Qué tratado creó la Unión Europea en 1992?', 'FREE_TEXT', 'Tratado de Maastricht', ARRAY['Maastricht', 'tratado de Maastricht'], 3, 'es'),
(15, '¿Cómo se llama la constitución política vigente de España?', 'FREE_TEXT', 'Constitución de 1978', ARRAY['Constitución española', 'Constitución Española de 1978', 'Constitucion de 1978'], 2, 'es');

-- ==================== POP CULTURE (category_id = 16) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(16, '¿Qué personaje de videojuegos es un fontanero italiano?', 'MULTIPLE_CHOICE', 'Sonic', 'Mario', 'Link', 'Mega Man', 'B', 1, 'es'),
(16, '¿Qué red social se caracteriza por vídeos cortos y fue creada por ByteDance?', 'MULTIPLE_CHOICE', 'Instagram', 'Snapchat', 'TikTok', 'Twitter', 'C', 1, 'es'),
(16, '¿Qué saga de fantasía tiene familias como Stark, Lannister y Targaryen?', 'MULTIPLE_CHOICE', 'El Señor de los Anillos', 'Harry Potter', 'Juego de Tronos', 'Las Crónicas de Narnia', 'C', 1, 'es'),
(16, '¿Qué superhéroe es conocido como "El hombre de acero"?', 'MULTIPLE_CHOICE', 'Batman', 'Superman', 'Iron Man', 'Thor', 'B', 1, 'es'),
(16, '¿Qué cantante colombiana es famosa por "Hips Don''t Lie"?', 'MULTIPLE_CHOICE', 'J.Lo', 'Shakira', 'Karol G', 'Rosalía', 'B', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(16, '¿Cómo se llama el universo cinematográfico de Marvel?', 'FREE_TEXT', 'MCU', ARRAY['Marvel Cinematic Universe', 'Universo Cinematográfico de Marvel', 'mcu'], 1, 'es'),
(16, '¿Qué personaje amarillo vive en Springfield?', 'FREE_TEXT', 'Homer Simpson', ARRAY['Homer', 'Los Simpson', 'Bart Simpson', 'Los Simpsons'], 1, 'es'),
(16, '¿Cómo se llama el mundo virtual de Fortnite, Roblox y similares?', 'FREE_TEXT', 'Metaverso', ARRAY['metaverso', 'Metaverse'], 2, 'es'),
(16, '¿Qué youtuber/streamer español es conocido por Minecraft y tiene millones de seguidores?', 'FREE_TEXT', 'Vegetta777', ARRAY['vegetta777', 'Vegetta', 'ElRubius', 'AuronPlay'], 2, 'es'),
(16, '¿Cómo se llama la saga de videojuegos donde Link rescata a la Princesa Zelda?', 'FREE_TEXT', 'The Legend of Zelda', ARRAY['Zelda', 'Legend of Zelda', 'zelda'], 1, 'es');

-- ==================== RELIGIÓN (category_id = 17) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(17, '¿Cuál es la religión con más seguidores en el mundo?', 'MULTIPLE_CHOICE', 'Islam', 'Hinduismo', 'Cristianismo', 'Budismo', 'C', 1, 'es'),
(17, '¿En qué ciudad nació Jesús según la tradición cristiana?', 'MULTIPLE_CHOICE', 'Nazaret', 'Jerusalén', 'Belén', 'Cafarnaúm', 'C', 1, 'es'),
(17, '¿Cuál es el libro sagrado del Islam?', 'MULTIPLE_CHOICE', 'La Torá', 'La Biblia', 'El Corán', 'Los Vedas', 'C', 1, 'es'),
(17, '¿Qué religión tiene como símbolo la media luna y la estrella?', 'MULTIPLE_CHOICE', 'Judaísmo', 'Islam', 'Budismo', 'Sijismo', 'B', 1, 'es'),
(17, '¿Quién es el líder espiritual del budismo tibetano?', 'MULTIPLE_CHOICE', 'El Papa', 'El Dalái Lama', 'El Califa', 'El Gran Rabino', 'B', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(17, '¿Cuántos mandamientos hay en la tradición cristiana?', 'FREE_TEXT', '10', ARRAY['diez', 'Diez', '10 mandamientos'], 1, 'es'),
(17, '¿Cómo se llama la ciudad santa para judíos, cristianos y musulmanes?', 'FREE_TEXT', 'Jerusalén', ARRAY['Jerusalem', 'jerusalén', 'jerusalem'], 1, 'es'),
(17, '¿Quién fundó el budismo?', 'FREE_TEXT', 'Buda', ARRAY['Siddharta Gautama', 'Siddhartha Gautama', 'Buda Gautama', 'Sidarta Gautama'], 1, 'es'),
(17, '¿Cómo se llama el mes sagrado de ayuno en el Islam?', 'FREE_TEXT', 'Ramadán', ARRAY['Ramadan', 'ramadán', 'ramadan'], 1, 'es'),
(17, '¿Cómo se llama el símbolo del judaísmo con forma de estrella de 6 puntas?', 'FREE_TEXT', 'Estrella de David', ARRAY['estrella de David', 'Estrella de david', 'Magen David'], 1, 'es');

-- ==================== SALUD (category_id = 18) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(18, '¿Cuál es el órgano más grande del cuerpo humano?', 'MULTIPLE_CHOICE', 'Hígado', 'Cerebro', 'Piel', 'Intestino', 'C', 1, 'es'),
(18, '¿Qué vitamina produce el cuerpo al exponerse al sol?', 'MULTIPLE_CHOICE', 'Vitamina A', 'Vitamina C', 'Vitamina D', 'Vitamina K', 'C', 1, 'es'),
(18, '¿Cuántos litros de sangre tiene aproximadamente un adulto?', 'MULTIPLE_CHOICE', '3 litros', '5 litros', '7 litros', '10 litros', 'B', 2, 'es'),
(18, '¿Qué tipo de células del cuerpo combaten las infecciones?', 'MULTIPLE_CHOICE', 'Glóbulos rojos', 'Plaquetas', 'Glóbulos blancos', 'Neuronas', 'C', 1, 'es'),
(18, '¿Cuál es la frecuencia cardíaca normal en reposo para un adulto?', 'MULTIPLE_CHOICE', '40-50 lpm', '60-100 lpm', '100-120 lpm', '120-150 lpm', 'B', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(18, '¿Cómo se llama el hueso más largo del cuerpo humano?', 'FREE_TEXT', 'Fémur', ARRAY['femur', 'El fémur'], 1, 'es'),
(18, '¿Qué hormona regula el azúcar en la sangre?', 'FREE_TEXT', 'Insulina', ARRAY['insulina', 'La insulina'], 2, 'es'),
(18, '¿Cuántos dientes tiene un adulto (sin muelas del juicio)?', 'FREE_TEXT', '28', ARRAY['veintiocho'], 2, 'es'),
(18, '¿Cómo se llama la enfermedad causada por la falta de insulina?', 'FREE_TEXT', 'Diabetes', ARRAY['diabetes', 'Diabetes mellitus'], 1, 'es'),
(18, '¿Qué parte del cerebro controla el equilibrio?', 'FREE_TEXT', 'Cerebelo', ARRAY['cerebelo', 'El cerebelo'], 2, 'es');

-- ==================== TECNOLOGÍA (category_id = 19) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(19, '¿Qué significa "HTML"?', 'MULTIPLE_CHOICE', 'HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Management Link', 'Hyper Transfer Mail Language', 'A', 1, 'es'),
(19, '¿Quién es considerado el padre de la computación?', 'MULTIPLE_CHOICE', 'Steve Jobs', 'Alan Turing', 'Bill Gates', 'Tim Berners-Lee', 'B', 2, 'es'),
(19, '¿Qué empresa desarrolló el sistema operativo Android?', 'MULTIPLE_CHOICE', 'Apple', 'Microsoft', 'Google', 'Samsung', 'C', 1, 'es'),
(19, '¿Cuántos bits hay en un byte?', 'MULTIPLE_CHOICE', '4', '8', '16', '32', 'B', 1, 'es'),
(19, '¿Qué tecnología permite pagos sin contacto con el móvil?', 'MULTIPLE_CHOICE', 'Bluetooth', 'NFC', 'Wi-Fi', 'Infrarrojo', 'B', 1, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(19, '¿Quién creó Facebook?', 'FREE_TEXT', 'Mark Zuckerberg', ARRAY['Zuckerberg', 'M. Zuckerberg', 'Mark'], 1, 'es'),
(19, '¿Qué significa "IA" en tecnología?', 'FREE_TEXT', 'Inteligencia Artificial', ARRAY['inteligencia artificial', 'AI', 'Artificial Intelligence'], 1, 'es'),
(19, '¿Cómo se llama el lenguaje de programación creado por James Gosling en 1995?', 'FREE_TEXT', 'Java', ARRAY['java', 'JAVA'], 2, 'es'),
(19, '¿Qué empresa fabrica los procesadores Ryzen?', 'FREE_TEXT', 'AMD', ARRAY['amd', 'Advanced Micro Devices'], 2, 'es'),
(19, '¿Cómo se llama el asistente virtual de Apple?', 'FREE_TEXT', 'Siri', ARRAY['siri', 'SIRI'], 1, 'es');

-- ==================== TV & SERIES (category_id = 20) ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale)
VALUES
(20, '¿En qué serie de Netflix un profesor lidera un atraco a la Fábrica de la Moneda?', 'MULTIPLE_CHOICE', 'Narcos', 'La Casa de Papel', 'Élite', 'Vis a Vis', 'B', 1, 'es'),
(20, '¿Qué serie animada tiene como protagonista a una familia amarilla de Springfield?', 'MULTIPLE_CHOICE', 'Family Guy', 'South Park', 'Los Simpson', 'Futurama', 'C', 1, 'es'),
(20, '¿En qué serie de HBO se lucha por el "Trono de Hierro"?', 'MULTIPLE_CHOICE', 'Vikings', 'Juego de Tronos', 'The Witcher', 'Outlander', 'B', 1, 'es'),
(20, '¿Qué serie coreana de Netflix se hizo viral en 2021 con juegos infantiles mortales?', 'MULTIPLE_CHOICE', 'Squid Game', 'Alice in Borderland', 'All of Us Are Dead', 'Sweet Home', 'A', 1, 'es'),
(20, '¿Qué serie española de misterio está ambientada en un internado?', 'MULTIPLE_CHOICE', 'Vis a Vis', 'Élite', 'El Internado', 'Los Protegidos', 'C', 2, 'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale)
VALUES
(20, '¿Cómo se llama la serie de ciencia ficción de Netflix con niños que buscan a su amigo en un mundo paralelo?', 'FREE_TEXT', 'Stranger Things', ARRAY['stranger things', 'Stranger things'], 1, 'es'),
(20, '¿Quién interpreta a Walter White en Breaking Bad?', 'FREE_TEXT', 'Bryan Cranston', ARRAY['Cranston', 'B. Cranston', 'Brian Cranston'], 2, 'es'),
(20, '¿Cómo se llama el dragón más grande de Daenerys en Juego de Tronos?', 'FREE_TEXT', 'Drogon', ARRAY['drogon', 'Drogo'], 2, 'es'),
(20, '¿Qué serie de comedia se desarrolla en el café Central Perk?', 'FREE_TEXT', 'Friends', ARRAY['friends', 'FRIENDS'], 1, 'es'),
(20, '¿Cómo se llama el protagonista de la serie "Doctor House"?', 'FREE_TEXT', 'Gregory House', ARRAY['House', 'Dr. House', 'Doctor House', 'Greg House'], 1, 'es');

-- ==================== AMPLIACIÓN: 10 PREGUNTAS MÁS POR CATEGORÍA ====================

INSERT INTO questions (category_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_option, difficulty, locale) VALUES
(1,'¿Qué artista pintó "Las meninas"?','MULTIPLE_CHOICE','Goya','Velázquez','El Greco','Sorolla','B',1,'es'),
(1,'¿Con qué material trabajó principalmente Auguste Rodin?','MULTIPLE_CHOICE','Mármol','Bronce','Madera','Vidrio','B',2,'es'),
(1,'¿Qué vanguardia descompone figuras en formas geométricas?','MULTIPLE_CHOICE','Cubismo','Fauvismo','Romanticismo','Barroco','A',1,'es'),
(1,'¿Quién pintó "La persistencia de la memoria"?','MULTIPLE_CHOICE','Miró','Dalí','Picasso','Magritte','B',1,'es'),
(1,'¿Qué color se obtiene al mezclar azul y amarillo?','MULTIPLE_CHOICE','Verde','Violeta','Naranja','Marrón','A',1,'es'),
(2,'¿Qué arquitecto diseñó la Casa Batlló?','MULTIPLE_CHOICE','Antoni Gaudí','Mies van der Rohe','Rafael Moneo','Norman Foster','A',1,'es'),
(2,'¿Qué orden clásico se reconoce por sus volutas?','MULTIPLE_CHOICE','Dórico','Jónico','Corintio','Toscano','B',2,'es'),
(2,'¿En qué ciudad está la Ópera de Sídney?','MULTIPLE_CHOICE','Melbourne','Sídney','Perth','Adelaida','B',1,'es'),
(2,'¿Qué estilo usa arcos de medio punto y muros gruesos?','MULTIPLE_CHOICE','Gótico','Románico','Modernista','Neoclásico','B',2,'es'),
(2,'¿Cuál es el material principal de la cúpula del Panteón de Roma?','MULTIPLE_CHOICE','Hormigón','Acero','Madera','Aluminio','A',3,'es'),
(3,'¿Qué partícula tiene carga eléctrica negativa?','MULTIPLE_CHOICE','Protón','Neutrón','Electrón','Fotón','C',1,'es'),
(3,'¿Cuál es el órgano que bombea la sangre?','MULTIPLE_CHOICE','Pulmón','Hígado','Corazón','Riñón','C',1,'es'),
(3,'¿Qué planeta tiene los anillos más visibles?','MULTIPLE_CHOICE','Marte','Saturno','Mercurio','Neptuno','B',1,'es'),
(3,'¿Qué unidad mide la intensidad de corriente eléctrica?','MULTIPLE_CHOICE','Vatio','Voltio','Amperio','Ohmio','C',2,'es'),
(3,'¿Qué científico propuso la selección natural?','MULTIPLE_CHOICE','Darwin','Curie','Newton','Galileo','A',1,'es'),
(4,'¿Quién dirigió "Titanic"?','MULTIPLE_CHOICE','Steven Spielberg','James Cameron','Christopher Nolan','Ridley Scott','B',1,'es'),
(4,'¿Qué película cuenta la historia de juguetes que cobran vida?','MULTIPLE_CHOICE','Cars','Toy Story','Coco','Shrek','B',1,'es'),
(4,'¿Qué actriz interpreta a Hermione Granger en Harry Potter?','MULTIPLE_CHOICE','Emma Watson','Keira Knightley','Natalie Portman','Anne Hathaway','A',1,'es'),
(4,'¿Qué saga transcurre en una galaxia muy, muy lejana?','MULTIPLE_CHOICE','Star Trek','Star Wars','Dune','Avatar','B',1,'es'),
(4,'¿Qué película ganó el Óscar a mejor película en 2025?','MULTIPLE_CHOICE','Anora','Wicked','Dune: Parte Dos','The Brutalist','A',2,'es'),
(5,'¿Cuántos jugadores tiene un equipo de fútbol en el campo?','MULTIPLE_CHOICE','9','10','11','12','C',1,'es'),
(5,'¿En qué deporte se consigue un triple?','MULTIPLE_CHOICE','Baloncesto','Tenis','Natación','Rugby','A',1,'es'),
(5,'¿Qué país ganó el Mundial de fútbol de 2010?','MULTIPLE_CHOICE','Alemania','Argentina','España','Brasil','C',1,'es'),
(5,'¿Cuántos anillos hay en el símbolo olímpico?','MULTIPLE_CHOICE','4','5','6','7','B',1,'es'),
(5,'¿En qué deporte se usa un volante?','MULTIPLE_CHOICE','Bádminton','Squash','Pádel','Hockey','A',1,'es'),
(6,'¿De qué país es originaria la pizza?','MULTIPLE_CHOICE','Grecia','Italia','Francia','México','B',1,'es'),
(6,'¿Qué ingrediente es la base del guacamole?','MULTIPLE_CHOICE','Aguacate','Tomate','Garbanzo','Pepino','A',1,'es'),
(6,'¿Qué queso se usa tradicionalmente en una ensalada griega?','MULTIPLE_CHOICE','Mozzarella','Feta','Brie','Cheddar','B',2,'es'),
(6,'¿Qué bebida se prepara con café espresso y leche vaporizada?','MULTIPLE_CHOICE','Capuchino','Té chai','Mojito','Kombucha','A',1,'es'),
(6,'¿Qué especia da color amarillo a la paella?','MULTIPLE_CHOICE','Pimentón','Cúrcuma','Azafrán','Canela','C',2,'es'),
(7,'¿Cuál es la capital de Australia?','MULTIPLE_CHOICE','Sídney','Melbourne','Canberra','Perth','C',2,'es'),
(7,'¿Qué río atraviesa París?','MULTIPLE_CHOICE','Danubio','Sena','Támesis','Rin','B',1,'es'),
(7,'¿En qué continente está Japón?','MULTIPLE_CHOICE','Europa','Asia','Oceanía','América','B',1,'es'),
(7,'¿Qué país tiene forma de bota?','MULTIPLE_CHOICE','Grecia','Portugal','Italia','Croacia','C',1,'es'),
(7,'¿Cuál es el océano más grande?','MULTIPLE_CHOICE','Atlántico','Índico','Ártico','Pacífico','D',1,'es'),
(8,'¿En qué año llegó el ser humano a la Luna?','MULTIPLE_CHOICE','1965','1969','1972','1975','B',1,'es'),
(8,'¿Qué civilización construyó Machu Picchu?','MULTIPLE_CHOICE','Maya','Azteca','Inca','Romana','C',1,'es'),
(8,'¿Quién fue el primer emperador romano?','MULTIPLE_CHOICE','Julio César','Augusto','Nerón','Trajano','B',2,'es'),
(8,'¿Qué muro cayó en 1989?','MULTIPLE_CHOICE','Muro de Adriano','Muro de Berlín','Gran Muralla','Muro de las Lamentaciones','B',1,'es'),
(8,'¿Qué reina gobernó Inglaterra durante gran parte del siglo XVI?','MULTIPLE_CHOICE','Isabel I','Victoria','Ana Bolena','María Estuardo','A',2,'es'),
(9,'¿Cómo se dice "gracias" en francés?','MULTIPLE_CHOICE','Merci','Grazie','Danke','Thanks','A',1,'es'),
(9,'¿Qué idioma se habla principalmente en Brasil?','MULTIPLE_CHOICE','Español','Portugués','Italiano','Francés','B',1,'es'),
(9,'¿Qué letra española representa el sonido de "niño"?','MULTIPLE_CHOICE','Ñ','Ç','Ü','Å','A',1,'es'),
(9,'¿Qué significa "bonjour" en español?','MULTIPLE_CHOICE','Buenas noches','Buenos días','Hasta luego','Por favor','B',1,'es'),
(9,'¿En qué idioma "arigatō" significa gracias?','MULTIPLE_CHOICE','Coreano','Japonés','Chino mandarín','Vietnamita','B',2,'es'),
(10,'¿Quién escribió "Don Quijote de la Mancha"?','MULTIPLE_CHOICE','Lope de Vega','Miguel de Cervantes','Quevedo','García Lorca','B',1,'es'),
(10,'¿Qué detective creó Arthur Conan Doyle?','MULTIPLE_CHOICE','Hercule Poirot','Sherlock Holmes','Philip Marlowe','Augusto Dupin','B',1,'es'),
(10,'¿Qué novela empieza con "En un lugar de la Mancha"?','MULTIPLE_CHOICE','La Celestina','Don Quijote','Fortunata y Jacinta','La Regenta','B',1,'es'),
(10,'¿Quién escribió "Cien años de soledad"?','MULTIPLE_CHOICE','Borges','García Márquez','Vargas Llosa','Neruda','B',1,'es'),
(10,'¿Cómo se llama un poema de 14 versos?','MULTIPLE_CHOICE','Haiku','Soneto','Oda','Epopeya','B',2,'es'),
(11,'¿Cuánto es 9 × 8?','MULTIPLE_CHOICE','63','72','81','64','B',1,'es'),
(11,'¿Cuántos grados tiene un ángulo recto?','MULTIPLE_CHOICE','45','90','180','360','B',1,'es'),
(11,'¿Cuál es el resultado de 144 ÷ 12?','MULTIPLE_CHOICE','10','11','12','14','C',1,'es'),
(11,'¿Qué figura tiene tres lados?','MULTIPLE_CHOICE','Cuadrado','Pentágono','Triángulo','Hexágono','C',1,'es'),
(11,'¿Cuál es el valor de π aproximado a dos decimales?','MULTIPLE_CHOICE','2,14','3,14','3,41','4,13','B',2,'es'),
(12,'¿Qué grupo canta "Bohemian Rhapsody"?','MULTIPLE_CHOICE','Queen','The Beatles','ABBA','U2','A',1,'es'),
(12,'¿Qué instrumento tiene normalmente 88 teclas?','MULTIPLE_CHOICE','Violín','Piano','Flauta','Arpa','B',1,'es'),
(12,'¿Qué cantante es conocida como la Reina del Pop?','MULTIPLE_CHOICE','Beyoncé','Madonna','Adele','Rihanna','B',1,'es'),
(12,'¿Qué compositor escribió la Novena Sinfonía?','MULTIPLE_CHOICE','Mozart','Beethoven','Bach','Chopin','B',2,'es'),
(12,'¿Qué nota sigue a do en la escala musical?','MULTIPLE_CHOICE','Mi','Re','Fa','Sol','B',1,'es'),
(13,'¿Cuál es el mamífero más grande del planeta?','MULTIPLE_CHOICE','Elefante africano','Ballena azul','Jirafa','Orca','B',1,'es'),
(13,'¿Qué animal es famoso por cambiar de color?','MULTIPLE_CHOICE','Camaleón','Delfín','Lobo','Pingüino','A',1,'es'),
(13,'¿Qué gas absorben las plantas durante la fotosíntesis?','MULTIPLE_CHOICE','Oxígeno','Nitrógeno','Dióxido de carbono','Helio','C',1,'es'),
(13,'¿Cuál es el ave más grande del mundo?','MULTIPLE_CHOICE','Águila','Avestruz','Cóndor','Albatros','B',1,'es'),
(13,'¿Qué animal tiene ocho patas?','MULTIPLE_CHOICE','Cangrejo','Araña','Escorpión','Pulpo','B',1,'es'),
(14,'¿Qué significa la sigla "CEO"?','MULTIPLE_CHOICE','Director ejecutivo','Director financiero','Director comercial','Fundador de empresa','A',2,'es'),
(14,'¿Qué documento resume ingresos y gastos de una empresa?','MULTIPLE_CHOICE','Balance','Factura','Nómina','Patente','A',2,'es'),
(14,'¿Cómo se llama el dinero invertido para iniciar un negocio?','MULTIPLE_CHOICE','Capital','Deuda','Interés','Dividendo','A',1,'es'),
(14,'¿Qué empresa creó el iPhone?','MULTIPLE_CHOICE','Google','Apple','Samsung','Microsoft','B',1,'es'),
(14,'¿Qué mide el porcentaje de beneficio sobre ventas?','MULTIPLE_CHOICE','Margen','Inflación','Liquidez','Inventario','A',3,'es'),
(15,'¿Qué poder del Estado aprueba leyes?','MULTIPLE_CHOICE','Ejecutivo','Legislativo','Judicial','Municipal','B',1,'es'),
(15,'¿Cada cuántos años se celebran elecciones al Parlamento Europeo?','MULTIPLE_CHOICE','3','4','5','6','C',2,'es'),
(15,'¿Qué institución de la UE propone normalmente leyes?','MULTIPLE_CHOICE','Comisión Europea','Consejo Europeo','Banco Central Europeo','Tribunal de Justicia','A',3,'es'),
(15,'¿Qué significa votar en blanco?','MULTIPLE_CHOICE','Votar al candidato menos elegido','Emitir una papeleta sin candidatura','No acudir a votar','Anular el voto','B',2,'es'),
(15,'¿Cuál es la capital administrativa de la Unión Europea?','MULTIPLE_CHOICE','Bruselas','Estrasburgo','Luxemburgo','La Haya','A',2,'es'),
(16,'¿Qué princesa protege el Reino Champiñón junto a Mario?','MULTIPLE_CHOICE','Zelda','Peach','Daisy','Rosalina','B',1,'es'),
(16,'¿En qué videojuego se construye con bloques y se derrota al Enderdragón?','MULTIPLE_CHOICE','Terraria','Minecraft','Fortnite','Roblox','B',1,'es'),
(16,'¿Qué red social popularizó vídeos breves en vertical?','MULTIPLE_CHOICE','LinkedIn','TikTok','Reddit','Pinterest','B',1,'es'),
(16,'¿Cómo se llama la mascota amarilla de Pokémon?','MULTIPLE_CHOICE','Eevee','Pikachu','Psyduck','Raichu','B',1,'es'),
(16,'¿Cuál es la profesión más conocida de Mario?','MULTIPLE_CHOICE','Médico','Fontanero','Cocinero','Piloto','B',1,'es'),
(17,'¿Qué día de la semana es sagrado en el judaísmo?','MULTIPLE_CHOICE','Viernes','Sábado','Domingo','Lunes','B',2,'es'),
(17,'¿Dónde peregrinan los musulmanes al menos una vez si pueden?','MULTIPLE_CHOICE','La Meca','Medina','Jerusalén','Estambul','A',1,'es'),
(17,'¿Qué festividad judía usa una menorá durante ocho noches?','MULTIPLE_CHOICE','Pésaj','Janucá','Purim','Rosh Hashaná','B',2,'es'),
(17,'¿Cómo se llama el lugar de culto musulmán?','MULTIPLE_CHOICE','Sinagoga','Mezquita','Pagoda','Catedral','B',1,'es'),
(17,'¿Qué religión se asocia tradicionalmente con el karma y la reencarnación?','MULTIPLE_CHOICE','Hinduismo','Sijismo','Judaísmo','Cristianismo','A',2,'es'),
(18,'¿Qué órgano filtra la sangre y produce orina?','MULTIPLE_CHOICE','Riñón','Pulmón','Páncreas','Bazo','A',1,'es'),
(18,'¿Qué grupo sanguíneo es donante universal de glóbulos rojos?','MULTIPLE_CHOICE','AB positivo','O negativo','A positivo','B negativo','B',3,'es'),
(18,'¿Qué mineral se asocia con huesos y dientes fuertes?','MULTIPLE_CHOICE','Hierro','Calcio','Sodio','Zinc','B',1,'es'),
(18,'¿Cómo se llama la articulación entre brazo y antebrazo?','MULTIPLE_CHOICE','Rodilla','Codo','Tobillo','Muñeca','B',1,'es'),
(18,'¿Qué sistema transporta oxígeno por el cuerpo?','MULTIPLE_CHOICE','Digestivo','Circulatorio','Nervioso','Linfático','B',1,'es'),
(19,'¿Qué significa "URL"?','MULTIPLE_CHOICE','Uniform Resource Locator','Universal Remote Link','User Response Language','Unified Routing Layer','A',2,'es'),
(19,'¿Qué protocolo protege normalmente una web con candado?','MULTIPLE_CHOICE','HTTP','HTTPS','FTP','SMTP','B',1,'es'),
(19,'¿Qué dispositivo convierte señales digitales en imágenes?','MULTIPLE_CHOICE','Monitor','Router','Micrófono','Teclado','A',1,'es'),
(19,'¿Qué tecnología inalámbrica conecta auriculares al móvil a corta distancia?','MULTIPLE_CHOICE','Bluetooth','GPS','4G','NFC','A',1,'es'),
(19,'¿Qué empresa creó el sistema operativo Windows?','MULTIPLE_CHOICE','IBM','Microsoft','Apple','Google','B',1,'es'),
(20,'¿Qué serie sigue a una joven con poderes psíquicos llamada Eleven?','MULTIPLE_CHOICE','Wednesday','Stranger Things','Dark','Locke & Key','B',1,'es'),
(20,'¿En qué serie aparece la familia Roy?','MULTIPLE_CHOICE','Succession','The Bear','Bridgerton','The Office','A',2,'es'),
(20,'¿Qué serie sigue a una estudiante de la familia Addams?','MULTIPLE_CHOICE','Élite','Wednesday','Riverdale','Euphoria','B',1,'es'),
(20,'¿Cómo se llama el protagonista de The Mandalorian?','MULTIPLE_CHOICE','Din Djarin','Han Solo','Luke Skywalker','Cassian Andor','A',2,'es'),
(20,'¿Qué serie se ambienta en la oficina de Dunder Mifflin?','MULTIPLE_CHOICE','Parks and Recreation','The Office','Brooklyn Nine-Nine','Community','B',1,'es');

INSERT INTO questions (category_id, question_text, question_type, correct_answer, answer_aliases, difficulty, locale) VALUES
(1,'¿Quién pintó la serie de nenúfares conocida como "Water Lilies"?','FREE_TEXT','Claude Monet',ARRAY['Monet','C. Monet'],2,'es'),
(1,'¿Cómo se llama la técnica de pintar sobre yeso húmedo?','FREE_TEXT','Fresco',ARRAY['al fresco','pintura al fresco'],2,'es'),
(1,'¿Qué museo madrileño alberga Las meninas?','FREE_TEXT','Museo del Prado',ARRAY['El Prado','Prado'],1,'es'),
(1,'¿Qué artista pop convirtió una lata de sopa en icono artístico?','FREE_TEXT','Andy Warhol',ARRAY['Warhol'],1,'es'),
(1,'¿Cómo se llama el autor de la escultura El pensador?','FREE_TEXT','Auguste Rodin',ARRAY['Rodin'],2,'es'),
(2,'¿Qué arquitecto diseñó Fallingwater o Casa de la Cascada?','FREE_TEXT','Frank Lloyd Wright',ARRAY['Wright','Frank Lloyd'],3,'es'),
(2,'¿Cómo se llama el rascacielos más emblemático de Nueva York con forma escalonada?','FREE_TEXT','Empire State Building',ARRAY['Empire State','Edificio Empire State'],1,'es'),
(2,'¿Qué ciudad española es famosa por la Alhambra?','FREE_TEXT','Granada',ARRAY['granada'],1,'es'),
(2,'¿Cómo se llama el estilo ornamental de Gaudí?','FREE_TEXT','Modernismo',ARRAY['Modernismo catalán','Art Nouveau'],2,'es'),
(2,'¿Qué arquitecto diseñó la Pirámide del Louvre?','FREE_TEXT','I. M. Pei',ARRAY['IM Pei','Ieoh Ming Pei','Pei'],3,'es'),
(3,'¿Cómo se llama el proceso por el que las plantas convierten luz en energía?','FREE_TEXT','Fotosíntesis',ARRAY['fotosintesis'],1,'es'),
(3,'¿Cuál es el metal líquido a temperatura ambiente más conocido?','FREE_TEXT','Mercurio',ARRAY['mercurio'],2,'es'),
(3,'¿Qué científico descubrió la penicilina?','FREE_TEXT','Alexander Fleming',ARRAY['Fleming'],2,'es'),
(3,'¿Cómo se llama nuestra galaxia?','FREE_TEXT','Vía Láctea',ARRAY['Via Lactea','via lactea'],1,'es'),
(3,'¿Qué fuerza nos mantiene sobre la Tierra?','FREE_TEXT','Gravedad',ARRAY['gravedad'],1,'es'),
(4,'¿Qué actor interpreta a Iron Man en el MCU?','FREE_TEXT','Robert Downey Jr.',ARRAY['Robert Downey','Downey Jr','RDJ'],1,'es'),
(4,'¿Cómo se llama el ogro verde protagonista de una saga de animación?','FREE_TEXT','Shrek',ARRAY['shrek'],1,'es'),
(4,'¿Qué director creó la trilogía de El Señor de los Anillos?','FREE_TEXT','Peter Jackson',ARRAY['Jackson'],2,'es'),
(4,'¿Qué actriz protagoniza Barbie (2023)?','FREE_TEXT','Margot Robbie',ARRAY['Margot','Robbie'],2,'es'),
(4,'¿Qué película de 2024 ganó el Óscar a mejor película?','FREE_TEXT','Oppenheimer',ARRAY['oppenheimer'],2,'es'),
(5,'¿Qué tenista española ganó 14 Roland Garros?','FREE_TEXT','Rafael Nadal',ARRAY['Nadal','Rafa Nadal','Rafa'],1,'es'),
(5,'¿Cómo se llama la prueba ciclista francesa de tres semanas?','FREE_TEXT','Tour de Francia',ARRAY['Tour','Le Tour'],1,'es'),
(5,'¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?','FREE_TEXT','Barcelona',ARRAY['barcelona'],1,'es'),
(5,'¿Qué piloto tiene el récord de siete títulos mundiales de Fórmula 1 compartido?','FREE_TEXT','Lewis Hamilton',ARRAY['Hamilton','Schumacher','Michael Schumacher'],3,'es'),
(5,'¿Cómo se llama el golpe que inicia un punto en tenis?','FREE_TEXT','Saque',ARRAY['servicio'],1,'es'),
(6,'¿Qué plato japonés combina arroz avinagrado y pescado?','FREE_TEXT','Sushi',ARRAY['sushi'],1,'es'),
(6,'¿Cuál es el ingrediente principal del hummus?','FREE_TEXT','Garbanzo',ARRAY['garbanzos'],1,'es'),
(6,'¿Qué postre italiano se prepara con café y mascarpone?','FREE_TEXT','Tiramisú',ARRAY['tiramisu'],1,'es'),
(6,'¿Cómo se llama la tortilla francesa rellena y doblada?','FREE_TEXT','Omelette',ARRAY['omelet','tortilla francesa'],2,'es'),
(6,'¿Qué chef español popularizó la cocina molecular en elBulli?','FREE_TEXT','Ferran Adrià',ARRAY['Ferran Adria','Adrià','Adria'],2,'es'),
(7,'¿Cuál es la capital de Canadá?','FREE_TEXT','Ottawa',ARRAY['ottawa'],2,'es'),
(7,'¿Qué país tiene la mayor superficie del mundo?','FREE_TEXT','Rusia',ARRAY['Federación Rusa','Russia'],1,'es'),
(7,'¿Cómo se llama el desierto cálido más grande del planeta?','FREE_TEXT','Sáhara',ARRAY['Sahara','Desierto del Sáhara','Desierto del Sahara'],1,'es'),
(7,'¿Qué ciudad es conocida como la Ciudad de los Canales?','FREE_TEXT','Venecia',ARRAY['Venice'],1,'es'),
(7,'¿En qué cordillera está el Everest?','FREE_TEXT','Himalaya',ARRAY['El Himalaya'],2,'es'),
(8,'¿Qué navegante llegó a América en 1492?','FREE_TEXT','Cristóbal Colón',ARRAY['Cristobal Colon','Colón','Colon'],1,'es'),
(8,'¿Cómo se llamaba la reina egipcia asociada a Julio César y Marco Antonio?','FREE_TEXT','Cleopatra',ARRAY['Cleopatra VII'],1,'es'),
(8,'¿Qué ciudad romana quedó sepultada por el Vesubio?','FREE_TEXT','Pompeya',ARRAY['pompeya'],1,'es'),
(8,'¿Qué tratado puso fin a la Primera Guerra Mundial?','FREE_TEXT','Tratado de Versalles',ARRAY['Versalles'],2,'es'),
(8,'¿Quién pronunció el discurso "I have a dream"?','FREE_TEXT','Martin Luther King Jr.',ARRAY['Martin Luther King','MLK'],1,'es'),
(9,'¿Cómo se dice "libro" en inglés?','FREE_TEXT','Book',ARRAY['book'],1,'es'),
(9,'¿Cuál es el idioma con más hablantes nativos?','FREE_TEXT','Chino mandarín',ARRAY['Mandarín','Mandarin','Chino'],2,'es'),
(9,'¿Cómo se dice "adiós" en italiano?','FREE_TEXT','Ciao',ARRAY['ciao'],1,'es'),
(9,'¿Qué idioma utiliza el alfabeto cirílico en Rusia?','FREE_TEXT','Ruso',ARRAY['ruso'],1,'es'),
(9,'¿Cómo se llama la lengua construida más hablada del mundo?','FREE_TEXT','Esperanto',ARRAY['esperanto'],2,'es'),
(10,'¿Quién escribió Romeo y Julieta?','FREE_TEXT','William Shakespeare',ARRAY['Shakespeare'],1,'es'),
(10,'¿Cómo se llama el mago protagonista de la saga de J. K. Rowling?','FREE_TEXT','Harry Potter',ARRAY['Harry'],1,'es'),
(10,'¿Qué escritora creó a Hermione y Hogwarts?','FREE_TEXT','J. K. Rowling',ARRAY['JK Rowling','Rowling','Joanne Rowling'],1,'es'),
(10,'¿Quién escribió La metamorfosis?','FREE_TEXT','Franz Kafka',ARRAY['Kafka'],2,'es'),
(10,'¿Cómo se llama el capitán obsesionado con Moby Dick?','FREE_TEXT','Ahab',ARRAY['Capitán Ahab','Captain Ahab'],3,'es'),
(11,'¿Cuál es la raíz cuadrada de 81?','FREE_TEXT','9',ARRAY['nueve'],1,'es'),
(11,'¿Cuánto suman los ángulos interiores de un triángulo?','FREE_TEXT','180 grados',ARRAY['180','180°','ciento ochenta grados'],1,'es'),
(11,'¿Cómo se llama un polígono de ocho lados?','FREE_TEXT','Octógono',ARRAY['Octagono'],2,'es'),
(11,'¿Cuál es el número primo más pequeño?','FREE_TEXT','2',ARRAY['dos'],1,'es'),
(11,'¿Qué número romano representa 50?','FREE_TEXT','L',ARRAY['l'],2,'es'),
(12,'¿Qué cantante lanzó el álbum 25?','FREE_TEXT','Adele',ARRAY['adele'],1,'es'),
(12,'¿Quién compuso Las cuatro estaciones?','FREE_TEXT','Antonio Vivaldi',ARRAY['Vivaldi'],2,'es'),
(12,'¿Qué artista canta Bad Romance?','FREE_TEXT','Lady Gaga',ARRAY['Gaga'],1,'es'),
(12,'¿Cómo se llama el instrumento de cuerda que toca un arco y es más pequeño que un violonchelo?','FREE_TEXT','Violín',ARRAY['violin'],1,'es'),
(12,'¿Qué grupo español canta Mediterráneo?','FREE_TEXT','Joan Manuel Serrat',ARRAY['Serrat'],2,'es'),
(13,'¿Qué animal terrestre es el más rápido?','FREE_TEXT','Guepardo',ARRAY['Cheetah'],1,'es'),
(13,'¿Cómo se llama el proceso por el que una oruga se vuelve mariposa?','FREE_TEXT','Metamorfosis',ARRAY['metamorfosis'],1,'es'),
(13,'¿Qué capa de la Tierra respiramos?','FREE_TEXT','Atmósfera',ARRAY['atmosfera'],1,'es'),
(13,'¿Cuál es el árbol nacional de Canadá que aparece en su bandera?','FREE_TEXT','Arce',ARRAY['arce'],2,'es'),
(13,'¿Qué animal construye presas en los ríos?','FREE_TEXT','Castor',ARRAY['castores'],1,'es'),
(14,'¿Cómo se llama una empresa joven de rápido crecimiento?','FREE_TEXT','Startup',ARRAY['start-up','start up'],1,'es'),
(14,'¿Qué red profesional se usa para buscar empleo y contactos?','FREE_TEXT','LinkedIn',ARRAY['linkedin'],1,'es'),
(14,'¿Cómo se llama vender directamente al consumidor por internet?','FREE_TEXT','Comercio electrónico',ARRAY['e-commerce','ecommerce','comercio online'],2,'es'),
(14,'¿Qué término describe una marca muy valiosa como Apple o Coca-Cola?','FREE_TEXT','Brand equity',ARRAY['valor de marca'],3,'es'),
(14,'¿Cómo se llama el beneficio repartido entre accionistas?','FREE_TEXT','Dividendo',ARRAY['dividendos'],2,'es'),
(15,'¿Cómo se llama la norma suprema de un país?','FREE_TEXT','Constitución',ARRAY['constitucion','La Constitución'],1,'es'),
(15,'¿Qué organismo internacional tiene sede principal en Nueva York y busca cooperación entre países?','FREE_TEXT','ONU',ARRAY['Naciones Unidas','Organización de las Naciones Unidas'],1,'es'),
(15,'¿Cómo se llama el sistema donde la ciudadanía elige representantes?','FREE_TEXT','Democracia',ARRAY['democracia representativa'],1,'es'),
(15,'¿Qué poder interpreta y aplica las leyes?','FREE_TEXT','Poder judicial',ARRAY['Judicial','judicial'],2,'es'),
(15,'¿Cómo se llama el máximo tribunal de España?','FREE_TEXT','Tribunal Supremo',ARRAY['Supremo'],2,'es'),
(16,'¿Cómo se llama el hermano de Mario vestido de verde?','FREE_TEXT','Luigi',ARRAY['luigi'],1,'es'),
(16,'¿Qué juego enfrenta a 100 jugadores hasta quedar uno?','FREE_TEXT','Fortnite',ARRAY['fortnite','Battle Royale'],1,'es'),
(16,'¿Cómo se llama el hechicero de Harry Potter con una cicatriz en forma de rayo?','FREE_TEXT','Harry Potter',ARRAY['Harry'],1,'es'),
(16,'¿Qué serie de juegos de Nintendo protagoniza Link?','FREE_TEXT','The Legend of Zelda',ARRAY['Zelda','Legend of Zelda'],1,'es'),
(16,'¿Qué personaje de videojuegos come puntos y huye de fantasmas?','FREE_TEXT','Pac-Man',ARRAY['Pacman','pac man'],1,'es'),
(17,'¿Cómo se llama el día de descanso judío?','FREE_TEXT','Shabat',ARRAY['Sabbat','Shabbath'],2,'es'),
(17,'¿Cuál es el texto sagrado central del judaísmo?','FREE_TEXT','Torá',ARRAY['Tora','Torah'],1,'es'),
(17,'¿Qué festividad cristiana celebra la resurrección de Jesús?','FREE_TEXT','Pascua',ARRAY['Pascua de Resurrección'],1,'es'),
(17,'¿Cómo se llama el ciclo de renacimientos en el budismo?','FREE_TEXT','Samsara',ARRAY['Samsara'],3,'es'),
(17,'¿Qué río es sagrado para muchos hinduistas?','FREE_TEXT','Ganges',ARRAY['El Ganges'],1,'es'),
(18,'¿Cuál es el músculo principal de la respiración?','FREE_TEXT','Diafragma',ARRAY['diafragma'],2,'es'),
(18,'¿Cómo se llama la ciencia que estudia los medicamentos?','FREE_TEXT','Farmacología',ARRAY['farmacologia'],2,'es'),
(18,'¿Qué vitamina es esencial para la coagulación sanguínea?','FREE_TEXT','Vitamina K',ARRAY['K','vitamina k'],3,'es'),
(18,'¿Cómo se llaman las células que transportan oxígeno?','FREE_TEXT','Glóbulos rojos',ARRAY['Globulos rojos','eritrocitos'],1,'es'),
(18,'¿Qué sentido permite percibir los olores?','FREE_TEXT','Olfato',ARRAY['olfato'],1,'es'),
(19,'¿Cómo se llama la red mundial de páginas web?','FREE_TEXT','Internet',ARRAY['internet','la red'],1,'es'),
(19,'¿Qué lenguaje da estilo visual a una página web?','FREE_TEXT','CSS',ARRAY['css','Cascading Style Sheets'],1,'es'),
(19,'¿Qué inventó Tim Berners-Lee?','FREE_TEXT','World Wide Web',ARRAY['WWW','la web','Web'],2,'es'),
(19,'¿Cómo se llama una contraseña de un solo uso para verificar acceso?','FREE_TEXT','Código OTP',ARRAY['OTP','código de un solo uso','codigo OTP'],3,'es'),
(19,'¿Qué término describe guardar archivos en servidores remotos accesibles por internet?','FREE_TEXT','Nube',ARRAY['cloud','computación en la nube','computacion en la nube'],2,'es'),
(20,'¿Cómo se llama el profesor de química de Breaking Bad?','FREE_TEXT','Walter White',ARRAY['Walter','Heisenberg'],1,'es'),
(20,'¿Qué plataforma produjo la serie The Last of Us?','FREE_TEXT','HBO',ARRAY['Max','HBO Max'],2,'es'),
(20,'¿Cómo se llama el pueblo de Stranger Things?','FREE_TEXT','Hawkins',ARRAY['hawkins'],2,'es'),
(20,'¿Qué serie convirtió el juego de luz roja, luz verde en un fenómeno mundial?','FREE_TEXT','Squid Game',ARRAY['El juego del calamar','squid game'],1,'es'),
(20,'¿Qué comedia sigue a seis amigos en Nueva York y tiene un personaje llamado Ross?','FREE_TEXT','Friends',ARRAY['friends'],1,'es');
