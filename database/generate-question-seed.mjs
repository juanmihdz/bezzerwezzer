import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/*
 * Curated fact pairs. Only the direct question is used: the former inverse
 * format was intentionally removed because it asked for the same fact again.
 * Facts tied to recent events include the year in the prompt.
 */
const banks = [
  {
    category: 'Arte',
    direct: ([work]) => `¿Quién creó la obra «${work}»?`,
    inverse: ([work, author]) => `¿Cuál de estas obras fue creada por ${author}?`,
    pairs: `Guernica|Pablo Picasso
Las meninas|Diego Velázquez
La noche estrellada|Vincent van Gogh
La persistencia de la memoria|Salvador Dalí
El grito|Edvard Munch
El nacimiento de Venus|Sandro Botticelli
La última cena|Leonardo da Vinci
La libertad guiando al pueblo|Eugène Delacroix
El pensador|Auguste Rodin
David|Miguel Ángel
La joven de la perla|Johannes Vermeer
Los girasoles|Vincent van Gogh
Nenúfares|Claude Monet
El beso|Gustav Klimt
American Gothic|Grant Wood
La gran ola de Kanagawa|Katsushika Hokusai
La columna rota|Frida Kahlo
La traición de las imágenes|René Magritte
Fuente|Marcel Duchamp
El jardín de las delicias|El Bosco
La escuela de Atenas|Rafael Sanzio
El matrimonio Arnolfini|Jan van Eyck
Nighthawks|Edward Hopper
El entierro del conde de Orgaz|El Greco
Las señoritas de Aviñón|Pablo Picasso`
  },
  {
    category: 'Arquitectura',
    direct: ([building]) => `¿Quién diseñó «${building}»?`,
    inverse: ([building, architect]) => `¿Cuál de estos edificios diseñó ${architect}?`,
    pairs: `Sagrada Familia|Antoni Gaudí
Museo Guggenheim de Bilbao|Frank Gehry
Pirámide del Louvre|I. M. Pei
Burj Khalifa|Adrian Smith
Ópera de Sídney|Jørn Utzon
Casa de la Cascada|Frank Lloyd Wright
Centro Pompidou|Renzo Piano y Richard Rogers
Empire State Building|Shreve, Lamb y Harmon
Torre Agbar|Jean Nouvel
Ciudad de las Artes y las Ciencias|Santiago Calatrava
Villa Savoye|Le Corbusier
Pabellón de Barcelona|Ludwig Mies van der Rohe
Casa Schröder|Gerrit Rietveld
Museo Judío de Berlín|Daniel Libeskind
Heydar Aliyev Center|Zaha Hadid
Iglesia de la Luz|Tadao Ando
Casa da Música|Rem Koolhaas
Termas de Vals|Peter Zumthor
Edificio Seagram|Mies van der Rohe y Philip Johnson
Metropol Parasol|Jürgen Mayer
Kimbell Art Museum|Louis Kahn
Glass House|Philip Johnson
30 St Mary Axe|Norman Foster
Elbphilharmonie|Herzog & de Meuron
Habitat 67|Moshe Safdie`
  },
  {
    category: 'Ciencia',
    direct: ([discovery]) => `¿Qué científico o científica se asocia principalmente con «${discovery}»?`,
    inverse: ([discovery, scientist]) => `¿Cuál de estos hallazgos o teorías se asocia con ${scientist}?`,
    pairs: `teoría de la relatividad|Albert Einstein
ley de la gravitación universal|Isaac Newton
evolución por selección natural|Charles Darwin
penicilina|Alexander Fleming
leyes de la herencia|Gregor Mendel
radioactividad y estudio del radio|Marie Curie
modelo heliocéntrico|Nicolás Copérnico
tabla periódica|Dmitri Mendeléyev
rayos X|Wilhelm Röntgen
vacunación contra la viruela|Edward Jenner
circulación de la sangre|William Harvey
clasificación binomial|Carlos Linneo
deriva continental|Alfred Wegener
estructura del ADN mediante difracción de rayos X|Rosalind Franklin
modelo nuclear del átomo|Ernest Rutherford
expansión del universo|Edwin Hubble
púlsares|Jocelyn Bell Burnell
fisión nuclear|Lise Meitner
transposones genéticos|Barbara McClintock
teoría endosimbiótica moderna|Lynn Margulis
neutrón|James Chadwick
bosón que lleva su apellido|Peter Higgs
edición genética CRISPR-Cas9|Emmanuelle Charpentier y Jennifer Doudna
efecto fotoeléctrico|Albert Einstein
ley de inducción electromagnética|Michael Faraday`
  },
  {
    category: 'Cine',
    direct: ([film]) => `¿Quién dirigió la película «${film}»?`,
    inverse: ([film, director]) => `¿Cuál de estas películas dirigió ${director}?`,
    pairs: `El padrino|Francis Ford Coppola
Tiburón|Steven Spielberg
Titanic|James Cameron
Pulp Fiction|Quentin Tarantino
El señor de los anillos: El retorno del rey|Peter Jackson
Gladiator|Ridley Scott
El laberinto del fauno|Guillermo del Toro
Parásitos|Bong Joon-ho
Oppenheimer|Christopher Nolan
Todo sobre mi madre|Pedro Almodóvar
Los siete samuráis|Akira Kurosawa
Mulholland Drive|David Lynch
Hijos de los hombres|Alfonso Cuarón
Incendies|Denis Villeneuve
La doncella|Park Chan-wook
Retrato de una mujer en llamas|Céline Sciamma
Drive My Car|Ryūsuke Hamaguchi
Aftersun|Charlotte Wells
Anatomía de una caída|Justine Triet
La zona de interés|Jonathan Glazer
One Battle after Another|Paul Thomas Anderson
Sinners|Ryan Coogler
Hamnet|Chloé Zhao
Sentimental Value|Joachim Trier
The Secret Agent|Kleber Mendonça Filho`
  },
  {
    category: 'Deportes',
    direct: ([event]) => `¿Quién ganó ${event}?`,
    inverse: ([event, winner]) => `¿Cuál de estas competiciones o pruebas ganó ${winner}?`,
    pairs: `el Mundial masculino de fútbol de 2010|España
el Mundial masculino de fútbol de 2022|Argentina
el Mundial femenino de fútbol de 2023|España
la Eurocopa masculina de 2016|Portugal
la Copa América de 2021|Argentina
la final masculina de Wimbledon de 2008|Rafael Nadal
la final femenina de Wimbledon de 2019|Simona Halep
Roland Garros masculino de 2022|Rafael Nadal
el Tour de Francia de 2020|Tadej Pogačar
el Giro de Italia de 2019|Richard Carapaz
el Mundial de Fórmula 1 de 2009|Jenson Button
el Mundial de Fórmula 1 de 2016|Nico Rosberg
el Mundial de MotoGP de 2020|Joan Mir
el oro olímpico masculino de baloncesto de Atenas 2004|Argentina
la NBA de 2011|Dallas Mavericks
la NBA de 2019|Toronto Raptors
la Euroliga de baloncesto de 2018|Real Madrid
la Copa Mundial de Rugby de 2019|Sudáfrica
el Mundial masculino de balonmano de 2005|España
la Champions League de fútbol de 1999|Manchester United
la Champions League de fútbol de 2005|Liverpool
la Super Bowl XLII|New York Giants
el Masters de golf de 2019|Tiger Woods
el Mundial de ajedrez de 2013|Magnus Carlsen
el oro olímpico de 100 metros de Pekín 2008|Usain Bolt`
  },
  {
    category: 'Gastronomía',
    direct: ([dish]) => `¿Con qué país o región se asocia tradicionalmente «${dish}»?`,
    inverse: ([dish, origin]) => `¿Cuál de estas preparaciones se asocia con ${origin}?`,
    pairs: `paella|España
sushi|Japón
tacos|México
ceviche|Perú
feijoada|Brasil
moussaka|Grecia
fondue|Suiza
goulash|Hungría
pho|Vietnam
bibimbap|Corea
khachapuri|Georgia
rendang|Indonesia
okonomiyaki|Japón
tom yum|Tailandia
injera|Etiopía
shakshuka|Magreb
mansaf|Jordania
fesenjan|Irán
khinkali|Georgia
banitsa|Bulgaria
ćevapi|Balcanes
smørrebrød|Dinamarca
poutine|Quebec
mole poblano|México
caldo verde|Portugal`
  },
  {
    category: 'Geografía',
    direct: ([country]) => `¿Cuál es la capital de ${country}?`,
    inverse: ([country, capital]) => `¿De qué país es capital ${capital}?`,
    pairs: `Australia|Canberra
Canadá|Ottawa
Nueva Zelanda|Wellington
Marruecos|Rabat
Turquía|Ankara
Suiza|Berna
Brasil|Brasilia
Sudáfrica|Pretoria
India|Nueva Delhi
Vietnam|Hanói
Pakistán|Islamabad
Nigeria|Abuya
Tanzania|Dodoma
Sri Lanka|Sri Jayawardenapura Kotte
Bután|Timbu
Kazajistán|Astaná
Mongolia|Ulán Bator
Belice|Belmopán
Surinam|Paramaribo
Eritrea|Asmara
Lesoto|Maseru
Kirguistán|Biskek
Tayikistán|Dusambé
Brunéi|Bandar Seri Begawan
Palaos|Ngerulmud`
  },
  {
    category: 'Historia',
    direct: ([event]) => `¿En qué año ocurrió «${event}»?`,
    inverse: ([event, year]) => `¿Cuál de estos acontecimientos ocurrió en ${year}?`,
    pairs: `llegada de Colón a América|1492
Revolución francesa|1789
inicio de la Primera Guerra Mundial|1914
fin de la Segunda Guerra Mundial en Europa|1945
llegada del ser humano a la Luna|1969
caída del Muro de Berlín|1989
disolución de la Unión Soviética|1991
entrada en circulación del euro|2002
atentados del 11 de septiembre|2001
referéndum del Brexit|2016
batalla de Hastings|1066
caída de Constantinopla|1453
Paz de Westfalia|1648
Tratado de Utrecht|1713
motín del té de Boston|1773
Congreso de Viena|1815
Primavera de los Pueblos|1848
unificación de Italia|1861
crac de Wall Street|1929
crisis de los misiles de Cuba|1962
Primavera de Praga|1968
Revolución de los Claveles|1974
acuerdos de Camp David|1978
Acuerdo de Viernes Santo|1998
independencia de Sudán del Sur|2011`
  },
  {
    category: 'Idiomas',
    direct: ([language]) => `¿Cómo se dice «gracias» en ${language}?`,
    inverse: ([language, word]) => `¿En qué idioma «${word}» significa «gracias»?`,
    pairs: `inglés|thank you
francés|merci
italiano|grazie
portugués|obrigado
alemán|danke
japonés|arigatō
mandarín|xièxie
árabe|shukran
ruso|spasibo
griego|efcharistó
neerlandés|dank je
sueco|tack
noruego|takk
danés|tak
finés|kiitos
polaco|dziękuję
checo|děkuji
húngaro|köszönöm
rumano|mulțumesc
turco|teşekkürler
hebreo|toda
hindi|dhanyavaad
coreano|gamsahamnida
suajili|asante
euskera|eskerrik asko`
  },
  {
    category: 'Literatura',
    direct: ([work]) => `¿Quién escribió «${work}»?`,
    inverse: ([work, author]) => `¿Cuál de estas obras escribió ${author}?`,
    pairs: `Don Quijote de la Mancha|Miguel de Cervantes
Cien años de soledad|Gabriel García Márquez
1984|George Orwell
Orgullo y prejuicio|Jane Austen
Crimen y castigo|Fiódor Dostoyevski
La metamorfosis|Franz Kafka
El principito|Antoine de Saint-Exupéry
Rayuela|Julio Cortázar
La casa de los espíritus|Isabel Allende
El nombre de la rosa|Umberto Eco
Pedro Páramo|Juan Rulfo
Los detectives salvajes|Roberto Bolaño
La montaña mágica|Thomas Mann
La campana de cristal|Sylvia Plath
Beloved|Toni Morrison
Desgracia|J. M. Coetzee
Los hijos de la medianoche|Salman Rushdie
El dios de las pequeñas cosas|Arundhati Roy
Expiación|Ian McEwan
Nunca me abandones|Kazuo Ishiguro
La vegetariana|Han Kang
El ferrocarril subterráneo|Colson Whitehead
Flesh|David Szalay
La amiga estupenda|Elena Ferrante
Patria|Fernando Aramburu`
  },
  {
    category: 'Matemáticas',
    direct: ([description]) => `¿Qué concepto matemático corresponde a «${description}»?`,
    inverse: ([description, concept]) => `¿Cuál de estas descripciones define ${concept}?`,
    pairs: `relación a² + b² = c² en un triángulo rectángulo|teorema de Pitágoras
número divisible únicamente por 1 y por sí mismo|número primo
resultado de una multiplicación|producto
resultado de una división|cociente
distancia desde el centro hasta el borde de un círculo|radio
segmento que cruza un círculo pasando por su centro|diámetro
suma de todos los lados de una figura|perímetro
espacio que ocupa una figura plana|área
ángulo de 90 grados|ángulo recto
triángulo con sus tres lados iguales|triángulo equilátero
número que se escribe debajo de la raya en una fracción|denominador
valor que aparece con más frecuencia en un conjunto|moda
valor central de una lista ordenada|mediana
promedio obtenido al sumar y dividir entre el número de datos|media aritmética
probabilidad de un suceso imposible|cero
figura de seis lados|hexágono
recta que toca una circunferencia en un solo punto|tangente
número que no puede expresarse como fracción exacta de enteros|número irracional
operación inversa de elevar al cuadrado|raíz cuadrada
representación de una incógnita mediante una letra|variable
sucesión en la que cada término suma los dos anteriores|sucesión de Fibonacci
curva cuyos puntos están a igual distancia de un foco y una directriz|parábola
sistema de coordenadas con dos ejes perpendiculares|plano cartesiano
cantidad de formas de ordenar todos los elementos de un conjunto|permutación
límite de una frecuencia al repetir muchísimas veces un experimento|probabilidad experimental`
  },
  {
    category: 'Música',
    direct: ([work]) => `¿Qué artista o grupo publicó «${work}»?`,
    inverse: ([work, artist]) => `¿Cuál de estos álbumes u obras publicó ${artist}?`,
    pairs: `Abbey Road|The Beatles
The Dark Side of the Moon|Pink Floyd
Thriller|Michael Jackson
Back to Black|Amy Winehouse
21|Adele
Nevermind|Nirvana
Rumours|Fleetwood Mac
The Joshua Tree|U2
Born in the U.S.A.|Bruce Springsteen
Random Access Memories|Daft Punk
A Love Supreme|John Coltrane
Blue|Joni Mitchell
Hounds of Love|Kate Bush
To Pimp a Butterfly|Kendrick Lamar
In Rainbows|Radiohead
Mezzanine|Massive Attack
The Miseducation of Lauryn Hill|Lauryn Hill
Songs in the Key of Life|Stevie Wonder
What’s Going On|Marvin Gaye
The Rise and Fall of Ziggy Stardust and the Spiders from Mars|David Bowie
Disintegration|The Cure
El mal querer|Rosalía
Renaissance|Beyoncé
Brat|Charli XCX
Hit Me Hard and Soft|Billie Eilish`
  },
  {
    category: 'Naturaleza',
    direct: ([clue]) => `¿Qué animal encaja con esta descripción: «${clue}»?`,
    inverse: ([clue, animal]) => `¿Cuál de estas curiosidades corresponde al ${animal}?`,
    pairs: `es el animal más grande del planeta|ballena azul
es el animal terrestre más rápido|guepardo
es el único mamífero capaz de volar de forma activa|murciélago
es un mamífero con pico que pone huevos|ornitorrinco
es un marsupial australiano que se alimenta sobre todo de eucalipto|koala
es el felino más grande que existe|tigre
el macho suele lucir una melena muy reconocible|león
puede mover los ojos por separado y cambiar de color|camaleón
puede regenerar sus brazos|estrella de mar
tiene ocho brazos y expulsa tinta para defenderse|pulpo
realiza una de las migraciones más largas del mundo|charrán ártico
se alimenta principalmente de bambú y tiene pelaje blanco y negro|panda gigante
es el animal terrestre más grande|elefante africano
es el animal más alto del mundo|jirafa
es famoso por moverse muy despacio entre los árboles|perezoso
es un felino amenazado característico de la península ibérica|lince ibérico
es un anfibio mexicano conocido por regenerar extremidades|ajolote
puede producir potentes descargas eléctricas|anguila eléctrica
es el reptil vivo de mayor tamaño|cocodrilo marino
puede superar los cien años y vive en las islas Galápagos|tortuga gigante de Galápagos
posee un colmillo largo en espiral que recuerda a un unicornio|narval
es un mamífero espinoso que pone huevos|equidna
tiene aspecto prehistórico y un enorme pico en forma de zapato|picozapato
puede sobrevivir a condiciones extremas entrando en criptobiosis|tardígrado
puede revertir su ciclo vital y recibe el apodo de inmortal|medusa Turritopsis dohrnii`
  },
  {
    category: 'Negocios',
    direct: ([company]) => `¿Quién fundó o cofundó ${company}?`,
    inverse: ([company, founder]) => `¿Cuál de estas empresas fue fundada o cofundada por ${founder}?`,
    pairs: `Apple|Steve Jobs, Steve Wozniak y Ronald Wayne
Microsoft|Bill Gates y Paul Allen
Amazon|Jeff Bezos
Google|Larry Page y Sergey Brin
Meta|Mark Zuckerberg y sus compañeros de Harvard
Tesla|Martin Eberhard y Marc Tarpenning
Nike|Phil Knight y Bill Bowerman
IKEA|Ingvar Kamprad
Inditex|Amancio Ortega
Patagonia|Yvon Chouinard
Airbnb|Brian Chesky, Joe Gebbia y Nathan Blecharczyk
Spotify|Daniel Ek y Martin Lorentzon
Alibaba|Jack Ma
Nvidia|Jensen Huang
Canva|Melanie Perkins
Stripe|Patrick y John Collison
Shopify|Tobias Lütke
Salesforce|Marc Benioff
Mercado Libre|Marcos Galperin
Zoom|Eric Yuan
Figma|Dylan Field y Evan Wallace
DeepMind|Demis Hassabis, Shane Legg y Mustafa Suleyman
TSMC|Morris Chang
FedEx|Frederick Smith
Bloomberg L.P.|Michael Bloomberg`
  },
  {
    category: 'Política',
    direct: ([organization]) => `¿Dónde tiene su sede principal ${organization}?`,
    inverse: ([organization, headquarters]) => `¿Cuál de estas organizaciones tiene su sede principal en ${headquarters}?`,
    pairs: `Organización de las Naciones Unidas|Nueva York
Unión Europea|Bruselas
OTAN|Bruselas
Organización Mundial de la Salud|Ginebra
UNESCO|París
Fondo Monetario Internacional|Washington D. C.
Banco Mundial|Washington D. C.
Parlamento Europeo|Estrasburgo
Corte Internacional de Justicia|La Haya
Comité Olímpico Internacional|Lausana
Comité Internacional de la Cruz Roja|Ginebra
OPEP|Viena
Unión Africana|Adís Abeba
Liga Árabe|El Cairo
ASEAN|Yakarta
Organización de Estados Americanos|Washington D. C.
Organización Mundial del Comercio|Ginebra
Consejo de Europa|Estrasburgo
OCDE|París
Agencia Internacional de la Energía Atómica|Viena
Secretaría de la Commonwealth|Londres
Comunidad Andina|Lima
Secretaría General Iberoamericana|Madrid
Unión por el Mediterráneo|Barcelona
Comisión Económica para América Latina y el Caribe|Santiago de Chile`
  },
  {
    category: 'Pop Culture',
    direct: ([character]) => `¿En qué franquicia aparece «${character}»?`,
    inverse: ([character, franchise]) => `¿Cuál de estos personajes pertenece a «${franchise}»?`,
    pairs: `Ahsoka Tano|Star Wars
Miles Morales|Spider-Man
Harley Quinn|DC Comics
Geralt de Rivia|The Witcher
Ellie Williams|The Last of Us
Kratos|God of War
Samus Aran|Metroid
Solid Snake|Metal Gear
Cloud Strife|Final Fantasy
Jill Valentine|Resident Evil
Chun-Li|Street Fighter
Lara Croft|Tomb Raider
Master Chief|Halo
Ezio Auditore|Assassin’s Creed
Arthur Morgan|Red Dead Redemption
Totoro|Mi vecino Totoro
Spike Spiegel|Cowboy Bebop
Sailor Moon|Pretty Guardian Sailor Moon
Monkey D. Luffy|One Piece
Tanjiro Kamado|Demon Slayer
Paul Atreides|Dune
Katniss Everdeen|Los juegos del hambre
Wednesday Addams|La familia Addams
Vi|League of Legends
Shadowheart|Baldur’s Gate`
  },
  {
    category: 'Religión',
    direct: ([concept]) => `¿Con qué tradición religiosa se asocia principalmente «${concept}»?`,
    inverse: ([concept, tradition]) => `¿Cuál de estos conceptos se asocia con ${tradition}?`,
    pairs: `Torá|judaísmo
bar mitzvá|judaísmo
Ramadán|islam
Hégira|islam
zakat|islam
Trinidad|cristianismo
Pentecostés|cristianismo
iconostasio|cristianismo ortodoxo
karma|hinduismo
Vedas|hinduismo
nirvana|budismo
Bodhisattva|budismo mahayana
Tripitaka|budismo
langar|sijismo
Khalsa|sijismo
puja|hinduismo
Upanishads|hinduismo
bhakti|hinduismo
kami|sintoísmo
torii|sintoísmo
yin y yang|taoísmo
Dao De Jing|taoísmo
Avesta|zoroastrismo
Frashokereti|zoroastrismo
Báb|fe bahá’í`
  },
  {
    category: 'Salud',
    direct: ([structure]) => `¿Cuál es la función principal de «${structure}»?`,
    inverse: ([structure, fn]) => `¿Qué estructura o sustancia cumple principalmente esta función: «${fn}»?`,
    pairs: `corazón|bombear la sangre por el cuerpo
pulmones|intercambiar oxígeno y dióxido de carbono
riñones|filtrar la sangre y producir orina
hígado|procesar nutrientes y eliminar sustancias tóxicas
estómago|iniciar la digestión de los alimentos con ácidos y enzimas
intestino delgado|absorber la mayor parte de los nutrientes
intestino grueso|absorber agua y formar las heces
cerebro|coordinar el pensamiento, los sentidos y el movimiento
piel|proteger el cuerpo y ayudar a regular la temperatura
páncreas|producir enzimas digestivas y hormonas como la insulina
tiroides|regular el metabolismo mediante hormonas
vejiga|almacenar la orina antes de expulsarla
diafragma|facilitar la entrada y salida de aire al respirar
retina|detectar la luz y convertirla en señales nerviosas
cóclea|transformar vibraciones en señales auditivas
glóbulos rojos|transportar oxígeno por la sangre
glóbulos blancos|defender el organismo frente a infecciones
plaquetas|ayudar a coagular la sangre
insulina|disminuir la glucosa sanguínea
melatonina|regular el ciclo de sueño y vigilia
mielina|acelerar la conducción de los impulsos nerviosos
osteoclasto|reabsorber tejido óseo
nodo sinoauricular|iniciar normalmente el ritmo cardíaco
hipocampo|participar en la consolidación de la memoria
bilis|ayudar a digerir las grasas`
  },
  {
    category: 'Tecnología',
    direct: ([technology]) => `¿Quién creó o desarrolló originalmente «${technology}»?`,
    inverse: ([technology, creator]) => `¿Cuál de estas tecnologías creó o desarrolló ${creator}?`,
    pairs: `World Wide Web|Tim Berners-Lee
kernel Linux|Linus Torvalds
lenguaje Python|Guido van Rossum
lenguaje C|Dennis Ritchie
ratón de ordenador|Douglas Engelbart
correo electrónico en red|Ray Tomlinson
código QR|Masahiro Hara
Wikipedia|Jimmy Wales y Larry Sanger
sistema Android|Android Inc. y Google
tecnología Bluetooth|Ericsson
Git|Linus Torvalds
Kubernetes|Google
lenguaje Rust|Graydon Hoare
lenguaje Ruby|Yukihiro Matsumoto
lenguaje Go|Robert Griesemer, Rob Pike y Ken Thompson
Docker|Solomon Hykes
protocolo BitTorrent|Bram Cohen
formato PNG|PNG Development Group
formato PDF|Adobe
algoritmo RSA|Ron Rivest, Adi Shamir y Leonard Adleman
cifrado AES seleccionado como estándar|Joan Daemen y Vincent Rijmen
base de datos PostgreSQL|proyecto POSTGRES de UC Berkeley
SQLite|D. Richard Hipp
Node.js|Ryan Dahl
React|Jordan Walke`
  },
  {
    category: 'TV & Series',
    direct: ([series]) => `¿Quién creó la serie «${series}»?`,
    inverse: ([series, creator]) => `¿Cuál de estas series creó ${creator}?`,
    pairs: `Friends|David Crane y Marta Kauffman
Breaking Bad|Vince Gilligan
Juego de tronos|David Benioff y D. B. Weiss
Stranger Things|los hermanos Duffer
The Office (versión estadounidense)|Greg Daniels
Los Simpson|Matt Groening
Los Soprano|David Chase
Lost|J. J. Abrams, Damon Lindelof y Jeffrey Lieber
Black Mirror|Charlie Brooker
La casa de papel|Álex Pina
Pachinko|Soo Hugh
Slow Horses|Will Smith
Severance|Dan Erickson
The Bear|Christopher Storer
Andor|Tony Gilroy
The Last of Us|Craig Mazin y Neil Druckmann
Shōgun|Rachel Kondo y Justin Marks
Ripley|Steven Zaillian
Baby Reindeer|Richard Gadd
Fallout|Geneva Robertson-Dworet y Graham Wagner
Los años nuevos|Rodrigo Sorogoyen, Sara Cano y Paula Fabra
Antidisturbios|Isabel Peña y Rodrigo Sorogoyen
Patria|Aitor Gabilondo
La Mesías|Javier Calvo y Javier Ambrossi
Querer|Alauda Ruiz de Azúa`
  }
];

