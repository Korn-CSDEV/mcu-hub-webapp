const fs = require('fs');

const rawCatalog = JSON.parse(fs.readFileSync('all_marvel_catalog.json', 'utf8'));

// High-resolution image transformer
function toHighResPoster(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('m.media-amazon.com')) {
    // Convert thumbnail to 1000px uncompressed high-def image
    return url.replace(/\._V1_.*\.jpg$/, '._V1_FMjpg_UX1000_.jpg');
  }
  return url;
}

// Thai Title & Tagline Map for key iconic movies
const THAI_METADATA_MAP = {
  'iron-man-2008': {
    titleTh: 'มหาประลัย คนเกราะเหล็ก (Iron Man)',
    taglineTh: 'ฮีโร่ไม่ได้เกิดมาเป็น แต่ถูกสร้างขึ้นมา',
    synopsisTh: 'โทนี่ สตาร์ค มหาเศรษฐีนักประดิษฐ์ถูกลักพาตัวในถ้ำอัฟกานิสถาน จึงสร้างชุดเกราะเหล็กติดอาวุธขึ้นมาเพื่อหลบหนีและกลายเป็นซูเปอร์ฮีโร่'
  },
  'the-avengers-2012': {
    titleTh: 'ดิ อเวนเจอร์ส (The Avengers)',
    taglineTh: 'การรวมตัวของเหล่าผู้พิทักษ์โลก',
    synopsisTh: 'นิค ฟิวรี รวบรวมทีมซูเปอร์ฮีโร่ที่ยิ่งใหญ่ที่สุดในโลกเพื่อหยุดยั้ง โลกิ และกองทัพเอเลี่ยน ชิทอรี่ จากการยึดครองโลก'
  },
  'avengers-infinity-war-2018': {
    titleTh: 'อเวนเจอร์ส: มหาสงครามล้างจักรวาล (Infinity War)',
    taglineTh: 'จุดจบอยู่ใกล้แค่เอื้อม',
    synopsisTh: 'ธานอสออกตามล่าอัญมณีอินฟินิตี้สโตนทั้ง 6 เพื่อล้างบางสิ่งมีชีวิตครึ่งจักรวาล เหล่าอเวนเจอร์สต้องรวมพลังกันในศึกครั้งประวัติศาสตร์'
  },
  'avengers-endgame-2019': {
    titleTh: 'อเวนเจอร์ส: เผด็จศึก (Endgame)',
    taglineTh: 'ไม่ว่าจะต้องแลกด้วยอะไรก็ตาม',
    synopsisTh: 'หลังจากการดีดนิ้วของธานอสทำลายล้างจักรวาล เหล่าอเวนเจอร์สที่เหลือรอดต้องหาทางย้อนเวลาเพื่อกอบกู้ทุกชีวิตกลับคืนมา'
  },
  'captain-america-the-first-avenger-2011': {
    titleTh: 'กัปตัน อเมริกา: อเวนเจอร์ที่ 1',
    taglineTh: 'เมื่อผู้รักชาติกลายเป็นตำนานแห่งวีรบุรุษ',
    synopsisTh: 'สตีฟ โรเจอร์ส ชายหนุ่มร่างกายผอมบางได้รับเซรุ่มซูเปอร์โซลเจอร์เพื่อต่อกรกับองค์กรไฮดราและเรดสคัลล์ในสงครามโลกครั้งที่ 2'
  },
  'captain-marvel-2019': {
    titleTh: 'กัปตัน มาร์เวล (Captain Marvel)',
    taglineTh: 'ค้นหาอดีต ปลดปล่อยพลังที่แท้จริง',
    synopsisTh: 'แครอล แดนเวอร์ส กลายเป็นหนึ่งในฮีโร่ที่ทรงพลังที่สุดในจักรวาล ท่ามกลางสงครามระหว่างเผ่าพันธุ์ครีและสครัลล์ในปี 1995'
  },
  'spider-man-no-way-home-2021': {
    titleTh: 'สไปเดอร์แมน: โน เวย์ โฮม (No Way Home)',
    taglineTh: 'มัลติเวิร์สเปิดออก บทเรียนแห่งความรับผิดชอบ',
    synopsisTh: 'เมื่อตัวตนของปีเตอร์ ปาร์คเกอร์ถูกเปิดเผย คาถาของด็อกเตอร์สเตรนจ์ได้ฉีกมิติเปิดทางให้เหล่าวายร้ายและสไปเดอร์แมนจากมิติคู่ขนานหลุดเข้ามา'
  },
  'deadpool-and-wolverine-2024': {
    titleTh: 'เดดพูล & วูล์ฟเวอรีน (Deadpool & Wolverine)',
    taglineTh: 'มาร่วมมือกันกอบกู้จักรวาล',
    synopsisTh: 'เวด วิลสัน ร่วมมือกับวูล์ฟเวอรีนที่สูญเสียความหวัง ในภารกิจข้ามเส้นเวลาจาก TVA เพื่อปกป้องมิติของเขาจากการล่มสลาย'
  },
  'echo-2024': {
    titleTh: 'เอคโค่ (Echo)',
    taglineTh: 'กรรมตามสนอง ไม่มีคนดีที่รอดพ้น',
    synopsisTh: 'มายา โลเปซ ต้องเผชิญหน้ากับอดีตอันเจ็บปวด เชื่อมโยงกับรากเหง้าชนเผ่าพื้นเมือง และต่อสู้เพื่อเอาชีวิตรอดจากการตามล่าของ คิงพิน'
  },
  'spider-man-2002': {
    titleTh: 'สไปเดอร์แมน (Spider-Man 2002)',
    taglineTh: 'พลังอันยิ่งใหญ่ มาพร้อมกับความรับผิดชอบอันใหญ่ยิ่ง',
    synopsisTh: 'ปีเตอร์ ปาร์คเกอร์ (โทบีย์ แมไกวร์) ถูกแมงมุมดัดแปลงพันธุกรรมกัดจนได้รับพลังพิเศษ และต้องต่อสู้กับกรีนก็อบลินเพื่อปกป้องนิวยอร์ก'
  },
  'spider-man-2-2004': {
    titleTh: 'สไปเดอร์แมน 2 (Spider-Man 2)',
    taglineTh: 'ชะตากรรมของวีรบุรุษ',
    synopsisTh: 'ปีเตอร์ต้องเลือกระหว่างชีวิตส่วนตัวกับหน้าที่ฮีโร่ ขณะที่ ด็อกเตอร์ออกโทปุส (Doc Ock) คุกคามเมืองด้วยเตาปฏิกรณ์ฟิวชัน'
  },
  'spider-man-3-2007': {
    titleTh: 'สไปเดอร์แมน 3 (Spider-Man 3)',
    taglineTh: 'ศึกภายในที่อันตรายที่สุด',
    synopsisTh: 'สไปเดอร์แมนต้องเผชิญกับชุดดำจากต่างดาวที่ครอบงำจิตใจ พร้อมรับมือกับแซนด์แมน, กรีนก็อบลินคนใหม่ และเวน่อม'
  },
  'the-amazing-spider-man-2012': {
    titleTh: 'ดิ อะเมซิ่ง สไปเดอร์แมน (The Amazing Spider-Man)',
    taglineTh: 'ความลับที่ถูกซ่อนไว้ในอดีต',
    synopsisTh: 'ปีเตอร์ ปาร์คเกอร์ (แอนดรูว์ การ์ฟิลด์) ออกสืบหาความจริงเกี่ยวกับการหายตัวไปของพ่อแม่ และต้องต่อสู้กับเดอะ ลิซาร์ด'
  },
  'logan-2017': {
    titleTh: 'โลแกน เดอะ วูล์ฟเวอรีน (Logan)',
    taglineTh: 'เวลาของเขาได้มาถึงแล้ว',
    synopsisTh: 'ในอนาคตที่มนุษย์กลายพันธุ์ใกล้สูญพันธุ์ โลแกนที่ชราภาพและอ่อนล้าต้องปกป้อง ลอร่า (X-23) เด็กสาวกลายพันธุ์จากการไล่ล่า'
  },
  'deadpool-2016': {
    titleTh: 'เดดพูล (Deadpool)',
    taglineTh: 'ฮีโร่สายเกรียน แหกทุกกฎของมาร์เวล',
    synopsisTh: 'เวด วิลสัน อดีตหน่วยรบพิเศษที่กลายเป็นทหารรับจ้าง ผ่านการทดลองจนได้รับพลังรักษาตัว และออกล่าล้างแค้นคนที่ทำลายชีวิตเขา'
  },
  'venom-2018': {
    titleTh: 'เวน่อม (Venom)',
    taglineTh: 'เราคือ เวน่อม',
    synopsisTh: 'เอ็ดดี้ บร็อค นักข่าวสายสืบสวนผสานร่างกับปรสิตต่างดาวกลายเป็น เวน่อม แอนตี้ฮีโร่ผู้มีพละกำลังมหาศาล'
  },
  'ghost-rider-2007': {
    titleTh: 'โกสต์ ไรเดอร์ มัจจุราชแห่งรัตติกาล (Ghost Rider)',
    taglineTh: 'คำสาปของเขา จะกลายเป็นพลังเพื่อการพิพากษา',
    synopsisTh: 'จอห์นนี่ เบลซ นักขี่มอเตอร์ไซค์ผาดโผน (นิโคลัส เคจ) ขายวิญญาณให้ปีศาจและกลายเป็นนักล่าวิญญาณกะโหลกไฟบนมอเตอร์ไซค์เพลิง'
  },
  'blade-1998': {
    titleTh: 'เบลด พันธุ์ฆ่าอมตะ (Blade)',
    taglineTh: 'ครึ่งมนุษย์ ครึ่งแวมไพร์ ผู้ล่าอมนุษย์',
    synopsisTh: 'เบลด (เวสลีย์ สไนปส์) นักล่าแวมไพร์ลูกผสมมนุษย์กับแวมไพร์ ออกกำจัดเหล่าแวมไพร์ที่วางแผนจะปลุกเทพเจ้ากระหายเลือด'
  }
};

