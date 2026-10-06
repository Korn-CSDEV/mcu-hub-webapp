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
    INTRO_SEEN: 'mcu_hub_intro_seen'
  };

  const AppState = {
    currentView: 'browse',
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
      order: 'release',          // 'release' | 'chrono'
      sort: 'rating_desc'
    },
    selectedReviewRating: 5,     // 1 to 5 stars
    spotlightIndex: 0,
    spotlightIds: [
      'avengers-endgame-2019',
      'deadpool-and-wolverine-2024',
      'avengers-infinity-war-2018',
      'spider-man-no-way-home-2021',
      'iron-man-2008'
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
  // 3. MARVEL INTRO LOADING SCREEN (2.2 SECONDS)
  // ==========================================================================
  function initMarvelIntro() {
    const overlay = document.getElementById('marvelIntroOverlay');
    const skipBtn = document.getElementById('skipIntroBtn');
    if (!overlay) return;

    const introSeen = localStorage.getItem(STORAGE_KEYS.INTRO_SEEN);

    function dismissIntro() {
      overlay.classList.add('intro-dismissed');
      localStorage.setItem(STORAGE_KEYS.INTRO_SEEN, 'true');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 600);
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', dismissIntro);
    }

    if (introSeen === 'true') {
      // Returning user: dismiss immediately
      overlay.style.display = 'none';
    } else {
      // 2.2 seconds cinematic intro
      setTimeout(dismissIntro, 2200);
    }

    // Replay intro handlers (for navbar / footer triggers)
    const replayButtons = [
      document.getElementById('footerReplayIntroBtn'),
      document.getElementById('mobileReplayIntroBtn')
    ];
    replayButtons.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          overlay.style.display = 'flex';
          overlay.classList.remove('intro-dismissed');
          setTimeout(dismissIntro, 2400);
        });
      }
    });
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
  // 7. HERO SPOTLIGHT CAROUSEL
  // ==========================================================================
  function renderHeroSpotlight() {
    const movie = window.MCU_CATALOG.find(m => m.id === AppState.spotlightIds[AppState.spotlightIndex]);
    if (!movie) return;

    const backdropImg = document.getElementById('heroBackdropImg');
    const phaseBadge = document.getElementById('heroPhaseBadge');
    const typeBadge = document.getElementById('heroTypeBadge');
    const scoreBadge = document.getElementById('heroScoreBadge');
    const title = document.getElementById('heroTitle');
    const tagline = document.getElementById('heroTagline');
    const synopsis = document.getElementById('heroSynopsis');
    const trailerBtn = document.getElementById('heroTrailerBtn');
    const detailBtn = document.getElementById('heroDetailBtn');
    const watchlistBtn = document.getElementById('heroWatchlistBtn');
    const watchlistBtnText = document.getElementById('heroWatchlistBtnText');
    const dotsContainer = document.getElementById('heroDotsContainer');

    backdropImg.src = movie.backdrop;
    backdropImg.onerror = () => { backdropImg.src = movie.onlineBackdrop || 'assets/images/backdrops/avengers-endgame-2019.svg'; };

    phaseBadge.textContent = movie.phase;
    typeBadge.textContent = `${movie.type === 'movie' ? 'Movie' : 'Series'} • ${movie.releaseYear}`;
    scoreBadge.innerHTML = `<i class="fa-solid fa-star text-xs text-amber-400"></i> ★ ${getAverageRating(movie.id)} / 5.0`;
    title.textContent = movie.title;
    tagline.textContent = `"${movie.tagline}"`;
    synopsis.textContent = movie.synopsis;

    trailerBtn.onclick = () => openTrailerModal(movie.trailerKey, movie.title);
    detailBtn.onclick = () => openMovieDetailModal(movie.id);

    const isSaved = !!AppState.watchlist[movie.id];
    watchlistBtnText.textContent = isSaved ? 'In Watchlist' : 'Add to Watchlist';
    watchlistBtn.className = `glass-panel hover:bg-white/10 border ${
      isSaved ? 'border-emerald-500/80 text-emerald-300' : 'border-slate-700 text-slate-200'
    } px-4 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all`;
    watchlistBtn.innerHTML = `
      <i class="${isSaved ? 'fa-solid fa-bookmark text-emerald-400' : 'fa-regular fa-bookmark'}"></i>
      <span>${isSaved ? 'In Watchlist' : 'Add to Watchlist'}</span>
    `;
    watchlistBtn.onclick = () => {
      toggleWatchlist(movie.id);
      renderHeroSpotlight();
    };

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      AppState.spotlightIds.forEach((id, idx) => {
        const dot = document.createElement('button');
        dot.className = `h-2 rounded-full transition-all ${
          idx === AppState.spotlightIndex
            ? 'w-8 bg-mcu-red shadow-lg shadow-mcu-red/50'
            : 'w-2.5 bg-slate-700 hover:bg-slate-500'
        }`;
        dot.onclick = () => {
          AppState.spotlightIndex = idx;
          renderHeroSpotlight();
        };
        dotsContainer.appendChild(dot);
      });
    }
  }

  // ==========================================================================
  // 8. CHARACTER HUB STRIP & HERO FILTERING
  // ==========================================================================
  function renderHeroFilterStrip() {
    const container = document.getElementById('heroFilterStripContainer');
    if (!container) return;
    container.innerHTML = '';

    window.MAJOR_HEROES.forEach(hero => {
      const isActive = AppState.filters.hero === hero.id;
      const btn = document.createElement('button');
      btn.className = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex-shrink-0 border ${
        isActive
          ? 'bg-mcu-red border-mcu-red text-white shadow-md shadow-mcu-red/40'
          : 'bg-[#131A2B] border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
      }`;

      const iconHtml = hero.avatar
        ? `<img src="${hero.avatar}" alt="${hero.name}" class="w-4 h-4 rounded-full object-cover">`
        : `<i class="${hero.icon} text-[11px]"></i>`;

      btn.innerHTML = `${iconHtml} <span>${hero.name}</span>`;
      btn.onclick = () => {
        AppState.filters.hero = hero.id;
        renderHeroFilterStrip();
        renderCatalog();
        showToast(hero.id === 'all' ? 'Showing all Marvel movies' : `Filtered movies featuring ${hero.name}!`, 'info');
      };
      container.appendChild(btn);
    });
  }

  // ==========================================================================
  // 9. CATALOG FILTERING & RENDERING (RELEASE VS CHRONO ORDER)
  // ==========================================================================
  function getFilteredMovies() {
    let list = [...window.MCU_CATALOG];

    // Search query
    const q = AppState.filters.search.trim().toLowerCase();
    if (q) {
      list = list.filter(m => {
        const matchTitle = m.title.toLowerCase().includes(q);
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

    // Order mode: Release Order vs Chronological Order
    if (AppState.filters.order === 'chrono') {
      list.sort((a, b) => a.chronologicalRank - b.chronologicalRank);
    } else {
      // Default: Release Order
      list.sort((a, b) => a.releaseYear - b.releaseYear);
    }

    // Additional Sort Dropdown if not chronological
    if (AppState.filters.order !== 'chrono') {
      if (AppState.filters.sort === 'rating_desc') {
        list.sort((a, b) => getAverageRating(b.id) - getAverageRating(a.id));
      } else if (AppState.filters.sort === 'year_desc') {
        list.sort((a, b) => b.releaseYear - a.releaseYear);
      } else if (AppState.filters.sort === 'year_asc') {
        list.sort((a, b) => a.releaseYear - b.releaseYear);
      } else if (AppState.filters.sort === 'boxoffice_desc') {
        list.sort((a, b) => parseBoxOffice(b.boxOffice) - parseBoxOffice(a.boxOffice));
      } else if (AppState.filters.sort === 'title_asc') {
        list.sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return list;
  }

  function parseBoxOffice(str) {
    if (!str || !str.includes('$')) return 0;
    const clean = str.replace(/[$,\s]/g, '').toLowerCase();
    if (clean.includes('billion')) return parseFloat(clean) * 1000;
    if (clean.includes('million')) return parseFloat(clean);
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
    const countEl = document.getElementById('resultsCount');
    const gridContainer = document.getElementById('movieGrid');
    const emptyState = document.getElementById('emptyCatalogState');
    const activeFiltersContainer = document.getElementById('activeFilterTagsContainer');

    if (countEl) countEl.textContent = movies.length;

    // Active filter tags
    if (activeFiltersContainer) {
      activeFiltersContainer.innerHTML = '';
      if (AppState.filters.search) {
        activeFiltersContainer.appendChild(createFilterTag(`Search: "${AppState.filters.search}"`, () => {
          AppState.filters.search = '';
          document.getElementById('catalogSearchInput').value = '';
          renderCatalog();
        }));
      }
      if (AppState.filters.hero !== 'all') {
        activeFiltersContainer.appendChild(createFilterTag(`Hero: ${AppState.filters.hero}`, () => {
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
        activeFiltersContainer.appendChild(createFilterTag(`Type: ${AppState.filters.type}`, () => {
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

      const card = document.createElement('div');
      card.className = 'movie-card group relative bg-[#0C101A] rounded-xl overflow-hidden border border-slate-800 flex flex-col cursor-pointer';

      card.innerHTML = `
        <div class="relative w-full aspect-[2/3] overflow-hidden bg-slate-900">
          <img 
            src="${movie.poster}" 
            alt="${movie.title}" 
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
            ${movie.phase}
          </div>

          <!-- Quick Watchlist Bookmark Button -->
          <button 
            class="quick-watchlist-btn absolute bottom-2 right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isSaved
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/40'
                : 'bg-black/70 hover:bg-mcu-red text-slate-300 hover:text-white border border-white/20'
            }"
            title="${isSaved ? 'In Watchlist' : 'Add to Watchlist'}"
          >
            <i class="${isSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} text-xs"></i>
          </button>

          <!-- Poster Hover Overlay with Quick Info -->
          <div class="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
            <span class="text-[10px] text-mcu-gold font-bold uppercase tracking-wider">${movie.genres.join(' • ')}</span>
            <p class="text-[11px] text-slate-300 line-clamp-3 mt-1 leading-snug">${movie.synopsis}</p>
            <div class="mt-3 flex items-center justify-between text-[10px]">
              <span class="bg-white/15 px-2 py-0.5 rounded font-semibold text-slate-200">
                <i class="fa-regular fa-clock"></i> ${movie.runtime}
              </span>
              <span class="text-mcu-cyan font-bold uppercase">View Theme →</span>
            </div>
          </div>
        </div>

        <div class="p-3 flex-grow flex flex-col justify-between border-t border-slate-800/80 bg-[#0C101A]">
          <div>
            <h3 class="font-bebas text-lg tracking-wide text-white group-hover:text-mcu-red transition-colors truncate" title="${movie.title}">
              ${movie.title}
            </h3>
            <div class="flex items-center justify-between text-[11px] text-slate-400 mt-0.5">
              <span>${movie.releaseYear}</span>
              <span class="text-slate-500 text-[10px]">#${movie.chronologicalRank} In-Timeline</span>
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
      default: return 'bg-slate-800 text-slate-300';
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
    const phaseBadge = document.getElementById('detailPhaseBadge');
    phaseBadge.textContent = movie.phase;
    phaseBadge.className = `px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${getPhaseBadgeClass(movie.phase)}`;

    document.getElementById('detailTypeBadge').textContent = movie.type === 'movie' ? 'Feature Film' : 'Disney+ Series';
    document.getElementById('detailYearBadge').textContent = movie.releaseYear;
    document.getElementById('detailRatingBadge').textContent = movie.ageRating;

    document.getElementById('detailTitle').textContent = movie.title;
    document.getElementById('detailTagline').textContent = `"${movie.tagline}"`;

    // Ratings (1 to 5 Stars scale)
    const avgRating = getAverageRating(movie.id);
    document.getElementById('detailScore').textContent = `★ ${avgRating}`;
    const reviewsCount = (AppState.reviews[movie.id] || []).length;
    document.getElementById('detailReviewsCountBadge').textContent = `(${reviewsCount} ${reviewsCount === 1 ? 'review' : 'reviews'})`;
    document.getElementById('detailCriticScore').textContent = `${movie.criticScore}%`;
    document.getElementById('detailAudienceScore').textContent = `${movie.audienceScore}%`;

    // Synopsis & details
    document.getElementById('detailSynopsis').textContent = movie.synopsis;
    document.getElementById('detailDirector').textContent = movie.director;
    document.getElementById('detailBoxOffice').textContent = movie.boxOffice;
    document.getElementById('detailRuntime').textContent = movie.runtime;
    document.getElementById('detailActiveHeroes').textContent = movie.activeHeroes.join(', ');

    // Trailer Button Action
    document.getElementById('detailTrailerPlayBtn').onclick = () => {
      openTrailerModal(movie.trailerKey, movie.title);
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
        <img src="${castMember.avatar}" alt="${castMember.role}" class="w-10 h-10 rounded-full border border-mcu-red bg-slate-900 object-cover flex-shrink-0">
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

    const isSaved = !!AppState.watchlist[AppState.activeMovie.id];
    btn.className = `border px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
      isSaved
        ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/80'
        : 'bg-black/50 hover:bg-black/70 text-white border-white/20'
    }`;
    btn.innerHTML = `
      <i class="${isSaved ? 'fa-solid fa-bookmark text-emerald-400' : 'fa-regular fa-bookmark'}"></i>
      <span>${isSaved ? 'In Your Watchlist (Saved)' : 'Add to Watchlist'}</span>
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
            <span class="text-xs font-semibold text-slate-400">${phaseMovies.length} Titles</span>
          </div>

          <h3 class="font-bebas text-2xl text-white">
            ${phase.name}
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            ${phase.description}
          </p>

          ${
            topMovie
              ? `
              <div class="bg-[#0A0D15] p-3 rounded-xl border border-slate-800 mt-4 flex items-center gap-3">
                <img src="${topMovie.poster}" alt="${topMovie.title}" class="w-10 h-14 object-cover rounded border border-slate-700 flex-shrink-0" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
                <div>
                  <span class="text-[9px] uppercase font-bold text-amber-400 block">Top Rated</span>
                  <strong class="text-xs text-white block truncate">${topMovie.title}</strong>
                  <span class="text-[10px] text-slate-400">★ ${getAverageRating(topMovie.id)} / 5.0</span>
                </div>
              </div>
              `
              : ''
          }
        </div>

        <button class="filter-phase-btn mt-5 w-full bg-slate-800 hover:bg-mcu-red text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
          Explore ${phase.id} Titles →
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

    const movies = [...window.MCU_CATALOG];
    if (AppState.filters.order === 'chrono') {
      movies.sort((a, b) => a.chronologicalRank - b.chronologicalRank);
    } else {
      movies.sort((a, b) => a.releaseYear - b.releaseYear);
    }

    movies.forEach((movie, idx) => {
      const isEven = idx % 2 === 0;
      const isSaved = !!AppState.watchlist[movie.id];
      const avgRating = getAverageRating(movie.id);

      const node = document.createElement('div');
      node.className = 'relative flex flex-col md:flex-row items-center w-full';

      const cardHtml = `
        <div class="timeline-item-card glass-panel hover:border-mcu-red/60 p-4 rounded-xl border border-slate-800 transition-all cursor-pointer group shadow-xl">
          <div class="flex gap-4 items-center">
            <img src="${movie.poster}" alt="${movie.title}" class="w-16 h-24 object-cover rounded-lg border border-slate-700 flex-shrink-0" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
            <div class="flex-grow space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded ${getPhaseBadgeClass(movie.phase)}">
                  ${movie.phase}
                </span>
                <span class="text-amber-400 text-xs font-bold">★ ${avgRating}</span>
              </div>
              <h4 class="font-bebas text-lg text-white group-hover:text-mcu-red transition-colors">${movie.title}</h4>
              <p class="text-[11px] text-slate-300 line-clamp-2">${movie.synopsis}</p>
            </div>
          </div>
        </div>
      `;

      node.innerHTML = `
        ${isEven ? `<div class="w-full md:w-1/2 px-4 md:px-8">${cardHtml}</div>` : '<div class="hidden md:block w-1/2"></div>'}
        
        <div class="z-20 flex flex-col items-center justify-center my-4 md:my-0 flex-shrink-0">
          <div class="w-10 h-10 rounded-full bg-[#0C101A] border-2 border-mcu-red text-mcu-red flex items-center justify-center font-bold text-xs shadow-lg arc-pulse">
            ${idx + 1}
          </div>
          <span class="text-[10px] font-extrabold text-mcu-gold mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-slate-800">
            ${AppState.filters.order === 'chrono' ? movie.chronologicalYear : movie.releaseYear}
          </span>
        </div>

        ${!isEven ? `<div class="w-full md:w-1/2 px-4 md:px-8">${cardHtml}</div>` : '<div class="hidden md:block w-1/2"></div>'}
      `;

      const cardEl = node.querySelector('.timeline-item-card');
      if (cardEl) {
        cardEl.onclick = () => openMovieDetailModal(movie.id);
      }

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
    document.getElementById('watchlistProgressBar').style.width = `${percent}%`;
    document.getElementById('watchlistPercentText').textContent = `${completedCount} of ${catalogTotal} Watched (${percent}%)`;

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

      const card = document.createElement('div');
      card.className = 'glass-panel p-4 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all';

      card.innerHTML = `
        <div class="flex gap-3">
          <img src="${movie.poster}" alt="${movie.title}" class="w-16 h-24 object-cover rounded-lg border border-slate-700 flex-shrink-0 cursor-pointer" onerror="this.src='assets/images/posters/iron-man-2008.svg'">
          <div class="flex-grow space-y-1">
            <h4 class="font-bebas text-lg text-white hover:text-mcu-red transition-colors cursor-pointer truncate">${movie.title}</h4>
            <div class="text-[10px] text-slate-400 flex items-center justify-between">
              <span>${movie.releaseYear} • ${movie.runtime}</span>
              <span class="text-amber-400 font-bold">★ ${avgRating}</span>
            </div>
            
            <div class="pt-2">
              <select class="watchlist-status-select w-full bg-[#0A0D15] text-[11px] text-slate-200 border border-slate-700 rounded px-2 py-1 focus:outline-none focus:border-mcu-red">
                <option value="want_to_watch" ${watchData.status === 'want_to_watch' ? 'selected' : ''}>To Watch ⏳</option>
                <option value="watching" ${watchData.status === 'watching' ? 'selected' : ''}>Watching Now 🍿</option>
                <option value="completed" ${watchData.status === 'completed' ? 'selected' : ''}>Completed ✓</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 mt-3 border-t border-slate-800 text-xs">
          <button class="watchlist-review-btn text-mcu-cyan hover:text-white text-[11px] font-semibold flex items-center gap-1">
            <i class="fa-solid fa-pen"></i> Review
          </button>
          <button class="watchlist-remove-btn text-red-400 hover:text-red-300 text-[11px] font-semibold flex items-center gap-1">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
      `;

      card.querySelector('.watchlist-status-select').onchange = (e) => {
        AppState.watchlist[movieId].status = e.target.value;
        saveWatchlist();
        renderWatchlist();
        showToast(`Updated status for "${movie.title}"`, 'success');
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

    // Order toggle: Release Order vs Chronological Order
    const orderReleaseBtn = document.getElementById('orderReleaseBtn');
    const orderChronoBtn = document.getElementById('orderChronoBtn');
    if (orderReleaseBtn && orderChronoBtn) {
      orderReleaseBtn.addEventListener('click', () => {
        AppState.filters.order = 'release';
        orderReleaseBtn.className = 'order-toggle-btn active px-3 py-1 rounded bg-white/15 text-white transition-all flex items-center gap-1.5';
        orderChronoBtn.className = 'order-toggle-btn px-3 py-1 rounded text-slate-400 hover:text-white transition-all flex items-center gap-1.5';
        renderCatalog();
      });
      orderChronoBtn.addEventListener('click', () => {
        AppState.filters.order = 'chrono';
        orderChronoBtn.className = 'order-toggle-btn active px-3 py-1 rounded bg-white/15 text-white transition-all flex items-center gap-1.5';
        orderReleaseBtn.className = 'order-toggle-btn px-3 py-1 rounded text-slate-400 hover:text-white transition-all flex items-center gap-1.5';
        renderCatalog();
      });
    }

    // Timeline Mode Buttons in Timeline View
    const chronoTimelineBtn = document.getElementById('timelineModeChronoBtn');
    const releaseTimelineBtn = document.getElementById('timelineModeReleaseBtn');
    if (chronoTimelineBtn && releaseTimelineBtn) {
      chronoTimelineBtn.addEventListener('click', () => {
        AppState.filters.order = 'chrono';
        chronoTimelineBtn.className = 'px-5 py-2 rounded-lg bg-mcu-red text-white transition-all flex items-center gap-2';
        releaseTimelineBtn.className = 'px-5 py-2 rounded-lg text-slate-300 hover:text-white transition-all flex items-center gap-2';
        renderTimeline();
      });
      releaseTimelineBtn.addEventListener('click', () => {
        AppState.filters.order = 'release';
        releaseTimelineBtn.className = 'px-5 py-2 rounded-lg bg-mcu-red text-white transition-all flex items-center gap-2';
        chronoTimelineBtn.className = 'px-5 py-2 rounded-lg text-slate-300 hover:text-white transition-all flex items-center gap-2';
        renderTimeline();
      });
    }

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
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
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

  function updateSagaFilterButtons() {
    document.querySelectorAll('.saga-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-saga') === AppState.filters.saga) {
        btn.className = 'saga-filter-btn active px-3 py-1 rounded bg-mcu-red text-white transition-all';
      } else {
        btn.className = 'saga-filter-btn px-3 py-1 rounded text-slate-300 hover:text-white transition-all';
      }
    });
  }

  function updateTypeFilterButtons() {
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-type') === AppState.filters.type) {
        btn.className = 'type-filter-btn active px-3 py-1 rounded bg-mcu-red text-white transition-all';
      } else {
        btn.className = 'type-filter-btn px-3 py-1 rounded text-slate-300 hover:text-white transition-all';
      }
    });
  }

  function resetAllFilters() {
    AppState.filters.search = '';
    AppState.filters.saga = 'all';
    AppState.filters.type = 'all';
    AppState.filters.hero = 'all';
    AppState.filters.order = 'release';
    AppState.filters.sort = 'rating_desc';

    document.getElementById('catalogSearchInput').value = '';
    document.getElementById('headerSearchInput').value = '';
    updateSagaFilterButtons();
    updateTypeFilterButtons();
    renderHeroFilterStrip();
    renderCatalog();
    showToast('Filters reset to default', 'info');
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
    renderHeroFilterStrip();

    const initialHash = window.location.hash.replace('#', '');
    if (['browse', 'sagas', 'characters', 'timeline', 'watchlist'].includes(initialHash)) {
      switchView(initialHash);
    } else {
      switchView('browse');
    }

    renderHeroSpotlight();
    renderCatalog();

    // Auto cycle spotlight every 8 seconds when idle
    setInterval(() => {
      if (AppState.currentView === 'browse' && !AppState.activeMovie) {
        AppState.spotlightIndex = (AppState.spotlightIndex + 1) % AppState.spotlightIds.length;
        renderHeroSpotlight();
      }
    }, 8000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
