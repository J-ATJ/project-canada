// js/verbs_db.js - SECCIÓN DE VERBOS REGULARES

let rverbs = [
  {
    "base_form": "accept",
    "past_simple": "accepted",
    "past_participle": "accepted",
    "ing_form": "accepting",
    "spanish": "aceptar"
  },
  {
    "base_form": "add",
    "past_simple": "added",
    "past_participle": "added",
    "ing_form": "adding",
    "spanish": "añadir / sumar"
  },
  {
    "base_form": "agree",
    "past_simple": "agreed",
    "past_participle": "agreed",
    "ing_form": "agreeing",
    "spanish": "estar de acuerdo"
  },
  {
    "base_form": "answer",
    "past_simple": "answered",
    "past_participle": "answered",
    "ing_form": "answering",
    "spanish": "responder / contestar"
  },
  {
    "base_form": "ask",
    "past_simple": "asked",
    "past_participle": "asked",
    "ing_form": "asking",
    "spanish": "preguntar / pedir"
  },
  {
    "base_form": "believe",
    "past_simple": "believed",
    "past_participle": "believed",
    "ing_form": "believing",
    "spanish": "creer"
  },
  {
    "base_form": "call",
    "past_simple": "called",
    "past_participle": "called",
    "ing_form": "calling",
    "spanish": "llamar"
  },
  {
    "base_form": "change",
    "past_simple": "changed",
    "past_participle": "changed",
    "ing_form": "changing",
    "spanish": "cambiar"
  },
  {
    "base_form": "clean",
    "past_simple": "cleaned",
    "past_participle": "cleaned",
    "ing_form": "cleaning",
    "spanish": "limpiar"
  },
  {
    "base_form": "close",
    "past_simple": "closed",
    "past_participle": "closed",
    "ing_form": "closing",
    "spanish": "cerrar"
  },
  {
    "base_form": "cook",
    "past_simple": "cooked",
    "past_participle": "cooked",
    "ing_form": "cooking",
    "spanish": "cocinar"
  },
  {
    "base_form": "dance",
    "past_simple": "danced",
    "past_participle": "danced",
    "ing_form": "dancing",
    "spanish": "bailar"
  },
  {
    "base_form": "decide",
    "past_simple": "decided",
    "past_participle": "decided",
    "ing_form": "deciding",
    "spanish": "decidir"
  },
  {
    "base_form": "die",
    "past_simple": "died",
    "past_participle": "died",
    "ing_form": "dying",
    "spanish": "morir"
  },
  {
    "base_form": "explain",
    "past_simple": "explained",
    "past_participle": "explained",
    "ing_form": "explaining",
    "spanish": "explicar"
  },
  {
    "base_form": "finish",
    "past_simple": "finished",
    "past_participle": "finished",
    "ing_form": "finishing",
    "spanish": "terminar / finalizar"
  },
  {
    "base_form": "follow",
    "past_simple": "followed",
    "past_participle": "followed",
    "ing_form": "following",
    "spanish": "seguir"
  },
  {
    "base_form": "happen",
    "past_simple": "happened",
    "past_participle": "happened",
    "ing_form": "happening",
    "spanish": "pasar / ocurrir"
  },
  {
    "base_form": "help",
    "past_simple": "helped",
    "past_participle": "helped",
    "ing_form": "helping",
    "spanish": "ayudar"
  },
  {
    "base_form": "hope",
    "past_simple": "hoped",
    "past_participle": "hoped",
    "ing_form": "hoping",
    "spanish": "esperar (de esperanza)"
  },
  {
    "base_form": "imagine",
    "past_simple": "imagined",
    "past_participle": "imagined",
    "ing_form": "imagining",
    "spanish": "imaginar"
  },
  {
    "base_form": "learn",
    "past_simple": "learned",
    "past_participle": "learned",
    "ing_form": "learning",
    "spanish": "aprender"
  },
  {
    "base_form": "like",
    "past_simple": "liked",
    "past_participle": "liked",
    "ing_form": "liking",
    "spanish": "gustar"
  },
  {
    "base_form": "listen",
    "past_simple": "listened",
    "past_participle": "listened",
    "ing_form": "listening",
    "spanish": "escuchar"
  },
  {
    "base_form": "live",
    "past_simple": "lived",
    "past_participle": "lived",
    "ing_form": "living",
    "spanish": "vivir"
  },
  {
    "base_form": "look",
    "past_simple": "looked",
    "past_participle": "looked",
    "ing_form": "looking",
    "spanish": "mirar"
  },
  {
    "base_form": "love",
    "past_simple": "loved",
    "past_participle": "loved",
    "ing_form": "loving",
    "spanish": "amar / encantar"
  },
  {
    "base_form": "move",
    "past_simple": "moved",
    "past_participle": "moved",
    "ing_form": "moving",
    "spanish": "mover / mudarse"
  },
  {
    "base_form": "need",
    "past_simple": "needed",
    "past_participle": "needed",
    "ing_form": "needing",
    "spanish": "necesitar"
  },
  {
    "base_form": "open",
    "past_simple": "opened",
    "past_participle": "opened",
    "ing_form": "opening",
    "spanish": "abrir"
  },
  {
    "base_form": "plan",
    "past_simple": "planned",
    "past_participle": "planned",
    "ing_form": "planning",
    "spanish": "planear / planificar"
  },
  {
    "base_form": "play",
    "past_simple": "played",
    "past_participle": "played",
    "ing_form": "playing",
    "spanish": "jugar / tocar instrumento"
  },
  {
    "base_form": "remember",
    "past_simple": "remembered",
    "past_participle": "remembered",
    "ing_form": "remembering",
    "spanish": "recordar"
  },
  {
    "base_form": "show",
    "past_simple": "showed",
    "past_participle": "showed",
    "ing_form": "showing",
    "spanish": "mostrar"
  },
  {
    "base_form": "start",
    "past_simple": "started",
    "past_participle": "started",
    "ing_form": "starting",
    "spanish": "empezar / comenzar"
  },
  {
    "base_form": "stay",
    "past_simple": "stayed",
    "past_participle": "stayed",
    "ing_form": "staying",
    "spanish": "quedarse / hospedarse"
  },
  {
    "base_form": "stop",
    "past_simple": "stopped",
    "past_participle": "stopped",
    "ing_form": "stopping",
    "spanish": "detener / parar"
  },
  {
    "base_form": "study",
    "past_simple": "studied",
    "past_participle": "recorded",
    "ing_form": "studying",
    "spanish": "estudiar"
  },
  {
    "base_form": "talk",
    "past_simple": "talked",
    "past_participle": "talked",
    "ing_form": "talking",
    "spanish": "hablar / conversar"
  },
  {
    "base_form": "travel",
    "past_simple": "traveled",
    "past_participle": "traveled",
    "ing_form": "traveling",
    "spanish": "viajar"
  },
  {
    "base_form": "try",
    "past_simple": "tried",
    "past_participle": "tried",
    "ing_form": "trying",
    "spanish": "intentar / tratar"
  },
  {
    "base_form": "turn",
    "past_simple": "turned",
    "past_participle": "turned",
    "ing_form": "turning",
    "spanish": "girar / voltear"
  },
  {
    "base_form": "use",
    "past_simple": "used",
    "past_participle": "used",
    "ing_form": "using",
    "spanish": "usar / utilizar"
  },
  {
    "base_form": "visit",
    "past_simple": "visited",
    "past_participle": "visited",
    "ing_form": "visiting",
    "spanish": "visitar"
  },
  {
    "base_form": "wait",
    "past_simple": "waited",
    "past_participle": "waited",
    "ing_form": "waiting",
    "spanish": "esperar (de tiempo)"
  },
  {
    "base_form": "walk",
    "past_simple": "walked",
    "past_participle": "walked",
    "ing_form": "walking",
    "spanish": "caminar"
  },
  {
    "base_form": "want",
    "past_simple": "wanted",
    "past_participle": "wanted",
    "ing_form": "wanting",
    "spanish": "querer"
  },
  {
    "base_form": "wash",
    "past_simple": "washed",
    "past_participle": "washed",
    "ing_form": "washing",
    "spanish": "lavar"
  },
  {
    "base_form": "watch",
    "past_simple": "watched",
    "past_participle": "watched",
    "ing_form": "watching",
    "spanish": "mirar / observar"
  },
  {
    "base_form": "work",
    "past_simple": "worked",
    "past_participle": "worked",
    "ing_form": "working",
    "spanish": "trabajar"
  }
];