// Process movies
const processedCatalog = rawCatalog.map(movie => {
  // 1. Fix Echo (2024) specifically based on user feedback and correct URL
  if (movie.id === 'echo-2024') {
    movie.title = 'Echo';
    movie.tagline = 'No good deed goes unpunished.';
    movie.type = 'series';
    movie.phase = 'Phase 5';
    movie.saga = 'The Multiverse Saga';
    movie.universe = 'MCU (Sacred Timeline)';
    movie.releaseYear = 2024;
    movie.releaseDate = '09 Jan 2024';
    movie.chronologicalYear = 2026;
    movie.chronologicalRank = 45;
    movie.runtime = '5 Episodes';
    movie.ageRating = 'TV-MA';
    movie.genres = ['Action', 'Crime', 'Drama', 'Mystery'];
    movie.director = 'Sydney Freeland';
    movie.producer = 'Marvel Studios / Kevin Feige';
    movie.boxOffice = 'Disney+ Original';
    movie.budget = 'Disney+ Production';
    movie.rating = 4.0;
    movie.criticScore = 71;
    movie.audienceScore = 62;
    movie.synopsis = 'Pursued by Wilson Fisk\'s criminal empire, Maya Lopez returns home to Oklahoma to face her past, reconnect with her Native American heritage, and embrace the meaning of family while unlocking ancestral powers.';
    const echoPosterUrl = 'https://m.media-amazon.com/images/M/MV5BOGFiYzI1ZDctM2U1Zi00ZWI5LWFiMmQtNGU0NTU5MTg3OWM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg';
    movie.poster = echoPosterUrl;
    movie.backdrop = echoPosterUrl;
    movie.onlinePoster = echoPosterUrl;
    movie.onlineBackdrop = echoPosterUrl;
    movie.trailerKey = 'AFUKnU11-n8';
    movie.activeHeroes = ['Maya Lopez', 'Daredevil', 'Kingpin'];
    movie.cast = [
      { name: 'Alaqua Cox', role: 'Maya Lopez / Echo', avatar: 'assets/images/characters/natasha-romanoff.svg' },
      { name: 'Vincent D\'Onofrio', role: 'Wilson Fisk / Kingpin', avatar: 'assets/images/avatars/ironman.svg' },
      { name: 'Charlie Cox', role: 'Matt Murdock / Daredevil', avatar: 'assets/images/avatars/captainamerica.svg' },
      { name: 'Chaske Spencer', role: 'Henry Black Crow Lopez', avatar: 'assets/images/avatars/ironman.svg' }
    ];
  } else {
    // Convert to 1000px high-resolution pristine posters
    movie.poster = toHighResPoster(movie.poster);
    movie.backdrop = toHighResPoster(movie.backdrop);
    movie.onlinePoster = toHighResPoster(movie.onlinePoster);
    movie.onlineBackdrop = toHighResPoster(movie.onlineBackdrop);
  }

  // Attach Thai metadata
  if (THAI_METADATA_MAP[movie.id]) {
    movie.titleTh = THAI_METADATA_MAP[movie.id].titleTh;
    movie.taglineTh = THAI_METADATA_MAP[movie.id].taglineTh;
    movie.synopsisTh = THAI_METADATA_MAP[movie.id].synopsisTh;
  } else {
    movie.titleTh = movie.title;
    movie.taglineTh = movie.tagline;
    movie.synopsisTh = movie.synopsis;
  }

  return movie;
});

// Save updated raw catalog
fs.writeFileSync('all_marvel_catalog.json', JSON.stringify(processedCatalog, null, 2));

// Load data.js template from build_full_marvel_data.js and re-run build
console.log('Updated all_marvel_catalog.json with high-res posters, Echo fix, and Thai metadata!');
