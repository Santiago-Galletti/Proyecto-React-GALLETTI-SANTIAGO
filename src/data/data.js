const infoProducts = [
    {
        id : "1",
        name : "Spiderman: No way Home",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
        price : 2000,
        stock : 5,
        category: "spiderman",
        sinopsis: "Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él. Secuela de Spider-Man: Far From Home"
    },
    {
        id : "2",
        name : "Thor: Love and Thunder",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
        price : 2500,
        stock : 8,
        category: "thor",
        sinopsis: "Thor: Love and Thunder de Marvel Studios muestra al dios del Trueno en un viaje diferente a todo lo que ha enfrentado: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el dios Carnicero, que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda de rey Valkyrie, Korg y su exnovia Jane Foster, quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjölnir, como la Poderosa. Thor. Juntos, se embarcan en una angustiosa aventura cósmica para descubrir el misterio de la venganza del dios Carnicero y detenerlo antes de que sea demasiado tarde"
    },
    {
        id : "3",
        name : "Avengers: Endgame",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
        price : 1800,
        stock : 20,
        category: "avengers",
        sinopsis: "Después de los eventos devastadores de ‘Avengers: Infinity War’, el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deben reunirse una vez más para deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias que pueda tener"
    },
    {
        id : "4",
        name : "Avengers: Infinity War",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg",
        price : 1750,
        stock : 10,
        category: "avengers",
        sinopsis: "Un nuevo peligro acecha procedente de las sombras del cosmos. Thanos, el infame tirano intergaláctico, tiene como objetivo reunir las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para imponer su perversa voluntad a toda la existencia. Los Vengadores y sus aliados tendrán que luchar contra el mayor villano al que se han enfrentado nunca, y evitar que se haga con el control de la galaxia. En su nueva e impactante aventura, el destino de la Tierra nunca había sido más incierto, las Gemas del Infinito estarán en juego, unos querrán protegerlas y otros controlarlas, ¿quién ganará?"
    },
    {
        id : "5",
        name : "Spiderman: Far From Home",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
        price : 1550,
        stock : 9,
        category: "spiderman",
        sinopsis: "En SPIDER-MAN: LEJOS DE CASA, vuelve el amigo y vecino superhéroe Tom Holland, quien, tras los eventos ocurridos en Vengadores: Endgame, deberá dar un paso al frente y hacerse cargo de los nuevos peligros que amenazan a un mundo que ha cambiado para siempre. La película amplía el universo cinematográfico de Spider-Man, sacando a Peter Parker de su zona de confort en su Nueva York natal y llevándole por Europa en lo que debía ser unas vacaciones escolares, pero que acaban convirtiéndose en su mayor reto y en la mayor aventura épica nunca vista."
    },
    {
        id : "6",
        name : "Thor Ragnarok",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg",
        price : 1450,
        stock : 7,
        category: "thor",
        sinopsis: "Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!."
    },
    {
        id : "7",
        name : "Thor",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
        price : 1050,
        stock : 4,
        category: "thor",
        sinopsis: "Paramount Pictures y Marvel Entertainment presentan la aventura épica, Thor, que abarca el Universo Marvel desde la Tierra actual hasta el reino de Asgard. En el centro de la historia está el poderoso Thor, un poderoso pero arrogante guerrero cuyas acciones imprudentes reinician una guerra antigua. Thor es expulsado a la Tierra por su padre Odín y se ve obligado a vivir entre los humanos. Una hermosa y joven científica, Jane Foster, tiene un profundo afecto hacia Thor, quien finalmente se convierte en su primer amor. Mientras está en la Tierra, Thor aprende lo que se necesita para ser un verdadero héroe cuando el villano más peligroso de su mundo envía a las fuerzas más oscuras de Asgard a invadir la Tierra."
    },
    {
        id : "8",
        name : "Avengers: Age of Ultron",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersageofultron_lob_crd_03.jpg",
        price : 1350,
        stock : 8,
        category: "avengers",
        sinopsis: "Cuando Anthony Stark trata de reiniciar un programa dormido para mantener la paz, las cosas se salen de control y los héroes más poderosos del planeta, incluyendo a Anthony Stark / Iron Man, Steven Rogers / Capitán América, Thor, Bruce Banner / Hulk, Natalia Romanoff / Black Widow y Clinton Barton / Hawkeye, enfrentan la prueba definitiva y el destino del planeta está en la balanza. Mientras el villano Ultrón emerge, son los Vengadores quienes deben impedirle finalizar su terrible plan mientras forman difíciles alianzas y acciones inesperadas."
    },
    {
        id : "9",
        name : "Spiderman: Homecoming",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
        price : 1250,
        stock : 6,
        category: "spiderman",
        sinopsis: "Un joven Peter Parker, quien hizo su sensacional debut en ‘Captain America: Civil War’, comienza a experimentar su recién descubierta identidad como el superhéroe lanza-telarañas en Marvel’s Spider-Man: Homecoming. Emocionado por su experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía Maybelle, bajo la mirada vigilante de su nuevo mentor Anthony Stark. Peter intenta regresar a su rutina diaria normal – distraído por los pensamientos de demostrarse a sí mismo que es más que el amistoso vecino el Hombre Araña – pero cuando el Buitre emerge como nuevo villano, todo lo que Peter considera lo más importante se verá amenazado."
    }
];

export default infoProducts