const fs = require('fs');

// Load the updated fetched movies
const finalCatalog = JSON.parse(fs.readFileSync('all_marvel_catalog.json', 'utf8'));

// Trailer mapping for popular and multiverse titles
const TRAILER_MAP = {
  'iron-man-2008': '8ugaeA-nMTc',
  'iron-man-2-2010': 'BoohRoVA9WQ',
  'iron-man-3-2013': 'Ke1Y3P9D0Bc',
  'the-incredible-hulk-2008': 'xbqNb2PFKKA',
  'thor-2011': 'JOddp-nlNvQ',
  'thor-the-dark-world-2013': 'npvJ9FTgZbM',
  'thor-ragnarok-2017': 'ue80QwXMRHg',
  'thor-love-and-thunder-2022': 'Go8nTmfrQd8',
  'captain-america-the-first-avenger-2011': 'JerVrbLldXw',
  'captain-america-the-winter-soldier-2014': '7SlILk2WMTI',
  'captain-america-civil-war-2016': 'dKrVegVI0Us',
  'the-avengers-2012': 'eOrNdBpGMv8',
  'avengers-age-of-ultron-2015': 'tmeOjFno6Do',
  'avengers-infinity-war-2018': '6ZfuNTqbHE8',
  'avengers-endgame-2019': 'TcMBFSGVi1c',
  'guardians-of-the-galaxy-2014': 'd96cjJhvlMA',
  'guardians-of-the-galaxy-vol-2-2017': 'dW1BIid8O64',
  'guardians-of-the-galaxy-vol-3-2023': 'u3V5KDHRQvk',
  'ant-man-2015': 'pWdKf3MneyI',
  'ant-man-and-the-wasp-2018': '8_rTIAOohas',
  'ant-man-quantumania-2023': 'ZlNFpri-Y40',
  'doctor-strange-2016': 'HSzx-zryEgM',
  'doctor-strange-multiverse-2022': 'aWzlQ2N6qqg',
  'spider-man-homecoming-2017': 'n9DwoQ7HWvI',
  'spider-man-far-from-home-2019': 'Nt9L1jCKGnE',
  'spider-man-no-way-home-2021': 'JfVOs4VSpmA',
  'black-panther-2018': 'xjDjIWPwcPU',
  'black-panther-wakanda-forever-2022': '_Z3QKkl1WyM',
  'captain-marvel-2019': 'Z1BCujX3pw8',
  'black-widow-2021': 'ybji16u608U',
  'shang-chi-2021': '8YjFbMbfXaQ',
  'eternals-2021': '0WVDKZJkGlY',
  'deadpool-and-wolverine-2024': '73_1biulkYk',
  'wandavision-2021': 'sj9J2ecsSpo',
  'loki-s1-2021': 'nW948Va-l10',
  'falcon-winter-soldier-2021': 'IWBsDaFWyTE',
  'hawkeye-2021': '5VYb3B1ETlk',
  'moon-knight-2022': 'x7Krla_UxRg',
  'ms-marvel-2022': 'm9EX0f6V11Y',
  'she-hulk-2022': 'gEl6MxQ167s',
  'secret-invasion-2023': 'Tp_YZNqNBhw',
  'the-marvels-2023': 'wS_qbD0Akhs',
  'echo-2024': 'AFUKnU11-n8',
  'agatha-all-along-2024': 'R9P6jF8wFjE',

  // Tobey Maguire Spider-Man
  'spider-man-2002': 't06RUxP0r9M',
  'spider-man-2-2004': '1s9Yln0Yscw',
  'spider-man-3-2007': 'e5wUilOeOmg',

  // Andrew Garfield Amazing Spider-Man
  'the-amazing-spider-man-2012': '-tnxzJ0SSOw',
  'the-amazing-spider-man-2-2014': 'nbp3Ra3YpCE',

  // Sony Spider-Man Universe (SSU)
  'venom-2018': 'u9Mv98Gr5pY',
  'venom-let-there-be-carnage-2021': '-FmWuCgJmxo',
  'morbius-2022': 'oZ6iiRrz1SY',
  'madame-web-2024': 's_76M4c4LTo',
  'venom-the-last-dance-2024': '__2bjWbetsA',

  // Fox X-Men Universe
  'x-men-2000': 'nbdc36kPsm0',
  'x2-2003': 'VNdqkdvi-qE',
  'x-men-the-last-stand-2006': '1jMhU0fVfFw',
  'x-men-origins-wolverine-2009': 'LPmbGzKep-s',
  'x-men-first-class-2011': 'kyQKi5W5n3o',
  'the-wolverine-2013': 'th1NTVi228g',
  'x-men-days-of-future-past-2014': 'pK2zYHWDZKo',
  'deadpool-2016': 'ONHBaC-pfsk',
  'x-men-apocalypse-2016': 'COvnHv42T-A',
  'logan-2017': 'Div0iP65aAE',
  'deadpool-2-2018': 'D86RtevtfrA',
  'dark-phoenix-2019': 'azvR__GANC8',
  'the-new-mutants-2020': 'W_vJhUAOF2I',

  // Marvel Classics
  'ghost-rider-2007': 'e7Wb5bMsmR8',
  'ghost-rider-spirit-of-vengeance-2011': '2-pX8eZq7jU',
  'blade-1998': 'kaU2AAU8ifg',
  'blade-ii-2002': 'l361fVfMv3I',
  'blade-trinity-2004': 'm9gX-bN_q4I',
  'daredevil-2003': 'f5_NqI_aH3I',
  'fantastic-four-2005': 'r7fU03e_i0g',
  'fantastic-four-rise-of-the-silver-surfer-2007': 'x4dC40Z9qW8'
};

