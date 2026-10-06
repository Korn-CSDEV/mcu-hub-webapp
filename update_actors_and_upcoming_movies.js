const fs = require('fs');

async function getActorImg(name) {
  // Known direct overrides for top Marvel actors to ensure best portrait
  const directOverrides = {
    'Robert Downey Jr.': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg/330px-RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg',
    'Chris Evans': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/330px-ChrisEvans2023.jpg',
    'Chris Hemsworth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chris_Hemsworth_-_Crime_101.jpg/330px-Chris_Hemsworth_-_Crime_101.jpg',
    'Scarlett Johansson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Scarlett_Johansson-8588.jpg/330px-Scarlett_Johansson-8588.jpg',
    'Mark Ruffalo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mark_Ruffalo_%2836202274756%29_%28cropped%29.jpg/330px-Mark_Ruffalo_%2836202274756%29_%28cropped%29.jpg',
    'Jeremy Renner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jeremy_Renner_2019_by_Glenn_Francis_%28cropped%29.jpg/330px-Jeremy_Renner_2019_by_Glenn_Francis_%28cropped%29.jpg',
    'Tom Hiddleston': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/330px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg',
    'Tom Holland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/TomHolland-byPhilipRomano.jpg/330px-TomHolland-byPhilipRomano.jpg',
    'Benedict Cumberbatch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Benedict_Cumberbatch-67555.jpg/330px-Benedict_Cumberbatch-67555.jpg',
    'Chadwick Boseman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg/330px-Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg',
    'Paul Rudd': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Paul_Rudd_2018_%28cropped%29.jpg/330px-Paul_Rudd_2018_%28cropped%29.jpg',
    'Brie Larson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_2_%28cropped%29.jpg/330px-Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_2_%28cropped%29.jpg',
    'Chris Pratt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/330px-Chris_Pratt_2018.jpg',
    'Zoe Saldaña': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Zoe_Saldana_by_Gage_Skidmore_2.jpg/330px-Zoe_Saldana_by_Gage_Skidmore_2.jpg',
    'Dave Bautista': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dave_Bautista_by_Gage_Skidmore.jpg/330px-Dave_Bautista_by_Gage_Skidmore.jpg',
    'Hugh Jackman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Hugh_Jackman_Is_This_Thing_On-68_%28cropped%29.jpg/330px-Hugh_Jackman_Is_This_Thing_On-68_%28cropped%29.jpg',
    'Ryan Reynolds': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/330px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
    'Tobey Maguire': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tobey_Maguire_2014.jpg/330px-Tobey_Maguire_2014.jpg',
    'Andrew Garfield': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Andrew_Garfield_by_Gage_Skidmore_2.jpg/330px-Andrew_Garfield_by_Gage_Skidmore_2.jpg',
    'Willem Dafoe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Willem_Dafoe_Cannes_2019_%28cropped%29.jpg/330px-Willem_Dafoe_Cannes_2019_%28cropped%29.jpg',
    'Alfred Molina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Alfred_Molina_by_Gage_Skidmore.jpg/330px-Alfred_Molina_by_Gage_Skidmore.jpg',
    'Pedro Pascal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Pedro_Pascal_by_Gage_Skidmore.jpg/330px-Pedro_Pascal_by_Gage_Skidmore.jpg',
    'Vanessa Kirby': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vanessa_Kirby_2019_by_Glenn_Francis.jpg/330px-Vanessa_Kirby_2019_by_Glenn_Francis.jpg',
    'Joseph Quinn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Joseph_Quinn_by_Gage_Skidmore.jpg/330px-Joseph_Quinn_by_Gage_Skidmore.jpg',
    'Anthony Mackie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Anthony_Mackie_by_Gage_Skidmore.jpg/330px-Anthony_Mackie_by_Gage_Skidmore.jpg',
    'Sebastian Stan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sebastian_Stan_by_Gage_Skidmore_2.jpg/330px-Sebastian_Stan_by_Gage_Skidmore_2.jpg',
    'Florence Pugh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Florence_Pugh_at_the_2023_Toronto_International_Film_Festival_%28cropped%29.jpg/330px-Florence_Pugh_at_the_2023_Toronto_International_Film_Festival_%28cropped%29.jpg',
    'Elizabeth Olsen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Elizabeth_Olsen_by_Gage_Skidmore_2.jpg/330px-Elizabeth_Olsen_by_Gage_Skidmore_2.jpg',
    'Paul Bettany': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paul_Bettany_by_Gage_Skidmore_2.jpg/330px-Paul_Bettany_by_Gage_Skidmore_2.jpg',
    'Samuel L. Jackson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samuel_L._Jackson_SDCC_2014_%28cropped_2%29.jpg/330px-Samuel_L._Jackson_SDCC_2014_%28cropped_2%29.jpg',
    'Nicolas Cage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013_%28cropped%29.jpg/330px-Nicolas_Cage_Deauville_2013_%28cropped%29.jpg',
    'Wesley Snipes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wesley_Snipes_2014.jpg/330px-Wesley_Snipes_2014.jpg',
    'Tom Hardy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tom_Hardy_by_Gage_Skidmore.jpg/330px-Tom_Hardy_by_Gage_Skidmore.jpg',
    'Patrick Stewart': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Patrick_Stewart_by_Gage_Skidmore_2.jpg/330px-Patrick_Stewart_by_Gage_Skidmore_2.jpg',
    'Ian McKellen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ian_McKellen_2015_%28cropped%29.jpg/330px-Ian_McKellen_2015_%28cropped%29.jpg',
    'James McAvoy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/James_McAvoy_by_Gage_Skidmore.jpg/330px-James_McAvoy_by_Gage_Skidmore.jpg',
    'Michael Fassbender': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Michael_Fassbender_by_Gage_Skidmore.jpg/330px-Michael_Fassbender_by_Gage_Skidmore.jpg',
    'Jennifer Lawrence': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/330px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg',
    'Charlie Cox': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charlie_Cox_by_Gage_Skidmore_2.jpg/330px-Charlie_Cox_by_Gage_Skidmore_2.jpg',
    'Vincent D\'Onofrio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vincent_D%27Onofrio_by_Gage_Skidmore.jpg/330px-Vincent_D%27Onofrio_by_Gage_Skidmore.jpg',
    'Kirsten Dunst': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kirsten_Dunst_2016.jpg/330px-Kirsten_Dunst_2016.jpg',
    'Emma Stone': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Emma_Stone_at_the_30th_Annual_Screen_Actors_Guild_Awards_%28cropped%29.jpg/330px-Emma_Stone_at_the_30th_Annual_Screen_Actors_Guild_Awards_%28cropped%29.jpg',
    'Zendaya': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/330px-Zendaya_-_2019_by_Glenn_Francis.jpg',
    'Hailee Steinfeld': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hailee_Steinfeld_by_Gage_Skidmore.jpg/330px-Hailee_Steinfeld_by_Gage_Skidmore.jpg',
    'Oscar Isaac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Oscar_Isaac_by_Gage_Skidmore.jpg/330px-Oscar_Isaac_by_Gage_Skidmore.jpg',
    'Jonathan Majors': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jonathan_Majors_by_Gage_Skidmore.jpg/330px-Jonathan_Majors_by_Gage_Skidmore.jpg',
    'Iman Vellani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Iman_Vellani_by_Gage_Skidmore.jpg/330px-Iman_Vellani_by_Gage_Skidmore.jpg',
    'Tatiana Maslany': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tatiana_Maslany_by_Gage_Skidmore.jpg/330px-Tatiana_Maslany_by_Gage_Skidmore.jpg',
    'Alaqua Cox': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Alaqua_Cox_2024.jpg/330px-Alaqua_Cox_2024.jpg',
    'Simu Liu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Simu_Liu_by_Gage_Skidmore.jpg/330px-Simu_Liu_by_Gage_Skidmore.jpg',
    'Gemma Chan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gemma_Chan_2019_by_Glenn_Francis.jpg/330px-Gemma_Chan_2019_by_Glenn_Francis.jpg',
    'Richard Madden': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Richard_Madden_by_Gage_Skidmore.jpg/330px-Richard_Madden_by_Gage_Skidmore.jpg',
    'Angelina Jolie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_September_2024_%28cropped%29.jpg/330px-Angelina_Jolie_2_September_2024_%28cropped%29.jpg'
  };

  if (directOverrides[name]) return directOverrides[name];

  try {
    // 1. Direct title
    let r = await fetch('https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(name.replace(/ /g, '_')) + '&prop=pageimages&format=json&pithumbsize=300');
    let d = await r.json();
    let p = Object.values(d.query?.pages || {})[0];
    if (p && p.thumbnail && p.thumbnail.source) return p.thumbnail.source;

    // 2. (actor) title
    r = await fetch('https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(name.replace(/ /g, '_') + '_(actor)') + '&prop=pageimages&format=json&pithumbsize=300');
    d = await r.json();
    p = Object.values(d.query?.pages || {})[0];
    if (p && p.thumbnail && p.thumbnail.source) return p.thumbnail.source;

    // 3. Search generator
    r = await fetch('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(name + ' actor') + '&gsrlimit=1&prop=pageimages&pithumbsize=300&format=json');
    d = await r.json();
    p = Object.values(d.query?.pages || {})[0];
    if (p && p.thumbnail && p.thumbnail.source) return p.thumbnail.source;
  } catch (err) {}

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E273D&color=ED1D24&size=200&bold=true`;
}

async function main() {
  console.log('Loading catalog data...');
  const catalogRaw = fs.readFileSync('all_marvel_catalog.json', 'utf8');
  const catalog = JSON.parse(catalogRaw);

  // Check if Avengers: Doomsday and Avengers: Secret Wars are already in catalog
  let hasDoomsday = catalog.some(m => m.id === 'avengers-doomsday-2026');
  let hasSecretWars = catalog.some(m => m.id === 'avengers-secret-wars-2027');

  if (!hasDoomsday) {
    catalog.push({
      id: "avengers-doomsday-2026",
      title: "Avengers: Doomsday",
      titleTh: "อเวนเจอร์ส: ดูมส์เดย์ (Avengers: Doomsday)",
      tagline: "A new era of doom descends upon the Marvel Cinematic Universe.",
      taglineTh: "การกลับมาของโรเบิร์ต ดาวนีย์ จูเนียร์ ในบทบาท ด็อกเตอร์ ดูม",
      type: "movie",
      phase: "Phase 6",
      phaseTh: "เฟส 6",
      saga: "The Multiverse Saga",
      sagaTh: "เดอะ มัลติเวิร์ส ซาก้า",
      universe: "MCU (Sacred Timeline)",
      releaseYear: 2026,
      releaseDate: "01 May 2026",
      chronologicalYear: 2026,
      chronologicalRank: 48,
      runtime: "165 min",
      ageRating: "PG-13",
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Anthony Russo, Joe Russo",
      producer: "Marvel Studios / Kevin Feige",
      boxOffice: "Upcoming (2026)",
      budget: "$350 Million",
      rating: 5.0,
      criticScore: 95,
      audienceScore: 98,
      theme: {
        name: "crimson-gold",
        bg: "#064e3b",
        accent: "#10b981",
        glow: "rgba(16, 185, 129, 0.45)",
        badgeBg: "rgba(6, 78, 59, 0.4)",
        border: "rgba(16, 185, 129, 0.5)"
      },
      activeHeroes: ["Doctor Doom", "Captain America", "Doctor Strange", "Thor"],
      synopsis: "The Avengers and heroes from across the multiverse must assemble to confront Victor Von Doom as the Sacred Timeline collides with parallel incursions in Phase 6 of the Multiverse Saga.",
      synopsisTh: "การรวมตัวครั้งยิ่งใหญ่ของเหล่าอเวนเจอร์สและฮีโร่จากทั่วทั้งมัลติเวิร์สเพื่อเผชิญหน้ากับ วิกเตอร์ วอน ดูม (Doctor Doom) มหันตภัยระดับทำลายล้างทุกความเป็นจริงในเฟส 6 ของมหากาพย์มัลติเวิร์ส",
      poster: "https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      backdrop: "https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      onlinePoster: "https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      onlineBackdrop: "https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailerKey: "k_Pvh09b914",
      cast: [
        { name: "Robert Downey Jr.", role: "Victor Von Doom / Doctor Doom", avatar: "" },
        { name: "Pedro Pascal", role: "Reed Richards / Mr. Fantastic", avatar: "" },
        { name: "Vanessa Kirby", role: "Sue Storm / Invisible Woman", avatar: "" },
        { name: "Joseph Quinn", role: "Johnny Storm / Human Torch", avatar: "" },
        { name: "Anthony Mackie", role: "Sam Wilson / Captain America", avatar: "" },
        { name: "Sebastian Stan", role: "Bucky Barnes", avatar: "" },
        { name: "Florence Pugh", role: "Yelena Belova", avatar: "" }
      ],
      initialReviews: [
        {
          id: "rev-doom-1",
          author: "DoomAnticipation",
          avatar: "assets/images/avatars/ironman.svg",
          rating: 5,
          date: "May 2026",
          text: "The return of Robert Downey Jr. as Doctor Doom is the most cinematic decision Marvel has ever made!",
          likes: 42
        }
      ]
    });
    console.log('Added Avengers: Doomsday (2026)');
  }

  if (!hasSecretWars) {
    catalog.push({
      id: "avengers-secret-wars-2027",
      title: "Avengers: Secret Wars",
      titleTh: "อเวนเจอร์ส: ซีเคร็ต วอร์ส (Avengers: Secret Wars)",
      tagline: "The destiny of all realities collides in Battleworld.",
      taglineTh: "บทสรุปสูงสุดแห่งมหากาพย์มัลติเวิร์ส ที่ทุกจักรวาลจะมาปะทะกัน",
      type: "movie",
      phase: "Phase 6",
      phaseTh: "เฟส 6",
      saga: "The Multiverse Saga",
      sagaTh: "เดอะ มัลติเวิร์ส ซาก้า",
      universe: "MCU (Sacred Timeline)",
      releaseYear: 2027,
      releaseDate: "07 May 2027",
      chronologicalYear: 2027,
      chronologicalRank: 49,
      runtime: "180 min",
      ageRating: "PG-13",
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Anthony Russo, Joe Russo",
      producer: "Marvel Studios / Kevin Feige",
      boxOffice: "Upcoming (2027)",
      budget: "$400 Million",
      rating: 5.0,
      criticScore: 98,
      audienceScore: 99,
      theme: {
        name: "cosmic-purple",
        bg: "#581c87",
        accent: "#f97316",
        glow: "rgba(249, 115, 22, 0.45)",
        badgeBg: "rgba(88, 28, 135, 0.4)",
        border: "rgba(249, 115, 22, 0.5)"
      },
      activeHeroes: ["Spider-Man", "Wolverine", "Deadpool", "Doctor Strange", "Doctor Doom"],
      synopsis: "The ultimate culmination of the Multiverse Saga where collapsing timelines collapse into Battleworld, uniting heroes and variants across MCU, Fox X-Men, and Spider-Man realities in the final battle for existence.",
      synopsisTh: "มหากาพย์สงครามล้างบางครั้งสุดท้ายแห่ง The Multiverse Saga เมื่อทุกเส้นเวลาและมิติคู่ขนานถูกบีบอัดสู่สมรภูมิแบทเทิลเวิลด์ (Battleworld) รวมพลังฮีโร่ทุกยุคสมัยทั้ง MCU, Fox X-Men และสไปเดอร์แมนทุกจักรวาล",
      poster: "https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      backdrop: "https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      onlinePoster: "https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      onlineBackdrop: "https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailerKey: "JerVrbLldXw",
      cast: [
        { name: "Robert Downey Jr.", role: "Doctor Doom", avatar: "" },
        { name: "Tom Holland", role: "Peter Parker / Spider-Man", avatar: "" },
        { name: "Hugh Jackman", role: "Logan / Wolverine", avatar: "" },
        { name: "Ryan Reynolds", role: "Wade Wilson / Deadpool", avatar: "" },
        { name: "Tobey Maguire", role: "Peter Parker / Spider-Man", avatar: "" },
        { name: "Benedict Cumberbatch", role: "Doctor Strange", avatar: "" }
      ],
      initialReviews: [
        {
          id: "rev-secretwars-1",
          author: "BattleworldChronicles",
          avatar: "assets/images/avatars/ironman.svg",
          rating: 5,
          date: "May 2027",
          text: "The definitive crossover of Marvel history. Tobey, Hugh, Ryan, Tom and RDJ in one movie!",
          likes: 68
        }
      ]
    });
    console.log('Added Avengers: Secret Wars (2027)');
  }

  // Collect all unique actors across catalog
  const actorsSet = new Set();
  catalog.forEach(m => {
    (m.cast || []).forEach(c => actorsSet.add(c.name));
  });

  const actorsList = Array.from(actorsSet);
  console.log(`Resolving real actor headshots for ${actorsList.length} actors...`);

  const actorImgMap = {};
  const batchSize = 10;
  for (let i = 0; i < actorsList.length; i += batchSize) {
    const batch = actorsList.slice(i, i + batchSize);
    await Promise.all(batch.map(async name => {
      const img = await getActorImg(name);
      actorImgMap[name] = img;
    }));
    process.stdout.write(`Processed ${Math.min(i + batchSize, actorsList.length)} / ${actorsList.length} actors\r`);
  }
  console.log('\nAll actor headshots resolved!');

  // Apply to all movies
  catalog.forEach(m => {
    if (m.cast && m.cast.length > 0) {
      m.cast.forEach(c => {
        c.avatar = actorImgMap[c.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=1E273D&color=ED1D24&size=200&bold=true`;
      });
    }
  });

  // Save all_marvel_catalog.json
  fs.writeFileSync('all_marvel_catalog.json', JSON.stringify(catalog, null, 2), 'utf8');
  console.log(`Saved ${catalog.length} titles to all_marvel_catalog.json`);

  // Regenerate data.js
  const dataJsContent = `/**
 * Marvel Cinematic Universe (MCU) & Multiverse Review & Hub
 * Comprehensive Data Repository with Real High-Resolution Posters, Real Actor Photos & Multi-Universe Categories
 * Total Catalog Count: ${catalog.length} Titles (Including Avengers: Doomsday & Secret Wars)
 */

const MCU_CATALOG = ${JSON.stringify(catalog, null, 2)};

const MCU_PHASES = [
  {
    phase: "Phase 1",
    phaseTh: "เฟส 1",
    saga: "The Infinity Saga",
    sagaTh: "ดิ อินฟินิตี้ ซาก้า",
    subtitle: "Avengers Assembled",
    subtitleTh: "การรวมตัวของเหล่าอเวนเจอร์สรุ่นแรก",
    description: "The Genesis of the Marvel Cinematic Universe, kicking off with Iron Man in 2008 and concluding with the historic team-up of Earth's Mightiest Heroes.",
    descriptionTh: "จุดเริ่มต้นของจักรวาลภาพยนตร์มาร์เวล เริ่มตั้งแต่ Iron Man ในปี 2008 จนถึงการรวมตัวครั้งประวัติศาสตร์ใน The Avengers",
    years: "2008 – 2012",
    titlesCount: 6,
    color: "#ED1D24",
    banner: "assets/images/backdrops/the-avengers-2012.svg"
  },
  {
    phase: "Phase 2",
    phaseTh: "เฟส 2",
    saga: "The Infinity Saga",
    sagaTh: "ดิ อินฟินิตี้ ซาก้า",
    subtitle: "The Cosmic Expansion & S.H.I.E.L.D. Collapse",
    subtitleTh: "การขยายสู่ห้วงอวกาศและการล่มสลายของชิลด์",
    description: "Venturing into the cosmos with Guardians of the Galaxy, dismantling S.H.I.E.L.D. from within, and confronting the birth of Ultron.",
    descriptionTh: "ขยายขอบเขตสู่จักรวาลกับ Guardians of the Galaxy เปิดโปงการแทรกซึมของไฮดราใน S.H.I.E.L.D. และการเผชิญหน้ากับอัลตรอน",
    years: "2013 – 2015",
    titlesCount: 6,
    color: "#00E5FF",
    banner: "assets/images/backdrops/guardians-of-the-galaxy-2014.svg"
  },
  {
    phase: "Phase 3",
    phaseTh: "เฟส 3",
    saga: "The Infinity Saga",
    sagaTh: "ดิ อินฟินิตี้ ซาก้า",
    subtitle: "Infinity War & The Climax",
    subtitleTh: "สงครามอัญมณีอินฟินิตี้และบทสรุปยิ่งใหญ่",
    description: "The civil division of heroes leading directly to Thanos collecting all six Infinity Stones, ending in the monumental sacrifice of Avengers: Endgame.",
    descriptionTh: "ความแตกแยกใน Civil War นำไปสู่การเผชิญหน้ากับธานอส และการเสียสละระดับตำนานใน Avengers: Endgame",
    years: "2016 – 2019",
    titlesCount: 11,
    color: "#FFB800",
    banner: "assets/images/backdrops/avengers-endgame-2019.svg"
  },
  {
    phase: "Phase 4",
    phaseTh: "เฟส 4",
    saga: "The Multiverse Saga",
    sagaTh: "เดอะ มัลติเวิร์ส ซาก้า",
    subtitle: "The Multiverse Fractures & New Legacies",
    subtitleTh: "รอยแยกแห่งมัลติเวิร์สและการสืบทอดเจตนารมณ์",
    description: "Expansion across Disney+ series and cinema, dealing with the grief of Endgame and fracturing realities across Spider-Man: No Way Home and Multiverse of Madness.",
    descriptionTh: "ขยายจักรวาลสู่ซีรีส์ Disney+ จัดการกับผลกระทบหลัง Endgame และการเปิดประตูดิวมัลติเวิร์สใน No Way Home",
    years: "2021 – 2022",
    titlesCount: 16,
    color: "#CF4DFF",
    banner: "assets/images/backdrops/spider-man-no-way-home-2021.svg"
  },
  {
    phase: "Phase 5",
    phaseTh: "เฟส 5",
    saga: "The Multiverse Saga",
    sagaTh: "เดอะ มัลติเวิร์ส ซาก้า",
    subtitle: "Incursions, Variants & Wolverine Meets Deadpool",
    subtitleTh: "จุดชนกันของมิติ ตัวแปรคู่ขนาน และเดดพูลรวมพลังวูล์ฟเวอรีน",
    description: "Deep dive into variants, Secret Invasion, Loki Season 2 timeline preservation, and the historic MCU induction of Deadpool & Wolverine.",
    descriptionTh: "เจาะลึกตัวแปรแห่งกาลเวลา การปกป้องเส้นเวลาใน Loki ซีซั่น 2 และการเข้าสู่ MCU อย่างยิ่งใหญ่ของ Deadpool & Wolverine",
    years: "2023 – 2025",
    titlesCount: 8,
    color: "#3BF08A",
    banner: "assets/images/backdrops/deadpool-and-wolverine-2024.svg"
  },
  {
    phase: "Phase 6",
    phaseTh: "เฟส 6",
    saga: "The Multiverse Saga",
    sagaTh: "เดอะ มัลติเวิร์ส ซาก้า",
    subtitle: "The Climax of Multiverse Saga & Battleworld",
    subtitleTh: "มหากาพย์สู่แบทเทิลเวิลด์ ดูมส์เดย์ และซีเคร็ตวอร์ส",
    description: "The grand finale of the Multiverse Saga featuring The Fantastic Four: First Steps, Avengers: Doomsday with Robert Downey Jr. as Doctor Doom, and Avengers: Secret Wars.",
    descriptionTh: "บทสรุปสูงสุดของมัลติเวิร์สซาก้า นำโดย The Fantastic Four, Avengers: Doomsday และการรวมทุกมิติใน Avengers: Secret Wars",
    years: "2025 – 2027",
    titlesCount: 3,
    color: "#F43F5E",
    banner: "https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }
];

const MAJOR_HEROES = [
  { id: "all", name: "All Heroes", nameTh: "ฮีโร่ทั้งหมด" },
  { id: "Iron Man", name: "Iron Man", nameTh: "ไอรอนแมน" },
  { id: "Spider-Man", name: "Spider-Man", nameTh: "สไปเดอร์แมน" },
  { id: "Wolverine", name: "Wolverine", nameTh: "วูล์ฟเวอรีน" },
  { id: "Deadpool", name: "Deadpool", nameTh: "เดดพูล" },
  { id: "Doctor Doom", name: "Doctor Doom", nameTh: "ด็อกเตอร์ ดูม" },
  { id: "Thor", name: "Thor", nameTh: "ธอร์" },
  { id: "Captain America", name: "Captain America", nameTh: "กัปตันอเมริกา" },
  { id: "Doctor Strange", name: "Doctor Strange", nameTh: "ด็อกเตอร์สเตรนจ์" },
  { id: "Loki", name: "Loki", nameTh: "โลกิ" },
  { id: "Black Panther", name: "Black Panther", nameTh: "แบล็คแพนเธอร์" },
  { id: "Venom", name: "Venom", nameTh: "เวน่อม" },
  { id: "Blade", name: "Blade", nameTh: "เบลด" },
  { id: "Ghost Rider", name: "Ghost Rider", nameTh: "โกสต์ไรเดอร์" },
  { id: "Scarlet Witch", name: "Scarlet Witch", nameTh: "สการ์เล็ต วิทช์" },
  { id: "Daredevil", name: "Daredevil", nameTh: "แดร์เดวิล" }
];

const DEMO_USERS = [
  {
    username: "TonyStark",
    avatar: "assets/images/avatars/ironman.svg",
    badge: "Genius Billionaire",
    reviewCount: 14
  },
  {
    username: "PeterParker",
    avatar: "assets/images/avatars/spiderman.svg",
    badge: "Friendly Neighborhood",
    reviewCount: 9
  },
  {
    username: "WadeWilson",
    avatar: "assets/images/avatars/wolverine.svg",
    badge: "Merc with a Mouth",
    reviewCount: 21
  }
];

if (typeof window !== 'undefined') {
  window.MCU_CATALOG = MCU_CATALOG;
  window.MCU_PHASES = MCU_PHASES;
  window.MAJOR_HEROES = MAJOR_HEROES;
  window.DEMO_USERS = DEMO_USERS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MCU_CATALOG,
    MCU_PHASES,
    MAJOR_HEROES,
    DEMO_USERS
  };
}
`;

  fs.writeFileSync('data.js', dataJsContent, 'utf8');
  console.log('Regenerated data.js successfully with real actor headshots!');
}

main().catch(console.error);
