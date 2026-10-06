/**
 * Marvel Cinematic Universe (MCU) Review & Hub
 * Comprehensive Data Repository with Character Tagging & Dynamic Theme Palettes
 */

const MCU_CATALOG = [
  {
    id: "captain-america-the-first-avenger-2011",
    title: "Captain America: The First Avenger",
    tagline: "When patriots become heroes.",
    type: "movie",
    phase: "Phase 1",
    saga: "The Infinity Saga",
    releaseYear: 2011,
    releaseDate: "July 22, 2011",
    chronologicalYear: 1942,
    chronologicalRank: 1,
    runtime: "2h 4m",
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Sci-Fi", "War"],
    director: "Joe Johnston",
    producer: "Kevin Feige",
    boxOffice: "$370.6 Million",
    budget: "$140 Million",
    rating: 4.2,
    criticScore: 80,
    audienceScore: 75,
    theme: {
      name: "royal-blue",
      bg: "#1e3a8a",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      badgeBg: "rgba(30, 58, 138, 0.4)",
      border: "rgba(56, 189, 248, 0.5)"
    },
    activeHeroes: ["Captain America", "Bucky Barnes"],
    synopsis: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization named HYDRA.",
    poster: "assets/images/posters/captain-america-the-first-avenger-2011.svg",
    backdrop: "assets/images/backdrops/captain-america-the-first-avenger-2011.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqD0YvH.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/77w01T9Z84p42kF1uXg2r2W13W4.jpg",
    trailerKey: "JerVrbLldXw",
    infinityStone: "Space Stone",
    postCreditScenes: "1 Post-Credit Scene: Steve Rogers awakens in modern Times Square and meets Nick Fury.",
    cast: [
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Hayley Atwell", role: "Peggy Carter", avatar: "assets/images/avatars/captainamerica.svg" },
      { name: "Sebastian Stan", role: "Bucky Barnes", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Hugo Weaving", role: "Johann Schmidt / Red Skull", avatar: "assets/images/avatars/ironman.svg" }
    ],
    trivia: [
      "Chris Evans declined the role three times before accepting, fearing the sudden rise in fame.",
      "The digital effects team shrunken Chris Evans' frame in 250 shots to create 'Skinny Steve'.",
      "Features the Tesseract (Space Stone) as HYDRA's power source during World War II."
    ],
    initialReviews: [
      {
        id: "rev-cap1-01",
        author: "ShieldHistorian",
        avatar: "assets/images/avatars/captainamerica.svg",
        rating: 4.5,
        date: "2024-01-12",
        tags: ["Classic Marvel", "Heart & Soul"],
        spoiler: false,
        text: "The definitive hero origin story. Chris Evans imbues Steve Rogers with pure heart and integrity before he ever gets an ounce of muscle. Alan Silvestri's score is magnificent.",
        likes: 24
      },
      {
        id: "rev-cap1-02",
        author: "PeggyCarterFan",
        avatar: "assets/images/avatars/blackwidow.svg",
        rating: 4.0,
        date: "2024-02-19",
        tags: ["Nostalgic", "Great Action"],
        spoiler: false,
        text: "A vintage war adventure filled with heroic heart. Sets up the foundation of the entire Infinity Saga.",
        likes: 15
      }
    ]
  },
  {
    id: "iron-man-2008",
    title: "Iron Man",
    tagline: "Heroes aren't born. They're built.",
    type: "movie",
    phase: "Phase 1",
    saga: "The Infinity Saga",
    releaseYear: 2008,
    releaseDate: "May 2, 2008",
    chronologicalYear: 2008,
    chronologicalRank: 3,
    runtime: "2h 6m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "Jon Favreau",
    producer: "Kevin Feige, Avi Arad",
    boxOffice: "$585.8 Million",
    budget: "$140 Million",
    rating: 4.8,
    criticScore: 94,
    audienceScore: 91,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Iron Man"],
    synopsis: "After being held captive in an Afghan cave, billionaire genius industrialist Tony Stark constructs a high-tech suit of armored weapons to escape. Returning home, he perfects the suit and decides to use his technology to protect the world.",
    poster: "assets/images/posters/iron-man-2008.svg",
    backdrop: "assets/images/backdrops/iron-man-2008.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/cyecB7godJ6kNHGON0DHndz9SuC.jpg",
    trailerKey: "8ugaeA-nMTc",
    infinityStone: "None",
    postCreditScenes: "1 Post-Credit Scene: Nick Fury introduces Tony to the Avengers Initiative, kicking off the MCU.",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Gwyneth Paltrow", role: "Pepper Potts", avatar: "assets/images/avatars/ironman.svg" },
      { name: "Jeff Bridges", role: "Obadiah Stane / Iron Monger", avatar: "assets/images/avatars/ironman.svg" },
      { name: "Jon Favreau", role: "Happy Hogan", avatar: "assets/images/avatars/ironman.svg" }
    ],
    trivia: [
      "Robert Downey Jr. improvised the iconic line: 'I am Iron Man' at the movie press conference conclusion.",
      "Much of the film's dialogue was improvised on set because the script was not completely finalized when shooting began.",
      "The sound of the repulsor rays was created from an altered recording of military artillery shells."
    ],
    initialReviews: [
      {
        id: "rev-im1-01",
        author: "ArcReactor_88",
        avatar: "assets/images/avatars/ironman.svg",
        rating: 5.0,
        date: "2024-03-05",
        tags: ["Masterpiece", "Peak MCU", "Iconic Casting"],
        spoiler: false,
        text: "The film that started the greatest cinematic experiment in Hollywood history. Robert Downey Jr. is undeniably Tony Stark. Still holds up flawlessly after all these years.",
        likes: 89
      },
      {
        id: "rev-im1-02",
        author: "ComicGeek99",
        avatar: "assets/images/avatars/spiderman.svg",
        rating: 4.5,
        date: "2024-04-10",
        tags: ["Must Watch", "Groundbreaking"],
        spoiler: false,
        text: "Groundbreaking practical suit effects blended with seamless CGI. The cave escape in Mark I remains pure cinema gold.",
        likes: 31
      }
    ]
  },
  {
    id: "the-avengers-2012",
    title: "The Avengers",
    tagline: "Some assembly required.",
    type: "movie",
    phase: "Phase 1",
    saga: "The Infinity Saga",
    releaseYear: 2012,
    releaseDate: "May 4, 2012",
    chronologicalYear: 2012,
    chronologicalRank: 6,
    runtime: "2h 23m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "Joss Whedon",
    producer: "Kevin Feige",
    boxOffice: "$1.519 Billion",
    budget: "$220 Million",
    rating: 4.8,
    criticScore: 91,
    audienceScore: 91,
    theme: {
      name: "royal-blue",
      bg: "#1e3a8a",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      badgeBg: "rgba(30, 58, 138, 0.4)",
      border: "rgba(56, 189, 248, 0.5)"
    },
    activeHeroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Loki"],
    synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    poster: "assets/images/posters/the-avengers-2012.svg",
    backdrop: "assets/images/backdrops/the-avengers-2012.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/9BBTo63ANSmAgaxPD0r6p6xgRsE.jpg",
    trailerKey: "eOrNdBpGMv8",
    infinityStone: "Space Stone & Mind Stone",
    postCreditScenes: "2 Post-Credit Scenes: Thanos grinning into space, followed by the silent Shawarma diner scene.",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Chris Hemsworth", role: "Thor Odinson", avatar: "assets/images/characters/thor-odinson.svg" },
      { name: "Mark Ruffalo", role: "Bruce Banner / Hulk", avatar: "assets/images/characters/bruce-banner.svg" },
      { name: "Scarlett Johansson", role: "Natasha Romanoff / Black Widow", avatar: "assets/images/characters/natasha-romanoff.svg" },
      { name: "Tom Hiddleston", role: "Loki Laufeyson", avatar: "assets/images/characters/loki.svg" }
    ],
    trivia: [
      "The iconic 360-degree circling shot of the Avengers gathered in New York was filmed on an abandoned warehouse stage.",
      "The Shawarma post-credits scene was filmed just days after the world premiere in Los Angeles.",
      "Mark Ruffalo's performance marked the first time Hulk was rendered using motion-capture from the actor."
    ],
    initialReviews: [
      {
        id: "rev-av1-01",
        author: "AsgardHerald",
        avatar: "assets/images/avatars/thor.svg",
        rating: 5.0,
        date: "2024-01-30",
        tags: ["Masterpiece", "Historic", "Peak MCU"],
        spoiler: false,
        text: "The film that changed blockbuster cinema forever. Bringing disparate franchises into a cohesive, explosive crossover was deemed impossible—and they pulled it off effortlessly.",
        likes: 102
      }
    ]
  },
  {
    id: "captain-america-the-winter-soldier-2014",
    title: "Captain America: The Winter Soldier",
    tagline: "In service of freedom.",
    type: "movie",
    phase: "Phase 2",
    saga: "The Infinity Saga",
    releaseYear: 2014,
    releaseDate: "April 4, 2014",
    chronologicalYear: 2014,
    chronologicalRank: 8,
    runtime: "2h 16m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Anthony & Joe Russo",
    producer: "Kevin Feige",
    boxOffice: "$714.4 Million",
    budget: "$177 Million",
    rating: 4.9,
    criticScore: 90,
    audienceScore: 92,
    theme: {
      name: "royal-blue",
      bg: "#1e3a8a",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      badgeBg: "rgba(30, 58, 138, 0.4)",
      border: "rgba(56, 189, 248, 0.5)"
    },
    activeHeroes: ["Captain America", "Black Widow", "Bucky Barnes"],
    synopsis: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with Black Widow and the Falcon to battle a powerful yet shadowed threat known as the Winter Soldier while uncovering a deep conspiracy within S.H.I.E.L.D.",
    poster: "assets/images/posters/captain-america-the-winter-soldier-2014.svg",
    backdrop: "assets/images/backdrops/captain-america-the-winter-soldier-2014.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTed5nGQqW0sdKHMXAU.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/7LMvgfT6kU8l34R326v49hX0201.jpg",
    trailerKey: "7SlILk2WMTI",
    infinityStone: "Mind Stone",
    postCreditScenes: "2 Post-Credit Scenes: Baron von Strucker reveals the 'miracles', and Bucky visits his Smithsonian exhibit.",
    cast: [
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Scarlett Johansson", role: "Natasha Romanoff / Black Widow", avatar: "assets/images/characters/natasha-romanoff.svg" },
      { name: "Sebastian Stan", role: "Bucky Barnes / Winter Soldier", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Anthony Mackie", role: "Sam Wilson / Falcon", avatar: "assets/images/avatars/captainamerica.svg" }
    ],
    trivia: [
      "The elevator fight sequence took seven full days to choreograph and film.",
      "The Russo brothers drew heavy cinematic inspiration from 1970s political thrillers like 'All the President\'s Men'."
    ],
    initialReviews: [
      {
        id: "rev-ws-01",
        author: "EspionageFanatic",
        avatar: "assets/images/avatars/blackwidow.svg",
        rating: 5.0,
        date: "2024-02-14",
        tags: ["Best MCU Film", "Top Thriller"],
        spoiler: false,
        text: "Without question one of the greatest superhero movies ever made. The hand-to-hand combat, knife flips, and high-stakes political intrigue elevate it to top-tier cinema.",
        likes: 120
      }
    ]
  },
  {
    id: "guardians-of-the-galaxy-2014",
    title: "Guardians of the Galaxy",
    tagline: "You're welcome.",
    type: "movie",
    phase: "Phase 2",
    saga: "The Infinity Saga",
    releaseYear: 2014,
    releaseDate: "August 1, 2014",
    chronologicalYear: 2014,
    chronologicalRank: 9,
    runtime: "2h 1m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Comedy", "Adventure"],
    director: "James Gunn",
    producer: "Kevin Feige",
    boxOffice: "$773.3 Million",
    budget: "$232 Million",
    rating: 4.7,
    criticScore: 92,
    audienceScore: 92,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Guardians of the Galaxy"],
    synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe after stealing an orb containing a cosmic Power Stone.",
    poster: "assets/images/posters/guardians-of-the-galaxy-2014.svg",
    backdrop: "assets/images/backdrops/guardians-of-the-galaxy-2014.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXOsLbtqoW.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/m5O909qneKXhk7GqM8HT05T3a.jpg",
    trailerKey: "d96cjJhvlMA",
    infinityStone: "Power Stone",
    postCreditScenes: "2 Post-Credit Scenes: Baby Groot dancing to the Jackson 5, and Howard the Duck enjoying a cocktail with the Collector.",
    cast: [
      { name: "Chris Pratt", role: "Peter Quill / Star-Lord", avatar: "assets/images/avatars/ironman.svg" },
      { name: "Zoe Saldana", role: "Gamora", avatar: "assets/images/avatars/scarletwitch.svg" },
      { name: "Dave Bautista", role: "Drax the Destroyer", avatar: "assets/images/avatars/thor.svg" },
      { name: "Bradley Cooper", role: "Rocket Raccoon (Voice)", avatar: "assets/images/avatars/ironman.svg" }
    ],
    trivia: [
      "The Awesome Mix Vol. 1 soundtrack album reached No. 1 on the US Billboard 200 chart.",
      "Chris Pratt stole his Star-Lord costume so he could visit sick children in hospitals in character."
    ],
    initialReviews: [
      {
        id: "rev-gotg1-01",
        author: "AwesomeMixVol1",
        avatar: "assets/images/avatars/deadpool.svg",
        rating: 4.8,
        date: "2024-03-22",
        tags: ["Best Soundtrack", "Hilarious", "Heartfelt"],
        spoiler: false,
        text: "Turned a group of obscure comic characters into beloved household names overnight. The needle drops and heart make this a pure cosmic joyride.",
        likes: 67
      }
    ]
  },
  {
    id: "avengers-age-of-ultron-2015",
    title: "Avengers: Age of Ultron",
    tagline: "No strings on me.",
    type: "movie",
    phase: "Phase 2",
    saga: "The Infinity Saga",
    releaseYear: 2015,
    releaseDate: "May 1, 2015",
    chronologicalYear: 2015,
    chronologicalRank: 11,
    runtime: "2h 21m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "Joss Whedon",
    producer: "Kevin Feige",
    boxOffice: "$1.403 Billion",
    budget: "$365 Million",
    rating: 4.3,
    criticScore: 76,
    audienceScore: 83,
    theme: {
      name: "royal-blue",
      bg: "#1e3a8a",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      badgeBg: "rgba(30, 58, 138, 0.4)",
      border: "rgba(56, 189, 248, 0.5)"
    },
    activeHeroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Scarlet Witch"],
    synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly awry and it's up to Earth's mightiest heroes to stop the villainous artificial intelligence.",
    poster: "assets/images/posters/avengers-age-of-ultron-2015.svg",
    backdrop: "assets/images/backdrops/avengers-age-of-ultron-2015.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkS9NvmR15ezIMjR83gn.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/8K9t46Wf3t6G9J728r3jT2gG03.jpg",
    trailerKey: "tmeOjFno6Do",
    infinityStone: "Mind Stone",
    postCreditScenes: "1 Mid-Credit Scene: Thanos retrieves the Infinity Gauntlet and proclaims: 'Fine, I\'ll do it myself.'",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Elizabeth Olsen", role: "Wanda Maximoff / Scarlet Witch", avatar: "assets/images/characters/wanda-maximoff.svg" }
    ],
    trivia: [
      "James Spader was Joss Whedon's only choice to voice Ultron because of his hypnotic voice."
    ],
    initialReviews: [
      {
        id: "rev-aou-01",
        author: "VisionaryMind",
        avatar: "assets/images/avatars/doctorstrange.svg",
        rating: 4.2,
        date: "2024-04-01",
        tags: ["Birth of Vision", "Epic Battles"],
        spoiler: false,
        text: "Aged like fine wine. Set up nearly every major conflict in Civil War, Ragnarok, and Infinity War while introducing the philosophical powerhouse Vision.",
        likes: 42
      }
    ]
  },
  {
    id: "captain-america-civil-war-2016",
    title: "Captain America: Civil War",
    tagline: "United we stand. Divided we fall.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2016,
    releaseDate: "May 6, 2016",
    chronologicalYear: 2016,
    chronologicalRank: 13,
    runtime: "2h 27m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Drama"],
    director: "Anthony & Joe Russo",
    producer: "Kevin Feige",
    boxOffice: "$1.153 Billion",
    budget: "$250 Million",
    rating: 4.8,
    criticScore: 90,
    audienceScore: 89,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Captain America", "Iron Man", "Spider-Man", "Black Panther", "Black Widow", "Scarlet Witch", "Bucky Barnes"],
    synopsis: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man. The clash fractures the superhero alliance just as Black Panther and Spider-Man make their electrifying debut in the MCU.",
    poster: "assets/images/posters/captain-america-civil-war-2016.svg",
    backdrop: "assets/images/backdrops/captain-america-civil-war-2016.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/rAGi1tGQY79Ah5v0XG9bNdRJQhp.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/kvRT3uvjhvNXFXq9ISdt3NDK5.jpg",
    trailerKey: "dKrVegVI0Us",
    infinityStone: "Mind Stone",
    postCreditScenes: "2 Post-Credit Scenes: Bucky goes into cryostasis in Wakanda, and Peter Parker discovers the Spider-signal.",
    cast: [
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Chadwick Boseman", role: "T'Challa / Black Panther", avatar: "assets/images/characters/tchalla.svg" },
      { name: "Tom Holland", role: "Peter Parker / Spider-Man", avatar: "assets/images/characters/peter-parker.svg" }
    ],
    trivia: [
      "The Leipzig-Halle airport battle is widely regarded as one of the most innovative comic book battles ever filmed.",
      "Marked the historic arrival of Tom Holland's Spider-Man into the Marvel Cinematic Universe."
    ],
    initialReviews: [
      {
        id: "rev-cw-01",
        author: "TeamIronManAlways",
        avatar: "assets/images/avatars/ironman.svg",
        rating: 5.0,
        date: "2024-02-28",
        tags: ["Masterpiece", "Emotional Climax", "Best Airport Scene"],
        spoiler: true,
        text: "The final showdown between Tony, Steve, and Bucky in Siberia is heartbreaking. You understand both sides completely, making the ideological tragedy hurt all the more.",
        likes: 85
      }
    ]
  },
  {
    id: "doctor-strange-2016",
    title: "Doctor Strange",
    tagline: "Open your mind. Change your reality.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2016,
    releaseDate: "November 4, 2016",
    chronologicalYear: 2016,
    chronologicalRank: 14,
    runtime: "1h 55m",
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    director: "Scott Derrickson",
    producer: "Kevin Feige",
    boxOffice: "$677.8 Million",
    budget: "$165 Million",
    rating: 4.5,
    criticScore: 89,
    audienceScore: 86,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Doctor Strange"],
    synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon named Dr. Stephen Strange is drawn into the world of the mystic arts and learns to master dimensions and time itself.",
    poster: "assets/images/posters/doctor-strange-2016.svg",
    backdrop: "assets/images/backdrops/doctor-strange-2016.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/tFI8OxMg70BE3qfo2spZePLcyP.jpg",
    trailerKey: "HSzx-zryEgM",
    infinityStone: "Time Stone",
    postCreditScenes: "2 Post-Credit Scenes: Strange speaks with Thor regarding Loki and Odin, and Mordo declares there are 'too many sorcerers'.",
    cast: [
      { name: "Benedict Cumberbatch", role: "Dr. Stephen Strange", avatar: "assets/images/characters/stephen-strange.svg" },
      { name: "Tilda Swinton", role: "The Ancient One", avatar: "assets/images/avatars/doctorstrange.svg" },
      { name: "Benedict Wong", role: "Wong", avatar: "assets/images/avatars/doctorstrange.svg" }
    ],
    trivia: [
      "Benedict Cumberbatch also provided the facial motion-capture performance for the dread cosmic entity Dormammu."
    ],
    initialReviews: [
      {
        id: "rev-ds1-01",
        author: "MysticBargainer",
        avatar: "assets/images/avatars/doctorstrange.svg",
        rating: 4.5,
        date: "2024-03-11",
        tags: ["Visual Marvel", "Clever Ending"],
        spoiler: false,
        text: "Mind-bending visual spectacles reminiscent of Inception and Ditko comics. The time-loop bargaining sequence is genius writing.",
        likes: 38
      }
    ]
  },
  {
    id: "thor-ragnarok-2017",
    title: "Thor: Ragnarok",
    tagline: "No hammer. No problem.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2017,
    releaseDate: "November 3, 2017",
    chronologicalYear: 2017,
    chronologicalRank: 17,
    runtime: "2h 10m",
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    director: "Taika Waititi",
    producer: "Kevin Feige",
    boxOffice: "$855.3 Million",
    budget: "$180 Million",
    rating: 4.8,
    criticScore: 93,
    audienceScore: 87,
    theme: {
      name: "royal-blue",
      bg: "#1e3a8a",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      badgeBg: "rgba(30, 58, 138, 0.4)",
      border: "rgba(56, 189, 248, 0.5)"
    },
    activeHeroes: ["Thor", "Loki", "Hulk", "Doctor Strange"],
    synopsis: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the ruthless villainess Hela.",
    poster: "assets/images/posters/thor-ragnarok-2017.svg",
    backdrop: "assets/images/backdrops/thor-ragnarok-2017.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/kaIfm5ryEOwYg8Qq8asTa0aG5.jpg",
    trailerKey: "ue80QwXMRHg",
    infinityStone: "Space Stone",
    postCreditScenes: "2 Post-Credit Scenes: Thor and Loki encounter Thanos' massive Sanctuary II dreadnought.",
    cast: [
      { name: "Chris Hemsworth", role: "Thor Odinson", avatar: "assets/images/characters/thor-odinson.svg" },
      { name: "Tom Hiddleston", role: "Loki Laufeyson", avatar: "assets/images/characters/loki.svg" },
      { name: "Cate Blanchett", role: "Hela", avatar: "assets/images/avatars/thor.svg" },
      { name: "Mark Ruffalo", role: "Bruce Banner / Hulk", avatar: "assets/images/characters/bruce-banner.svg" }
    ],
    trivia: [
      "Over 80 percent of the film's dialogue was improvised by the cast under Taika Waititi's comedic direction."
    ],
    initialReviews: [
      {
        id: "rev-tr-01",
        author: "GodOfThunder",
        avatar: "assets/images/avatars/thor.svg",
        rating: 5.0,
        date: "2024-01-20",
        tags: ["Hilarious", "Peak Fun", "Electrifying Action"],
        spoiler: false,
        text: "Reinvented Thor completely! Colorful 80s synth-rock aesthetic, laugh-out-loud comedy, and the Rainbow Bridge showdown to Immigrant Song is pure cinematic dopamine.",
        likes: 94
      }
    ]
  },
  {
    id: "black-panther-2018",
    title: "Black Panther",
    tagline: "Long live the King.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2018,
    releaseDate: "February 16, 2018",
    chronologicalYear: 2018,
    chronologicalRank: 18,
    runtime: "2h 14m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    boxOffice: "$1.349 Billion",
    budget: "$200 Million",
    rating: 4.7,
    criticScore: 96,
    audienceScore: 79,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Black Panther", "Bucky Barnes"],
    synopsis: "T'Challa, heir to the hidden advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    poster: "assets/images/posters/black-panther-2018.svg",
    backdrop: "assets/images/backdrops/black-panther-2018.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8vlum.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/b6ZJZHUytNDXokq1.jpg",
    trailerKey: "xjDjIWPwcPU",
    infinityStone: "None",
    postCreditScenes: "2 Post-Credit Scenes: T'Challa reveals Wakanda at the UN, and Bucky awakens peacefully nicknamed the 'White Wolf'.",
    cast: [
      { name: "Chadwick Boseman", role: "T'Challa / Black Panther", avatar: "assets/images/characters/tchalla.svg" },
      { name: "Michael B. Jordan", role: "Erik Killmonger", avatar: "assets/images/avatars/blackpanther.svg" }
    ],
    trivia: [
      "The first superhero movie in cinema history nominated for the Academy Award for Best Picture."
    ],
    initialReviews: [
      {
        id: "rev-bp1-01",
        author: "WakandaForeverFan",
        avatar: "assets/images/avatars/blackpanther.svg",
        rating: 5.0,
        date: "2024-02-01",
        tags: ["Cultural Milestone", "Best Villain"],
        spoiler: false,
        text: "A triumph of worldbuilding, music, and compelling thematic conflict. Michael B. Jordan's Killmonger is one of the most empathetic villains ever written.",
        likes: 112
      }
    ]
  },
  {
    id: "avengers-infinity-war-2018",
    title: "Avengers: Infinity War",
    tagline: "An entire universe. Once and for all.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2018,
    releaseDate: "April 27, 2018",
    chronologicalYear: 2018,
    chronologicalRank: 19,
    runtime: "2h 29m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure"],
    director: "Anthony & Joe Russo",
    producer: "Kevin Feige",
    boxOffice: "$2.052 Billion",
    budget: "$325 Million",
    rating: 4.9,
    criticScore: 85,
    audienceScore: 92,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Iron Man", "Thor", "Captain America", "Spider-Man", "Doctor Strange", "Black Panther", "Black Widow", "Hulk", "Loki", "Scarlet Witch", "Guardians of the Galaxy", "Bucky Barnes"],
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    poster: "assets/images/posters/avengers-infinity-war-2018.svg",
    backdrop: "assets/images/backdrops/avengers-infinity-war-2018.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/lmZFxXgJE3vgrtTdqng2i4e05.jpg",
    trailerKey: "6ZfuNTqbHE8",
    infinityStone: "All 6 Infinity Stones",
    postCreditScenes: "1 Post-Credit Scene: Nick Fury pages Captain Marvel just before disintegrating.",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Chris Hemsworth", role: "Thor Odinson", avatar: "assets/images/characters/thor-odinson.svg" },
      { name: "Josh Brolin", role: "Thanos", avatar: "assets/images/avatars/ironman.svg" },
      { name: "Benedict Cumberbatch", role: "Dr. Stephen Strange", avatar: "assets/images/characters/stephen-strange.svg" },
      { name: "Tom Holland", role: "Peter Parker / Spider-Man", avatar: "assets/images/characters/peter-parker.svg" }
    ],
    trivia: [
      "Tom Holland was not given the full script to prevent him from accidentally spoiling the monumental ending.",
      "The movie became the fourth film in history to gross over $2 billion worldwide."
    ],
    initialReviews: [
      {
        id: "rev-iw-01",
        author: "ThanosWasRight99",
        avatar: "assets/images/avatars/ironman.svg",
        rating: 5.0,
        date: "2024-02-15",
        tags: ["Masterpiece", "Peak Cinema", "Unbelievable Stakes"],
        spoiler: true,
        text: "The pacing is relentless. Balancing 30+ heroes without dropping a single emotional beat is an unprecedented filmmaking achievement. The Snap shockwave in the theater was unforgettable.",
        likes: 156
      }
    ]
  },
  {
    id: "avengers-endgame-2019",
    title: "Avengers: Endgame",
    tagline: "Part of the journey is the end.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2019,
    releaseDate: "April 26, 2019",
    chronologicalYear: 2023,
    chronologicalRank: 20,
    runtime: "3h 1m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Drama", "Adventure"],
    director: "Anthony & Joe Russo",
    producer: "Kevin Feige",
    boxOffice: "$2.799 Billion",
    budget: "$356 Million",
    rating: 5.0,
    criticScore: 94,
    audienceScore: 90,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk", "Spider-Man", "Doctor Strange", "Black Panther", "Scarlet Witch", "Loki", "Guardians of the Galaxy", "Bucky Barnes"],
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster: "assets/images/posters/avengers-endgame-2019.svg",
    backdrop: "assets/images/backdrops/avengers-endgame-2019.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zJW3q7v6fC1.jpg",
    trailerKey: "TcMBFSGVi1c",
    infinityStone: "All 6 Infinity Stones",
    postCreditScenes: "No visual post-credits scene, but the iconic sound of Tony Stark hammering metal in the cave plays at the end.",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man", avatar: "assets/images/characters/tony-stark.svg" },
      { name: "Chris Evans", role: "Steve Rogers / Captain America", avatar: "assets/images/characters/steve-rogers.svg" },
      { name: "Scarlett Johansson", role: "Natasha Romanoff / Black Widow", avatar: "assets/images/characters/natasha-romanoff.svg" },
      { name: "Chris Hemsworth", role: "Thor Odinson", avatar: "assets/images/characters/thor-odinson.svg" }
    ],
    trivia: [
      "The 'Portals' scene featured over 35 distinct characters returning to battle Thanos.",
      "Chris Evans wielded Mjolnir after seven years of fan theories stemming back to Age of Ultron."
    ],
    initialReviews: [
      {
        id: "rev-eg-01",
        author: "WhateverItTakes",
        avatar: "assets/images/avatars/captainamerica.svg",
        rating: 5.0,
        date: "2024-01-05",
        tags: ["Masterpiece", "Emotional Climax", "Cinematic Event of the Century"],
        spoiler: true,
        text: "The Portals sequence, Cap lifting Mjolnir, and Tony's final 'I am Iron Man' sacrifice made theater crowds erupt into tears and standing ovations. An unmatched cultural milestone.",
        likes: 210
      }
    ]
  },
  {
    id: "spider-man-far-from-home-2019",
    title: "Spider-Man: Far From Home",
    tagline: "It's time to step up.",
    type: "movie",
    phase: "Phase 3",
    saga: "The Infinity Saga",
    releaseYear: 2019,
    releaseDate: "July 2, 2019",
    chronologicalYear: 2024,
    chronologicalRank: 21,
    runtime: "2h 9m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Comedy", "Adventure"],
    director: "Jon Watts",
    producer: "Kevin Feige, Amy Pascal",
    boxOffice: "$1.132 Billion",
    budget: "$160 Million",
    rating: 4.4,
    criticScore: 90,
    audienceScore: 95,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Spider-Man", "Iron Man"],
    synopsis: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever while on a high-school trip across Europe.",
    poster: "assets/images/posters/spider-man-far-from-home-2019.svg",
    backdrop: "assets/images/backdrops/spider-man-far-from-home-2019.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/4q2hz2m8hubgvij98EzWyvisg00.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/tVFRpFw3xTed5nGQqW0sdKHMXAU.jpg",
    trailerKey: "Nt9L1jCKGnE",
    infinityStone: "None",
    postCreditScenes: "2 Post-Credit Scenes: J. Jonah Jameson exposes Spider-Man's secret identity to the world.",
    cast: [
      { name: "Tom Holland", role: "Peter Parker / Spider-Man", avatar: "assets/images/characters/peter-parker.svg" },
      { name: "Jake Gyllenhaal", role: "Quentin Beck / Mysterio", avatar: "assets/images/avatars/spiderman.svg" },
      { name: "Zendaya", role: "MJ", avatar: "assets/images/avatars/spiderman.svg" }
    ],
    trivia: [
      "The illusion sequence inside Mysterio's simulated nightmare is hailed as one of the most inventive visual scenes in comic adaptations."
    ],
    initialReviews: [
      {
        id: "rev-ffh-01",
        author: "WebSlingerNYC",
        avatar: "assets/images/avatars/spiderman.svg",
        rating: 4.4,
        date: "2024-03-14",
        tags: ["Mysterio Illusions", "Great Action"],
        spoiler: true,
        text: "Jake Gyllenhaal as Mysterio was electric! The mid-credits scene with J.K. Simmons' J. Jonah Jameson leaking Peter's identity set up the most agonizing cliffhanger in Marvel history.",
        likes: 54
      }
    ]
  },
  {
    id: "wandavision-2021",
    title: "WandaVision",
    tagline: "A truly marvelous love story.",
    type: "series",
    phase: "Phase 4",
    saga: "The Multiverse Saga",
    releaseYear: 2021,
    releaseDate: "January 15, 2021",
    chronologicalYear: 2023,
    chronologicalRank: 22,
    runtime: "9 Episodes",
    ageRating: "TV-PG",
    genres: ["Drama", "Mystery", "Sci-Fi", "Fantasy"],
    director: "Matt Shakman",
    producer: "Kevin Feige",
    boxOffice: "Disney+ Original Series",
    budget: "$225 Million",
    rating: 4.7,
    criticScore: 91,
    audienceScore: 88,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Scarlet Witch"],
    synopsis: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems in the bizarre town of Westview.",
    poster: "assets/images/posters/wandavision-2021.svg",
    backdrop: "assets/images/backdrops/wandavision-2021.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/glKDjtULenQcr6qe11JrIOIRiz0.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/16i9iK47w8qK1gq49h5jK7y62d.jpg",
    trailerKey: "UBhlqe2KVt4",
    infinityStone: "Mind Stone (Manifestation)",
    postCreditScenes: "Post-Credit Scene: Wanda astral projects while reading the Darkhold, hearing the cries of her twins.",
    cast: [
      { name: "Elizabeth Olsen", role: "Wanda Maximoff / Scarlet Witch", avatar: "assets/images/characters/wanda-maximoff.svg" },
      { name: "Paul Bettany", role: "Vision / White Vision", avatar: "assets/images/avatars/doctorstrange.svg" }
    ],
    trivia: [
      "The first episode was filmed in front of a live studio audience in full 1950s period attire.",
      "The song 'Agatha All Along' became a viral chart-topping sensation and won an Emmy Award."
    ],
    initialReviews: [
      {
        id: "rev-wv-01",
        author: "ScarletSovereign",
        avatar: "assets/images/avatars/scarletwitch.svg",
        rating: 4.8,
        date: "2024-01-18",
        tags: ["Grief & Healing", "Creative Masterpiece"],
        spoiler: false,
        text: "'What is grief, if not love persevering?' That line broke everyone. An astonishing tribute to classic television that explores profound human trauma.",
        likes: 98
      }
    ]
  },
  {
    id: "loki-2021",
    title: "Loki (Seasons 1 & 2)",
    tagline: "Glorious purpose.",
    type: "series",
    phase: "Phase 4",
    saga: "The Multiverse Saga",
    releaseYear: 2021,
    releaseDate: "June 9, 2021",
    chronologicalYear: 2024,
    chronologicalRank: 23,
    runtime: "12 Episodes",
    ageRating: "TV-14",
    genres: ["Sci-Fi", "Fantasy", "Adventure"],
    director: "Kate Herron & Justin Benson / Aaron Moorhead",
    producer: "Kevin Feige, Tom Hiddleston",
    boxOffice: "Disney+ Original Series",
    budget: "$140 Million",
    rating: 4.9,
    criticScore: 87,
    audienceScore: 90,
    theme: {
      name: "emerald-green",
      bg: "#064e3b",
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.45)",
      badgeBg: "rgba(6, 78, 59, 0.4)",
      border: "rgba(16, 185, 129, 0.5)"
    },
    activeHeroes: ["Loki", "Thor"],
    synopsis: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame, navigating the bureaucratic Time Variance Authority and the unraveling multiverse.",
    poster: "assets/images/posters/loki-2021.svg",
    backdrop: "assets/images/backdrops/loki-2021.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/voHUmlvjysqP9Hub2ST1v599VI.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/kEl2t3OhXc379O1h5o6d7.jpg",
    trailerKey: "nW948Va-l10",
    infinityStone: "Infinity Stones (Paperweights in TVA)",
    postCreditScenes: "Season 1 finale unleashes the branching timelines with Kang's citadel collapse.",
    cast: [
      { name: "Tom Hiddleston", role: "Loki Laufeyson / God of Stories", avatar: "assets/images/characters/loki.svg" },
      { name: "Owen Wilson", role: "Mobius M. Mobius", avatar: "assets/images/avatars/loki.svg" }
    ],
    trivia: [
      "The Season 2 finale cemented Loki's ascension into Yggdrasil's God of Stories, completing a 12-year character arc."
    ],
    initialReviews: [
      {
        id: "rev-loki-01",
        author: "GloriousPurposeFan",
        avatar: "assets/images/avatars/loki.svg",
        rating: 5.0,
        date: "2024-02-10",
        tags: ["Best MCU Series", "God of Stories"],
        spoiler: true,
        text: "The Season 2 finale is pure poetry. Loki taking his place at the center of the timeline tree holding all the multiverse threads is the best character conclusion in Marvel history.",
        likes: 145
      }
    ]
  },
  {
    id: "spider-man-no-way-home-2021",
    title: "Spider-Man: No Way Home",
    tagline: "The Multiverse unleashed.",
    type: "movie",
    phase: "Phase 4",
    saga: "The Multiverse Saga",
    releaseYear: 2021,
    releaseDate: "December 17, 2021",
    chronologicalYear: 2024,
    chronologicalRank: 24,
    runtime: "2h 28m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Adventure", "Fantasy"],
    director: "Jon Watts",
    producer: "Kevin Feige, Amy Pascal",
    boxOffice: "$1.922 Billion",
    budget: "$200 Million",
    rating: 4.9,
    criticScore: 93,
    audienceScore: 98,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Spider-Man", "Doctor Strange"],
    synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    poster: "assets/images/posters/spider-man-no-way-home-2021.svg",
    backdrop: "assets/images/backdrops/spider-man-no-way-home-2021.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4IRvi.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPn8jFv.jpg",
    trailerKey: "JfVOs4VSpmA",
    infinityStone: "None",
    postCreditScenes: "2 Post-Credit Scenes: Eddie Brock leaves a droplet of the Venom symbiote at a Mexican bar.",
    cast: [
      { name: "Tom Holland", role: "Peter Parker / Spider-Man", avatar: "assets/images/characters/peter-parker.svg" },
      { name: "Tobey Maguire", role: "Peter Parker / Friendly Neighborhood Spider-Man", avatar: "assets/images/characters/peter-parker.svg" },
      { name: "Andrew Garfield", role: "Peter Parker / The Amazing Spider-Man", avatar: "assets/images/characters/peter-parker.svg" },
      { name: "Benedict Cumberbatch", role: "Dr. Stephen Strange", avatar: "assets/images/characters/stephen-strange.svg" }
    ],
    trivia: [
      "Andrew Garfield and Tobey Maguire snuck into a public theater together on opening weekend in baseball caps."
    ],
    initialReviews: [
      {
        id: "rev-nwh-01",
        author: "Peter3Appreciator",
        avatar: "assets/images/avatars/spiderman.svg",
        rating: 5.0,
        date: "2024-01-22",
        tags: ["Pure Nostalgia", "Cinema Magic"],
        spoiler: true,
        text: "Seeing Tobey Maguire, Andrew Garfield, and Tom Holland sharing pizza and swinging together off the Statue of Liberty gave me goosebumps for two hours straight. Willem Dafoe is menacing perfection.",
        likes: 184
      }
    ]
  },
  {
    id: "doctor-strange-multiverse-of-madness-2022",
    title: "Doctor Strange in the Multiverse of Madness",
    tagline: "Enter a new dimension of Strange.",
    type: "movie",
    phase: "Phase 4",
    saga: "The Multiverse Saga",
    releaseYear: 2022,
    releaseDate: "May 6, 2022",
    chronologicalYear: 2024,
    chronologicalRank: 25,
    runtime: "2h 6m",
    ageRating: "PG-13",
    genres: ["Action", "Fantasy", "Horror", "Sci-Fi"],
    director: "Sam Raimi",
    producer: "Kevin Feige",
    boxOffice: "$955.8 Million",
    budget: "$200 Million",
    rating: 4.2,
    criticScore: 74,
    audienceScore: 85,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Doctor Strange", "Scarlet Witch"],
    synopsis: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across the multiverse to battle multiple threats, including other-universe versions of himself and the corrupted Scarlet Witch.",
    poster: "assets/images/posters/doctor-strange-multiverse-of-madness-2022.svg",
    backdrop: "assets/images/backdrops/doctor-strange-multiverse-of-madness-2022.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1oKAhiwbBKS.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglEDw.jpg",
    trailerKey: "aWzlQ2N6qqg",
    infinityStone: "Darkhold & Book of Vishanti",
    postCreditScenes: "2 Post-Credit Scenes: Clea summons Strange into the Dark Dimension.",
    cast: [
      { name: "Benedict Cumberbatch", role: "Dr. Stephen Strange", avatar: "assets/images/characters/stephen-strange.svg" },
      { name: "Elizabeth Olsen", role: "Wanda Maximoff / Scarlet Witch", avatar: "assets/images/characters/wanda-maximoff.svg" }
    ],
    trivia: [
      "Sam Raimi brought his signature horror cinematography and kinetic camera swings to the Marvel Cinematic Universe."
    ],
    initialReviews: [
      {
        id: "rev-mom-01",
        author: "ChaosMagicFan",
        avatar: "assets/images/avatars/scarletwitch.svg",
        rating: 4.3,
        date: "2024-02-17",
        tags: ["Sam Raimi Style", "Scarlet Witch Horror"],
        spoiler: true,
        text: "Elizabeth Olsen delivers an unhinged, horrifying performance as the Scarlet Witch. The Raimi horror elements make this stand out drastically.",
        likes: 64
      }
    ]
  },
  {
    id: "black-panther-wakanda-forever-2022",
    title: "Black Panther: Wakanda Forever",
    tagline: "Show them who we are.",
    type: "movie",
    phase: "Phase 4",
    saga: "The Multiverse Saga",
    releaseYear: 2022,
    releaseDate: "November 11, 2022",
    chronologicalYear: 2024,
    chronologicalRank: 26,
    runtime: "2h 41m",
    ageRating: "PG-13",
    genres: ["Action", "Drama", "Sci-Fi"],
    director: "Ryan Coogler",
    producer: "Kevin Feige, Nate Moore",
    boxOffice: "$859.2 Million",
    budget: "$250 Million",
    rating: 4.4,
    criticScore: 84,
    audienceScore: 94,
    theme: {
      name: "emerald-green",
      bg: "#064e3b",
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.45)",
      badgeBg: "rgba(6, 78, 59, 0.4)",
      border: "rgba(16, 185, 129, 0.5)"
    },
    activeHeroes: ["Black Panther"],
    synopsis: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa, while an underwater civilization led by Namor threatens global stability.",
    poster: "assets/images/posters/black-panther-wakanda-forever-2022.svg",
    backdrop: "assets/images/backdrops/black-panther-wakanda-forever-2022.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c95.jpg",
    trailerKey: "_Z3QKkl1WyM",
    infinityStone: "Vibranium Synthesis",
    postCreditScenes: "1 Mid-Credit Scene: Nakia introduces Shuri to T'Challa's son, Prince T'Challa (Touissant).",
    cast: [
      { name: "Letitia Wright", role: "Shuri / Black Panther", avatar: "assets/images/characters/tchalla.svg" },
      { name: "Tenoch Huerta", role: "Namor", avatar: "assets/images/avatars/blackpanther.svg" }
    ],
    trivia: [
      "Angela Bassett received an Academy Award nomination for Best Supporting Actress for Queen Ramonda."
    ],
    initialReviews: [
      {
        id: "rev-wf-01",
        author: "WakandaTribute",
        avatar: "assets/images/avatars/blackpanther.svg",
        rating: 4.5,
        date: "2024-03-08",
        tags: ["Deeply Moving", "Angela Bassett Masterclass"],
        spoiler: false,
        text: "A profoundly emotional funeral tribute that also expands the MCU world with the breathtaking underwater Mesoamerican culture of Talokan.",
        likes: 77
      }
    ]
  },
  {
    id: "guardians-of-the-galaxy-vol-3-2023",
    title: "Guardians of the Galaxy Vol. 3",
    tagline: "One more time with feeling.",
    type: "movie",
    phase: "Phase 5",
    saga: "The Multiverse Saga",
    releaseYear: 2023,
    releaseDate: "May 5, 2023",
    chronologicalYear: 2025,
    chronologicalRank: 27,
    runtime: "2h 30m",
    ageRating: "PG-13",
    genres: ["Action", "Sci-Fi", "Comedy", "Adventure"],
    director: "James Gunn",
    producer: "Kevin Feige",
    boxOffice: "$845.6 Million",
    budget: "$250 Million",
    rating: 4.8,
    criticScore: 82,
    audienceScore: 94,
    theme: {
      name: "cosmic-purple",
      bg: "#581c87",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.45)",
      badgeBg: "rgba(88, 28, 135, 0.4)",
      border: "rgba(249, 115, 22, 0.5)"
    },
    activeHeroes: ["Guardians of the Galaxy"],
    synopsis: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own: Rocket, whose harrowing past with the High Evolutionary comes back to haunt him.",
    poster: "assets/images/posters/guardians-of-the-galaxy-vol-3-2023.svg",
    backdrop: "assets/images/backdrops/guardians-of-the-galaxy-vol-3-2023.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN2Ydgii51xQ.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3.jpg",
    trailerKey: "u3V5KDHRQvk",
    infinityStone: "None",
    postCreditScenes: "2 Post-Credit Scenes: Rocket leads the new Guardians roster, and Peter has breakfast with his grandfather.",
    cast: [
      { name: "Chris Pratt", role: "Peter Quill / Star-Lord", avatar: "assets/images/avatars/ironman.svg" },
      { name: "Bradley Cooper", role: "Rocket Raccoon (Voice)", avatar: "assets/images/avatars/ironman.svg" }
    ],
    trivia: [
      "Features a thrilling three-minute one-take corridor battle set to Beastie Boys' 'No Sleep Till Brooklyn'."
    ],
    initialReviews: [
      {
        id: "rev-gotg3-01",
        author: "RocketRaccoonForever",
        avatar: "assets/images/avatars/deadpool.svg",
        rating: 5.0,
        date: "2024-01-29",
        tags: ["Cried So Hard", "Perfect Trilogy Ending"],
        spoiler: true,
        text: "The greatest trilogy conclusion in the MCU. Chukwudi Iwuji gave us a truly despicable villain, and Rocket finally accepting his identity as Rocket Raccoon made me weep.",
        likes: 135
      }
    ]
  },
  {
    id: "deadpool-and-wolverine-2024",
    title: "Deadpool & Wolverine",
    tagline: "Maximum effort. The team-up of the century.",
    type: "movie",
    phase: "Phase 5",
    saga: "The Multiverse Saga",
    releaseYear: 2024,
    releaseDate: "July 26, 2024",
    chronologicalYear: 2026,
    chronologicalRank: 28,
    runtime: "2h 8m",
    ageRating: "R",
    genres: ["Action", "Comedy", "Sci-Fi"],
    director: "Shawn Levy",
    producer: "Kevin Feige, Ryan Reynolds, Shawn Levy",
    boxOffice: "$1.338 Billion",
    budget: "$200 Million",
    rating: 4.8,
    criticScore: 78,
    audienceScore: 94,
    theme: {
      name: "crimson-gold",
      bg: "#7f1d1d",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      badgeBg: "rgba(127, 29, 29, 0.4)",
      border: "rgba(245, 158, 11, 0.5)"
    },
    activeHeroes: ["Deadpool", "Wolverine"],
    synopsis: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, fourth-wall-breaking Deadpool. They team up to defeat a ruthless common enemy and save the dying universe.",
    poster: "assets/images/posters/deadpool-and-wolverine-2024.svg",
    backdrop: "assets/images/backdrops/deadpool-and-wolverine-2024.svg",
    onlinePoster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    onlineBackdrop: "https://image.tmdb.org/t/p/w1280/9l1eZiJHmhr5jMvcuBKn.jpg",
    trailerKey: "73_1biulkYk",
    infinityStone: "TVA Time Ripper",
    postCreditScenes: "1 Post-Credit Scene: Wade Wilson returns to the TVA control room to vindicate Johnny Storm with unedited audio.",
    cast: [
      { name: "Ryan Reynolds", role: "Wade Wilson / Deadpool", avatar: "assets/images/characters/wade-wilson.svg" },
      { name: "Hugh Jackman", role: "Logan / Wolverine", avatar: "assets/images/avatars/deadpool.svg" }
    ],
    trivia: [
      "Became the highest-grossing R-rated film of all time, dethroning 'Joker'.",
      "Hugh Jackman finally donned the comic-accurate yellow and blue Wolverine spandex suit with cowl."
    ],
    initialReviews: [
      {
        id: "rev-dpw-01",
        author: "MercWithAMouth",
        avatar: "assets/images/avatars/deadpool.svg",
        rating: 4.9,
        date: "2024-08-01",
        tags: ["Marvel Jesus", "Maximum Effort"],
        spoiler: true,
        text: "Everything comic fans prayed for over two decades. The opening credits dance to NSYNC's 'Bye Bye Bye' set the tone immediately. Hugh Jackman gave his finest emotional performance yet.",
        likes: 195
      }
    ]
  }
];

