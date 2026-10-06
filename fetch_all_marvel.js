const fs = require('fs');

const TITLES = [
  // --- MCU PHASE 1 ---
  { query: 'Captain America: The First Avenger', year: '2011', id: 'captain-america-the-first-avenger-2011', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 1942, chronoRank: 1, type: 'movie', heroes: ['Captain America', 'Bucky Barnes'], theme: 'royal-blue' },
  { query: 'Captain Marvel', year: '2019', id: 'captain-marvel-2019', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 1995, chronoRank: 2, type: 'movie', heroes: ['Captain Marvel', 'Nick Fury'], theme: 'royal-blue' },
  { query: 'Iron Man', year: '2008', id: 'iron-man-2008', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2008, chronoRank: 3, type: 'movie', heroes: ['Iron Man'], theme: 'crimson-gold' },
  { query: 'The Incredible Hulk', year: '2008', id: 'the-incredible-hulk-2008', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2008, chronoRank: 4, type: 'movie', heroes: ['Hulk'], theme: 'emerald-green' },
  { query: 'Iron Man 2', year: '2010', id: 'iron-man-2-2010', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2010, chronoRank: 5, type: 'movie', heroes: ['Iron Man', 'Black Widow', 'War Machine'], theme: 'crimson-gold' },
  { query: 'Thor', year: '2011', id: 'thor-2011', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2011, chronoRank: 6, type: 'movie', heroes: ['Thor', 'Loki'], theme: 'royal-blue' },
  { query: 'The Avengers', year: '2012', id: 'the-avengers-2012', phase: 'Phase 1', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2012, chronoRank: 7, type: 'movie', heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Loki'], theme: 'crimson-gold' },

  // --- MCU PHASE 2 ---
  { query: 'Iron Man 3', year: '2013', id: 'iron-man-3-2013', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2012, chronoRank: 8, type: 'movie', heroes: ['Iron Man', 'War Machine'], theme: 'crimson-gold' },
  { query: 'Thor: The Dark World', year: '2013', id: 'thor-the-dark-world-2013', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2013, chronoRank: 9, type: 'movie', heroes: ['Thor', 'Loki'], theme: 'cosmic-purple' },
  { query: 'Captain America: The Winter Soldier', year: '2014', id: 'captain-america-the-winter-soldier-2014', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2014, chronoRank: 10, type: 'movie', heroes: ['Captain America', 'Black Widow', 'Bucky Barnes', 'Falcon'], theme: 'dark-slate' },
  { query: 'Guardians of the Galaxy', year: '2014', id: 'guardians-of-the-galaxy-2014', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2014, chronoRank: 11, type: 'movie', heroes: ['Star-Lord', 'Gamora', 'Rocket', 'Groot', 'Drax'], theme: 'cosmic-purple' },
  { query: 'Guardians of the Galaxy Vol. 2', year: '2017', id: 'guardians-of-the-galaxy-vol-2-2017', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2014, chronoRank: 12, type: 'movie', heroes: ['Star-Lord', 'Gamora', 'Rocket', 'Groot', 'Drax'], theme: 'cosmic-purple' },
  { query: 'Avengers: Age of Ultron', year: '2015', id: 'avengers-age-of-ultron-2015', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2015, chronoRank: 13, type: 'movie', heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Scarlet Witch', 'Vision'], theme: 'dark-slate' },
  { query: 'Ant-Man', year: '2015', id: 'ant-man-2015', phase: 'Phase 2', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2015, chronoRank: 14, type: 'movie', heroes: ['Ant-Man'], theme: 'crimson-gold' },

  // --- MCU PHASE 3 ---
  { query: 'Captain America: Civil War', year: '2016', id: 'captain-america-civil-war-2016', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2016, chronoRank: 15, type: 'movie', heroes: ['Captain America', 'Iron Man', 'Spider-Man', 'Black Panther', 'Black Widow', 'Bucky Barnes', 'Ant-Man', 'Falcon', 'Hawkeye', 'Scarlet Witch', 'Vision'], theme: 'dark-slate' },
  { query: 'Black Widow', year: '2021', id: 'black-widow-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2016, chronoRank: 16, type: 'movie', heroes: ['Black Widow'], theme: 'dark-slate' },
  { query: 'Black Panther', year: '2018', id: 'black-panther-2018', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2016, chronoRank: 17, type: 'movie', heroes: ['Black Panther'], theme: 'dark-slate' },
  { query: 'Spider-Man: Homecoming', year: '2017', id: 'spider-man-homecoming-2017', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2016, chronoRank: 18, type: 'movie', heroes: ['Spider-Man', 'Iron Man'], theme: 'crimson-gold' },
  { query: 'Doctor Strange', year: '2016', id: 'doctor-strange-2016', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2016, chronoRank: 19, type: 'movie', heroes: ['Doctor Strange'], theme: 'cosmic-purple' },
  { query: 'Thor: Ragnarok', year: '2017', id: 'thor-ragnarok-2017', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2017, chronoRank: 20, type: 'movie', heroes: ['Thor', 'Hulk', 'Loki'], theme: 'cosmic-purple' },
  { query: 'Ant-Man and the Wasp', year: '2018', id: 'ant-man-and-the-wasp-2018', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2018, chronoRank: 21, type: 'movie', heroes: ['Ant-Man'], theme: 'crimson-gold' },
  { query: 'Avengers: Infinity War', year: '2018', id: 'avengers-infinity-war-2018', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2018, chronoRank: 22, type: 'movie', heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man', 'Doctor Strange', 'Black Panther', 'Scarlet Witch', 'Star-Lord', 'Gamora', 'Rocket', 'Groot', 'Drax', 'Bucky Barnes', 'Falcon', 'War Machine', 'Thanos'], theme: 'cosmic-purple' },
  { query: 'Avengers: Endgame', year: '2019', id: 'avengers-endgame-2019', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2023, chronoRank: 23, type: 'movie', heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Ant-Man', 'War Machine', 'Rocket', 'Captain Marvel', 'Nebula'], theme: 'crimson-gold' },
  { query: 'Spider-Man: Far From Home', year: '2019', id: 'spider-man-far-from-home-2019', phase: 'Phase 3', saga: 'The Infinity Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 24, type: 'movie', heroes: ['Spider-Man', 'Nick Fury'], theme: 'crimson-gold' },

  // --- MCU PHASE 4 ---
  { query: 'Loki', year: '2021', id: 'loki-s1-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2012, chronoRank: 25, type: 'series', heroes: ['Loki'], theme: 'emerald-green' },
  { query: 'What If...?', year: '2021', id: 'what-if-s1-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2021, chronoRank: 26, type: 'series', heroes: ['Captain Carter', 'Doctor Strange', 'Thor', 'Iron Man'], theme: 'cosmic-purple' },
  { query: 'WandaVision', year: '2021', id: 'wandavision-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2023, chronoRank: 27, type: 'series', heroes: ['Scarlet Witch', 'Vision'], theme: 'crimson-gold' },
  { query: 'The Falcon and the Winter Soldier', year: '2021', id: 'falcon-winter-soldier-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 28, type: 'series', heroes: ['Falcon', 'Captain America', 'Bucky Barnes'], theme: 'royal-blue' },
  { query: 'Shang-Chi and the Legend of the Ten Rings', year: '2021', id: 'shang-chi-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 29, type: 'movie', heroes: ['Shang-Chi', 'Hulk', 'Wong'], theme: 'crimson-gold' },
  { query: 'Eternals', year: '2021', id: 'eternals-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 30, type: 'movie', heroes: ['Ikaris', 'Sersi', 'Thena'], theme: 'cosmic-purple' },
  { query: 'Spider-Man: No Way Home', year: '2021', id: 'spider-man-no-way-home-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 31, type: 'movie', heroes: ['Spider-Man', 'Doctor Strange', 'Tobey Maguire Spider-Man', 'Andrew Garfield Spider-Man'], theme: 'crimson-gold' },
  { query: 'Doctor Strange in the Multiverse of Madness', year: '2022', id: 'doctor-strange-multiverse-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 32, type: 'movie', heroes: ['Doctor Strange', 'Scarlet Witch'], theme: 'cosmic-purple' },
  { query: 'Hawkeye', year: '2021', id: 'hawkeye-2021', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 33, type: 'series', heroes: ['Hawkeye', 'Kate Bishop'], theme: 'cosmic-purple' },
  { query: 'Moon Knight', year: '2022', id: 'moon-knight-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 34, type: 'series', heroes: ['Moon Knight'], theme: 'dark-slate' },
  { query: 'Ms. Marvel', year: '2022', id: 'ms-marvel-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 35, type: 'series', heroes: ['Ms. Marvel', 'Captain Marvel'], theme: 'cosmic-purple' },
  { query: 'Thor: Love and Thunder', year: '2022', id: 'thor-love-and-thunder-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 36, type: 'movie', heroes: ['Thor', 'Jane Foster', 'Star-Lord'], theme: 'cosmic-purple' },
  { query: 'She-Hulk: Attorney at Law', year: '2022', id: 'she-hulk-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 37, type: 'series', heroes: ['She-Hulk', 'Hulk', 'Daredevil', 'Wong'], theme: 'emerald-green' },
  { query: 'Werewolf by Night', year: '2022', id: 'werewolf-by-night-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 38, type: 'series', heroes: ['Jack Russell', 'Man-Thing'], theme: 'dark-slate' },
  { query: 'Black Panther: Wakanda Forever', year: '2022', id: 'black-panther-wakanda-forever-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 39, type: 'movie', heroes: ['Shuri', 'Ironheart', 'Namor'], theme: 'dark-slate' },
  { query: 'The Guardians of the Galaxy Holiday Special', year: '2022', id: 'gotg-holiday-special-2022', phase: 'Phase 4', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2025, chronoRank: 40, type: 'series', heroes: ['Star-Lord', 'Drax', 'Mantis', 'Groot'], theme: 'emerald-green' },

  // --- MCU PHASE 5 ---
  { query: 'Ant-Man and the Wasp: Quantumania', year: '2023', id: 'ant-man-quantumania-2023', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 41, type: 'movie', heroes: ['Ant-Man', 'Kang the Conqueror'], theme: 'cosmic-purple' },
  { query: 'Guardians of the Galaxy Vol. 3', year: '2023', id: 'guardians-of-the-galaxy-vol-3-2023', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 42, type: 'movie', heroes: ['Star-Lord', 'Rocket', 'Groot', 'Drax', 'Gamora'], theme: 'cosmic-purple' },
  { query: 'Secret Invasion', year: '2023', id: 'secret-invasion-2023', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 43, type: 'series', heroes: ['Nick Fury', 'Talos', 'War Machine'], theme: 'dark-slate' },
  { query: 'The Marvels', year: '2023', id: 'the-marvels-2023', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 44, type: 'movie', heroes: ['Captain Marvel', 'Ms. Marvel', 'Monica Rambeau'], theme: 'royal-blue' },
  { query: 'Echo', year: '2024', id: 'echo-2024', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 45, type: 'series', heroes: ['Maya Lopez', 'Daredevil', 'Kingpin'], theme: 'dark-slate' },
  { query: 'Deadpool & Wolverine', year: '2024', id: 'deadpool-and-wolverine-2024', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2024, chronoRank: 46, type: 'movie', heroes: ['Deadpool', 'Wolverine'], theme: 'crimson-gold' },
  { query: 'Agatha All Along', year: '2024', id: 'agatha-all-along-2024', phase: 'Phase 5', saga: 'The Multiverse Saga', universe: 'MCU (Sacred Timeline)', chronoYear: 2026, chronoRank: 47, type: 'series', heroes: ['Agatha Harkness', 'Wiccan'], theme: 'cosmic-purple' },

  // --- TOBEY MAGUIRE SPIDER-MAN TRILOGY (Earth-96283) ---
  { query: 'Spider-Man', year: '2002', id: 'spider-man-2002', phase: 'Raimi Trilogy', saga: 'Spider-Man Legacy', universe: 'Spider-Man Legacy (Earth-96283)', chronoYear: 2002, chronoRank: 101, type: 'movie', heroes: ['Spider-Man', 'Green Goblin'], theme: 'crimson-gold' },
  { query: 'Spider-Man 2', year: '2004', id: 'spider-man-2-2004', phase: 'Raimi Trilogy', saga: 'Spider-Man Legacy', universe: 'Spider-Man Legacy (Earth-96283)', chronoYear: 2004, chronoRank: 102, type: 'movie', heroes: ['Spider-Man', 'Doctor Octopus'], theme: 'crimson-gold' },
  { query: 'Spider-Man 3', year: '2007', id: 'spider-man-3-2007', phase: 'Raimi Trilogy', saga: 'Spider-Man Legacy', universe: 'Spider-Man Legacy (Earth-96283)', chronoYear: 2007, chronoRank: 103, type: 'movie', heroes: ['Spider-Man', 'Venom', 'Sandman'], theme: 'dark-slate' },

  // --- ANDREW GARFIELD THE AMAZING SPIDER-MAN (Earth-120703) ---
  { query: 'The Amazing Spider-Man', year: '2012', id: 'the-amazing-spider-man-2012', phase: 'Webb Series', saga: 'Spider-Man Legacy', universe: 'Spider-Man Legacy (Earth-120703)', chronoYear: 2012, chronoRank: 104, type: 'movie', heroes: ['Spider-Man', 'Lizard'], theme: 'royal-blue' },
  { query: 'The Amazing Spider-Man 2', year: '2014', id: 'the-amazing-spider-man-2-2014', phase: 'Webb Series', saga: 'Spider-Man Legacy', universe: 'Spider-Man Legacy (Earth-120703)', chronoYear: 2014, chronoRank: 105, type: 'movie', heroes: ['Spider-Man', 'Electro', 'Green Goblin'], theme: 'royal-blue' },

  // --- SONY SPIDER-MAN UNIVERSE (SSU - Venom & Anti-Heroes) ---
  { query: 'Venom', year: '2018', id: 'venom-2018', phase: 'SSU', saga: 'Sony Universe & Venom', universe: 'Sony Spider-Man Universe', chronoYear: 2018, chronoRank: 110, type: 'movie', heroes: ['Venom'], theme: 'dark-slate' },
  { query: 'Venom: Let There Be Carnage', year: '2021', id: 'venom-let-there-be-carnage-2021', phase: 'SSU', saga: 'Sony Universe & Venom', universe: 'Sony Spider-Man Universe', chronoYear: 2021, chronoRank: 111, type: 'movie', heroes: ['Venom', 'Carnage'], theme: 'crimson-gold' },
  { query: 'Morbius', year: '2022', id: 'morbius-2022', phase: 'SSU', saga: 'Sony Universe & Venom', universe: 'Sony Spider-Man Universe', chronoYear: 2022, chronoRank: 112, type: 'movie', heroes: ['Morbius'], theme: 'dark-slate' },
  { query: 'Madame Web', year: '2024', id: 'madame-web-2024', phase: 'SSU', saga: 'Sony Universe & Venom', universe: 'Sony Spider-Man Universe', chronoYear: 2024, chronoRank: 113, type: 'movie', heroes: ['Madame Web', 'Spider-Woman'], theme: 'crimson-gold' },
  { query: 'Venom: The Last Dance', year: '2024', id: 'venom-the-last-dance-2024', phase: 'SSU', saga: 'Sony Universe & Venom', universe: 'Sony Spider-Man Universe', chronoYear: 2024, chronoRank: 114, type: 'movie', heroes: ['Venom', 'Knull'], theme: 'cosmic-purple' },

  // --- FOX X-MEN & WOLVERINE UNIVERSE (Earth-10005) ---
  { query: 'X-Men', year: '2000', id: 'x-men-2000', phase: 'Original Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2000, chronoRank: 120, type: 'movie', heroes: ['Wolverine', 'Professor X', 'Magneto', 'Cyclops', 'Storm', 'Jean Grey'], theme: 'dark-slate' },
  { query: 'X2: X-Men United', year: '2003', id: 'x2-2003', phase: 'Original Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2003, chronoRank: 121, type: 'movie', heroes: ['Wolverine', 'Professor X', 'Magneto', 'Nightcrawler'], theme: 'royal-blue' },
  { query: 'X-Men: The Last Stand', year: '2006', id: 'x-men-the-last-stand-2006', phase: 'Original Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2006, chronoRank: 122, type: 'movie', heroes: ['Wolverine', 'Jean Grey / Phoenix', 'Magneto'], theme: 'crimson-gold' },
  { query: 'X-Men Origins: Wolverine', year: '2009', id: 'x-men-origins-wolverine-2009', phase: 'Wolverine Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 1980, chronoRank: 123, type: 'movie', heroes: ['Wolverine', 'Sabretooth', 'Deadpool'], theme: 'dark-slate' },
  { query: 'X-Men: First Class', year: '2011', id: 'x-men-first-class-2011', phase: 'Prequel Era', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 1962, chronoRank: 124, type: 'movie', heroes: ['Professor X', 'Magneto', 'Mystique'], theme: 'royal-blue' },
  { query: 'The Wolverine', year: '2013', id: 'the-wolverine-2013', phase: 'Wolverine Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2013, chronoRank: 125, type: 'movie', heroes: ['Wolverine'], theme: 'dark-slate' },
  { query: 'X-Men: Days of Future Past', year: '2014', id: 'x-men-days-of-future-past-2014', phase: 'Prequel Era', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 1973, chronoRank: 126, type: 'movie', heroes: ['Wolverine', 'Professor X', 'Magneto', 'Mystique'], theme: 'cosmic-purple' },
  { query: 'Deadpool', year: '2016', id: 'deadpool-2016', phase: 'Deadpool Series', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2016, chronoRank: 127, type: 'movie', heroes: ['Deadpool', 'Colossus'], theme: 'crimson-gold' },
  { query: 'X-Men: Apocalypse', year: '2016', id: 'x-men-apocalypse-2016', phase: 'Prequel Era', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 1983, chronoRank: 128, type: 'movie', heroes: ['Professor X', 'Magneto', 'Apocalypse', 'Cyclops', 'Jean Grey'], theme: 'cosmic-purple' },
  { query: 'Logan', year: '2017', id: 'logan-2017', phase: 'Wolverine Trilogy', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2029, chronoRank: 129, type: 'movie', heroes: ['Wolverine', 'X-23', 'Professor X'], theme: 'crimson-gold' },
  { query: 'Deadpool 2', year: '2018', id: 'deadpool-2-2018', phase: 'Deadpool Series', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2018, chronoRank: 130, type: 'movie', heroes: ['Deadpool', 'Cable', 'Domino', 'Juggernaut'], theme: 'crimson-gold' },
  { query: 'Dark Phoenix', year: '2019', id: 'dark-phoenix-2019', phase: 'Prequel Era', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 1992, chronoRank: 131, type: 'movie', heroes: ['Jean Grey / Phoenix', 'Professor X', 'Magneto'], theme: 'cosmic-purple' },
  { query: 'The New Mutants', year: '2020', id: 'the-new-mutants-2020', phase: 'New Mutants', saga: 'X-Men & Mutants (Fox)', universe: 'Fox X-Men Universe', chronoYear: 2020, chronoRank: 132, type: 'movie', heroes: ['Magik', 'Wolfsbane'], theme: 'dark-slate' },

  // --- MARVEL CLASSICS & KNIGHTS (Ghost Rider, Blade, Fantastic Four) ---
  { query: 'Ghost Rider', year: '2007', id: 'ghost-rider-2007', phase: 'Marvel Knights', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2007, chronoRank: 140, type: 'movie', heroes: ['Ghost Rider'], theme: 'crimson-gold' },
  { query: 'Ghost Rider: Spirit of Vengeance', year: '2011', id: 'ghost-rider-spirit-of-vengeance-2011', phase: 'Marvel Knights', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2011, chronoRank: 141, type: 'movie', heroes: ['Ghost Rider'], theme: 'crimson-gold' },
  { query: 'Blade', year: '1998', id: 'blade-1998', phase: 'Blade Trilogy', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 1998, chronoRank: 142, type: 'movie', heroes: ['Blade'], theme: 'dark-slate' },
  { query: 'Blade II', year: '2002', id: 'blade-ii-2002', phase: 'Blade Trilogy', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2002, chronoRank: 143, type: 'movie', heroes: ['Blade'], theme: 'dark-slate' },
  { query: 'Blade: Trinity', year: '2004', id: 'blade-trinity-2004', phase: 'Blade Trilogy', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2004, chronoRank: 144, type: 'movie', heroes: ['Blade'], theme: 'dark-slate' },
  { query: 'Daredevil', year: '2003', id: 'daredevil-2003', phase: 'Marvel Knights', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2003, chronoRank: 145, type: 'movie', heroes: ['Daredevil', 'Elektra', 'Bullseye'], theme: 'crimson-gold' },
  { query: 'Fantastic Four', year: '2005', id: 'fantastic-four-2005', phase: 'Story Era', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2005, chronoRank: 146, type: 'movie', heroes: ['Mr. Fantastic', 'Invisible Woman', 'Human Torch', 'The Thing', 'Doctor Doom'], theme: 'royal-blue' },
  { query: 'Fantastic Four: Rise of the Silver Surfer', year: '2007', id: 'fantastic-four-rise-of-the-silver-surfer-2007', phase: 'Story Era', saga: 'Marvel Classics (Ghost Rider & Blade)', universe: 'Marvel Legacy Classics', chronoYear: 2007, chronoRank: 147, type: 'movie', heroes: ['Silver Surfer', 'Human Torch', 'Mr. Fantastic'], theme: 'royal-blue' }
];

async function run() {
  console.log(`Starting fetch for ${TITLES.length} Marvel titles...`);
  const results = [];

  for (let i = 0; i < TITLES.length; i++) {
    const item = TITLES[i];
    const encTitle = encodeURIComponent(item.query);
    const url = `https://www.omdbapi.com/?t=${encTitle}&y=${item.year}&apikey=trilogy`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      let posterUrl = (data.Poster && data.Poster !== 'N/A') ? data.Poster : null;
      let plot = data.Plot && data.Plot !== 'N/A' ? data.Plot : 'Epic Marvel superhero adventure.';
      let director = data.Director && data.Director !== 'N/A' ? data.Director : 'Marvel Studios';
      let boxOffice = data.BoxOffice && data.BoxOffice !== 'N/A' ? data.BoxOffice : '$300 Million';
      let runtime = data.Runtime && data.Runtime !== 'N/A' ? data.Runtime : '2h 10m';
      let ageRating = data.Rated && data.Rated !== 'N/A' ? data.Rated : 'PG-13';
      let genres = data.Genre && data.Genre !== 'N/A' ? data.Genre.split(', ') : ['Action', 'Sci-Fi'];
      let imdbRating = data.imdbRating && data.imdbRating !== 'N/A' ? parseFloat(data.imdbRating) : 7.5;
      let starScore = (imdbRating / 2).toFixed(1); // convert 10 to 5-star scale
      let rottenTomato = 85;
      if (data.Ratings) {
        const rt = data.Ratings.find(r => r.Source === 'Rotten Tomatoes');
        if (rt) rottenTomato = parseInt(rt.Value);
      }

      const movieObj = {
        id: item.id,
        title: data.Title || item.query,
        tagline: `${item.query} in the Marvel Multiverse.`,
        type: item.type,
        phase: item.phase,
        saga: item.saga,
        universe: item.universe,
        releaseYear: parseInt(item.year),
        releaseDate: data.Released || `May ${item.year}`,
        chronologicalYear: item.chronoYear,
        chronologicalRank: item.chronoRank,
        runtime: runtime,
        ageRating: ageRating,
        genres: genres,
        director: director,
        producer: 'Marvel Studios / Kevin Feige / Avi Arad',
        boxOffice: boxOffice,
        budget: '$150 Million',
        rating: parseFloat(starScore),
        criticScore: rottenTomato,
        audienceScore: Math.min(99, rottenTomato + 4),
        theme: getThemePalette(item.theme),
        activeHeroes: item.heroes,
        synopsis: plot,
        poster: posterUrl || `assets/images/posters/${item.id}.svg`,
        backdrop: posterUrl || `assets/images/backdrops/${item.id}.svg`,
        onlinePoster: posterUrl,
        onlineBackdrop: posterUrl,
        trailerKey: 'dQw4w9WgXcQ', // default / updated trailer
        cast: parseActors(data.Actors),
        trivia: [
          `Grossed ${boxOffice} worldwide.`,
          `Features active appearances from: ${item.heroes.join(', ')}.`,
          `Part of ${item.universe}.`
        ],
        initialReviews: [
          {
            id: `rev-${item.id}-01`,
            author: 'MarvelTrueBeliever',
            avatar: 'assets/images/avatars/ironman.svg',
            rating: Math.min(5.0, parseFloat(starScore) + 0.3),
            date: '2024-03-15',
            tags: ['Iconic', 'Multiverse Essential'],
            spoiler: false,
            text: `Outstanding Marvel film. ${plot.slice(0, 140)}... Absolutely a must-watch for any true Marvel fan!`,
            likes: 42
          }
        ]
      };

      results.push(movieObj);
      console.log(`[${i + 1}/${TITLES.length}] Fetched: ${item.query} (${item.year}) - Poster: ${posterUrl ? 'YES' : 'NO'}`);
    } catch (e) {
      console.error(`Failed ${item.query}:`, e.message);
    }
  }

  fs.writeFileSync('all_marvel_catalog.json', JSON.stringify(results, null, 2));
  console.log(`Done! Saved ${results.length} movies to all_marvel_catalog.json`);
}

function parseActors(actorsStr) {
  if (!actorsStr || actorsStr === 'N/A') return [{ name: 'Marvel Cast', role: 'Hero', avatar: 'assets/images/avatars/ironman.svg' }];
  return actorsStr.split(', ').map(name => ({
    name,
    role: 'Featured Cast',
    avatar: 'assets/images/avatars/ironman.svg'
  }));
}

function getThemePalette(name) {
  switch(name) {
    case 'crimson-gold':
      return { name: 'crimson-gold', bg: '#7f1d1d', accent: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', badgeBg: 'rgba(127, 29, 29, 0.4)', border: 'rgba(245, 158, 11, 0.5)' };
    case 'royal-blue':
      return { name: 'royal-blue', bg: '#1e3a8a', accent: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)', badgeBg: 'rgba(30, 58, 138, 0.4)', border: 'rgba(56, 189, 248, 0.5)' };
    case 'emerald-green':
      return { name: 'emerald-green', bg: '#064e3b', accent: '#34d399', glow: 'rgba(52, 211, 153, 0.45)', badgeBg: 'rgba(6, 78, 59, 0.4)', border: 'rgba(52, 211, 153, 0.5)' };
    case 'cosmic-purple':
      return { name: 'cosmic-purple', bg: '#581c87', accent: '#c084fc', glow: 'rgba(192, 132, 252, 0.45)', badgeBg: 'rgba(88, 28, 135, 0.4)', border: 'rgba(192, 132, 252, 0.5)' };
    default:
      return { name: 'dark-slate', bg: '#0f172a', accent: '#94a3b8', glow: 'rgba(148, 163, 184, 0.35)', badgeBg: 'rgba(15, 23, 42, 0.4)', border: 'rgba(148, 163, 184, 0.4)' };
  }
}

run();