const categories = [
  ['Arte', 'palette', '#E91E63'], ['Arquitectura', 'building', '#9C27B0'],
  ['Ciencia', 'flask', '#2196F3'], ['Cine', 'film', '#F44336'],
  ['Deportes', 'trophy', '#4CAF50'], ['Gastronomía', 'utensils', '#FF9800'],
  ['Geografía', 'globe', '#00BCD4'], ['Historia', 'landmark', '#795548'],
  ['Idiomas', 'languages', '#607D8B'], ['Literatura', 'book-open', '#3F51B5'],
  ['Matemáticas', 'calculator', '#009688'], ['Música', 'music', '#FF5722'],
  ['Naturaleza', 'leaf', '#8BC34A'], ['Negocios', 'briefcase', '#455A64'],
  ['Política', 'landmark-dome', '#B71C1C'], ['Pop Culture', 'star', '#E040FB'],
  ['Religión', 'church', '#BF360C'], ['Salud', 'heart-pulse', '#EF5350'],
  ['Tecnología', 'cpu', '#1565C0'], ['TV & Series', 'tv', '#AB47BC']
];

const quote = (value) => `'${String(value).replaceAll("'", "''")}'`;
const sqlValue = (value) => value == null ? 'NULL' : quote(value);
const sqlArray = (values) => values?.length
  ? `ARRAY[${values.map(quote).join(',')}]::TEXT[]`
  : 'NULL';