// Major Hero Filter List for Character Hub
const MAJOR_HEROES = [
  { id: "all", name: "All Heroes", icon: "fa-solid fa-users" },
  { id: "Iron Man", name: "Iron Man", icon: "fa-solid fa-robot", avatar: "assets/images/avatars/ironman.svg" },
  { id: "Captain America", name: "Captain America", icon: "fa-solid fa-shield-halved", avatar: "assets/images/avatars/captainamerica.svg" },
  { id: "Thor", name: "Thor", icon: "fa-solid fa-bolt", avatar: "assets/images/avatars/thor.svg" },
  { id: "Spider-Man", name: "Spider-Man", icon: "fa-solid fa-spider", avatar: "assets/images/avatars/spiderman.svg" },
  { id: "Loki", name: "Loki", icon: "fa-solid fa-mask", avatar: "assets/images/avatars/loki.svg" },
  { id: "Doctor Strange", name: "Doctor Strange", icon: "fa-solid fa-eye", avatar: "assets/images/avatars/doctorstrange.svg" },
  { id: "Black Panther", name: "Black Panther", icon: "fa-solid fa-paw", avatar: "assets/images/avatars/blackpanther.svg" },
  { id: "Deadpool", name: "Deadpool", icon: "fa-solid fa-skull", avatar: "assets/images/avatars/deadpool.svg" },
  { id: "Wolverine", name: "Wolverine", icon: "fa-solid fa-hand-fist", avatar: "assets/images/avatars/deadpool.svg" },
  { id: "Guardians of the Galaxy", name: "Guardians", icon: "fa-solid fa-rocket", avatar: "assets/images/avatars/ironman.svg" },
  { id: "Scarlet Witch", name: "Scarlet Witch", icon: "fa-solid fa-wand-magic-sparkles", avatar: "assets/images/avatars/scarletwitch.svg" },
  { id: "Black Widow", name: "Black Widow", icon: "fa-solid fa-crosshairs", avatar: "assets/images/avatars/blackwidow.svg" },
  { id: "Hulk", name: "Hulk", icon: "fa-solid fa-dna", avatar: "assets/images/characters/bruce-banner.svg" }
];