////////// ------------------------------------------ ////////////






// js/verbs_db.js - SECCIÓN DE VERBOS IRREGULARES

let iverbs = [
  {
    "base_form": "be",
    "past_simple": "was / were",
    "past_participle": "been",
    "ing_form": "being",
    "spanish": "ser / estar"
  },
  {
    "base_form": "become",
    "past_simple": "became",
    "past_participle": "become",
    "ing_form": "becoming",
    "spanish": "llegar a ser / convertirse"
  },
  {
    "base_form": "begin",
    "past_simple": "began",
    "past_participle": "begun",
    "ing_form": "beginning",
    "spanish": "empezar / comenzar"
  },
  {
    "base_form": "break",
    "past_simple": "broke",
    "past_participle": "broken",
    "ing_form": "breaking",
    "spanish": "romper"
  },
  {
    "base_form": "bring",
    "past_simple": "brought",
    "past_participle": "brought",
    "ing_form": "bringing",
    "spanish": "traer"
  },
  {
    "base_form": "build",
    "past_simple": "built",
    "past_participle": "built",
    "ing_form": "building",
    "spanish": "construir"
  },
  {
    "base_form": "buy",
    "past_simple": "bought",
    "past_participle": "bought",
    "ing_form": "buying",
    "spanish": "comprar"
  },
  {
    "base_form": "catch",
    "past_simple": "caught",
    "past_participle": "caught",
    "ing_form": "catching",
    "spanish": "atrapar / cachar"
  },
  {
    "base_form": "choose",
    "past_simple": "chose",
    "past_participle": "chosen",
    "ing_form": "choosing",
    "spanish": "elegir / escoger"
  },
  {
    "base_form": "come",
    "past_simple": "came",
    "past_participle": "come",
    "ing_form": "coming",
    "spanish": "venir"
  },
  {
    "base_form": "do",
    "past_simple": "did",
    "past_participle": "done",
    "ing_form": "doing",
    "spanish": "hacer"
  },
  {
    "base_form": "drink",
    "past_simple": "drank",
    "past_participle": "drunk",
    "ing_form": "drinking",
    "spanish": "beber / tomar"
  },
  {
    "base_form": "drive",
    "past_simple": "drove",
    "past_participle": "driven",
    "ing_form": "driving",
    "spanish": "conducir / manejar"
  },
  {
    "base_form": "eat",
    "past_simple": "ate",
    "past_participle": "eaten",
    "ing_form": "eating",
    "spanish": "comer"
  },
  {
    "base_form": "fall",
    "past_simple": "fell",
    "past_participle": "fallen",
    "ing_form": "falling",
    "spanish": "caer"
  },
  {
    "base_form": "feel",
    "past_simple": "felt",
    "past_participle": "felt",
    "ing_form": "feeling",
    "spanish": "sentir"
  },
  {
    "base_form": "find",
    "past_simple": "found",
    "past_participle": "found",
    "ing_form": "finding",
    "spanish": "encontrar"
  },
  {
    "base_form": "fly",
    "past_simple": "flew",
    "past_participle": "flown",
    "ing_form": "flying",
    "spanish": "volar"
  },
  {
    "base_form": "forget",
    "past_simple": "forgot",
    "past_participle": "forgotten",
    "ing_form": "forgetting",
    "spanish": "olvidar"
  },
  {
    "base_form": "get",
    "past_simple": "got",
    "past_participle": "gotten",
    "ing_form": "getting",
    "spanish": "obtener / conseguir"
  },
  {
    "base_form": "give",
    "past_simple": "gave",
    "past_participle": "given",
    "ing_form": "giving",
    "spanish": "dar"
  },
  {
    "base_form": "go",
    "past_simple": "went",
    "past_participle": "gone",
    "ing_form": "going",
    "spanish": "ir"
  },
  {
    "base_form": "grow",
    "past_simple": "grew",
    "past_participle": "grown",
    "ing_form": "growing",
    "spanish": "crecer"
  },
  {
    "base_form": "have",
    "past_simple": "had",
    "past_participle": "had",
    "ing_form": "having",
    "spanish": "tener / haber"
  },
  {
    "base_form": "hear",
    "past_simple": "heard",
    "past_participle": "heard",
    "ing_form": "hearing",
    "spanish": "oír"
  },
  {
    "base_form": "keep",
    "past_simple": "kept",
    "past_participle": "kept",
    "ing_form": "keeping",
    "spanish": "mantener / guardar"
  },
  {
    "base_form": "know",
    "past_simple": "knew",
    "past_participle": "known",
    "ing_form": "knowing",
    "spanish": "saber / conocer"
  },
  {
    "base_form": "leave",
    "past_simple": "left",
    "past_participle": "left",
    "ing_form": "leaving",
    "spanish": "irse / dejar"
  },
  {
    "base_form": "lose",
    "past_simple": "lost",
    "past_participle": "lost",
    "ing_form": "losing",
    "spanish": "perder"
  },
  {
    "base_form": "make",
    "past_simple": "made",
    "past_participle": "made",
    "ing_form": "making",
    "spanish": "hacer / fabricar"
  },
  {
    "base_form": "meet",
    "past_simple": "met",
    "past_participle": "met",
    "ing_form": "meeting",
    "spanish": "conocer / reunirse"
  },
  {
    "base_form": "pay",
    "past_simple": "paid",
    "past_participle": "paid",
    "ing_form": "paying",
    "spanish": "pagar"
  },
  {
    "base_form": "read",
    "past_simple": "read",
    "past_participle": "read",
    "ing_form": "reading",
    "spanish": "leer"
  },
  {
    "base_form": "run",
    "past_simple": "ran",
    "past_participle": "run",
    "ing_form": "running",
    "spanish": "correr"
  },
  {
    "base_form": "say",
    "past_simple": "said",
    "past_participle": "said",
    "ing_form": "saying",
    "spanish": "decir"
  },
  {
    "base_form": "see",
    "past_simple": "saw",
    "past_participle": "seen",
    "ing_form": "seeing",
    "spanish": "ver"
  },
  {
    "base_form": "send",
    "past_simple": "sent",
    "past_participle": "sent",
    "ing_form": "sending",
    "spanish": "enviar"
  },
  {
    "base_form": "sing",
    "past_simple": "sang",
    "past_participle": "sung",
    "ing_form": "singing",
    "spanish": "cantar"
  },
  {
    "base_form": "sit",
    "past_simple": "sat",
    "past_participle": "sat",
    "ing_form": "sitting",
    "spanish": "sentarse"
  },
  {
    "style": "sleep",
    "base_form": "sleep",
    "past_simple": "slept",
    "past_participle": "slept",
    "ing_form": "sleeping",
    "spanish": "dormir"
  },
  {
    "base_form": "speak",
    "past_simple": "spoke",
    "past_participle": "spoken",
    "ing_form": "speaking",
    "spanish": "hablar"
  },
  {
    "base_form": "spend",
    "past_simple": "spent",
    "past_participle": "spent",
    "ing_form": "spending",
    "spanish": "gastar / pasar tiempo"
  },
  {
    "base_form": "swim",
    "past_simple": "swam",
    "past_participle": "swum",
    "ing_form": "swimming",
    "spanish": "nadar"
  },
  {
    "base_form": "take",
    "past_simple": "took",
    "past_participle": "taken",
    "ing_form": "taking",
    "spanish": "tomar / llevar"
  },
  {
    "base_form": "teach",
    "past_simple": "taught",
    "past_participle": "taught",
    "ing_form": "teaching",
    "spanish": "enseñar"
  },
  {
    "base_form": "tell",
    "past_simple": "told",
    "past_participle": "told",
    "ing_form": "telling",
    "spanish": "decir / contar"
  },
  {
    "base_form": "think",
    "past_simple": "thought",
    "past_participle": "thought",
    "ing_form": "thinking",
    "spanish": "pensar"
  },
  {
    "base_form": "understand",
    "past_simple": "understood",
    "past_participle": "understood",
    "ing_form": "understanding",
    "spanish": "entender"
  },
  {
    "base_form": "wear",
    "past_simple": "wore",
    "past_participle": "worn",
    "ing_form": "wearing",
    "spanish": "vestir / llevar puesto"
  },
  {
    "base_form": "write",
    "past_simple": "wrote",
    "past_participle": "written",
    "ing_form": "writing",
    "spanish": "escribir"
  }
];