const normalize = (value) => String(value)
  .normalize('NFD')
  .replace(/\p{Diacritic}/gu, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();
const hash = (value) => createHash('sha256').update(value).digest('hex');
const groupBy = (rows, keyFor) => {
  const grouped = new Map();
  for (const row of rows) {
    const key = keyFor(row);
    grouped.set(key, [...(grouped.get(key) ?? []), row]);
  }
  return grouped;
};
const curated = [];

for (const bank of banks) {
  const pairs = bank.pairs.split('\n').filter(Boolean).map(line => line.split('|'));
  if (pairs.length !== 25) throw new Error(`${bank.category}: expected 25 facts, got ${pairs.length}`);
  pairs.forEach((pair, index) => {
    curated.push({
      category: bank.category,
      question: bank.direct(pair),
      answer: pair[1],
      difficulty: index < 20 ? 'MEDIUM' : 'HARD',
      source: 'Curado',
    });
  });
}

if (banks.length !== 20 || curated.length !== 500) {
  throw new Error(`Expected 20 categories and 500 curated questions; got ${banks.length} and ${curated.length}`);
}

const externalPath = fileURLToPath(new URL('./question-bank.json', import.meta.url));
const external = JSON.parse(readFileSync(externalPath, 'utf8')).map(row => ({
  ...row,
  answer: row.choices[row.correctOption.charCodeAt(0) - 65],
}));
const questions = [...curated, ...external];
const answerPools = groupBy(questions, row => row.category);

for (const row of questions) {
  let choices = row.choices ? [...row.choices] : [row.answer];
  const used = new Set(choices.map(normalize));
  const candidates = answerPools.get(row.category)
    .map(candidate => candidate.answer)
    .filter(candidate => !used.has(normalize(candidate)))
    .sort((a, b) => hash(`${row.question}:${a}`).localeCompare(hash(`${row.question}:${b}`)));
  while (choices.length < 4 && candidates.length) {
    const candidate = candidates.shift();
    if (!used.has(normalize(candidate))) {
      choices.push(candidate);
      used.add(normalize(candidate));
    }
  }
  if (choices.length !== 4 || used.size !== 4) {
    throw new Error(`Could not build four distinct choices for: ${row.question}`);
  }
  if (!row.choices) {
    const shift = Number.parseInt(hash(row.question).slice(0, 2), 16) % 4;
    choices = [...choices.slice(shift), ...choices.slice(0, shift)];
  }
  row.choices = choices;
  row.correctOption = String.fromCharCode(65 + choices.findIndex(choice => normalize(choice) === normalize(row.answer)));
}

const counts = groupBy(questions, row => row.category);
if (questions.length !== 5000 || categories.some(([name]) => counts.get(name)?.length !== 250)) {
  throw new Error(`Expected 5,000 questions and 250 per category; got ${questions.length}`);
}

// Exactly 20% FREE_TEXT in every category, while preserving the 80/20
// MEDIUM/HARD difficulty distribution inside both question formats.
for (const categoryQuestions of counts.values()) {
  for (const difficulty of ['MEDIUM', 'HARD']) {
    const difficultyQuestions = categoryQuestions
      .filter(row => row.difficulty === difficulty)
      .sort((a, b) => {
        // Free-text answers must be practical to type, not essay-length choices.
        const aSuitable = a.answer.length <= 80 ? 0 : 1;
        const bSuitable = b.answer.length <= 80 ? 0 : 1;
        return aSuitable - bSuitable
          || hash(`free:${a.question}`).localeCompare(hash(`free:${b.question}`));
      });
    const freeTextCount = difficulty === 'MEDIUM' ? 40 : 10;
    if (difficultyQuestions.filter(row => row.answer.length <= 80).length < freeTextCount) {
      throw new Error(`${categoryQuestions[0].category}: not enough short answers for FREE_TEXT`);
    }
    difficultyQuestions.forEach((row, index) => {
      row.questionType = index < freeTextCount ? 'FREE_TEXT' : 'MULTIPLE_CHOICE';
    });
  }
}

for (const [category, categoryQuestions] of counts) {
  const multipleChoice = categoryQuestions.filter(row => row.questionType === 'MULTIPLE_CHOICE');
  const freeText = categoryQuestions.filter(row => row.questionType === 'FREE_TEXT');
  if (multipleChoice.length !== 200 || freeText.length !== 50) {
    throw new Error(`${category}: expected 200 multiple-choice and 50 free-text questions`);
  }
  if (freeText.some(row => !row.answer.trim() || row.answer.length > 80)) {
    throw new Error(`${category}: FREE_TEXT answers must contain 1-80 characters`);
  }
  for (const rows of [multipleChoice, freeText]) {
    const hard = rows.filter(row => row.difficulty === 'HARD').length;
    if (hard !== rows.length / 5) {
      throw new Error(`${category}: difficulty ratio is not 20% HARD for ${rows[0]?.questionType}`);
    }
  }
}

const aliasesFor = (answer) => {
  const candidates = [
    answer.replace(/^(?:en|el|la|los|las|un|una|al)\s+/iu, ''),
    answer.replace(/\s*\([^)]*\)\s*$/u, ''),
  ];
  return [...new Set(candidates)]
    .filter(alias => normalize(alias) && normalize(alias) !== normalize(answer));
};