// Infinity Stones Detailed Reference
const INFINITY_STONES_DATA = [
  {
    name: "Space Stone",
    color: "#00D2FF",
    container: "The Tesseract",
    power: "Grants omnipresence, instant teleportation through portals across dimensions, and gravity/space manipulation.",
    firstAppeared: "Captain America: The First Avenger (2011)",
    keyMovies: ["Captain America: The First Avenger", "The Avengers", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Mind Stone",
    color: "#FFE600",
    container: "Loki's Scepter / Vision's Forehead",
    power: "Bestows supreme telepathic prowess, psionic energy blasts, consciousness manipulation, and sentience to AI.",
    firstAppeared: "The Avengers (2012)",
    keyMovies: ["The Avengers", "Avengers: Age of Ultron", "Captain America: Civil War", "Avengers: Infinity War", "WandaVision"]
  },
  {
    name: "Reality Stone",
    color: "#FF0055",
    container: "The Aether",
    power: "Rewrites the physical laws of nature, turns matter into bubbles or dust, and creates deceptive alternate realities.",
    firstAppeared: "Thor: The Dark World (2013)",
    keyMovies: ["Thor: The Dark World", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Power Stone",
    color: "#BD00FF",
    container: "The Orb of Morag",
    power: "Unleashes apocalyptic kinetic devastation capable of wiping out civilizations and surface biospheres.",
    firstAppeared: "Guardians of the Galaxy (2014)",
    keyMovies: ["Guardians of the Galaxy", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Time Stone",
    color: "#00FF85",
    container: "The Eye of Agamotto",
    power: "Manipulates temporal flow, freezes or reverses events, creates infinite time loops, and views 14,000,605 possible futures.",
    firstAppeared: "Doctor Strange (2016)",
    keyMovies: ["Doctor Strange", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Soul Stone",
    color: "#FF7700",
    container: "Guarded on Vormir",
    power: "Governs life and death, communicates with pocket soul realms, and demands 'a soul for a soul' to be claimed.",
    firstAppeared: "Avengers: Infinity War (2018)",
    keyMovies: ["Avengers: Infinity War", "Avengers: Endgame"]
  }
];

// Available Marvel Avatars for Profile Customization
const AVAILABLE_AVATARS = [
  { id: "ironman", name: "Iron Man", src: "assets/images/avatars/ironman.svg", tag: "Genius, Billionaire" },
  { id: "captainamerica", name: "Captain America", src: "assets/images/avatars/captainamerica.svg", tag: "First Avenger" },
  { id: "thor", name: "Thor", src: "assets/images/avatars/thor.svg", tag: "God of Thunder" },
  { id: "spiderman", name: "Spider-Man", src: "assets/images/avatars/spiderman.svg", tag: "Friendly Neighborhood" },
  { id: "blackwidow", name: "Black Widow", src: "assets/images/avatars/blackwidow.svg", tag: "Master Assassin" },
  { id: "scarletwitch", name: "Scarlet Witch", src: "assets/images/avatars/scarletwitch.svg", tag: "Chaos Magic" },
  { id: "blackpanther", name: "Black Panther", src: "assets/images/avatars/blackpanther.svg", tag: "King of Wakanda" },
  { id: "deadpool", name: "Deadpool", src: "assets/images/avatars/deadpool.svg", tag: "Merc with a Mouth" },
  { id: "loki", name: "Loki", src: "assets/images/avatars/loki.svg", tag: "God of Stories" },
  { id: "doctorstrange", name: "Doctor Strange", src: "assets/images/avatars/doctorstrange.svg", tag: "Master of Mystic Arts" }
];

// Demo Users for instant testing
const DEMO_USERS = [
  {
    id: "user_stark",
    username: "TonyStark_Fan",
    email: "tony@starkindustries.com",
    avatar: "assets/images/avatars/ironman.svg",
    bio: "Proof that Tony Stark has a heart. Watching in chronological order.",
    favoritePhase: "Phase 3"
  },
  {
    id: "user_parker",
    username: "PeterParker96",
    email: "peter@dailybugle.com",
    avatar: "assets/images/avatars/spiderman.svg",
    bio: "With great power comes great review writing. Web-head for life!",
    favoritePhase: "Phase 4"
  },
  {
    id: "user_wanda",
    username: "WandaStan",
    email: "wanda@westview.io",
    avatar: "assets/images/avatars/scarletwitch.svg",
    bio: "She didn't do anything wrong. Chaos magic aficionado.",
    favoritePhase: "Phase 4"
  }
];

// Phase metadata for the Phase Explorer
const MCU_PHASES = [
  {
    id: "Phase 1",
    name: "Phase 1: Avengers Assembled",
    span: "2008 – 2012",
    saga: "The Infinity Saga",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
    description: "The founding era that introduced Earth's mightiest heroes and set the foundation for the cinematic universe."
  },
  {
    id: "Phase 2",
    name: "Phase 2: Dark Times & Cosmic Frontiers",
    span: "2013 – 2015",
    saga: "The Infinity Saga",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    description: "Confronting Hydra's infiltration, exploring cosmic realms with the Guardians, and the terrifying birth of Ultron."
  },
  {
    id: "Phase 3",
    name: "Phase 3: Civil War & The Infinity Gauntlet",
    span: "2016 – 2019",
    saga: "The Infinity Saga",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    description: "The peak era of internal conflict, universal stakes, the decimation of the Snap, and the glorious climax of Endgame."
  },
  {
    id: "Phase 4",
    name: "Phase 4: Multiverse Fractures & Legacies",
    span: "2021 – 2022",
    saga: "The Multiverse Saga",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    description: "Processing collective trauma, welcoming Disney+ long-form storytelling, and tearing open the multiversal fabric."
  },
  {
    id: "Phase 5",
    name: "Phase 5: Secret Wars Horizon",
    span: "2023 – Present",
    saga: "The Multiverse Saga",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    description: "Rocket's farewell, mutants arriving at full force, and high-octane multiversal team-ups leading toward Avengers: Doomsday."
  }
];

// Export for browser window
if (typeof window !== 'undefined') {
  window.MCU_CATALOG = MCU_CATALOG;
  window.MAJOR_HEROES = MAJOR_HEROES;
  window.INFINITY_STONES_DATA = INFINITY_STONES_DATA;
  window.AVAILABLE_AVATARS = AVAILABLE_AVATARS;
  window.DEMO_USERS = DEMO_USERS;
  window.MCU_PHASES = MCU_PHASES;
}