finalCatalog.forEach(movie => {
  if (TRAILER_MAP[movie.id]) {
    movie.trailerKey = TRAILER_MAP[movie.id];
  }
});

// Clean, professional Major Heroes List (No tacky AI emoji/icons)
const MAJOR_HEROES = [
  { id: "all", name: "All Heroes", nameTh: "ฮีโร่ทั้งหมด" },
  { id: "Iron Man", name: "Iron Man", nameTh: "ไอรอนแมน" },
  { id: "Spider-Man", name: "Spider-Man", nameTh: "สไปเดอร์แมน" },
  { id: "Wolverine", name: "Wolverine", nameTh: "วูล์ฟเวอรีน" },
  { id: "Deadpool", name: "Deadpool", nameTh: "เดดพูล" },
  { id: "Venom", name: "Venom", nameTh: "เวน่อม" },
  { id: "Ghost Rider", name: "Ghost Rider", nameTh: "โกสต์ไรเดอร์" },
  { id: "Blade", name: "Blade", nameTh: "เบลด" },
  { id: "Captain America", name: "Captain America", nameTh: "กัปตันอเมริกา" },
  { id: "Thor", name: "Thor", nameTh: "ธอร์" },
  { id: "Doctor Strange", name: "Doctor Strange", nameTh: "ด็อกเตอร์สเตรนจ์" },
  { id: "Loki", name: "Loki", nameTh: "โลกิ" },
  { id: "Scarlet Witch", name: "Scarlet Witch", nameTh: "สการ์เล็ตวิทช์" },
  { id: "Black Panther", name: "Black Panther", nameTh: "แบล็คแพนเธอร์" },
  { id: "Hulk", name: "Hulk", nameTh: "ฮัลค์" },
  { id: "Professor X", name: "Professor X", nameTh: "ศาสตราจารย์ เอ็กซ์" },
  { id: "Magneto", name: "Magneto", nameTh: "แมกนีโต" },
  { id: "Daredevil", name: "Daredevil", nameTh: "แดร์เดวิล" }
];

