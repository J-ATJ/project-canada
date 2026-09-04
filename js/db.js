let db = [
  {
    "palabra": "I",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "yo",
    "ejemplo_en": "I am a student",
    "ejemplo_es": "Yo soy un estudiante"
  },
  {
    "palabra": "you",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "tú / ustedes",
    "ejemplo_en": "You are my friend",
    "ejemplo_es": "Tú eres mi amigo"
  },
  {
    "palabra": "he",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "él",
    "ejemplo_en": "He is a doctor",
    "ejemplo_es": "Él es un médico"
  },
  {
    "palabra": "she",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "ella",
    "ejemplo_en": "She is happy",
    "ejemplo_es": "Ella está feliz"
  },
  {
    "palabra": "it",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "eso / ello",
    "ejemplo_en": "It is a blue box",
    "ejemplo_es": "Eso es una caja azul"
  },
  {
    "palabra": "we",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "nosotros",
    "ejemplo_en": "We are a team",
    "ejemplo_es": "Nosotros somos un equipo"
  },
  {
    "palabra": "they",
    "categoria": "pronombres",
    "tipo": "pronombre",
    "traduccion": "ellos",
    "ejemplo_en": "They are at home",
    "ejemplo_es": "Ellos están en casa"
  },
  {
    "palabra": "mother",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "madre",
    "ejemplo_en": "My mother is nice",
    "ejemplo_es": "Mi madre es agradable"
  },
  {
    "palabra": "brother",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "hermano",
    "ejemplo_en": "I have a brother",
    "ejemplo_es": "Yo tengo un hermano"
  },
  {
    "palabra": "friend",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "amigo",
    "ejemplo_en": "He is a good friend",
    "ejemplo_es": "Él es un buen amigo"
  },
  {
    "palabra": "father",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "padre",
    "ejemplo_en": "My father is serious",
    "ejemplo_es": "Mi padre es serio"
  },
  {
    "palabra": "sister",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "hermana",
    "ejemplo_en": "My sister is young",
    "ejemplo_es": "Mi hermana es joven"
  },
  {
    "palabra": "son",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "hijo",
    "ejemplo_en": "She helps her son",
    "ejemplo_es": "Ella ayuda a su hijo"
  },
  {
    "palabra": "daughter",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "hija",
    "ejemplo_en": "She loves her daughter",
    "ejemplo_es": "Ella ama a su hija"
  },
  {
    "palabra": "baby",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "bebé",
    "ejemplo_en": "The baby is sleeping",
    "ejemplo_es": "El bebé está durmiendo"
  },
  {
    "palabra": "grandfather",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "abuelo",
    "ejemplo_en": "My grandfather is wise",
    "ejemplo_es": "Mi abuelo es sabio"
  },
  {
    "palabra": "grandmother",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "abuela",
    "ejemplo_en": "My grandmother cooks well",
    "ejemplo_es": "Mi abuela cocina bien"
  },
  {
    "palabra": "uncle",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "tío",
    "ejemplo_en": "My uncle lives far away",
    "ejemplo_es": "Mi tío vive lejos"
  },
  {
    "palabra": "aunt",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "tía",
    "ejemplo_en": "My aunt is very kind",
    "ejemplo_es": "Mi tía es muy amable"
  },
  {
    "palabra": "cousin",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "primo/a",
    "ejemplo_en": "My cousin is tall",
    "ejemplo_es": "Mi primo es alto"
  },
  {
    "palabra": "classmate",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "compañero de clase",
    "ejemplo_en": "My classmate helps me",
    "ejemplo_es": "Mi compañero de clase me ayuda"
  },
  {
    "palabra": "nephew",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "sobrino",
    "ejemplo_en": "My nephew sings well",
    "ejemplo_es": "Mi sobrino canta bien"
  },
  {
    "palabra": "niece",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "sobrina",
    "ejemplo_en": "My niece is painting",
    "ejemplo_es": "Mi sobrina está pintando"
  },
  {
    "palabra": "husband",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "esposo",
    "ejemplo_en": "Her husband is working",
    "ejemplo_es": "Su esposo está trabajando"
  },
  {
    "palabra": "neighbor",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "vecino/a",
    "ejemplo_en": "The neighbor is friendly",
    "ejemplo_es": "El vecino es amigable"
  },
  {
    "palabra": "wife",
    "categoria": "familia",
    "tipo": "sustantivo",
    "traduccion": "esposa",
    "ejemplo_en": "His wife is a doctor",
    "ejemplo_es": "Su esposa es doctora"
  },
  {
    "palabra": "house",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "casa",
    "ejemplo_en": "The house is big",
    "ejemplo_es": "La casa es grande"
  },
  {
    "palabra": "bed",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "cama",
    "ejemplo_en": "The bed is soft",
    "ejemplo_es": "La cama es blanda"
  },
  {
    "palabra": "kitchen",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "cocina",
    "ejemplo_en": "The kitchen is clean",
    "ejemplo_es": "La cocina está limpia"
  },
  {
    "palabra": "door",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "puerta",
    "ejemplo_en": "Open the door",
    "ejemplo_es": "Abre la puerta"
  },
  {
    "palabra": "window",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "ventana",
    "ejemplo_en": "Close the window",
    "ejemplo_es": "Cierra la ventana"
  },
  {
    "palabra": "chair",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "silla",
    "ejemplo_en": "Sit on the chair",
    "ejemplo_es": "Siéntate en la silla"
  },
  {
    "palabra": "table",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "mesa",
    "ejemplo_en": "The food is on the table",
    "ejemplo_es": "La comida está sobre la mesa"
  },
  {
    "palabra": "room",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "habitación",
    "ejemplo_en": "My room is small",
    "ejemplo_es": "Mi habitación es pequeña"
  },
  {
    "palabra": "key",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "llave",
    "ejemplo_en": "I have the key",
    "ejemplo_es": "Yo tengo la llave"
  },
  {
    "palabra": "bathroom",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "baño",
    "ejemplo_en": "The bathroom is clean",
    "ejemplo_es": "El baño está limpio"
  },
  {
    "palabra": "sofa",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "sillón",
    "ejemplo_en": "The sofa is comfortable",
    "ejemplo_es": "El sillón es cómodo"
  },
  {
    "palabra": "mirror",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "espejo",
    "ejemplo_en": "Look in the mirror",
    "ejemplo_es": "Mira en el espejo"
  },
  {
    "palabra": "garden",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "jardín",
    "ejemplo_en": "The garden has flowers",
    "ejemplo_es": "El jardín tiene flores"
  },
  {
    "palabra": "yard",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "patio",
    "ejemplo_en": "The dog is in the yard",
    "ejemplo_es": "El perro está en el patio"
  },
  {
    "palabra": "television",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "televisión",
    "ejemplo_en": "Turn off the television",
    "ejemplo_es": "Apaga la televisión"
  },
  {
    "palabra": "refrigerator",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "refrigerador",
    "ejemplo_en": "The food is in the refrigerator",
    "ejemplo_es": "La comida está en el refrigerador"
  },
  {
    "palabra": "broom",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "escoba",
    "ejemplo_en": "Use the broom to clean",
    "ejemplo_es": "Usa la escoba para limpiar"
  },
  {
    "palabra": "soap",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "jabón",
    "ejemplo_en": "The soap smells good",
    "ejemplo_es": "El jabón huele rico"
  },
  {
    "palabra": "bucket",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "cubeta",
    "ejemplo_en": "The bucket is full of water",
    "ejemplo_es": "La cubeta está llena de agua"
  },
  {
    "palabra": "trash can",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "bote de basura",
    "ejemplo_en": "Put the paper in the trash can",
    "ejemplo_es": "Pon el papel en el bote de basura"
  },
  {
    "palabra": "book",
    "categoria": "hogar",
    "tipo": "sustantivo",
    "traduccion": "libro",
    "ejemplo_en": "Read this book",
    "ejemplo_es": "Lee este libro"
  },
  {
    "palabra": "hand",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "mano",
    "ejemplo_en": "Wash your hands",
    "ejemplo_es": "Lava tus manos"
  },
  {
    "palabra": "head",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "cabeza",
    "ejemplo_en": "My head hurts",
    "ejemplo_es": "Mi cabeza duele"
  },
  {
    "palabra": "eyes",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "ojos",
    "ejemplo_en": "Your eyes are blue",
    "ejemplo_es": "Tus ojos son azules"
  },
  {
    "palabra": "face",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "cara",
    "ejemplo_en": "Wash your face",
    "ejemplo_es": "Lava tu cara"
  },
  {
    "palabra": "arm",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "brazo",
    "ejemplo_en": "My arm is strong",
    "ejemplo_es": "Mi brazo es fuerte"
  },
  {
    "palabra": "leg",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "pierna",
    "ejemplo_en": "My leg hurts",
    "ejemplo_es": "Mi pierna duele"
  },
  {
    "palabra": "foot",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "pie",
    "ejemplo_en": "My foot is cold",
    "ejemplo_es": "Mi pie está frío"
  },
  {
    "palabra": "mouth",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "boca",
    "ejemplo_en": "Close your mouth",
    "ejemplo_es": "Cierra tu boca"
  },
  {
    "palabra": "ear",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "oreja",
    "ejemplo_en": "My ear is cold",
    "ejemplo_es": "Mi oreja está fría"
  },
  {
    "palabra": "hair",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "cabello",
    "ejemplo_en": "Brush your hair",
    "ejemplo_es": "Cepilla tu cabello"
  },
  {
    "palabra": "smile",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "sonrisa",
    "ejemplo_en": "You have a nice smile",
    "ejemplo_es": "Tienes una bonita sonrisa"
  },
  {
    "palabra": "finger",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "dedo (de la mano)",
    "ejemplo_en": "Point with your finger",
    "ejemplo_es": "Señala con tu dedo"
  },
  {
    "palabra": "nose",
    "categoria": "cuerpo",
    "tipo": "sustantivo",
    "traduccion": "nariz",
    "ejemplo_en": "Touch your nose",
    "ejemplo_es": "Toca tu nariz"
  },
  {
    "palabra": "bird",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "pájaro",
    "ejemplo_en": "The bird can fly",
    "ejemplo_es": "El pájaro puede volar"
  },
  {
    "palabra": "horse",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "caballo",
    "ejemplo_en": "The horse is fast",
    "ejemplo_es": "El caballo es rápido"
  },
  {
    "palabra": "shark",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "tiburón",
    "ejemplo_en": "The shark lives in the ocean",
    "ejemplo_es": "El tiburón vive en el océano"
  },
  {
    "palabra": "deer",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "venado",
    "ejemplo_en": "I see a deer in the woods",
    "ejemplo_es": "Yo veo un venado en el bosque"
  },
  {
    "palabra": "moose",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "alce",
    "ejemplo_en": "The moose is very big",
    "ejemplo_es": "El alce es muy grande"
  },
  {
    "palabra": "snake",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "serpiente",
    "ejemplo_en": "The snake is on the ground",
    "ejemplo_es": "La serpiente está en el suelo"
  },
  {
    "palabra": "bear",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "oso",
    "ejemplo_en": "The bear lives in the forest",
    "ejemplo_es": "El oso vive en el bosque"
  },
  {
    "palabra": "eagle",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "águila",
    "ejemplo_en": "The eagle flies high",
    "ejemplo_es": "El águila vuela alto"
  },
  {
    "palabra": "wolf",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "lobo",
    "ejemplo_en": "The wolf hunts at night",
    "ejemplo_es": "El lobo caza de noche"
  },
  {
    "palabra": "fox",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "zorro",
    "ejemplo_en": "The fox is small and fast",
    "ejemplo_es": "El zorro es pequeño y rápido"
  },
  {
    "palabra": "lion",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "león",
    "ejemplo_en": "The lion is the king",
    "ejemplo_es": "El león es el rey"
  },
  {
    "palabra": "cow",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "vaca",
    "ejemplo_en": "The cow gives milk",
    "ejemplo_es": "La vaca da leche"
  },
  {
    "palabra": "monkey",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "mono",
    "ejemplo_en": "The monkey climbs trees",
    "ejemplo_es": "El mono escala árboles"
  },
  {
    "palabra": "pig",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "cerdo",
    "ejemplo_en": "The pig is in the mud",
    "ejemplo_es": "El cerdo está en el lodo"
  },
  {
    "palabra": "dolphin",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "delfín",
    "ejemplo_en": "The dolphin swims fast",
    "ejemplo_es": "El delfín nada rápido"
  },
  {
    "palabra": "owl",
    "categoria": "animales",
    "tipo": "sustantivo",
    "traduccion": "búho",
    "ejemplo_en": "The owl flies quietly",
    "ejemplo_es": "El búho vuela silenciosamente"
  },
  {
    "palabra": "hello",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "hola",
    "ejemplo_en": "Hello, how are you?",
    "ejemplo_es": "Hola, ¿cómo estás?"
  },
  {
    "palabra": "thanks",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "gracias",
    "ejemplo_en": "Thanks for the help",
    "ejemplo_es": "Gracias por la ayuda"
  },
  {
    "palabra": "please",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "por favor",
    "ejemplo_en": "Sit down, please",
    "ejemplo_es": "Siéntate, por favor"
  },
  {
    "palabra": "goodbye",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "adiós",
    "ejemplo_en": "Goodbye my friend",
    "ejemplo_es": "Adiós mi amigo"
  },
  {
    "palabra": "yes",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "sí",
    "ejemplo_en": "Yes, I am ready",
    "ejemplo_es": "Sí, yo estoy listo"
  },
  {
    "palabra": "no",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "no",
    "ejemplo_en": "No, thank you",
    "ejemplo_es": "No, gracias"
  },
  {
    "palabra": "welcome",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "de nada",
    "ejemplo_en": "You are welcome",
    "ejemplo_es": "De nada"
  },
  {
    "palabra": "sorry",
    "categoria": "expresiones",
    "tipo": "expresión",
    "traduccion": "lo siento",
    "ejemplo_en": "Sorry for the mistake",
    "ejemplo_es": "Lo siento por el error"
  },
  {
    "palabra": "eat",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "comer",
    "ejemplo_en": "I eat an apple",
    "ejemplo_es": "Yo como una manzana"
  },
  {
    "palabra": "go",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "ir",
    "ejemplo_en": "I go to school",
    "ejemplo_es": "Yo voy a la escuela"
  },
  {
    "palabra": "see",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "ver",
    "ejemplo_en": "I see a bird",
    "ejemplo_es": "Yo veo un pájaro"
  },
  {
    "palabra": "drink",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "beber",
    "ejemplo_en": "I drink wine",
    "ejemplo_es": "Yo bebo vino"
  },
  {
    "palabra": "run",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "correr",
    "ejemplo_en": "You run fast",
    "ejemplo_es": "Tú corres rápido"
  },
  {
    "palabra": "sleep",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "dormir",
    "ejemplo_en": "The cat loves to sleep",
    "ejemplo_es": "El gato ama dormir"
  },
  {
    "palabra": "read",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "leer",
    "ejemplo_en": "I read a book",
    "ejemplo_es": "Yo leo un libro"
  },
  {
    "palabra": "write",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "escribir",
    "ejemplo_en": "Write your name",
    "ejemplo_es": "Escribe tu nombre"
  },
  {
    "palabra": "speak",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "hablar",
    "ejemplo_en": "I speak Spanish",
    "ejemplo_es": "Yo hablo español"
  },
  {
    "palabra": "walk",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "caminar",
    "ejemplo_en": "We walk in the park",
    "ejemplo_es": "Nosotros caminamos en el parque"
  },
  {
    "palabra": "open",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "abrir",
    "ejemplo_en": "Open the window",
    "ejemplo_es": "Abre la ventana"
  },
  {
    "palabra": "close",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "cerrar",
    "ejemplo_en": "Close the door!",
    "ejemplo_es": "¡Cierra la puerta!"
  },
  {
    "palabra": "learn",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "aprender",
    "ejemplo_en": "I want to learn English",
    "ejemplo_es": "Yo quiero aprender inglés"
  },
  {
    "palabra": "help",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "ayudar",
    "ejemplo_en": "You help my father",
    "ejemplo_es": "Tú ayudas a mi padre"
  },
  {
    "palabra": "play",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "jugar",
    "ejemplo_en": "The girl plays outside",
    "ejemplo_es": "La niña juega afuera"
  },
  {
    "palabra": "buy",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "comprar",
    "ejemplo_en": "I want to buy a car",
    "ejemplo_es": "Yo quiero comprar un coche"
  },
  {
    "palabra": "make",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "hacer / fabricar",
    "ejemplo_en": "My mother makes bread",
    "ejemplo_es": "Mi madre hace pan"
  },
  {
    "palabra": "listen",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "escuchar",
    "ejemplo_en": "Listen to the teacher",
    "ejemplo_es": "Escucha al maestro"
  },
  {
    "palabra": "find",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "encontrar",
    "ejemplo_en": "I need to find my keys",
    "ejemplo_es": "Yo necesito encontrar mis llaves"
  },
  {
    "palabra": "give",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "dar",
    "ejemplo_en": "Give me the book, please",
    "ejemplo_es": "Dame el libro, por favor"
  },
  {
    "palabra": "take",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "tomar / llevar",
    "ejemplo_en": "Take my hand",
    "ejemplo_es": "Toma mi mano"
  },
  {
    "palabra": "clean",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "limpiar",
    "ejemplo_en": "Clean your room, please",
    "ejemplo_es": "Limpia tu habitación, por favor"
  },
  {
    "palabra": "wash",
    "categoria": "acciones-basicas",
    "tipo": "verbo",
    "traduccion": "lavar",
    "ejemplo_en": "Wash the car",
    "ejemplo_es": "Lava el coche"
  },
  {
    "palabra": "city",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "ciudad",
    "ejemplo_en": "The city is noisy",
    "ejemplo_es": "La ciudad es ruidosa"
  },
  {
    "palabra": "school",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "escuela",
    "ejemplo_en": "The school is closed",
    "ejemplo_es": "La escuela está cerrada"
  },
  {
    "palabra": "hospital",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "hospital",
    "ejemplo_en": "The hospital is near",
    "ejemplo_es": "El hospital está cerca"
  },
  {
    "palabra": "park",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "parque",
    "ejemplo_en": "We play in the park",
    "ejemplo_es": "Nosotros jugamos en el parque"
  },
  {
    "palabra": "store",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "tienda",
    "ejemplo_en": "The store is open",
    "ejemplo_es": "La tienda está abierta"
  },
  {
    "palabra": "street",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "calle",
    "ejemplo_en": "The street is long",
    "ejemplo_es": "La calle es larga"
  },
  {
    "palabra": "bank",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "banco",
    "ejemplo_en": "The bank is far away",
    "ejemplo_es": "El banco está lejos"
  },
  {
    "palabra": "restaurant",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "restaurante",
    "ejemplo_en": "The restaurant is good",
    "ejemplo_es": "El restaurante es bueno"
  },
  {
    "palabra": "supermarket",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "supermercado",
    "ejemplo_en": "I go to the supermarket",
    "ejemplo_es": "Yo voy al supermercado"
  },
  {
    "palabra": "parking lot",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "estacionamiento",
    "ejemplo_en": "The parking lot is full",
    "ejemplo_es": "El estacionamiento está lleno"
  },
  {
    "palabra": "gas station",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "gasolinera",
    "ejemplo_en": "The gas station is open",
    "ejemplo_es": "La gasolinera está abierta"
  },
  {
    "palabra": "pharmacy",
    "categoria": "lugares",
    "tipo": "sustantivo",
    "traduccion": "farmacia",
    "ejemplo_en": "I need to go to the pharmacy",
    "ejemplo_es": "Necesito ir a la farmacia"
  },
  {
    "palabra": "car",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "coche",
    "ejemplo_en": "The car is red",
    "ejemplo_es": "El coche es rojo"
  },
  {
    "palabra": "bus",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "autobús",
    "ejemplo_en": "The bus is black",
    "ejemplo_es": "El autobús es negro"
  },
  {
    "palabra": "train",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "tren",
    "ejemplo_en": "The train is fast",
    "ejemplo_es": "El tren es rápido"
  },
  {
    "palabra": "bike",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "bicicleta",
    "ejemplo_en": "I have a new bike",
    "ejemplo_es": "Yo tengo una bicicleta nueva"
  },
  {
    "palabra": "plane",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "avión",
    "ejemplo_en": "The plane is big",
    "ejemplo_es": "El avión es grande"
  },
  {
    "palabra": "taxi",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "taxi",
    "ejemplo_en": "Call a taxi, please",
    "ejemplo_es": "Llame a un taxi, por favor"
  },
  {
    "palabra": "boat",
    "categoria": "transporte",
    "tipo": "sustantivo",
    "traduccion": "barco",
    "ejemplo_en": "The boat is on the water",
    "ejemplo_es": "El barco está en el agua"
  },
  {
    "palabra": "sun",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "sol",
    "ejemplo_en": "The sun is hot",
    "ejemplo_es": "El sol está caliente"
  },
  {
    "palabra": "river",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "río",
    "ejemplo_en": "The river is long",
    "ejemplo_es": "El río es largo"
  },
  {
    "palabra": "tree",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "árbol",
    "ejemplo_en": "The tree is green",
    "ejemplo_es": "El árbol es verde"
  },
  {
    "palabra": "sky",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "cielo",
    "ejemplo_en": "The sky is blue",
    "ejemplo_es": "El cielo es azul"
  },
  {
    "palabra": "moon",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "luna",
    "ejemplo_en": "The moon is white",
    "ejemplo_es": "La luna es blanca"
  },
  {
    "palabra": "star",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "estrella",
    "ejemplo_en": "I see a star",
    "ejemplo_es": "Yo veo una estrella"
  },
  {
    "palabra": "flower",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "flor",
    "ejemplo_en": "The flower is pretty",
    "ejemplo_es": "La flor es bonita"
  },
  {
    "palabra": "sea",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "mar",
    "ejemplo_en": "The sea is dangerous",
    "ejemplo_es": "El mar es peligroso"
  },
  {
    "palabra": "rain",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "lluvia",
    "ejemplo_en": "I like the rain",
    "ejemplo_es": "Me gusta la lluvia"
  },
  {
    "palabra": "wind",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "viento",
    "ejemplo_en": "The wind is cold",
    "ejemplo_es": "El viento está frío"
  },
  {
    "palabra": "mountain",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "montaña",
    "ejemplo_en": "The mountain is high",
    "ejemplo_es": "La montaña es alta"
  },
  {
    "palabra": "snow",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "nieve",
    "ejemplo_en": "The snow is cold and white",
    "ejemplo_es": "La nieve es fría y blanca"
  },
  {
    "palabra": "lake",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "lago",
    "ejemplo_en": "The water in the lake is clean",
    "ejemplo_es": "El agua en el lago está limpia"
  },
  {
    "palabra": "forest",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "bosque",
    "ejemplo_en": "The forest has many trees",
    "ejemplo_es": "El bosque tiene muchos árboles"
  },
  {
    "palabra": "ice",
    "categoria": "naturaleza",
    "tipo": "sustantivo",
    "traduccion": "hielo",
    "ejemplo_en": "The ice is very slippery",
    "ejemplo_es": "El hielo está muy resbaladizo"
  },
  {
    "palabra": "water",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "agua",
    "ejemplo_en": "I drink water",
    "ejemplo_es": "Yo bebo agua"
  },
  {
    "palabra": "bread",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "pan",
    "ejemplo_en": "The bread is fresh",
    "ejemplo_es": "El pan está fresco"
  },
  {
    "palabra": "milk",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "leche",
    "ejemplo_en": "The milk is cold",
    "ejemplo_es": "La leche está fría"
  },
  {
    "palabra": "apple",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "manzana",
    "ejemplo_en": "The apple is red",
    "ejemplo_es": "La manzana es roja"
  },
  {
    "palabra": "fruit",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "fruta",
    "ejemplo_en": "I love fruit",
    "ejemplo_es": "Yo amo la fruta"
  },
  {
    "palabra": "meat",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "carne",
    "ejemplo_en": "The meat is hot",
    "ejemplo_es": "La carne está caliente"
  },
  {
    "palabra": "rice",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "arroz",
    "ejemplo_en": "I eat rice",
    "ejemplo_es": "Yo como arroz"
  },
  {
    "palabra": "cheese",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "queso",
    "ejemplo_en": "The cheese is good",
    "ejemplo_es": "El queso es bueno"
  },
  {
    "palabra": "egg",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "huevo",
    "ejemplo_en": "I eat an egg",
    "ejemplo_es": "Yo como un huevo"
  },
  {
    "palabra": "sugar",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "azúcar",
    "ejemplo_en": "The sugar is sweet",
    "ejemplo_es": "El azúcar es dulce"
  },
  {
    "palabra": "banana",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "plátano",
    "ejemplo_en": "The banana is yellow",
    "ejemplo_es": "El plátano es amarillo"
  },
  {
    "palabra": "chicken",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "pollo",
    "ejemplo_en": "The chicken is delicious",
    "ejemplo_es": "El pollo es delicioso"
  },
  {
    "palabra": "fish",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "pescado",
    "ejemplo_en": "The fish is fresh",
    "ejemplo_es": "El pescado está fresco"
  },
  {
    "palabra": "soup",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "sopa",
    "ejemplo_en": "The soup is frozen",
    "ejemplo_es": "La sopa está congelada"
  },
  {
    "palabra": "coffee",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "café",
    "ejemplo_en": "I drink coffee in the morning",
    "ejemplo_es": "Yo bebo café en la mañana"
  },
  {
    "palabra": "tea",
    "categoria": "alimentos",
    "tipo": "sustantivo",
    "traduccion": "té",
    "ejemplo_en": "The tea is warm",
    "ejemplo_es": "El té está tibio"
  },
  {
    "palabra": "t-shirt",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "playera",
    "ejemplo_en": "The t-shirt is tight",
    "ejemplo_es": "La playera está apretada"
  },
  {
    "palabra": "shirt",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "camisa",
    "ejemplo_en": "The shirt is blue",
    "ejemplo_es": "La camisa es azul"
  },
  {
    "palabra": "shoe",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "zapato",
    "ejemplo_en": "My shoe is torn",
    "ejemplo_es": "Mi zapato está rasgado"
  },
  {
    "palabra": "hat",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "sombrero",
    "ejemplo_en": "The hat is brown",
    "ejemplo_es": "El sombrero es café"
  },
  {
    "palabra": "pants",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "pantalones",
    "ejemplo_en": "The pants are loose",
    "ejemplo_es": "Los pantalones están flojos"
  },
  {
    "palabra": "dress",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "vestido",
    "ejemplo_en": "The dress is expensive",
    "ejemplo_es": "El vestido está caro"
  },
  {
    "palabra": "coat",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "abrigo",
    "ejemplo_en": "My coat is elegant",
    "ejemplo_es": "Mi abrigo es elegante"
  },
  {
    "palabra": "socks",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "calcetines",
    "ejemplo_en": "My socks are white",
    "ejemplo_es": "Mis calcetines son blancos"
  },
  {
    "palabra": "jacket",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "chamarra",
    "ejemplo_en": "Take your jacket today",
    "ejemplo_es": "Lleva tu chamarra hoy"
  },
  {
    "palabra": "skirt",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "falda",
    "ejemplo_en": "The skirt is purple",
    "ejemplo_es": "La falda es morada"
  },
  {
    "palabra": "boots",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "botas",
    "ejemplo_en": "My boots are black",
    "ejemplo_es": "Mis botas son negras"
  },
  {
    "palabra": "gloves",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "guantes",
    "ejemplo_en": "My gloves are in the car",
    "ejemplo_es": "Mis guantes están en el coche"
  },
  {
    "palabra": "scarf",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "bufanda",
    "ejemplo_en": "The scarf is soft",
    "ejemplo_es": "La bufanda es suave"
  },
  {
    "palabra": "sandals",
    "categoria": "ropa",
    "tipo": "sustantivo",
    "traduccion": "sandalias",
    "ejemplo_en": "My sandals are comfortable",
    "ejemplo_es": "Mis sandalias son cómodas"
  },
  {
    "palabra": "big",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "grande",
    "ejemplo_en": "The house is big",
    "ejemplo_es": "La casa es grande"
  },
  {
    "palabra": "new",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "nuevo",
    "ejemplo_en": "My phone is new",
    "ejemplo_es": "Mi teléfono es nuevo"
  },
  {
    "palabra": "happy",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "feliz",
    "ejemplo_en": "The boy is happy",
    "ejemplo_es": "El niño está feliz"
  },
  {
    "palabra": "small",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "pequeño",
    "ejemplo_en": "The dog is small",
    "ejemplo_es": "El perro es pequeño"
  },
  {
    "palabra": "old",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "viejo",
    "ejemplo_en": "The car is old",
    "ejemplo_es": "El coche es viejo"
  },
  {
    "palabra": "good",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "bueno",
    "ejemplo_en": "The book is good",
    "ejemplo_es": "El libro es bueno"
  },
  {
    "palabra": "bad",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "malo",
    "ejemplo_en": "The weather is bad",
    "ejemplo_es": "El clima es malo"
  },
  {
    "palabra": "beautiful",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "hermoso",
    "ejemplo_en": "The view is beautiful",
    "ejemplo_es": "La vista es hermosa"
  },
  {
    "palabra": "hot",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "caliente",
    "ejemplo_en": "The coffee is hot",
    "ejemplo_es": "El café está caliente"
  },
  {
    "palabra": "cold",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "frío",
    "ejemplo_en": "The water is cold",
    "ejemplo_es": "El agua está fría"
  },
  {
    "palabra": "fast",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "rápido",
    "ejemplo_en": "The tiger is fast",
    "ejemplo_es": "El tigre es rápido"
  },
  {
    "palabra": "slow",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "lento",
    "ejemplo_en": "The snail is slow",
    "ejemplo_es": "El caracol es lento"
  },
  {
    "palabra": "easy",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "fácil",
    "ejemplo_en": "The English app is easy",
    "ejemplo_es": "La aplicación de inglés es fácil"
  },
  {
    "palabra": "difficult",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "difícil",
    "ejemplo_en": "The puzzle is difficult",
    "ejemplo_es": "El rompecabezas es difícil"
  },
  {
    "palabra": "clean",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "limpio",
    "ejemplo_en": "Your room is clean",
    "ejemplo_es": "Tu habitación está limpia"
  },
  {
    "palabra": "dirty",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "sucio",
    "ejemplo_en": "The kitchen is dirty",
    "ejemplo_es": "La cocina está sucia"
  },
  {
    "palabra": "tall",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "alto",
    "ejemplo_en": "The building is tall",
    "ejemplo_es": "El edificio es alto"
  },
  {
    "palabra": "short",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "corto / bajo",
    "ejemplo_en": "The story is short",
    "ejemplo_es": "La historia es corta"
  },
  {
    "palabra": "heavy",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "pesado",
    "ejemplo_en": "The rock is heavy",
    "ejemplo_es": "La roca es pesada"
  },
  {
    "palabra": "light",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "ligero",
    "ejemplo_en": "The paper is light",
    "ejemplo_es": "El papel es ligero"
  },
  {
    "palabra": "dry",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "seco",
    "ejemplo_en": "The towel is dry",
    "ejemplo_es": "La toalla está seca"
  },
  {
    "palabra": "wet",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "mojado",
    "ejemplo_en": "The grass is wet",
    "ejemplo_es": "El pasto está mojado"
  },
  {
    "palabra": "soft",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "suave / blando",
    "ejemplo_en": "The pillow is soft",
    "ejemplo_es": "La almohada es suave"
  },
  {
    "palabra": "hard",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "duro",
    "ejemplo_en": "The wall is hard",
    "ejemplo_es": "El muro es duro"
  },
  {
    "palabra": "poor",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "pobre",
    "ejemplo_en": "The family is poor",
    "ejemplo_es": "La familia es pobre"
  },
  {
    "palabra": "sweet",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "dulce",
    "ejemplo_en": "The marshmallow is sweet",
    "ejemplo_es": "El bombón es dulce"
  },
  {
    "palabra": "sour",
    "categoria": "descripciones-simples",
    "tipo": "adjetivo",
    "traduccion": "agrio / ácido",
    "ejemplo_en": "The lemon is sour",
    "ejemplo_es": "El limón es agrio"
  },
  {
    "palabra": "doctor",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "médico",
    "ejemplo_en": "The doctor helps people",
    "ejemplo_es": "El médico ayuda a las personas"
  },
  {
    "palabra": "teacher",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "maestro",
    "ejemplo_en": "The teacher is smart",
    "ejemplo_es": "El maestro es inteligente"
  },
  {
    "palabra": "police officer",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "oficial de policía",
    "ejemplo_en": "The police officer is here",
    "ejemplo_es": "El oficial de policía está aquí"
  },
  {
    "palabra": "firefighter",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "bombero",
    "ejemplo_en": "The firefighter is brave",
    "ejemplo_es": "El bombero es valiente"
  },
  {
    "palabra": "nurse",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "enfermero",
    "ejemplo_en": "The nurse is kind",
    "ejemplo_es": "El enfermero es amable"
  },
  {
    "palabra": "driver",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "conductor",
    "ejemplo_en": "The bus driver is not here",
    "ejemplo_es": "El conductor del autobús no está aquí"
  },
  {
    "palabra": "chef",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "cocinero",
    "ejemplo_en": "The chef makes food",
    "ejemplo_es": "El cocinero hace comida"
  },
  {
    "palabra": "farmer",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "agricultor",
    "ejemplo_en": "The farmer has animals",
    "ejemplo_es": "El granjero tiene animales"
  },
  {
    "palabra": "dentist",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "dentista",
    "ejemplo_en": "I need to see the dentist",
    "ejemplo_es": "Necesito ver al dentista"
  },
  {
    "palabra": "lawyer",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "abogado",
    "ejemplo_en": "The lawyer helps my family",
    "ejemplo_es": "El abogado ayuda a mi familia"
  },
  {
    "palabra": "engineer",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "ingeniero",
    "ejemplo_en": "The engineer builds things",
    "ejemplo_es": "El ingeniero construye cosas"
  },
  {
    "palabra": "mechanic",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "mecánico",
    "ejemplo_en": "The mechanic fixes my car",
    "ejemplo_es": "El mecánico arregla mi coche"
  },
  {
    "palabra": "carpenter",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "carpintero",
    "ejemplo_en": "The carpenter makes a table",
    "ejemplo_es": "El carpintero hace una mesa"
  },
  {
    "palabra": "waiter",
    "categoria": "profesiones",
    "tipo": "sustantivo",
    "traduccion": "mesero",
    "ejemplo_en": "The waiter brings the food",
    "ejemplo_es": "El mesero trae la comida"
  },
  {
    "palabra": "sad",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "triste",
    "ejemplo_en": "Why are you sad?",
    "ejemplo_es": "¿Por qué estás triste?"
  },
  {
    "palabra": "angry",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "enojado",
    "ejemplo_en": "The man is angry",
    "ejemplo_es": "El hombre está enojado"
  },
  {
    "palabra": "scared",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "asustado",
    "ejemplo_en": "The cat is scared",
    "ejemplo_es": "El gato está asustado"
  },
  {
    "palabra": "tired",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "cansado",
    "ejemplo_en": "I am tired today",
    "ejemplo_es": "Yo estoy cansado hoy"
  },
  {
    "palabra": "surprised",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "sorprendido",
    "ejemplo_en": "She is surprised",
    "ejemplo_es": "Ella está sorprendida"
  },
  {
    "palabra": "bored",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "aburrido",
    "ejemplo_en": "The girl is bored",
    "ejemplo_es": "La niña está aburrida"
  },
  {
    "palabra": "excited",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "emocionado",
    "ejemplo_en": "We are excited",
    "ejemplo_es": "Nosotros estamos emocionados"
  },
  {
    "palabra": "nervous",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "nervioso",
    "ejemplo_en": "I am nervous",
    "ejemplo_es": "Estoy nervioso"
  },
  {
    "palabra": "proud",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "orgulloso",
    "ejemplo_en": "My parents are proud",
    "ejemplo_es": "Mis padres están orgullosos"
  },
  {
    "palabra": "confused",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "confundido",
    "ejemplo_en": "The student is confused",
    "ejemplo_es": "El estudiante está confundido"
  },
  {
    "palabra": "calm",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "calmado",
    "ejemplo_en": "The baby is calm now",
    "ejemplo_es": "El bebé está calmado ahora"
  },
  {
    "palabra": "worried",
    "categoria": "emociones",
    "tipo": "adjetivo",
    "traduccion": "preocupado",
    "ejemplo_en": "My mother is worried",
    "ejemplo_es": "Mi madre está preocupada"
  },
  {
    "palabra": "phone",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "teléfono celular",
    "ejemplo_en": "My phone is ringing",
    "ejemplo_es": "Mi teléfono está sonando"
  },
  {
    "palabra": "computer",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "computadora",
    "ejemplo_en": "The computer is gray",
    "ejemplo_es": "La computadora es gris"
  },
  {
    "palabra": "internet",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "internet",
    "ejemplo_en": "The internet is slow",
    "ejemplo_es": "El internet está lento"
  },
  {
    "palabra": "radio",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "radio",
    "ejemplo_en": "Listen to the radio",
    "ejemplo_es": "Escucha la radio"
  },
  {
    "palabra": "screen",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "pantalla",
    "ejemplo_en": "The screen is big",
    "ejemplo_es": "La pantalla es grande"
  },
  {
    "palabra": "camera",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "cámara",
    "ejemplo_en": "I have a camera",
    "ejemplo_es": "Yo tengo una cámara"
  },
  {
    "palabra": "email",
    "categoria": "tecnologia",
    "tipo": "sustantivo",
    "traduccion": "correo electrónico",
    "ejemplo_en": "Send the email",
    "ejemplo_es": "Envía el correo electrónico"
  },
  {
    "palabra": "hotel",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "hotel",
    "ejemplo_en": "The hotel is cheap",
    "ejemplo_es": "El hotel es barato"
  },
  {
    "palabra": "passport",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "pasaporte",
    "ejemplo_en": "Show your passport",
    "ejemplo_es": "Muestra tu pasaporte"
  },
  {
    "palabra": "ticket",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "boleto / pasaje",
    "ejemplo_en": "I have a train ticket",
    "ejemplo_es": "Yo tengo un boleto de tren"
  },
  {
    "palabra": "map",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "mapa",
    "ejemplo_en": "Look at the map",
    "ejemplo_es": "Mira el mapa"
  },
  {
    "palabra": "suitcase",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "maleta",
    "ejemplo_en": "My suitcase is heavy",
    "ejemplo_es": "Mi maleta está pesada"
  },
  {
    "palabra": "airport",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "aeropuerto",
    "ejemplo_en": "The airport is big",
    "ejemplo_es": "El aeropuerto es grande"
  },
  {
    "palabra": "flight",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "vuelo",
    "ejemplo_en": "My flight is on time",
    "ejemplo_es": "Mi vuelo está a tiempo"
  },
  {
    "palabra": "tourist",
    "categoria": "turismo",
    "tipo": "sustantivo",
    "traduccion": "turista",
    "ejemplo_en": "I am a tourist",
    "ejemplo_es": "Yo soy un turista"
  },
  {
    "palabra": "investigate",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "investigar",
    "ejemplo_en": "Investigate the problem",
    "ejemplo_es": "Investiga el problema"
  },
  {
    "palabra": "evaluate",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "evaluar",
    "ejemplo_en": "Evaluate the options",
    "ejemplo_es": "Evalúa las opciones"
  },
  {
    "palabra": "compare",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "comparar",
    "ejemplo_en": "Compare the two prices",
    "ejemplo_es": "Compara los dos precios"
  },
  {
    "palabra": "prepare",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "preparar",
    "ejemplo_en": "Prepare yourself for the exam",
    "ejemplo_es": "Prepárate para el examen"
  },
  {
    "palabra": "select",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "seleccionar",
    "ejemplo_en": "Select the correct answer",
    "ejemplo_es": "Selecciona la respuesta correcta"
  },
  {
    "palabra": "explain",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "explicar",
    "ejemplo_en": "Explain the situation",
    "ejemplo_es": "Explica la situación"
  },
  {
    "palabra": "organize",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "organizar",
    "ejemplo_en": "Organize your papers",
    "ejemplo_es": "Organiza tus papeles"
  },
  {
    "palabra": "decide",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "decidir",
    "ejemplo_en": "You need to decide now",
    "ejemplo_es": "Tú necesitas decidir ahora"
  },
  {
    "palabra": "confirm",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "confirmar",
    "ejemplo_en": "Please confirm your name",
    "ejemplo_es": "Por favor confirma tu nombre"
  },
  {
    "palabra": "observe",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "observar",
    "ejemplo_en": "Observe the birds outside",
    "ejemplo_es": "Observa las aves afuera"
  },
  {
    "palabra": "analyze",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "analizar",
    "ejemplo_en": "We analyze the data",
    "ejemplo_es": "Nosotros analizamos los datos"
  },
  {
    "palabra": "accept",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "aceptar",
    "ejemplo_en": "Please accept this gift",
    "ejemplo_es": "Por favor acepta este regalo"
  },
  {
    "palabra": "control",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "controlar",
    "ejemplo_en": "Control your dog!",
    "ejemplo_es": "Controla a tu perro!"
  },
  {
    "palabra": "describe",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "describir",
    "ejemplo_en": "Describe your house, please",
    "ejemplo_es": "Describe tu casa, por favor"
  },
  {
    "palabra": "identify",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "identificar",
    "ejemplo_en": "Identify the correct object",
    "ejemplo_es": "Identifica el objeto correcto"
  },
  {
    "palabra": "maintain",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "mantener",
    "ejemplo_en": "Maintain a safe distance",
    "ejemplo_es": "Mantén una distancia segura"
  },
  {
    "palabra": "recommend",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "recomendar",
    "ejemplo_en": "I recommend this movie",
    "ejemplo_es": "Yo recomiendo esta película"
  },
  {
    "palabra": "reduce",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "reducir",
    "ejemplo_en": "Reduce the speed, please",
    "ejemplo_es": "Reduce la velocidad, por favor"
  },
  {
    "palabra": "resolve",
    "categoria": "acciones-avanzadas",
    "tipo": "verbo",
    "traduccion": "resolver",
    "ejemplo_en": "We need to resolve this",
    "ejemplo_es": "Nosotros necesitamos resolver esto"
  },
  {
    "palabra": "essential",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "esencial",
    "ejemplo_en": "Water is essential",
    "ejemplo_es": "El agua es esencial"
  },
  {
    "palabra": "complex",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "complejo",
    "ejemplo_en": "The puzzle is complex",
    "ejemplo_es": "El rompecabezas es complejo"
  },
  {
    "palabra": "efficient",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "eficiente",
    "ejemplo_en": "The app is efficient",
    "ejemplo_es": "La aplicación es eficiente"
  },
  {
    "palabra": "important",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "importante",
    "ejemplo_en": "This note is important",
    "ejemplo_es": "Esta nota es importante"
  },
  {
    "palabra": "perfect",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "perfecto",
    "ejemplo_en": "The day is perfect",
    "ejemplo_es": "El día es perfecto"
  },
  {
    "palabra": "frequent",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "frecuente",
    "ejemplo_en": "Rain is frequent here",
    "ejemplo_es": "La lluvia es frecuente aquí"
  },
  {
    "palabra": "necessary",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "necesario",
    "ejemplo_en": "Food is necessary",
    "ejemplo_es": "La comida es necesaria"
  },
  {
    "palabra": "excellent",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "excelente",
    "ejemplo_en": "Your idea is excellent",
    "ejemplo_es": "Tu idea es excelente"
  },
  {
    "palabra": "accurate",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "preciso / exacto",
    "ejemplo_en": "The watch is accurate",
    "ejemplo_es": "El reloj es preciso"
  },
  {
    "palabra": "automatic",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "automático",
    "ejemplo_en": "The door is automatic",
    "ejemplo_es": "La puerta es automática"
  },
  {
    "palabra": "constant",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "constante",
    "ejemplo_en": "The noise is constant",
    "ejemplo_es": "El ruido es constante"
  },
  {
    "palabra": "different",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "diferente",
    "ejemplo_en": "Your pen is different",
    "ejemplo_es": "Tu bolígrafo es diferente"
  },
  {
    "palabra": "familiar",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "familiar / conocido",
    "ejemplo_en": "The face is familiar",
    "ejemplo_es": "La cara es conocida"
  },
  {
    "palabra": "general",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "general",
    "ejemplo_en": "This is a general rule",
    "ejemplo_es": "Esta es una regla general"
  },
  {
    "palabra": "natural",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "natural",
    "ejemplo_en": "The lake is natural",
    "ejemplo_es": "El lago es natural"
  },
  {
    "palabra": "original",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "original",
    "ejemplo_en": "This is the original file",
    "ejemplo_es": "Este es el archivo original"
  },
  {
    "palabra": "responsible",
    "categoria": "descripciones-avanzadas",
    "tipo": "adjetivo",
    "traduccion": "responsable",
    "ejemplo_en": "Be a responsible citizen",
    "ejemplo_es": "Sé un ciudadano responsable"
  }
]