const normalizedQuestions = questions.map(row => normalize(row.question));
if (new Set(normalizedQuestions).size !== normalizedQuestions.length) {
  const seen = new Map();
  const duplicates = questions.filter(row => {
    const key = normalize(row.question);
    const duplicate = seen.has(key);
    seen.set(key, row.question);
    return duplicate;
  });
  throw new Error(`Duplicate question text detected after normalization: ${duplicates.slice(0, 10).map(row => row.question).join(' | ')}`);
}

const tuples = questions.map(row => {
  const freeText = row.questionType === 'FREE_TEXT';
  const values = [
    sqlValue(row.category),
    sqlValue(row.question),
    sqlValue(row.questionType),
    ...row.choices.map(choice => sqlValue(freeText ? null : choice)),
    sqlValue(freeText ? null : row.correctOption),
    sqlValue(freeText ? row.answer : null),
    freeText ? sqlArray(aliasesFor(row.answer)) : 'NULL',
    sqlValue(row.difficulty),
    sqlValue(row.source),
  ];
  return `(${values.join(',')})`;
});

const categorySql = categories
  .map(row => `(${row.map(quote).join(',')},'es')`)
  .join(',\n');

const sql = `-- ============================================================
-- Bezzerwizzer Online — banco curado en español
-- Generated by database/generate-question-seed.mjs
-- 20 categorías × 250 preguntas = 5,000 preguntas
-- 80% MULTIPLE_CHOICE / 20% FREE_TEXT
-- 20% HARD / 80% MEDIUM en ambos formatos
-- ============================================================

BEGIN;

INSERT INTO categories (name, icon, color, locale) VALUES
${categorySql}
ON CONFLICT (name, locale) DO UPDATE
SET icon = EXCLUDED.icon, color = EXCLUDED.color;

-- Reemplazo completo solicitado: no se conserva ninguna pregunta anterior.
DELETE FROM questions;

-- Algunas opciones académicas superan 255 caracteres. TEXT también mantiene
-- compatibles las preguntas cortas y evita truncar respuestas.
ALTER TABLE questions
    ALTER COLUMN option_a TYPE TEXT,
    ALTER COLUMN option_b TYPE TEXT,
    ALTER COLUMN option_c TYPE TEXT,
    ALTER COLUMN option_d TYPE TEXT,
    ALTER COLUMN correct_answer TYPE TEXT;

CREATE TEMP TABLE question_rows (
    category_name TEXT NOT NULL,
    question_text TEXT NOT NULL,
    question_type TEXT NOT NULL,
    option_a TEXT,
    option_b TEXT,
    option_c TEXT,
    option_d TEXT,
    correct_option CHAR(1),
    correct_answer TEXT,
    answer_aliases TEXT[],
    difficulty question_difficulty NOT NULL,
    source_name TEXT NOT NULL
) ON COMMIT DROP;

INSERT INTO question_rows VALUES
${tuples.join(',\n')};

INSERT INTO questions (
    category_id, question_text, question_type,
    option_a, option_b, option_c, option_d, correct_option,
    correct_answer, answer_aliases, difficulty, locale
)
SELECT c.id,
       r.question_text,
       r.question_type,
       r.option_a,
       r.option_b,
       r.option_c,
       r.option_d,
       r.correct_option,
       r.correct_answer,
       r.answer_aliases,
       r.difficulty,
       'es'
FROM question_rows r
JOIN categories c ON c.name = r.category_name AND c.locale = 'es';

CREATE UNIQUE INDEX IF NOT EXISTS idx_questions_unique_text_locale
    ON questions(locale, lower(question_text));

DO $$
DECLARE
    total_count integer;
    invalid_categories integer;
BEGIN
    SELECT count(*) INTO total_count FROM questions WHERE locale = 'es';
    SELECT count(*) INTO invalid_categories
    FROM (
        SELECT category_id
        FROM questions
        WHERE locale = 'es'
        GROUP BY category_id
        HAVING count(*) <> 250
           OR count(*) FILTER (WHERE question_type = 'MULTIPLE_CHOICE') <> 200
           OR count(*) FILTER (WHERE question_type = 'FREE_TEXT') <> 50
    ) invalid;

    IF total_count <> 5000 OR invalid_categories <> 0 THEN
        RAISE EXCEPTION 'Invalid question bank: total=%, invalid categories=%',
            total_count, invalid_categories;
    END IF;

    IF EXISTS (
        SELECT 1 FROM questions
        GROUP BY locale, lower(question_text)
        HAVING count(*) > 1
    ) THEN
        RAISE EXCEPTION 'Invalid question bank: duplicate question text';
    END IF;

    IF EXISTS (
        SELECT 1 FROM questions
        WHERE question_type = 'MULTIPLE_CHOICE'
          AND cardinality(ARRAY(
              SELECT DISTINCT unnest(ARRAY[option_a, option_b, option_c, option_d])
          )) <> 4
    ) THEN
        RAISE EXCEPTION 'Invalid question bank: repeated multiple-choice options';
    END IF;

    IF EXISTS (
        SELECT 1 FROM questions
        WHERE question_type = 'FREE_TEXT'
          AND (correct_answer IS NULL
               OR option_a IS NOT NULL OR option_b IS NOT NULL
               OR option_c IS NOT NULL OR option_d IS NOT NULL
               OR correct_option IS NOT NULL)
    ) THEN
        RAISE EXCEPTION 'Invalid question bank: malformed free-text question';
    END IF;
END $$;

COMMIT;
`;

const output = fileURLToPath(new URL('./seed-questions.sql', import.meta.url));
writeFileSync(output, sql, 'utf8');
console.log(`Generated ${output}: ${tuples.length} independent questions`);