// Infinity Stones
const INFINITY_STONES_DATA = [
  {
    name: "Space Stone",
    nameTh: "สเปซ สโตน (Space Stone)",
    color: "#00D2FF",
    container: "The Tesseract",
    power: "Grants omnipresence, instant teleportation through portals across dimensions, and gravity/space manipulation.",
    firstAppeared: "Captain America: The First Avenger (2011)",
    keyMovies: ["Captain America: The First Avenger", "The Avengers", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Mind Stone",
    nameTh: "มายด์ สโตน (Mind Stone)",
    color: "#FFE600",
    container: "Loki's Scepter / Vision's Forehead",
    power: "Bestows supreme telepathic prowess, psionic energy blasts, consciousness manipulation, and sentience to AI.",
    firstAppeared: "The Avengers (2012)",
    keyMovies: ["The Avengers", "Avengers: Age of Ultron", "Captain America: Civil War", "Avengers: Infinity War", "WandaVision"]
  },
  {
    name: "Reality Stone",
    nameTh: "เรียลลิตี้ สโตน (Reality Stone)",
    color: "#FF0055",
    container: "The Aether",
    power: "Rewrites the physical laws of nature, turns matter into bubbles or dust, and creates deceptive alternate realities.",
    firstAppeared: "Thor: The Dark World (2013)",
    keyMovies: ["Thor: The Dark World", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Power Stone",
    nameTh: "เพาเวอร์ สโตน (Power Stone)",
    color: "#BD00FF",
    container: "The Orb of Morag",
    power: "Unleashes apocalyptic kinetic devastation capable of wiping out civilizations and surface biospheres.",
    firstAppeared: "Guardians of the Galaxy (2014)",
    keyMovies: ["Guardians of the Galaxy", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Time Stone",
    nameTh: "ไทม์ สโตน (Time Stone)",
    color: "#00FF85",
    container: "The Eye of Agamotto",
    power: "Manipulates temporal flow, freezes or reverses events, creates infinite time loops, and views 14,000,605 possible futures.",
    firstAppeared: "Doctor Strange (2016)",
    keyMovies: ["Doctor Strange", "Avengers: Infinity War", "Avengers: Endgame"]
  },
  {
    name: "Soul Stone",
    nameTh: "โซล สโตน (Soul Stone)",
    color: "#FF7700",
    container: "Guarded on Vormir",
    power: "Governs life and death, communicates with pocket soul realms, and demands 'a soul for a soul' to be claimed.",
    firstAppeared: "Avengers: Infinity War (2018)",
    keyMovies: ["Avengers: Infinity War", "Avengers: Endgame"]
  }
];

// Available Avatars
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

// Demo Users
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

// Comprehensive Sagas & Universes breakdown with Bilingual Support
const MCU_PHASES = [
  {
    id: "Phase 1",
    name: "MCU Phase 1: Avengers Assembled",
    nameTh: "MCU เฟส 1: รวมพลอเวนเจอร์ส",
    span: "2008 – 2012",
    saga: "The Infinity Saga",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
    description: "The founding era that introduced Earth's mightiest heroes and set the foundation for the cinematic universe.",
    descriptionTh: "ยุคบุกเบิกที่เปิดตัวเหล่าฮีโร่ผู้ยิ่งใหญ่และวางรากฐานของจักรวาลภาพยนตร์มาร์เวล"
  },
  {
    id: "Phase 2",
    name: "MCU Phase 2: Dark Times & Cosmic Frontiers",
    nameTh: "MCU เฟส 2: ยุคแห่งความมืดมิดและพรมแดนอวกาศ",
    span: "2013 – 2015",
    saga: "The Infinity Saga",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    description: "Confronting Hydra's infiltration, exploring cosmic realms with the Guardians, and the terrifying birth of Ultron.",
    descriptionTh: "เผชิญหน้ากับการแทรกซึมของไฮดรา สำรวจจักรวาลไปกับเดอะการ์เดียนส์ และกำเนิดอัลตรอน"
  },
  {
    id: "Phase 3",
    name: "MCU Phase 3: Civil War & The Infinity Gauntlet",
    nameTh: "MCU เฟส 3: ซีวิลวอร์ และถุงมืออินฟินิตี้",
    span: "2016 – 2019",
    saga: "The Infinity Saga",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    description: "The peak era of internal conflict, universal stakes, the decimation of the Snap, and the glorious climax of Endgame.",
    descriptionTh: "จุดสูงสุดของความขัดแย้ง สงครามการดีดนิ้วของธานอส และบทสรุปอันยิ่งใหญ่ใน Endgame"
  },
  {
    id: "Phase 4",
    name: "MCU Phase 4: Multiverse Fractures & Legacies",
    nameTh: "MCU เฟส 4: มัลติเวิร์สและตำนานบทใหม่",
    span: "2021 – 2022",
    saga: "The Multiverse Saga",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    description: "Processing collective trauma, welcoming Disney+ long-form storytelling, and tearing open the multiversal fabric.",
    descriptionTh: "การก้าวข้ามความสูญเสีย ซีรีส์ Disney+ และการฉีกมิติเปิดประตูสู่มัลติเวิร์ส"
  },
  {
    id: "Phase 5",
    name: "MCU Phase 5: Secret Wars Horizon",
    nameTh: "MCU เฟส 5: สู่สงครามลับแห่งมัลติเวิร์ส",
    span: "2023 – Present",
    saga: "The Multiverse Saga",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    description: "Rocket's farewell, mutants arriving at full force, and high-octane multiversal team-ups leading toward Avengers: Doomsday.",
    descriptionTh: "การเดินทางของเหล่าการ์เดียนส์ การมาถึงของมนุษย์กลายพันธุ์ และการรวมพลังสู่ Doomsday"
  },
  {
    id: "Raimi Trilogy",
    name: "Sam Raimi's Spider-Man Trilogy",
    nameTh: "สไปเดอร์แมน ไตรภาค แซม ไรมี (โทบีย์)",
    span: "2002 – 2007",
    saga: "Spider-Man Legacy",
    badgeColor: "bg-red-600/20 text-red-400 border-red-500/40",
    description: "Tobey Maguire's iconic run as Peter Parker facing Green Goblin, Doc Ock, Sandman, and Venom (Earth-96283).",
    descriptionTh: "ตำนานไตรภาคของ โทบีย์ แมไกวร์ กับบทเรียนพลังอันยิ่งใหญ่และความรับผิดชอบ"
  },
  {
    id: "Webb Series",
    name: "The Amazing Spider-Man Series",
    nameTh: "ดิ อะเมซิ่ง สไปเดอร์แมน (แอนดรูว์)",
    span: "2012 – 2014",
    saga: "Spider-Man Legacy",
    badgeColor: "bg-blue-600/20 text-blue-400 border-blue-500/40",
    description: "Andrew Garfield's emotional, acrobatic portrayal with Gwen Stacy, Lizard, Electro, and Green Goblin (Earth-120703).",
    descriptionTh: "การแสดงอันทรงพลังของ แอนดรูว์ การ์ฟิลด์ ในบทปีเตอร์ ปาร์คเกอร์และเกวน สเตซี่"
  },
  {
    id: "SSU",
    name: "Sony's Spider-Man Universe (SSU)",
    nameTh: "จักรวาลโซนี่ สไปเดอร์แมน (SSU & เวน่อม)",
    span: "2018 – 2024",
    saga: "Sony Universe & Venom",
    badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600",
    description: "Anti-heroes and lethal protectors: Tom Hardy's Venom trilogy, Morbius, and Madame Web exploring destiny's threads.",
    descriptionTh: "จักรวาลแอนตี้ฮีโร่ ทอม ฮาร์ดี้ ในบทเวน่อม, มอร์เบียส และมาดามเว็บ"
  },
  {
    id: "Original Trilogy",
    name: "Fox X-Men: Original Trilogy",
    nameTh: "Fox X-Men: ไตรภาคแรกเริ่ม",
    span: "2000 – 2006",
    saga: "X-Men & Mutants (Fox)",
    badgeColor: "bg-cyan-600/20 text-cyan-400 border-cyan-500/40",
    description: "Hugh Jackman's breakout as Wolverine, Patrick Stewart's Xavier, Ian McKellen's Magneto, and the Dark Phoenix saga.",
    descriptionTh: "จุดเริ่มต้นของ ฮิว แจ็กแมน ในบทวูล์ฟเวอรีน และสงครามอุดมการณ์มนุษย์กลายพันธุ์"
  },
  {
    id: "Wolverine Trilogy",
    name: "The Wolverine Trilogy & Logan",
    nameTh: "วูล์ฟเวอรีน และ โลแกน",
    span: "2009 – 2017",
    saga: "X-Men & Mutants (Fox)",
    badgeColor: "bg-amber-600/20 text-amber-400 border-amber-600/40",
    description: "Origins in Weapon X, a journey through Japan, and the universally acclaimed cinematic farewell in Logan (2017).",
    descriptionTh: "จุดกำเนิดโครงการ Weapon X สู่ผลงานชิ้นเอกที่ได้รับคำชมสูงสุดใน Logan (2017)"
  },
  {
    id: "Prequel Era",
    name: "X-Men: First Class & Prequels",
    nameTh: "X-Men: ยุคพรีเควลและสงครามข้ามเวลา",
    span: "2011 – 2019",
    saga: "X-Men & Mutants (Fox)",
    badgeColor: "bg-indigo-600/20 text-indigo-400 border-indigo-500/40",
    description: "The young Charles Xavier and Erik Lehnsherr, Days of Future Past time travel, Apocalypse, and Dark Phoenix.",
    descriptionTh: "ชาร์ลส์ เซเวียร์ และ เอริค เลห์นเชอร์ วัยหนุ่ม และการเดินทางข้ามเวลาใน Days of Future Past"
  },
  {
    id: "Deadpool Series",
    name: "Deadpool Series",
    nameTh: "เดดพูล ซีรีส์",
    span: "2016 – 2018",
    saga: "X-Men & Mutants (Fox)",
    badgeColor: "bg-red-700/20 text-red-400 border-red-600/40",
    description: "Ryan Reynolds' fourth-wall-breaking Merc with a Mouth, shattering R-rated box office records and assembling X-Force.",
    descriptionTh: "ไรอัน เรย์โนลด์ส ในบททหารรับจ้างสายเกรียน ทำลายกำแพงที่สี่และสถิติบ็อกซ์ออฟฟิศเรท R"
  },
  {
    id: "Blade Trilogy",
    name: "Blade Trilogy",
    nameTh: "เบลด ไตรภาคพันธุ์ฆ่าอมตะ",
    span: "1998 – 2004",
    saga: "Marvel Classics (Ghost Rider & Blade)",
    badgeColor: "bg-rose-950/40 text-rose-300 border-rose-700/40",
    description: "Wesley Snipes as the daywalker Blade, the vampire hunter trilogy that sparked the modern comic book movie renaissance.",
    descriptionTh: "เวสลีย์ สไนปส์ ในบทนักล่าแวมไพร์ลูกผสม ผู้จุดประกายยุคทองของหนังฮีโร่ยุคใหม่"
  },
  {
    id: "Marvel Knights",
    name: "Ghost Rider & Marvel Knights",
    nameTh: "โกสต์ไรเดอร์ และ มาร์เวลไนท์ส",
    span: "2003 – 2011",
    saga: "Marvel Classics (Ghost Rider & Blade)",
    badgeColor: "bg-orange-600/20 text-orange-400 border-orange-500/40",
    description: "Nicolas Cage's flaming skull biker Ghost Rider and Ben Affleck's vigilante Daredevil.",
    descriptionTh: "นิโคลัส เคจ ในบทโกสต์ไรเดอร์ มอเตอร์ไซค์เพลิง และ เบน แอฟเฟล็ก ในบทแดร์เดวิล"
  },
  {
    id: "Story Era",
    name: "Fantastic Four (2000s Era)",
    nameTh: "แฟนแทสติกโฟร์ ยุค 2000s",
    span: "2005 – 2007",
    saga: "Marvel Classics (Ghost Rider & Blade)",
    badgeColor: "bg-sky-600/20 text-sky-400 border-sky-500/40",
    description: "Marvel's First Family battling Doctor Doom and the celestial herald Silver Surfer with Chris Evans as Human Torch.",
    descriptionTh: "ครอบครัวซูเปอร์ฮีโร่ทีมแรกของมาร์เวล ปะทะ ด็อกเตอร์ดูม และ ซิลเวอร์เซิร์ฟเฟอร์"
  }
];

// Build complete data.js output
const outputCode = `/**
 * Marvel Cinematic Universe (MCU) & Multiverse Review & Hub
 * Comprehensive Data Repository with Real High-Resolution Posters & Multi-Universe Categories
 * Total Catalog Count: ${finalCatalog.length} Titles
 */

const MCU_CATALOG = ${JSON.stringify(finalCatalog, null, 2)};

const MAJOR_HEROES = ${JSON.stringify(MAJOR_HEROES, null, 2)};

const INFINITY_STONES_DATA = ${JSON.stringify(INFINITY_STONES_DATA, null, 2)};

const AVAILABLE_AVATARS = ${JSON.stringify(AVAILABLE_AVATARS, null, 2)};

const DEMO_USERS = ${JSON.stringify(DEMO_USERS, null, 2)};

const MCU_PHASES = ${JSON.stringify(MCU_PHASES, null, 2)};

// Export for browser window and Node.js
if (typeof window !== 'undefined') {
  window.MCU_CATALOG = MCU_CATALOG;
  window.MAJOR_HEROES = MAJOR_HEROES;
  window.INFINITY_STONES_DATA = INFINITY_STONES_DATA;
  window.AVAILABLE_AVATARS = AVAILABLE_AVATARS;
  window.DEMO_USERS = DEMO_USERS;
  window.MCU_PHASES = MCU_PHASES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MCU_CATALOG,
    MAJOR_HEROES,
    INFINITY_STONES_DATA,
    AVAILABLE_AVATARS,
    DEMO_USERS,
    MCU_PHASES
  };
}
`;

fs.writeFileSync('data.js', outputCode);
console.log(`Successfully generated data.js with ${finalCatalog.length} movies and authentic HD posters!`);
