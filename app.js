/**
 * Marvel Cinematic Universe (MCU) Review & Hub
 * SPA Logic, LocalStorage State Management & Dynamic Theme Engine
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. STORAGE KEYS & APP STATE
  // ==========================================================================
  const STORAGE_KEYS = {
    ACTIVE_USER: 'mcu_hub_active_user',
    REGISTERED_USERS: 'mcu_hub_registered_users',
    REVIEWS: 'mcu_hub_movie_reviews',
    WATCHLIST: 'mcu_hub_user_watchlist',
    LIKES: 'mcu_hub_review_likes',
    INTRO_SEEN: 'mcu_hub_intro_seen',
    LANG: 'mcu_hub_lang'
  };

  const TRANSLATIONS = {
    th: {
      navAllTitles: 'ภาพยนตร์ทั้งหมด',
      navSagas: 'ซาก้าและเฟส',
      navCharacterHub: 'ศูนย์รวมฮีโร่',
      navTimeline: 'ไทม์ไลน์ศักดิ์สิทธิ์',
      navWatchlist: 'รายการที่บันทึก',
      navIntro: 'อินโทร',
      navSignIn: 'เข้าสู่ระบบ / ลงทะเบียน',
      navSignInShort: 'เข้าสู่ระบบ',
      searchPlaceholder: 'ค้นหาจักรวาลมาร์เวล...',
      langSwitch: 'ภาษา / Language',
      featuredSpotlight: 'ไฮไลต์แนะนำ',
      watchTrailer: 'ชมตัวอย่าง',
      viewDetails: 'รายละเอียดและรีวิว',
      addToWatchlist: 'เพิ่มในรายการที่บันทึก',
      inWatchlist: 'บันทึกแล้ว',
      characterHubHeading: 'กรองตามฮีโร่มาร์เวล',
      characterHubSubtitle: 'ทั้งภาพยนตร์เดี่ยวและทีมอัปครอสโอเวอร์',
      heroAll: 'ฮีโร่ทั้งหมด',
      catalogSearchPh: 'ค้นหาชื่อเรื่อง, นักแสดง, ฮีโร่...',
      sagaAll: 'มาร์เวลทั้งหมด',
      sagaInfinity: 'ดิ อินฟินิตี้ ซาก้า',
      sagaMultiverse: 'เดอะ มัลติเวิร์ส ซาก้า',
      sagaSpiderman: 'สไปเดอร์แมน (Tobey/Andrew)',
      sagaXMen: 'เอ็กซ์-เม็น (Fox)',
      sagaSony: 'จักรวาลโซนี่ & เวน่อม',
      sagaClassics: 'มาร์เวลคลาสสิก',
      typeAll: 'ทั้งหมด',
      typeMovies: 'ภาพยนตร์',
      typeSeries: 'ซีรีส์',
      btnReleaseOrder: 'เรียงตามวันฉาย',
      btnChronoOrder: 'เรียงตามเหตุการณ์',
      sortReleaseAsc: 'วันฉาย (เก่าสุดก่อน)',
      sortReleaseDesc: 'วันฉาย (ใหม่สุดก่อน)',
      sortRatingDesc: 'เรตติ้งสูงสุด',
      sortBoxOfficeDesc: 'รายได้รวม (Box Office)',
      sortTitleAsc: 'ชื่อเรื่อง (A – Z)',
      critics: 'นักวิจารณ์',
      audience: 'ผู้ชมทั่วไป',
      director: 'ผู้กำกับ',
      boxOffice: 'รายได้รวม',
      runtime: 'ความยาว / ตอน',
      activeHeroes: 'ฮีโร่ที่ปรากฏตัว',
      synopsisOverview: 'เรื่องย่อและข้อมูลภาพยนตร์',
      featuredCast: 'นักแสดงและตัวละครหลัก',
      userReviews: 'รีวิวและคะแนนจากผู้ชม',
      writeReview: 'เขียนรีวิวเรื่องนี้',
      wantToWatch: 'อยากดู',
      watching: 'กำลังดู',
      completed: 'ดูแล้ว',
      movieType: 'ภาพยนตร์',
      seriesType: 'ซีรีส์'
    },
    en: {
      navAllTitles: 'All Titles',
      navSagas: 'Sagas & Phases',
      navCharacterHub: 'Character Hub',
      navTimeline: 'Sacred Timeline',
      navWatchlist: 'My Watchlist',
      navIntro: 'Intro',
      navSignIn: 'Sign In / Register',
      navSignInShort: 'Sign In',
      searchPlaceholder: 'Search MCU...',
      langSwitch: 'Language / ภาษา',
      featuredSpotlight: 'FEATURED SPOTLIGHT',
      watchTrailer: 'Watch Trailer',
      viewDetails: 'Details & Reviews',
      addToWatchlist: 'Add to Watchlist',
      inWatchlist: 'In Watchlist',
      characterHubHeading: 'Filter by Marvel Hero',
      characterHubSubtitle: 'Standalone & crossover appearances',
      heroAll: 'All Heroes',
      catalogSearchPh: 'Search titles, cast, heroes...',
      sagaAll: 'All Marvel',
      sagaInfinity: 'Infinity Saga',
      sagaMultiverse: 'Multiverse Saga',
      sagaSpiderman: 'Spider-Man Legacy',
      sagaXMen: 'Fox X-Men',
      sagaSony: 'Sony Universe',
      sagaClassics: 'Marvel Classics',
      typeAll: 'All',
      typeMovies: 'Movies',
      typeSeries: 'Series',
      btnReleaseOrder: 'Release Order',
      btnChronoOrder: 'Chronological',
      sortReleaseAsc: 'Release Date (Oldest First)',
      sortReleaseDesc: 'Release Date (Newest First)',
      sortRatingDesc: 'Highest Rated',
      sortBoxOfficeDesc: 'Box Office Earnings',
      sortTitleAsc: 'Title (A – Z)',
      critics: 'Critics',
      audience: 'Audience',
      director: 'Director',
      boxOffice: 'Box Office',
      runtime: 'Runtime / Episodes',
      activeHeroes: 'Active Heroes',
      synopsisOverview: 'Synopsis & Overview',
      featuredCast: 'Featured Heroes & Cast',
      userReviews: 'User Reviews & Ratings',
      writeReview: 'Write a Review',
      wantToWatch: 'Want to Watch',
      watching: 'Watching',
      completed: 'Completed',
      movieType: 'Movie',
      seriesType: 'Series'
    }
  };

  const HERO_TRANSLATIONS = {
    all: { en: 'All Heroes', th: 'ฮีโร่ทั้งหมด' },
    'Iron Man': { en: 'Iron Man', th: 'ไอรอนแมน' },
    'Spider-Man': { en: 'Spider-Man', th: 'สไปเดอร์แมน' },
    'Wolverine': { en: 'Wolverine', th: 'วูล์ฟเวอรีน' },
    'Deadpool': { en: 'Deadpool', th: 'เดดพูล' },
    'Doctor Doom': { en: 'Doctor Doom', th: 'ด็อกเตอร์ ดูม' },
    'Thor': { en: 'Thor', th: 'ธอร์' },
    'Captain America': { en: 'Captain America', th: 'กัปตันอเมริกา' },
    'Doctor Strange': { en: 'Doctor Strange', th: 'ด็อกเตอร์สเตรนจ์' },
    'Loki': { en: 'Loki', th: 'โลกิ' },
    'Black Panther': { en: 'Black Panther', th: 'แบล็คแพนเธอร์' },
    'Venom': { en: 'Venom', th: 'เวน่อม' },
    'Ghost Rider': { en: 'Ghost Rider', th: 'โกสต์ไรเดอร์' },
    'Blade': { en: 'Blade', th: 'เบลด' },
    'Ant-Man': { en: 'Ant-Man', th: 'แอนท์-แมน' },
    'Guardians': { en: 'Guardians', th: 'การ์เดียนส์' },
    'Scarlet Witch': { en: 'Scarlet Witch', th: 'สการ์เล็ต วิทช์' },
    'Hawkeye': { en: 'Hawkeye', th: 'ฮอว์กอาย' },
    'Hulk': { en: 'Hulk', th: 'ฮัลค์' },
    'Daredevil': { en: 'Daredevil', th: 'แดร์เดวิล' }
  };

  const PHASE_TRANSLATIONS = {
    'Phase 1': { en: 'Phase 1', th: 'เฟส 1' },
    'Phase 2': { en: 'Phase 2', th: 'เฟส 2' },
    'Phase 3': { en: 'Phase 3', th: 'เฟส 3' },
    'Phase 4': { en: 'Phase 4', th: 'เฟส 4' },
    'Phase 5': { en: 'Phase 5', th: 'เฟส 5' },
    'Phase 6': { en: 'Phase 6', th: 'เฟส 6' },
    'Raimi Trilogy': { en: 'Raimi Trilogy', th: 'ไตรภาคไรมี' },
    'Webb Series': { en: 'Webb Series', th: 'ดิ อะเมซิ่ง' },
    'SSU': { en: 'SSU', th: 'จักรวาลโซนี่' },
    'Original Trilogy': { en: 'Original Trilogy', th: 'ไตรภาคดั้งเดิม' },
    'Wolverine Trilogy': { en: 'Wolverine Trilogy', th: 'ไตรภาควูล์ฟเวอรีน' },
    'Prequel Era': { en: 'Prequel Era', th: 'ยุคพรีเควล' },
    'Deadpool Series': { en: 'Deadpool Series', th: 'เดดพูล ซีรีส์' },
    'Blade Trilogy': { en: 'Blade Trilogy', th: 'ไตรภาคเบลด' },
    'Marvel Knights': { en: 'Marvel Knights', th: 'มาร์เวล ไนท์ส' },
    'Story Era': { en: 'Story Era', th: 'ภาพยนตร์คลาสสิก' }
  };

  const GENRE_TRANSLATIONS = {
    'Action': 'แอ็กชัน',
    'Adventure': 'ผจญภัย',
    'Sci-Fi': 'ไซไฟ',
    'Comedy': 'คอมเมดี้',
    'Drama': 'ดราม่า',
    'Fantasy': 'แฟนตาซี',
    'Animation': 'แอนิเมชัน',
    'Thriller': 'ระทึกขวัญ',
    'Crime': 'อาชญากรรม',
    'Mystery': 'ลึกลับ',
    'Horror': 'สยองขวัญ'
  };

  const SAGA_TRANSLATIONS = {
    'The Infinity Saga': 'ดิ อินฟินิตี้ ซาก้า',
    'The Multiverse Saga': 'เดอะ มัลติเวิร์ส ซาก้า',
    'Spider-Man Legacy': 'สไปเดอร์แมน (Tobey/Andrew)',
    'Fox X-Men': 'เอ็กซ์-เม็น (Fox)',
    'Sony Spider-Man Universe': 'จักรวาลโซนี่ & เวน่อม',
    'Sony Universe & Venom': 'จักรวาลโซนี่ & เวน่อม',
    'Marvel Classics': 'มาร์เวลคลาสสิก',
    'Marvel Classics (Ghost Rider & Blade)': 'มาร์เวลคลาสสิก',
    'X-Men & Mutants (Fox)': 'เอ็กซ์-เม็น (Fox)'
  };

  function getPhaseLabel(phase) {
    if (AppState.currentLang === 'th') {
      return (PHASE_TRANSLATIONS[phase] && PHASE_TRANSLATIONS[phase].th) || phase;
    }
    return (PHASE_TRANSLATIONS[phase] && PHASE_TRANSLATIONS[phase].en) || phase;
  }

  function formatGenres(genres) {
    if (!genres || !Array.isArray(genres)) return '';
    if (AppState.currentLang === 'th') {
      return genres.map(g => GENRE_TRANSLATIONS[g] || g).join(' • ');
    }
    return genres.join(' • ');
  }

  function getSagaLabel(saga) {
    if (AppState.currentLang === 'th') {
      return SAGA_TRANSLATIONS[saga] || saga;
    }
    return saga;
  }

  const AppState = {
    currentView: 'browse',
    currentLang: localStorage.getItem('mcu_hub_lang') || 'th',
    currentUser: null,           // null for Guest, or user object
    registeredUsers: [],
    reviews: {},                 // { [movieId]: Array of reviews }
    watchlist: {},               // { [movieId]: { status: 'want_to_watch'|'watching'|'completed', addedAt: string } }
    likedReviews: new Set(),
    activeMovie: null,           // movie object in detail modal
    filters: {
      search: '',
      saga: 'all',               // 'all' | 'The Infinity Saga' | 'The Multiverse Saga'
      type: 'all',               // 'all' | 'movie' | 'series'
      hero: 'all',               // 'all' | 'Iron Man' | 'Spider-Man' | ...
      order: 'release',          // 'release' | 'chrono' | 'custom'
      sort: 'release_asc'        // 'release_asc' | 'release_desc' | 'rating_desc' | 'boxoffice_desc' | 'title_asc'
    },
    timelineUniverse: 'all',
    timelineOrder: 'chrono',
    selectedReviewRating: 5,
    spotlightIndex: 0,
    spotlightTimer: null,
    spotlightPaused: false,
    spotlightIds: [
      'avengers-doomsday-2026',
      'avengers-endgame-2019',
      'deadpool-and-wolverine-2024',
      'spider-man-no-way-home-2021',
      'avengers-secret-wars-2027',
      'logan-2017'
    ]
  };

  // ==========================================================================
  // 2. LOCALSTORAGE INITIALIZATION & PERSISTENCE
  // ==========================================================================
  function initLocalStorage() {
    // 1. Registered Users list
    const savedRegUsers = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
    if (savedRegUsers) {
      try {
        AppState.registeredUsers = JSON.parse(savedRegUsers);
      } catch (e) {
        console.error('Error parsing registered users', e);
      }
    }
    if (!AppState.registeredUsers || AppState.registeredUsers.length === 0) {
      AppState.registeredUsers = window.DEMO_USERS.map(u => ({ ...u, password: 'password123' }));
      localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(AppState.registeredUsers));
    }

    // 2. Active User (Auth state - null means Guest)
    const savedActiveUser = localStorage.getItem(STORAGE_KEYS.ACTIVE_USER);
    if (savedActiveUser) {
      try {
        AppState.currentUser = JSON.parse(savedActiveUser);
      } catch (e) {
        console.error('Error parsing active user', e);
      }
    } else {
      // Default to Guest mode for authentic auth gating test!
      AppState.currentUser = null;
    }

    // 3. Reviews Map
    const savedReviews = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (savedReviews) {
      try {
        AppState.reviews = JSON.parse(savedReviews);
      } catch (e) {
        console.error('Error parsing reviews', e);
      }
    }
    let seededReviews = false;
    window.MCU_CATALOG.forEach(m => {
      if (!AppState.reviews[m.id] || AppState.reviews[m.id].length === 0) {
        AppState.reviews[m.id] = [...(m.initialReviews || [])];
        seededReviews = true;
      }
    });
    if (seededReviews) {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(AppState.reviews));
    }

    // 4. Watchlist
    const savedWatchlist = localStorage.getItem(STORAGE_KEYS.WATCHLIST);
    if (savedWatchlist) {
      try {
        AppState.watchlist = JSON.parse(savedWatchlist);
      } catch (e) {
        console.error('Error parsing watchlist', e);
      }
    } else {
      AppState.watchlist = {
        'iron-man-2008': { status: 'completed', addedAt: new Date(Date.now() - 86400000 * 5).toISOString() },
        'avengers-endgame-2019': { status: 'completed', addedAt: new Date(Date.now() - 86400000 * 3).toISOString() },
        'deadpool-and-wolverine-2024': { status: 'want_to_watch', addedAt: new Date().toISOString() }
      };
      saveWatchlist();
    }

    // 5. Liked Reviews
    const savedLikes = localStorage.getItem(STORAGE_KEYS.LIKES);
    if (savedLikes) {
      try {
        AppState.likedReviews = new Set(JSON.parse(savedLikes));
      } catch (e) {
        console.error('Error parsing likes', e);
      }
    }
  }

  function saveActiveUser() {
    if (AppState.currentUser) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(AppState.currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_USER);
    }
    updateNavAuthUI();
  }

  function saveReviews() {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(AppState.reviews));
  }

  function saveWatchlist() {
    localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(AppState.watchlist));
    updateWatchlistBadges();
  }

  function saveLikes() {
    localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify([...AppState.likedReviews]));
  }

  // ==========================================================================
  // 3. MARVEL INTRO LOADING SCREEN (3.0 SECONDS CINEMATIC PACING)
  // ==========================================================================
  function initMarvelIntro() {
    const overlay = document.getElementById('marvelIntroOverlay');
    const progressBar = document.getElementById('introProgressBar');
    const logoContainer = document.getElementById('marvelLogoContainer');
    if (!overlay) return;

    const INTRO_DURATION_MS = 3000;
    let introTimer = null;

    function startIntro() {
      overlay.style.display = 'flex';
      overlay.classList.remove('intro-dismissed');

      // Trigger reflow & restart CSS animations
      if (progressBar) {
        progressBar.classList.remove('intro-progress-anim');
        void progressBar.offsetWidth;
        progressBar.classList.add('intro-progress-anim');
      }

      if (logoContainer) {
        logoContainer.classList.remove('marvel-logo-anim');
        void logoContainer.offsetWidth;
        logoContainer.classList.add('marvel-logo-anim');
      }

      if (introTimer) clearTimeout(introTimer);
      introTimer = setTimeout(dismissIntro, INTRO_DURATION_MS);
    }

    function dismissIntro() {
      if (introTimer) {
        clearTimeout(introTimer);
        introTimer = null;
      }
      overlay.classList.add('intro-dismissed');
      sessionStorage.setItem('mcu_hub_session_intro_seen', 'true');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 550);
    }

    // Check if session has already seen the intro,
    // BUT if the page was explicitly reloaded (F5 / browser reload), allow intro to play!
    const isReload = window.performance && 
      window.performance.getEntriesByType && 
      window.performance.getEntriesByType('navigation')[0] && 
      window.performance.getEntriesByType('navigation')[0].type === 'reload';

    const sessionSeen = sessionStorage.getItem('mcu_hub_session_intro_seen');

    if (sessionSeen === 'true' && !isReload) {
      overlay.style.display = 'none';
    } else {
      startIntro();
    }
  }

  // ==========================================================================
  // 4. TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl border shadow-xl text-xs font-semibold backdrop-blur-xl ${
      type === 'success'
        ? 'bg-[#0E1B18]/90 border-emerald-500/50 text-emerald-200'
        : type === 'warning'
        ? 'bg-[#221808]/90 border-amber-500/50 text-amber-200'
        : 'bg-[#1D1013]/90 border-mcu-red/50 text-red-200'
    }`;

    const iconClass =
      type === 'success'
        ? 'fa-solid fa-circle-check text-emerald-400'
        : type === 'warning'
        ? 'fa-solid fa-triangle-exclamation text-amber-400'
        : 'fa-solid fa-shield-halved text-mcu-red';

    toast.innerHTML = `
      <i class="${iconClass} text-base flex-shrink-0"></i>
      <span class="flex-grow">${message}</span>
      <button class="text-slate-400 hover:text-white ml-2 text-xs" onclick="this.parentElement.remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('dismissing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ==========================================================================
  // 5. AUTHENTICATION & LOGIN/REGISTER MODAL
  // ==========================================================================
  function openAuthModal(options = {}) {
    const modal = document.getElementById('authModal');
    const promptBanner = document.getElementById('authGuestPromptBanner');
    if (!modal) return;

    if (options.promptReason && promptBanner) {
      promptBanner.querySelector('span').textContent = options.promptReason;
      promptBanner.classList.remove('hidden');
    } else if (promptBanner) {
      promptBanner.classList.add('hidden');
    }

    setAuthTab('login');
    populateDemoAccounts();
    populateRegisterAvatars();

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
    if (!AppState.activeMovie) {
      document.body.style.overflow = '';
    }
  }

  function setAuthTab(tab) {
    const tabLogin = document.getElementById('authTabLogin');
    const tabReg = document.getElementById('authTabRegister');
    const formLogin = document.getElementById('loginForm');
    const formReg = document.getElementById('registerForm');
    const headerTitle = document.getElementById('authModalHeaderTitle');

    if (tab === 'login') {
      tabLogin.className = 'w-1/2 py-2 rounded-lg bg-mcu-red text-white transition-all';
      tabReg.className = 'w-1/2 py-2 rounded-lg text-slate-400 hover:text-white transition-all';
      formLogin.classList.remove('hidden');
      formReg.classList.add('hidden');
      if (headerTitle) headerTitle.textContent = 'SIGN IN TO AVENGER HUB';
    } else {
      tabReg.className = 'w-1/2 py-2 rounded-lg bg-mcu-red text-white transition-all';
      tabLogin.className = 'w-1/2 py-2 rounded-lg text-slate-400 hover:text-white transition-all';
      formReg.classList.remove('hidden');
      formLogin.classList.add('hidden');
      if (headerTitle) headerTitle.textContent = 'CREATE AVENGER ACCOUNT';
    }
  }

  function populateDemoAccounts() {
    const container = document.getElementById('demoAccountsContainer');
    if (!container) return;
    container.innerHTML = '';

    window.DEMO_USERS.forEach(demo => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'flex items-center gap-2 p-2 rounded-lg bg-[#131A2B] hover:bg-[#1A243D] border border-slate-700 text-left transition-all';
      btn.innerHTML = `
        <img src="${demo.avatar}" alt="${demo.username}" class="w-6 h-6 rounded-full border border-mcu-red object-cover flex-shrink-0">
        <div class="truncate">
          <strong class="text-[11px] text-white block truncate">${demo.username}</strong>
          <span class="text-[9px] text-slate-400 block truncate">Demo Account</span>
        </div>
      `;
      btn.onclick = () => {
        AppState.currentUser = { ...demo };
        saveActiveUser();
        closeAuthModal();
        showToast(`Signed in as ${demo.username}!`, 'success');
        if (AppState.activeMovie) {
          updateDetailReviewsAuthUI();
        }
      };
      container.appendChild(btn);
    });
  }

  let selectedRegAvatar = 'assets/images/avatars/ironman.svg';
  function populateRegisterAvatars() {
    const grid = document.getElementById('regAvatarGrid');
    if (!grid) return;
    grid.innerHTML = '';

    window.AVAILABLE_AVATARS.forEach(av => {
      const isSelected = selectedRegAvatar === av.src;
      const div = document.createElement('div');
      div.className = `p-1.5 rounded-xl border cursor-pointer text-center transition-all ${
        isSelected ? 'bg-mcu-red/20 border-mcu-red shadow-lg' : 'bg-[#131A2B] border-slate-700 hover:border-slate-500'
      }`;
      div.innerHTML = `
        <img src="${av.src}" alt="${av.name}" class="w-8 h-8 rounded-full mx-auto object-cover border border-white/20">
      `;
      div.onclick = () => {
        selectedRegAvatar = av.src;
        populateRegisterAvatars();
      };
      grid.appendChild(div);
    });
  }

  function initAuthForms() {
    // Nav Login button
    document.getElementById('navLoginBtn')?.addEventListener('click', () => openAuthModal());
    document.getElementById('userProfileModalBtn')?.addEventListener('click', () => openAuthModal());

    // Nav Logout button
    document.getElementById('navLogoutBtn')?.addEventListener('click', () => {
      const name = AppState.currentUser ? AppState.currentUser.username : 'User';
      AppState.currentUser = null;
      saveActiveUser();
      showToast(`Signed out of ${name}. Browsing as Guest.`, 'info');
      if (AppState.activeMovie) {
        updateDetailReviewsAuthUI();
      }
    });

    // Modal Tabs
    document.getElementById('authTabLogin')?.addEventListener('click', () => setAuthTab('login'));
    document.getElementById('authTabRegister')?.addEventListener('click', () => setAuthTab('register'));

    // Modal Close
    document.getElementById('closeAuthModalBtn')?.addEventListener('click', closeAuthModal);
    document.getElementById('authBackdrop')?.addEventListener('click', closeAuthModal);

    // Login Form Submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = document.getElementById('loginUsernameInput').value.trim();
        const passInput = document.getElementById('loginPasswordInput').value.trim();

        const match = AppState.registeredUsers.find(
          u => u.username.toLowerCase() === userInput.toLowerCase() || u.email.toLowerCase() === userInput.toLowerCase()
        );

        if (match) {
          AppState.currentUser = { ...match };
        } else {
          // Flexible mock auth: allow any username
          AppState.currentUser = {
            id: `user_${Date.now()}`,
            username: userInput,
            email: `${userInput.toLowerCase()}@avengers.org`,
            avatar: selectedRegAvatar,
            bio: 'Avenger critic.',
            favoritePhase: 'Phase 3'
          };
          AppState.registeredUsers.push({ ...AppState.currentUser, password: passInput });
          localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(AppState.registeredUsers));
        }

        saveActiveUser();
        closeAuthModal();
        loginForm.reset();
        showToast(`Welcome back, ${AppState.currentUser.username}!`, 'success');
        if (AppState.activeMovie) {
          updateDetailReviewsAuthUI();
        }
      });
    }

    // Register Form Submit
    const regForm = document.getElementById('registerForm');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('regUsernameInput').value.trim();
        const email = document.getElementById('regEmailInput').value.trim();
        const password = document.getElementById('regPasswordInput').value.trim();

        if (!username || !email || !password) {
          showToast('Please fill out all registration fields.', 'warning');
          return;
        }

        const newUser = {
          id: `user_${Date.now()}`,
          username: username,
          email: email,
          avatar: selectedRegAvatar,
          bio: 'Recruited Avenger.',
          favoritePhase: 'Phase 4'
        };

        AppState.registeredUsers.push({ ...newUser, password: password });
        localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(AppState.registeredUsers));

        AppState.currentUser = newUser;
        saveActiveUser();
        closeAuthModal();
        regForm.reset();
        showToast(`Account created! Welcome, ${newUser.username}!`, 'success');
        if (AppState.activeMovie) {
          updateDetailReviewsAuthUI();
        }
      });
    }
  }

  function updateNavAuthUI() {
    const loginBtn = document.getElementById('navLoginBtn');
    const userBadge = document.getElementById('navUserBadge');
    const userAvatar = document.getElementById('navUserAvatar');
    const userName = document.getElementById('navUserName');

    if (AppState.currentUser) {
      if (loginBtn) loginBtn.classList.add('hidden');
      if (userBadge) userBadge.classList.remove('hidden');
      if (userAvatar) userAvatar.src = AppState.currentUser.avatar;
      if (userName) userName.textContent = AppState.currentUser.username;
    } else {
      if (loginBtn) loginBtn.classList.remove('hidden');
      if (userBadge) userBadge.classList.add('hidden');
    }
  }

  // ==========================================================================
  // 6. SPA VIEW ROUTING
  // ==========================================================================
  function switchView(viewName) {
    AppState.currentView = viewName;

    document.querySelectorAll('.app-view').forEach(view => view.classList.add('hidden'));

    const targetMap = {
      browse: 'viewBrowse',
      sagas: 'viewSagas',
      characters: 'viewCharacters',
      timeline: 'viewTimeline',
      watchlist: 'viewWatchlist'
    };

    const targetEl = document.getElementById(targetMap[viewName] || 'viewBrowse');
    if (targetEl) {
      targetEl.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav button state
    document.querySelectorAll('.nav-tab-btn, .mobile-nav-btn').forEach(btn => {
      const btnView = btn.getAttribute('data-view');
      if (btnView === viewName) {
        btn.classList.add('active', 'bg-white/10', 'text-white');
        btn.classList.remove('text-slate-300');
      } else {
        btn.classList.remove('active', 'bg-white/10', 'text-white');
        btn.classList.add('text-slate-300');
      }
    });

    const drawer = document.getElementById('mobileDrawer');
    if (drawer) drawer.classList.add('hidden');

    if (viewName === 'browse') {
      renderCatalog();
    } else if (viewName === 'sagas') {
      renderSagas();
    } else if (viewName === 'characters') {
      renderCharactersView();
    } else if (viewName === 'timeline') {
      renderTimeline();
    } else if (viewName === 'watchlist') {
      renderWatchlist();
    }

    window.location.hash = viewName;
  }

  // ==========================================================================
  // 7. HERO SPOTLIGHT CAROUSEL CONTROLLER (SMOOTH TRANSITIONS & AUTO-PLAY)
  // ==========================================================================
  let spotlightTransitionTimeout = null;

  function startSpotlightTimer() {
    stopSpotlightTimer();
    AppState.spotlightTimer = setInterval(() => {
      if (AppState.currentView === 'browse' && !AppState.activeMovie && !AppState.spotlightPaused) {
        nextSpotlight();
      }
    }, 5000);
  }

  function stopSpotlightTimer() {
    if (AppState.spotlightTimer) {
      clearInterval(AppState.spotlightTimer);
      AppState.spotlightTimer = null;
    }
  }

  function nextSpotlight() {
    AppState.spotlightIndex = (AppState.spotlightIndex + 1) % AppState.spotlightIds.length;
    renderHeroSpotlight(false);
  }

  function prevSpotlight() {
    AppState.spotlightIndex = (AppState.spotlightIndex - 1 + AppState.spotlightIds.length) % AppState.spotlightIds.length;
    renderHeroSpotlight(false);
  }

  function renderHeroSpotlight(immediate = false) {
    const movieId = AppState.spotlightIds[AppState.spotlightIndex] || AppState.spotlightIds[0];
    const movie = window.MCU_CATALOG.find(m => m.id === movieId);
    if (!movie) return;

    const contentContainer = document.getElementById('heroSpotlightContent');
    const backdropImg = document.getElementById('heroBackdropImg');

    if (spotlightTransitionTimeout) {
      clearTimeout(spotlightTransitionTimeout);
      spotlightTransitionTimeout = null;
    }

    const applyContent = () => {
      const isTh = AppState.currentLang === 'th';
      const phaseBadge = document.getElementById('heroPhaseBadge');
      const typeBadge = document.getElementById('heroTypeBadge');
      const scoreBadge = document.getElementById('heroScoreBadge');
      const title = document.getElementById('heroTitle');
      const tagline = document.getElementById('heroTagline');
      const synopsis = document.getElementById('heroSynopsis');
      const trailerBtn = document.getElementById('heroTrailerBtn');
      const detailBtn = document.getElementById('heroDetailBtn');
      const watchlistBtn = document.getElementById('heroWatchlistBtn');
      const dotsContainer = document.getElementById('heroDotsContainer');

      if (backdropImg) {
        backdropImg.src = movie.backdrop || movie.onlineBackdrop;
        backdropImg.onerror = () => { backdropImg.src = movie.onlineBackdrop || 'assets/images/backdrops/avengers-endgame-2019.svg'; };
      }

      if (phaseBadge) phaseBadge.textContent = isTh ? (movie.phaseTh || movie.phase) : movie.phase;
      if (typeBadge) {
        const typeStr = movie.type === 'movie' ? (isTh ? 'ภาพยนตร์' : 'Movie') : (isTh ? 'ซีรีส์' : 'Series');
        typeBadge.textContent = `${typeStr} • ${movie.releaseYear}`;
      }
      if (scoreBadge) scoreBadge.textContent = `${getAverageRating(movie.id)} / 5.0`;

      if (title) title.textContent = isTh ? (movie.titleTh || movie.title) : movie.title;
      if (tagline) {
        const tagText = isTh ? (movie.taglineTh || movie.tagline) : movie.tagline;
        tagline.textContent = tagText ? `"${tagText}"` : '';
      }
      if (synopsis) synopsis.textContent = isTh ? (movie.synopsisTh || movie.synopsis) : movie.synopsis;

      if (trailerBtn) {
        trailerBtn.onclick = () => openTrailerModal(movie.trailerKey, isTh ? (movie.titleTh || movie.title) : movie.title);
      }
      if (detailBtn) {
        detailBtn.onclick = () => openMovieDetailModal(movie.id);
      }

      const isSaved = !!AppState.watchlist[movie.id];
      if (watchlistBtn) {
        const label = isSaved 
          ? (isTh ? 'บันทึกแล้ว' : 'In Watchlist') 
          : (isTh ? 'เพิ่มในรายการที่บันทึก' : 'Add to Watchlist');
        
        watchlistBtn.className = `glass-panel hover:bg-white/10 border ${
          isSaved ? 'border-emerald-500/80 text-emerald-300' : 'border-slate-700 text-slate-200'
        } px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer`;
        
        watchlistBtn.innerHTML = `
          <i class="${isSaved ? 'fa-solid fa-check text-emerald-400' : 'fa-regular fa-bookmark'}"></i>
          <span>${label}</span>
        `;
        watchlistBtn.onclick = () => {
          toggleWatchlist(movie.id);
          renderHeroSpotlight(true);
        };
      }

      // Render Dots indicator cleanly
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        AppState.spotlightIds.forEach((id, idx) => {
          const dot = document.createElement('button');
          const isActive = idx === AppState.spotlightIndex;
          dot.setAttribute('aria-label', `Slide ${idx + 1}`);
          dot.className = `h-2 rounded-full transition-all duration-300 cursor-pointer ${
            isActive
              ? 'w-8 bg-mcu-red shadow-lg shadow-mcu-red/50'
              : 'w-2.5 bg-slate-700 hover:bg-slate-500'
          }`;
          dot.onclick = () => {
            AppState.spotlightIndex = idx;
            renderHeroSpotlight(false);
            startSpotlightTimer();
          };
          dotsContainer.appendChild(dot);
        });
      }

      // Remove transition styles for smooth entrance
      if (contentContainer) contentContainer.classList.remove('is-transitioning');
      if (backdropImg) backdropImg.classList.remove('is-transitioning');
    };

    if (immediate) {
      applyContent();
    } else {
      if (contentContainer) contentContainer.classList.add('is-transitioning');
      if (backdropImg) backdropImg.classList.add('is-transitioning');
      spotlightTransitionTimeout = setTimeout(applyContent, 190);
    }
  }

  // ==========================================================================
  // 8. CHARACTER HUB STRIP & HERO FILTERING (CLEAN MODERN UI)
  // ==========================================================================
  function renderHeroFilterStrip() {
    const container = document.getElementById('heroFilterStripContainer');
    if (!container) return;
    container.innerHTML = '';

    const isTh = AppState.currentLang === 'th';

    window.MAJOR_HEROES.forEach(hero => {
      const isActive = AppState.filters.hero === hero.id;
      const btn = document.createElement('button');
      btn.className = `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex-shrink-0 cursor-pointer border ${
        isActive
          ? 'bg-mcu-red border-mcu-red text-white shadow-md shadow-mcu-red/40'
          : 'bg-[#131A2B] border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500'
      }`;

      const heroName = (HERO_TRANSLATIONS[hero.id] && HERO_TRANSLATIONS[hero.id][AppState.currentLang]) 
        || (isTh ? (hero.nameTh || hero.name) : hero.name);

      btn.textContent = heroName;
      btn.onclick = () => {
        AppState.filters.hero = hero.id;
        renderHeroFilterStrip();
        renderCatalog();
        const toastMsg = hero.id === 'all'
          ? (isTh ? 'แสดงภาพยนตร์มาร์เวลทั้งหมด' : 'Showing all Marvel movies')
          : (isTh ? `กรองภาพยนตร์ที่มี ${heroName}` : `Filtered movies featuring ${hero.name}`);
        showToast(toastMsg, 'info');
      };
      container.appendChild(btn);
    });
  }

  // ==========================================================================
  // 9. CATALOG FILTERING & RENDERING (EXACT RELEASE DATE VS CHRONO ORDER)
  // ==========================================================================
  function getFilteredMovies() {
    let list = [...window.MCU_CATALOG];

    // Search query
    const q = AppState.filters.search.trim().toLowerCase();
    if (q) {
      list = list.filter(m => {
        const matchTitle = m.title.toLowerCase().includes(q) || (m.titleTh && m.titleTh.toLowerCase().includes(q));
        const matchDirector = m.director.toLowerCase().includes(q);
        const matchCast = m.cast.some(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q));
        const matchGenre = m.genres.some(g => g.toLowerCase().includes(q));
        const matchHeroes = m.activeHeroes.some(h => h.toLowerCase().includes(q));
        return matchTitle || matchDirector || matchCast || matchGenre || matchHeroes;
      });
    }

    // Saga filter
    if (AppState.filters.saga !== 'all') {
      list = list.filter(m => m.saga === AppState.filters.saga);
    }

    // Media type filter
    if (AppState.filters.type !== 'all') {
      list = list.filter(m => m.type === AppState.filters.type);
    }

    // Hero filter (Character Hub)
    if (AppState.filters.hero !== 'all') {
      list = list.filter(m => m.activeHeroes.includes(AppState.filters.hero));
    }

    // Order & Sort logic
    if (AppState.filters.order === 'chrono') {
      list.sort((a, b) => (a.chronologicalRank || 999) - (b.chronologicalRank || 999));
    } else if (AppState.filters.order === 'release' || AppState.filters.sort === 'release_asc') {
      // THEATRICAL RELEASE ORDER: Oldest First
      list.sort((a, b) => {
        const timeA = a.releaseDate ? Date.parse(a.releaseDate) : new Date(a.releaseYear, 0, 1).getTime();
        const timeB = b.releaseDate ? Date.parse(b.releaseDate) : new Date(b.releaseYear, 0, 1).getTime();
        return timeA - timeB;
      });
    } else if (AppState.filters.sort === 'release_desc') {
      // THEATRICAL RELEASE ORDER: Newest First
      list.sort((a, b) => {
        const timeA = a.releaseDate ? Date.parse(a.releaseDate) : new Date(a.releaseYear, 0, 1).getTime();
        const timeB = b.releaseDate ? Date.parse(b.releaseDate) : new Date(b.releaseYear, 0, 1).getTime();
        return timeB - timeA;
      });
    } else if (AppState.filters.sort === 'rating_desc') {
      list.sort((a, b) => getAverageRating(b.id) - getAverageRating(a.id));
    } else if (AppState.filters.sort === 'boxoffice_desc') {
      list.sort((a, b) => parseBoxOffice(b.boxOffice) - parseBoxOffice(a.boxOffice));
    } else if (AppState.filters.sort === 'title_asc') {
      const isTh = AppState.currentLang === 'th';
      list.sort((a, b) => {
        const titleA = isTh ? (a.titleTh || a.title) : a.title;
        const titleB = isTh ? (b.titleTh || b.title) : b.title;
        return titleA.localeCompare(titleB);
      });
    }

    return list;
  }

  function parseBoxOffice(str) {
    if (!str || !str.includes('$')) return 0;
    const clean = str.replace(/[$,\s]/g, '').toLowerCase();
    if (clean.includes('billion')) return parseFloat(clean) * 1000;
    if (clean.includes('million')) return parseFloat(clean);
    const num = parseFloat(clean);
    if (!isNaN(num)) {
      return num > 10000 ? num / 1000000 : num;
    }
    return 0;
  }

  // 1 to 5 Stars scale rating calculation
  function getAverageRating(movieId) {
    const movie = window.MCU_CATALOG.find(m => m.id === movieId);
    const movieReviews = AppState.reviews[movieId] || [];
    if (movieReviews.length === 0) {
      return movie ? movie.rating.toFixed(1) : '4.5';
    }
    const sum = movieReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / movieReviews.length).toFixed(1);
  }

  function renderCatalog() {
    const movies = getFilteredMovies();
    const isTh = AppState.currentLang === 'th';
    const countEl = document.getElementById('resultsCount');
    const gridContainer = document.getElementById('movieGrid');
    const emptyState = document.getElementById('emptyCatalogState');
    const activeFiltersContainer = document.getElementById('activeFilterTagsContainer');

    if (countEl) countEl.textContent = movies.length;

    // Active filter tags
    if (activeFiltersContainer) {
      activeFiltersContainer.innerHTML = '';
      if (AppState.filters.search) {
        activeFiltersContainer.appendChild(createFilterTag(`${isTh ? 'ค้นหา' : 'Search'}: "${AppState.filters.search}"`, () => {
          AppState.filters.search = '';
          document.getElementById('catalogSearchInput').value = '';
          renderCatalog();
        }));
      }
      if (AppState.filters.hero !== 'all') {
        const heroName = (HERO_TRANSLATIONS[AppState.filters.hero] && HERO_TRANSLATIONS[AppState.filters.hero][AppState.currentLang]) || AppState.filters.hero;
        activeFiltersContainer.appendChild(createFilterTag(`${isTh ? 'ฮีโร่' : 'Hero'}: ${heroName}`, () => {
          AppState.filters.hero = 'all';
          renderHeroFilterStrip();
          renderCatalog();
        }));
      }
      if (AppState.filters.saga !== 'all') {
        activeFiltersContainer.appendChild(createFilterTag(AppState.filters.saga, () => {
          AppState.filters.saga = 'all';
          updateSagaFilterButtons();
          renderCatalog();
        }));
      }
      if (AppState.filters.type !== 'all') {
        const typeLabel = AppState.filters.type === 'movie' ? (isTh ? 'ภาพยนตร์' : 'Movie') : (isTh ? 'ซีรีส์' : 'Series');
        activeFiltersContainer.appendChild(createFilterTag(typeLabel, () => {
          AppState.filters.type = 'all';
          updateTypeFilterButtons();
          renderCatalog();
        }));
      }
    }

    if (movies.length === 0) {
      gridContainer.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    } else {
      emptyState.classList.add('hidden');
      gridContainer.classList.remove('hidden');
    }

    gridContainer.innerHTML = '';
    movies.forEach(movie => {
      const isSaved = !!AppState.watchlist[movie.id];
      const avgRating = getAverageRating(movie.id);
      const displayTitle = isTh ? (movie.titleTh || movie.title) : movie.title;
      const displaySynopsis = isTh ? (movie.synopsisTh || movie.synopsis) : movie.synopsis;

      const card = document.createElement('div');
      card.className = 'movie-card group relative bg-[#0C101A] rounded-xl overflow-hidden border border-slate-800 flex flex-col cursor-pointer';

      card.innerHTML = `
        <div class="relative w-full aspect-[2/3] overflow-hidden bg-slate-900">
          <img 
            src="${movie.poster}" 
            alt="${displayTitle}" 
            loading="lazy"
            onerror="this.src='assets/images/posters/iron-man-2008.svg'"
            class="card-poster-img w-full h-full object-cover"
          >
          
          <!-- Rating badge top-right (1-5 scale) -->
          <div class="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-bold text-amber-400 border border-white/10 flex items-center gap-1 shadow-lg">
            <i class="fa-solid fa-star text-[10px]"></i> ${avgRating}
          </div>

          <!-- Phase badge top-left -->
          <div class="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-md ${getPhaseBadgeClass(movie.phase)}">
            ${getPhaseLabel(movie.phase)}
          </div>

          <!-- Quick Watchlist Bookmark Button -->
          <button 
            class="quick-watchlist-btn absolute bottom-2 right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isSaved
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/40'
                : 'bg-black/70 hover:bg-mcu-red text-slate-300 hover:text-white border border-white/20'
            }"
            title="${isSaved ? (isTh ? 'บันทึกแล้ว' : 'In Watchlist') : (isTh ? 'เพิ่มในรายการ' : 'Add to Watchlist')}"
          >
            <i class="${isSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} text-xs"></i>
          </button>

          <!-- Poster Hover Overlay with Quick Info -->
          <div class="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
            <span class="text-[10px] text-mcu-gold font-bold uppercase tracking-wider">${formatGenres(movie.genres)}</span>
            <p class="text-[11px] text-slate-300 line-clamp-3 mt-1 leading-snug">${displaySynopsis}</p>
            <div class="mt-3 flex items-center justify-between text-[10px]">
              <span class="bg-white/15 px-2 py-0.5 rounded font-semibold text-slate-200">
                ${isTh ? movie.runtime.replace('min', ' นาที') : movie.runtime}
              </span>
              <span class="text-mcu-cyan font-bold uppercase">${isTh ? 'ดูรายละเอียดและรีวิว →' : 'View Details & Reviews →'}</span>
            </div>
          </div>
        </div>

        <div class="p-3 flex-grow flex flex-col justify-between border-t border-slate-800/80 bg-[#0C101A]">
          <div>
            <h3 class="font-bebas text-lg tracking-wide text-white group-hover:text-mcu-red transition-colors truncate" title="${displayTitle}">
              ${displayTitle}
            </h3>
            <div class="flex items-center justify-between text-[11px] text-slate-400 mt-0.5">
              <span>${movie.releaseYear}</span>
              <span class="text-slate-500 text-[10px] truncate max-w-[135px]" title="${isTh ? (movie.sagaTh || movie.universe) : movie.universe}">
                ${movie.universe === 'MCU (Sacred Timeline)' ? (isTh ? `#${movie.chronologicalRank} ในไทม์ไลน์` : `#${movie.chronologicalRank} In-Timeline`) : (isTh ? (movie.sagaTh || getSagaLabel(movie.saga.split(' (')[0])) : movie.saga.split(' (')[0])}
              </span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.quick-watchlist-btn')) {
          e.stopPropagation();
          toggleWatchlist(movie.id);
          renderCatalog();
          return;
        }
        openMovieDetailModal(movie.id);
      });

      gridContainer.appendChild(card);
    });
  }

  function createFilterTag(label, onRemove) {
    const span = document.createElement('span');
    span.className = 'inline-flex items-center gap-1 bg-[#1A243D] text-slate-200 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold';
    span.innerHTML = `
      ${label}
      <button class="hover:text-mcu-red"><i class="fa-solid fa-xmark text-[9px]"></i></button>
    `;
    span.querySelector('button').onclick = onRemove;
    return span;
  }

  function getPhaseBadgeClass(phase) {
    switch (phase) {
      case 'Phase 1': return 'badge-phase-1';
      case 'Phase 2': return 'badge-phase-2';
      case 'Phase 3': return 'badge-phase-3';
      case 'Phase 4': return 'badge-phase-4';
      case 'Phase 5': return 'badge-phase-5';
      case 'Raimi Trilogy': return 'bg-red-600/30 text-red-300 border border-red-500/40';
      case 'Webb Series': return 'bg-blue-600/30 text-blue-300 border border-blue-500/40';
      case 'SSU': return 'bg-purple-900/40 text-purple-300 border border-purple-500/40';
      case 'Original Trilogy': return 'bg-cyan-900/40 text-cyan-300 border border-cyan-500/40';
      case 'Wolverine Trilogy': return 'bg-amber-900/40 text-amber-300 border border-amber-500/40';
      case 'Prequel Era': return 'bg-indigo-900/40 text-indigo-300 border border-indigo-500/40';
      case 'Deadpool Series': return 'bg-red-700/40 text-red-300 border border-red-600/40';
      case 'Blade Trilogy': return 'bg-rose-950 text-rose-300 border border-rose-600/40';
      case 'Marvel Knights': return 'bg-orange-900/40 text-orange-300 border border-orange-500/40';
      case 'Story Era': return 'bg-sky-900/40 text-sky-300 border border-sky-500/40';
      default: return 'bg-slate-800 text-slate-300 border border-slate-700';
    }
  }

  // ==========================================================================
  // 10. DYNAMIC THEME MOVIE DETAIL MODAL
  // ==========================================================================
  function openMovieDetailModal(movieId) {
    const movie = window.MCU_CATALOG.find(m => m.id === movieId);
    if (!movie) return;

    AppState.activeMovie = movie;
    const modal = document.getElementById('movieDetailModal');
    const modalBox = document.getElementById('movieDetailBox');
    if (!modal || !modalBox) return;

    // Apply Dynamic Theme Palette Classes & Variables
    modalBox.className = 'relative rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto z-10 modal-box border shadow-2xl transition-all duration-300';
    modalBox.classList.add(`theme-${movie.theme.name}`);
    modalBox.style.setProperty('--theme-bg', movie.theme.bg);
    modalBox.style.setProperty('--theme-accent', movie.theme.accent);
    modalBox.style.setProperty('--theme-glow', movie.theme.glow);
    modalBox.style.setProperty('--theme-border', movie.theme.border);

    // Dynamic backdrop & poster images
    const backdropImg = document.getElementById('detailBackdropImg');
    const posterImg = document.getElementById('detailPosterImg');
    backdropImg.src = movie.backdrop;
    backdropImg.onerror = () => { backdropImg.src = movie.onlineBackdrop || 'assets/images/backdrops/avengers-endgame-2019.svg'; };
    posterImg.src = movie.poster;
    posterImg.onerror = () => { posterImg.src = movie.onlinePoster || 'assets/images/posters/iron-man-2008.svg'; };

    // Metadata & badges
    const isTh = AppState.currentLang === 'th';
    const displayTitle = isTh ? (movie.titleTh || movie.title) : movie.title;
    const displayTagline = isTh ? (movie.taglineTh || movie.tagline) : movie.tagline;
    const displaySynopsis = isTh ? (movie.synopsisTh || movie.synopsis) : movie.synopsis;

    const phaseBadge = document.getElementById('detailPhaseBadge');
    phaseBadge.textContent = getPhaseLabel(movie.phase);
    phaseBadge.className = `px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${getPhaseBadgeClass(movie.phase)}`;

    document.getElementById('detailTypeBadge').textContent = movie.universe !== 'MCU (Sacred Timeline)' ? (isTh ? (movie.sagaTh || movie.universe) : movie.universe.replace(' Universe', '')) : (movie.type === 'movie' ? (isTh ? 'ภาพยนตร์' : 'Feature Film') : (isTh ? 'ซีรีส์ Disney+' : 'Disney+ Series'));
    document.getElementById('detailYearBadge').textContent = movie.releaseYear;
    document.getElementById('detailRatingBadge').textContent = movie.ageRating;

    document.getElementById('detailTitle').textContent = displayTitle;
    document.getElementById('detailTagline').textContent = displayTagline ? `"${displayTagline}"` : '';

    // Ratings (1 to 5 Stars scale)
    const avgRating = getAverageRating(movie.id);
    document.getElementById('detailScore').textContent = `★ ${avgRating}`;
    const reviewsCount = (AppState.reviews[movie.id] || []).length;
    document.getElementById('detailReviewsCountBadge').textContent = `(${reviewsCount} ${isTh ? 'รีวิว' : (reviewsCount === 1 ? 'review' : 'reviews')})`;
    document.getElementById('detailCriticScore').textContent = `${movie.criticScore}%`;
    document.getElementById('detailAudienceScore').textContent = `${movie.audienceScore}%`;

    // Synopsis & details
    document.getElementById('detailSynopsis').textContent = displaySynopsis;
    document.getElementById('detailDirector').textContent = movie.director;
    document.getElementById('detailBoxOffice').textContent = movie.boxOffice;
    document.getElementById('detailRuntime').textContent = isTh ? movie.runtime.replace('min', ' นาที') : movie.runtime;
    document.getElementById('detailActiveHeroes').textContent = movie.activeHeroes.map(h => (HERO_TRANSLATIONS[h] && HERO_TRANSLATIONS[h][AppState.currentLang]) || h).join(', ');

    // Trailer Button Action
    document.getElementById('detailTrailerPlayBtn').onclick = () => {
      openTrailerModal(movie.trailerKey, displayTitle);
    };

    // Watchlist Toggle Button
    updateDetailWatchlistButton();

    // Cast list
    const castContainer = document.getElementById('detailCastContainer');
    castContainer.innerHTML = '';
    movie.cast.forEach(castMember => {
      const card = document.createElement('div');
      card.className = 'flex items-center gap-3 bg-black/40 p-2.5 rounded-xl border border-white/10 min-w-[200px] flex-shrink-0';
      card.innerHTML = `
        <img src="${castMember.avatar}" alt="${castMember.name}" class="w-10 h-10 rounded-full border border-mcu-red bg-slate-900 object-cover flex-shrink-0" onerror="this.src='assets/images/avatars/ironman.svg'">
        <div class="truncate">
          <strong class="text-xs text-white block truncate">${castMember.name}</strong>
          <span class="text-[10px] text-mcu-gold block truncate">${castMember.role}</span>
        </div>
      `;
      castContainer.appendChild(card);
    });

    // Reviews list & Auth UI
    renderDetailReviews();
    updateDetailReviewsAuthUI();

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMovieDetailModal() {
    const modal = document.getElementById('movieDetailModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    AppState.activeMovie = null;
  }

  function updateDetailWatchlistButton() {
    const btn = document.getElementById('detailWatchlistToggleBtn');
    if (!btn || !AppState.activeMovie) return;

    const isTh = AppState.currentLang === 'th';
    const isSaved = !!AppState.watchlist[AppState.activeMovie.id];
    btn.className = `border px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
      isSaved
        ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/80'
        : 'bg-black/50 hover:bg-black/70 text-white border-white/20'
    }`;
    btn.innerHTML = `
      <i class="${isSaved ? 'fa-solid fa-check text-emerald-400' : 'fa-regular fa-bookmark'}"></i>
      <span>${isSaved ? (isTh ? 'บันทึกในรายการของคุณแล้ว' : 'In Your Watchlist (Saved)') : (isTh ? 'เพิ่มในรายการที่บันทึก' : 'Add to Watchlist')}</span>
    `;

    btn.onclick = () => {
      toggleWatchlist(AppState.activeMovie.id);
      updateDetailWatchlistButton();
      renderCatalog();
    };
  }

  // ==========================================================================
  // 11. REVIEW & RATING SYSTEM (AUTH-GUARDED & LOCALSTORAGE PERSISTED)
  // ==========================================================================
  function updateDetailReviewsAuthUI() {
    const guestNotice = document.getElementById('reviewGuestNotice');
    const authorDisplay = document.getElementById('reviewAuthorStatusDisplay');
    const authorName = document.getElementById('reviewFormAuthorName');

    if (AppState.currentUser) {
      if (guestNotice) guestNotice.classList.add('hidden');
      if (authorDisplay) authorDisplay.innerHTML = `Posting as: <strong class="text-white">${AppState.currentUser.username}</strong>`;
      if (authorName) authorName.textContent = AppState.currentUser.username;
    } else {
      if (guestNotice) guestNotice.classList.remove('hidden');
      if (authorDisplay) authorDisplay.innerHTML = `Browsing as: <strong class="text-amber-400">Guest</strong>`;
      if (authorName) authorName.textContent = 'Guest';
    }
  }

  function renderDetailReviews() {
    if (!AppState.activeMovie) return;
    const movieId = AppState.activeMovie.id;
    const reviewsList = document.getElementById('detailReviewsList');
    const reviewsCountEl = document.getElementById('detailReviewsCount');

    const reviews = AppState.reviews[movieId] || [];
    if (reviewsCountEl) {
      reviewsCountEl.textContent = `${reviews.length} ${reviews.length === 1 ? 'Review' : 'Reviews'}`;
    }

    reviewsList.innerHTML = '';
    if (reviews.length === 0) {
      reviewsList.innerHTML = `
        <div class="text-center py-6 text-slate-400 text-xs">
          No fan reviews written yet. Be the first Avenger to review this title!
        </div>
      `;
      return;
    }

    reviews.forEach(review => {
      const isLiked = AppState.likedReviews.has(review.id);
      const card = document.createElement('div');
      card.className = 'bg-black/40 p-4 rounded-xl border border-white/10 space-y-2';

      // 5-Star rendering helper
      const fullStars = Math.floor(review.rating);
      let starsHtml = '';
      for (let s = 1; s <= 5; s++) {
        if (s <= fullStars) {
          starsHtml += '<i class="fa-solid fa-star text-amber-400 text-xs"></i>';
        } else {
          starsHtml += '<i class="fa-regular fa-star text-slate-600 text-xs"></i>';
        }
      }

      card.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <img src="${review.avatar}" alt="${review.author}" class="w-8 h-8 rounded-full border border-mcu-red bg-slate-900 object-cover">
            <div>
              <strong class="text-xs text-white block">${review.author}</strong>
              <span class="text-[10px] text-slate-400">${review.date}</span>
            </div>
          </div>
          <div class="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 text-xs font-bold text-amber-400">
            ${starsHtml}
            <span class="ml-1">${review.rating} / 5</span>
          </div>
        </div>

        <p class="text-xs text-slate-200 leading-relaxed pt-1">${escapeHTML(review.text)}</p>

        <div class="flex items-center justify-between pt-1 text-[11px] text-slate-400 border-t border-white/5">
          <span class="text-[10px] text-slate-500">Verified Fan</span>
          <button class="review-like-btn flex items-center gap-1.5 px-2 py-0.5 rounded transition-colors ${
            isLiked ? 'text-red-400 font-bold' : 'hover:text-white'
          }">
            <i class="${isLiked ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}"></i>
            <span>${review.likes || 0} Helpful</span>
          </button>
        </div>
      `;

      card.querySelector('.review-like-btn').onclick = () => {
        if (AppState.likedReviews.has(review.id)) {
          AppState.likedReviews.delete(review.id);
          review.likes = Math.max(0, (review.likes || 1) - 1);
        } else {
          AppState.likedReviews.add(review.id);
          review.likes = (review.likes || 0) + 1;
        }
        saveLikes();
        saveReviews();
        renderDetailReviews();
      };

      reviewsList.appendChild(card);
    });
  }

  function initReviewForm() {
    const starSelector = document.getElementById('starRatingSelector');
    const ratingText = document.getElementById('reviewSelectedRatingText');
    const textarea = document.getElementById('reviewTextInput');
    const charCount = document.getElementById('reviewCharCount');
    const form = document.getElementById('submitReviewForm');

    // 5 Clickable Stars Generator
    if (starSelector) {
      starSelector.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        const starBtn = document.createElement('button');
        starBtn.type = 'button';
        starBtn.className = 'star-btn text-xl sm:text-2xl text-amber-400 focus:outline-none';
        starBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
        starBtn.setAttribute('data-rating', i);

        // Hover
        starBtn.addEventListener('mouseenter', () => updateStarDisplay(i));
        starBtn.addEventListener('mouseleave', () => updateStarDisplay(AppState.selectedReviewRating));

        // Click: Check Auth first!
        starBtn.addEventListener('click', () => {
          if (!AppState.currentUser) {
            openAuthModal({ promptReason: 'Please log in to rate this movie.' });
            return;
          }
          AppState.selectedReviewRating = i;
          updateStarDisplay(i);
        });

        starSelector.appendChild(starBtn);
      }
      updateStarDisplay(AppState.selectedReviewRating);
    }

    function updateStarDisplay(rating) {
      if (!starSelector) return;
      const stars = starSelector.querySelectorAll('.star-btn');
      stars.forEach((btn, idx) => {
        const starIndex = idx + 1;
        if (starIndex <= rating) {
          btn.className = 'star-btn text-xl sm:text-2xl text-amber-400';
          btn.innerHTML = '<i class="fa-solid fa-star"></i>';
        } else {
          btn.className = 'star-btn text-xl sm:text-2xl text-slate-700 hover:text-amber-300';
          btn.innerHTML = '<i class="fa-regular fa-star"></i>';
        }
      });

      const ratingDescriptions = [
        'Disappointing',
        'Average',
        'Good Action',
        'Great Marvel Fun',
        'Masterpiece'
      ];
      if (ratingText) {
        ratingText.textContent = `★ ${rating}.0 / 5.0 (${ratingDescriptions[rating - 1] || 'Great'})`;
      }
    }

    // Guest Auth Trigger on clicking Textarea
    if (textarea) {
      textarea.addEventListener('focus', () => {
        if (!AppState.currentUser) {
          textarea.blur();
          openAuthModal({ promptReason: 'Please log in to submit a review.' });
        }
      });
      textarea.addEventListener('input', () => {
        if (charCount) charCount.textContent = `${textarea.value.length} / 500 characters`;
      });
    }

    document.getElementById('reviewNoticeLoginBtn')?.addEventListener('click', () => {
      openAuthModal({ promptReason: 'Please log in to rate or review.' });
    });

    // Form Submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Auth Guard
        if (!AppState.currentUser) {
          openAuthModal({ promptReason: 'Please log in to submit a review.' });
          return;
        }

        if (!AppState.activeMovie) return;

        const text = textarea.value.trim();
        if (!text) {
          showToast('Please write your review comment before submitting.', 'warning');
          return;
        }

        const newReview = {
          id: `rev-${Date.now()}`,
          author: AppState.currentUser.username,
          avatar: AppState.currentUser.avatar,
          rating: AppState.selectedReviewRating,
          date: new Date().toISOString().split('T')[0],
          text: text,
          likes: 0
        };

        const movieId = AppState.activeMovie.id;
        if (!AppState.reviews[movieId]) AppState.reviews[movieId] = [];
        AppState.reviews[movieId].unshift(newReview);

        // Persist to LocalStorage
        saveReviews();

        // Reset
        textarea.value = '';
        if (charCount) charCount.textContent = '0 / 500 characters';

        // Refresh UI & Recalculate Average
        renderDetailReviews();
        const updatedAvg = getAverageRating(movieId);
        document.getElementById('detailScore').textContent = `★ ${updatedAvg}`;
        const newCount = AppState.reviews[movieId].length;
        document.getElementById('detailReviewsCountBadge').textContent = `(${newCount} ${newCount === 1 ? 'review' : 'reviews'})`;

        renderCatalog();
        showToast('Your review has been published and saved!', 'success');
      });
    }
  }

  // ==========================================================================
  // 12. SAGAS & PHASES VIEW
  // ==========================================================================
  function renderSagas() {
    const container = document.getElementById('phasesCardsContainer');
    if (!container) return;
    container.innerHTML = '';

    const isTh = AppState.currentLang === 'th';

    window.MCU_PHASES.forEach(phase => {
      const phaseMovies = window.MCU_CATALOG.filter(m => m.phase === phase.id);
      const topMovie = [...phaseMovies].sort((a, b) => getAverageRating(b.id) - getAverageRating(a.id))[0];

      const card = document.createElement('div');
      card.className = 'glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-600 transition-all';

      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${phase.badgeColor}">
              ${phase.span}
            </span>
            <span class="text-xs font-semibold text-slate-400">${phaseMovies.length} ${isTh ? 'เรื่อง' : 'Titles'}</span>
          </div>

          <h3 class="font-bebas text-2xl text-white">
            ${isTh ? (phase.nameTh || phase.name) : phase.name}
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            ${isTh ? (phase.descriptionTh || phase.description) : phase.description}
          </p>

          ${
            topMovie
              ? `
              <div class="bg-[#0A0D15] p-3 rounded-xl border border-slate-800 mt-4 flex items-center gap-3">
                <img src="${topMovie.poster}" alt="${topMovie.title}" class="w-10 h-14 object-cover rounded border border-slate-700 flex-shrink-0" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
                <div>
                  <span class="text-[9px] uppercase font-bold text-amber-400 block">${isTh ? 'เรตติ้งสูงสุด' : 'Top Rated'}</span>
                  <strong class="text-xs text-white block truncate">${isTh ? (topMovie.titleTh || topMovie.title) : topMovie.title}</strong>
                  <span class="text-[10px] text-slate-400">★ ${getAverageRating(topMovie.id)} / 5.0</span>
                </div>
              </div>
              `
              : ''
          }
        </div>

        <button class="filter-phase-btn mt-5 w-full bg-slate-800 hover:bg-mcu-red text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
          ${isTh ? ('สำรวจภาพยนตร์ใน ' + (phase.nameTh || phase.id) + ' →') : ('Explore ' + phase.id + ' Titles →')}
        </button>
      `;

      card.querySelector('.filter-phase-btn').onclick = () => {
        AppState.filters.search = phase.id;
        document.getElementById('catalogSearchInput').value = phase.id;
        switchView('browse');
      };

      container.appendChild(card);
    });

    // Saga shortcut cards
    document.querySelectorAll('.saga-shortcut-card').forEach(card => {
      card.onclick = () => {
        const saga = card.getAttribute('data-saga');
        AppState.filters.saga = saga;
        updateSagaFilterButtons();
        switchView('browse');
      };
    });
  }

  // ==========================================================================
  // 13. DEDICATED CHARACTER HUB VIEW
  // ==========================================================================
  function renderCharactersView() {
    const grid = document.getElementById('characterHubGrid');
    if (!grid) return;
    grid.innerHTML = '';

    window.MAJOR_HEROES.filter(h => h.id !== 'all').forEach(hero => {
      const heroMovies = window.MCU_CATALOG.filter(m => m.activeHeroes.includes(hero.id));

      const card = document.createElement('div');
      card.className = 'glass-panel p-4 rounded-xl border border-slate-800 hover:border-mcu-red text-center space-y-3 cursor-pointer group transition-all hover:scale-105';

      card.innerHTML = `
        <img src="${hero.avatar || 'assets/images/avatars/ironman.svg'}" alt="${hero.name}" class="w-16 h-16 rounded-full mx-auto border-2 border-slate-700 group-hover:border-mcu-red object-cover transition-colors">
        <div>
          <h4 class="font-bebas text-lg text-white group-hover:text-mcu-red transition-colors">${hero.name}</h4>
          <span class="text-[11px] text-slate-400">${heroMovies.length} MCU Appearances</span>
        </div>
      `;

      card.onclick = () => {
        AppState.filters.hero = hero.id;
        renderHeroFilterStrip();
        switchView('browse');
      };

      grid.appendChild(card);
    });
  }

  // ==========================================================================
  // 14. SACRED TIMELINE VIEW
  // ==========================================================================
  function renderTimeline() {
    const container = document.getElementById('timelineNodesContainer');
    if (!container) return;
    container.innerHTML = '';

    const isTh = AppState.currentLang === 'th';
    let movies = [...window.MCU_CATALOG];
    if (AppState.timelineUniverse && AppState.timelineUniverse !== 'all') {
      if (AppState.timelineUniverse === 'Spider-Man Legacy') {
        movies = movies.filter(m => m.universe.includes('Spider-Man Legacy'));
      } else {
        movies = movies.filter(m => m.universe === AppState.timelineUniverse);
      }
    }

    const isChrono = AppState.timelineOrder === 'chrono';
    if (isChrono) {
      movies.sort((a, b) => a.chronologicalRank - b.chronologicalRank);
    } else {
      movies.sort((a, b) => a.releaseYear - b.releaseYear);
    }

    movies.forEach((movie, idx) => {
      const isEven = idx % 2 === 0;
      const avgRating = getAverageRating(movie.id);
      const yearText = isChrono ? (isTh ? `${movie.chronologicalYear} (ตามไทม์ไลน์)` : movie.chronologicalYear) : movie.releaseYear;
      const displayTitle = isTh ? (movie.titleTh || movie.title) : movie.title;
      const displaySynopsis = isTh ? (movie.synopsisTh || movie.synopsis) : movie.synopsis;

      const cardHtml = `
        <div class="timeline-item-card glass-panel hover:border-mcu-red/60 p-3.5 sm:p-4 rounded-xl border border-slate-800 transition-all cursor-pointer group shadow-xl">
          <div class="flex gap-3 sm:gap-4 items-center">
            <img src="${movie.poster}" alt="${displayTitle}" class="w-14 h-20 sm:w-16 sm:h-24 object-cover rounded-lg border border-slate-700 flex-shrink-0" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
            <div class="flex-grow space-y-1 min-w-0">
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded ${getPhaseBadgeClass(movie.phase)}">
                  ${getPhaseLabel(movie.phase)}
                </span>
                <span class="text-amber-400 text-xs font-bold">★ ${avgRating}</span>
              </div>
              <h4 class="font-bebas text-base sm:text-lg text-white group-hover:text-mcu-red transition-colors truncate">${displayTitle}</h4>
              <p class="text-[11px] text-slate-300 line-clamp-2">${displaySynopsis}</p>
            </div>
          </div>
        </div>
      `;

      node.innerHTML = `
        <!-- Desktop Left Slot (shown only on >= md for even items) -->
        <div class="hidden md:block w-1/2 px-6 lg:px-8">
          ${isEven ? cardHtml : ''}
        </div>
        
        <!-- Timeline Node Circle Badge (Left on mobile, Center on desktop) -->
        <div class="absolute left-0 md:static z-20 flex flex-col items-center justify-center flex-shrink-0 top-3 md:top-auto">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C101A] border-2 border-mcu-red text-mcu-red flex items-center justify-center font-bold text-xs shadow-lg arc-pulse">
            ${idx + 1}
          </div>
          <span class="text-[9px] sm:text-[10px] font-extrabold text-mcu-gold mt-1 bg-black/90 px-1.5 py-0.5 rounded border border-slate-800 whitespace-nowrap">
            ${yearText}
          </span>
        </div>

        <!-- Desktop Right Slot & Mobile Full-Width Slot -->
        <div class="w-full md:w-1/2 md:px-6 lg:px-8">
          ${isEven ? '<div class="md:hidden">' + cardHtml + '</div>' : cardHtml}
        </div>
      `;

      node.querySelectorAll('.timeline-item-card').forEach(cardEl => {
        cardEl.onclick = () => openMovieDetailModal(movie.id);
      });

      container.appendChild(node);
    });
  }

  // ==========================================================================
  // 15. WATCHLIST VIEW
  // ==========================================================================
  function renderWatchlist() {
    const itemsGrid = document.getElementById('watchlistItemsGrid');
    const emptyState = document.getElementById('watchlistEmptyState');
    if (!itemsGrid) return;

    const savedKeys = Object.keys(AppState.watchlist);
    let completedCount = 0;
    let wantCount = 0;
    let watchingCount = 0;

    savedKeys.forEach(k => {
      const item = AppState.watchlist[k];
      if (item.status === 'completed') completedCount++;
      else if (item.status === 'want_to_watch') wantCount++;
      else if (item.status === 'watching') watchingCount++;
    });

    document.getElementById('watchlistTotalCount').textContent = savedKeys.length;
    document.getElementById('watchlistCompletedCount').textContent = completedCount;
    document.getElementById('watchlistPlanCount').textContent = wantCount;

    document.getElementById('tabCountAll').textContent = savedKeys.length;
    document.getElementById('tabCountWant').textContent = wantCount;
    document.getElementById('tabCountWatching').textContent = watchingCount;
    document.getElementById('tabCountCompleted').textContent = completedCount;

    const catalogTotal = window.MCU_CATALOG.length;
    const percent = Math.min(100, Math.round((completedCount / catalogTotal) * 100));
    const isTh = AppState.currentLang === 'th';
    document.getElementById('watchlistProgressBar').style.width = `${percent}%`;
    document.getElementById('watchlistPercentText').textContent = isTh ? `${completedCount} จาก ${catalogTotal} เรื่องที่ดูแล้ว (${percent}%)` : `${completedCount} of ${catalogTotal} Watched (${percent}%)`;

    const activeTab = document.querySelector('.watchlist-filter-btn.active');
    const activeStatus = activeTab ? activeTab.getAttribute('data-status') : 'all';

    let displayKeys = savedKeys;
    if (activeStatus !== 'all') {
      displayKeys = savedKeys.filter(k => AppState.watchlist[k].status === activeStatus);
    }

    if (displayKeys.length === 0) {
      itemsGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    } else {
      emptyState.classList.add('hidden');
    }

    itemsGrid.innerHTML = '';
    displayKeys.forEach(movieId => {
      const movie = window.MCU_CATALOG.find(m => m.id === movieId);
      if (!movie) return;

      const watchData = AppState.watchlist[movieId];
      const avgRating = getAverageRating(movie.id);
      const displayTitle = isTh ? (movie.titleTh || movie.title) : movie.title;

      const card = document.createElement('div');
      card.className = 'glass-panel p-4 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all';

      card.innerHTML = `
        <div class="flex gap-3">
          <img src="${movie.poster}" alt="${displayTitle}" class="w-16 h-24 object-cover rounded-lg border border-slate-700 flex-shrink-0 cursor-pointer" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
          <div class="flex-grow space-y-1">
            <h4 class="font-bebas text-lg text-white hover:text-mcu-red transition-colors cursor-pointer truncate">${displayTitle}</h4>
            <div class="text-[10px] text-slate-400 flex items-center justify-between">
              <span>${movie.releaseYear} • ${isTh ? movie.runtime.replace('min', ' นาที') : movie.runtime}</span>
              <span class="text-amber-400 font-bold">★ ${avgRating}</span>
            </div>
            
            <div class="pt-2">
              <select class="watchlist-status-select w-full bg-[#0A0D15] text-[11px] text-slate-200 border border-slate-700 rounded px-2 py-1 focus:outline-none focus:border-mcu-red">
                <option value="want_to_watch" ${watchData.status === 'want_to_watch' ? 'selected' : ''}>${isTh ? 'อยากดู' : 'To Watch'} ⏳</option>
                <option value="watching" ${watchData.status === 'watching' ? 'selected' : ''}>${isTh ? 'กำลังดู' : 'Watching Now'} 🍿</option>
                <option value="completed" ${watchData.status === 'completed' ? 'selected' : ''}>${isTh ? 'ดูแล้ว' : 'Completed'} ✓</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 mt-3 border-t border-slate-800 text-xs">
          <button class="watchlist-review-btn text-mcu-cyan hover:text-white text-[11px] font-semibold flex items-center gap-1">
            <i class="fa-solid fa-pen"></i> ${isTh ? 'เขียนรีวิว' : 'Review'}
          </button>
          <button class="watchlist-remove-btn text-red-400 hover:text-red-300 text-[11px] font-semibold flex items-center gap-1">
            <i class="fa-solid fa-trash-can"></i> ${isTh ? 'ลบออก' : 'Remove'}
          </button>
        </div>
      `;

      card.querySelector('.watchlist-status-select').onchange = (e) => {
        AppState.watchlist[movieId].status = e.target.value;
        saveWatchlist();
        renderWatchlist();
        showToast(isTh ? `อัปเดตสถานะ "${displayTitle}" แล้ว` : `Updated status for "${movie.title}"`, 'success');
      };

      card.querySelector('.watchlist-review-btn').onclick = () => openMovieDetailModal(movieId);
      card.querySelector('img').onclick = () => openMovieDetailModal(movieId);
      card.querySelector('h4').onclick = () => openMovieDetailModal(movieId);

      card.querySelector('.watchlist-remove-btn').onclick = () => {
        delete AppState.watchlist[movieId];
        saveWatchlist();
        renderWatchlist();
        showToast(`Removed "${movie.title}" from Watchlist`, 'info');
      };

      itemsGrid.appendChild(card);
    });
  }

  function updateWatchlistBadges() {
    const badge = document.getElementById('navWatchlistBadge');
    if (!badge) return;
    const count = Object.keys(AppState.watchlist).length;
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  function toggleWatchlist(movieId) {
    const movie = window.MCU_CATALOG.find(m => m.id === movieId);
    if (!movie) return;

    if (AppState.watchlist[movieId]) {
      delete AppState.watchlist[movieId];
      saveWatchlist();
      showToast(`Removed "${movie.title}" from your Watchlist`, 'info');
    } else {
      AppState.watchlist[movieId] = {
        status: 'want_to_watch',
        addedAt: new Date().toISOString()
      };
      saveWatchlist();
      showToast(`Added "${movie.title}" to your Watchlist!`, 'success');
    }
  }

  // ==========================================================================
  // 16. YOUTUBE TRAILER MODAL
  // ==========================================================================
  function openTrailerModal(trailerKey, movieTitle) {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    const titleEl = document.getElementById('trailerModalTitle');
    if (!modal || !iframe) return;

    titleEl.textContent = `${movieTitle} • Official Trailer`;
    iframe.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerIframe');
    if (iframe) iframe.src = '';
    if (modal) modal.classList.add('hidden');
    if (!AppState.activeMovie) {
      document.body.style.overflow = '';
    }
  }

  // ==========================================================================
  // 17. GLOBAL EVENT LISTENERS & SETUP
  // ==========================================================================
  function initNavigation() {
    document.querySelectorAll('.nav-tab-btn, .mobile-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view) switchView(view);
      });
    });

    document.getElementById('navLogoBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('browse');
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (mobileToggle && drawer) {
      mobileToggle.addEventListener('click', () => drawer.classList.toggle('hidden'));
    }

    // Search synchronization
    const headerSearch = document.getElementById('headerSearchInput');
    const headerClear = document.getElementById('headerSearchClear');
    const catalogSearch = document.getElementById('catalogSearchInput');
    const catalogClear = document.getElementById('catalogSearchClear');
    const mobileSearch = document.getElementById('mobileSearchInput');

    function syncSearch(val) {
      AppState.filters.search = val;
      if (headerSearch) headerSearch.value = val;
      if (catalogSearch) catalogSearch.value = val;
      if (mobileSearch) mobileSearch.value = val;
      if (headerClear) headerClear.classList.toggle('hidden', !val);
      if (catalogClear) catalogClear.classList.toggle('hidden', !val);

      if (AppState.currentView !== 'browse') {
        switchView('browse');
      } else {
        renderCatalog();
      }
    }

    headerSearch?.addEventListener('input', (e) => syncSearch(e.target.value));
    headerClear?.addEventListener('click', () => syncSearch(''));
    catalogSearch?.addEventListener('input', (e) => syncSearch(e.target.value));
    catalogClear?.addEventListener('click', () => syncSearch(''));
    mobileSearch?.addEventListener('input', (e) => syncSearch(e.target.value));

    // Carousel Slider Controls (Left & Right Buttons + Hover Pause)
    const heroPrevBtn = document.getElementById('heroPrevBtn');
    const heroNextBtn = document.getElementById('heroNextBtn');
    const heroSpotlightEl = document.getElementById('heroSpotlight');

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', () => {
        prevSpotlight();
        startSpotlightTimer();
      });
    }
    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => {
        nextSpotlight();
        startSpotlightTimer();
      });
    }
    if (heroSpotlightEl) {
      heroSpotlightEl.addEventListener('mouseenter', () => {
        AppState.spotlightPaused = true;
      });
      heroSpotlightEl.addEventListener('mouseleave', () => {
        AppState.spotlightPaused = false;
      });
    }

    // Language Switcher Toggle Buttons (Header & Mobile Drawer)
    const langToggleBtn = document.getElementById('langToggleBtn');
    const mobileLangToggleBtn = document.getElementById('mobileLangToggleBtn');

    function toggleLanguage() {
      const nextLang = AppState.currentLang === 'th' ? 'en' : 'th';
      applyLanguage(nextLang);
      showToast(nextLang === 'th' ? 'สลับเป็นภาษาไทยเรียบร้อยแล้ว' : 'Switched to English', 'info');
    }

    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }
    if (mobileLangToggleBtn) {
      mobileLangToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Order toggle: Release Order vs Chronological Order
    const orderReleaseBtn = document.getElementById('orderReleaseBtn');
    const orderChronoBtn = document.getElementById('orderChronoBtn');
    const sortSelect = document.getElementById('sortSelect');

    if (orderReleaseBtn && orderChronoBtn) {
      orderReleaseBtn.addEventListener('click', () => {
        AppState.filters.order = 'release';
        AppState.filters.sort = 'release_asc';
        if (sortSelect) sortSelect.value = 'release_asc';
        orderReleaseBtn.classList.add('active', 'bg-white/15', 'text-white');
        orderReleaseBtn.classList.remove('text-slate-400');
        orderChronoBtn.classList.remove('active', 'bg-white/15', 'text-white');
        orderChronoBtn.classList.add('text-slate-400');
        renderCatalog();
      });
      orderChronoBtn.addEventListener('click', () => {
        AppState.filters.order = 'chrono';
        orderChronoBtn.classList.add('active', 'bg-white/15', 'text-white');
        orderChronoBtn.classList.remove('text-slate-400');
        orderReleaseBtn.classList.remove('active', 'bg-white/15', 'text-white');
        orderReleaseBtn.classList.add('text-slate-400');
        renderCatalog();
      });
    }

    // Timeline Mode Buttons in Timeline View
    const chronoTimelineBtn = document.getElementById('timelineModeChronoBtn');
    const releaseTimelineBtn = document.getElementById('timelineModeReleaseBtn');
    if (chronoTimelineBtn && releaseTimelineBtn) {
      chronoTimelineBtn.addEventListener('click', () => {
        AppState.timelineOrder = 'chrono';
        chronoTimelineBtn.className = 'px-3 sm:px-5 py-2 rounded-lg bg-mcu-red text-white transition-all flex items-center justify-center gap-2';
        releaseTimelineBtn.className = 'px-3 sm:px-5 py-2 rounded-lg text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2';
        renderTimeline();
      });
      releaseTimelineBtn.addEventListener('click', () => {
        AppState.timelineOrder = 'release';
        releaseTimelineBtn.className = 'px-3 sm:px-5 py-2 rounded-lg bg-mcu-red text-white transition-all flex items-center justify-center gap-2';
        chronoTimelineBtn.className = 'px-3 sm:px-5 py-2 rounded-lg text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2';
        renderTimeline();
      });
    }

    // Timeline Universe Filter Pills
    document.querySelectorAll('.timeline-univ-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AppState.timelineUniverse = btn.getAttribute('data-univ');
        document.querySelectorAll('.timeline-univ-btn').forEach(b => {
          if (b.getAttribute('data-univ') === AppState.timelineUniverse) {
            b.className = 'timeline-univ-btn active px-3 py-1 rounded-full text-xs font-bold bg-mcu-red text-white transition-all';
          } else {
            b.className = 'timeline-univ-btn px-3 py-1 rounded-full text-xs font-semibold bg-[#131A2B] text-slate-300 hover:text-white border border-slate-700 transition-all';
          }
        });
        renderTimeline();
      });
    });

    // Saga Filters Group
    document.querySelectorAll('.saga-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AppState.filters.saga = btn.getAttribute('data-saga');
        updateSagaFilterButtons();
        renderCatalog();
      });
    });

    // Media Type filter group
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AppState.filters.type = btn.getAttribute('data-type');
        updateTypeFilterButtons();
        renderCatalog();
      });
    });

    // Sort select
    sortSelect?.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      if (e.target.value === 'release_asc') {
        AppState.filters.order = 'release';
        orderReleaseBtn?.classList.add('active', 'bg-white/15', 'text-white');
        orderReleaseBtn?.classList.remove('text-slate-400');
        orderChronoBtn?.classList.remove('active', 'bg-white/15', 'text-white');
        orderChronoBtn?.classList.add('text-slate-400');
      } else if (e.target.value === 'release_desc') {
        AppState.filters.order = 'release_desc';
        orderReleaseBtn?.classList.remove('active', 'bg-white/15', 'text-white');
        orderReleaseBtn?.classList.add('text-slate-400');
        orderChronoBtn?.classList.remove('active', 'bg-white/15', 'text-white');
        orderChronoBtn?.classList.add('text-slate-400');
      } else {
        AppState.filters.order = 'custom';
        orderReleaseBtn?.classList.remove('active', 'bg-white/15', 'text-white');
        orderReleaseBtn?.classList.add('text-slate-400');
        orderChronoBtn?.classList.remove('active', 'bg-white/15', 'text-white');
        orderChronoBtn?.classList.add('text-slate-400');
      }
      renderCatalog();
    });

    // Watchlist Filter tabs
    document.querySelectorAll('.watchlist-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.watchlist-filter-btn').forEach(b => {
          b.classList.remove('active', 'bg-white/10', 'text-white');
          b.classList.add('text-slate-400');
        });
        btn.classList.add('active', 'bg-white/10', 'text-white');
        btn.classList.remove('text-slate-400');
        renderWatchlist();
      });
    });

    document.getElementById('watchlistGoBrowseBtn')?.addEventListener('click', () => switchView('browse'));
    document.getElementById('emptyStateResetBtn')?.addEventListener('click', resetAllFilters);

    // Modal Close
    document.getElementById('closeDetailModalBtn')?.addEventListener('click', closeMovieDetailModal);
    document.getElementById('movieDetailBackdrop')?.addEventListener('click', closeMovieDetailModal);

    document.getElementById('closeTrailerModalBtn')?.addEventListener('click', closeTrailerModal);
    document.getElementById('trailerBackdrop')?.addEventListener('click', closeTrailerModal);

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMovieDetailModal();
        closeTrailerModal();
        closeAuthModal();
      }
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        document.getElementById('headerSearchInput')?.focus();
      }
    });

    // URL hash handling
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== AppState.currentView) {
        switchView(hash);
      }
    });
  }

  function applyLanguage(lang) {
    AppState.currentLang = lang;
    localStorage.setItem(STORAGE_KEYS.LANG, lang);

    const isTh = lang === 'th';
    const langCurrentLabel = document.getElementById('langCurrentLabel');
    const langAltLabel = document.getElementById('langAltLabel');
    const mobileLangLabel = document.getElementById('mobileLangCurrentLabel');

    if (langCurrentLabel && langAltLabel) {
      if (isTh) {
        langCurrentLabel.className = 'text-mcu-red font-bold';
        langCurrentLabel.textContent = 'TH';
        langAltLabel.className = 'text-slate-400 text-[11px]';
        langAltLabel.textContent = 'EN';
      } else {
        langCurrentLabel.className = 'text-slate-400 text-[11px]';
        langCurrentLabel.textContent = 'TH';
        langAltLabel.className = 'text-mcu-red font-bold';
        langAltLabel.textContent = 'EN';
      }
    }
    if (mobileLangLabel) {
      mobileLangLabel.textContent = isTh ? 'TH' : 'EN';
    }

    const t = TRANSLATIONS[lang] || TRANSLATIONS.th;

    // Apply data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Apply data-i18n-ph (placeholders)
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Re-render views
    renderHeroSpotlight();
    renderHeroFilterStrip();
    renderCatalog();
    if (AppState.currentView === 'sagas') renderSagas();
    if (AppState.currentView === 'characters') renderCharactersView();
    if (AppState.currentView === 'timeline') renderTimeline();
    if (AppState.currentView === 'watchlist') renderWatchlist();
  }

  function updateSagaFilterButtons() {
    document.querySelectorAll('.saga-filter-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-saga') === AppState.filters.saga;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('bg-mcu-red', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('text-slate-300', !isActive);
    });
  }

  function updateTypeFilterButtons() {
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-type') === AppState.filters.type;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('bg-mcu-red', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('text-slate-300', !isActive);
    });
  }

  function resetAllFilters() {
    AppState.filters.search = '';
    AppState.filters.saga = 'all';
    AppState.filters.type = 'all';
    AppState.filters.hero = 'all';
    AppState.filters.order = 'release';
    AppState.filters.sort = 'release_asc';

    document.getElementById('catalogSearchInput').value = '';
    document.getElementById('headerSearchInput').value = '';
    if (document.getElementById('sortSelect')) document.getElementById('sortSelect').value = 'release_asc';
    updateSagaFilterButtons();
    updateTypeFilterButtons();
    renderHeroFilterStrip();
    renderCatalog();
    showToast(AppState.currentLang === 'th' ? 'ล้างตัวกรองทั้งหมดแล้ว' : 'Filters reset to default', 'info');
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // 18. APPLICATION INITIALIZATION
  // ==========================================================================
  function init() {
    initLocalStorage();
    initMarvelIntro();
    initAuthForms();
    initNavigation();
    initReviewForm();
    updateNavAuthUI();
    updateWatchlistBadges();

    applyLanguage(AppState.currentLang);

    const initialHash = window.location.hash.replace('#', '');
    if (['browse', 'sagas', 'characters', 'timeline', 'watchlist'].includes(initialHash)) {
      switchView(initialHash);
    } else {
      switchView('browse');
    }

    renderHeroSpotlight();
    renderCatalog();
    startSpotlightTimer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
