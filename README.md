# Marvel Cinematic Universe (MCU) Review & Hub 🎬

A Full-Stack Single Page Web Application (SPA) built for Web Application Development Mini-Project (Year 3, Term 1).

---

## 🛠️ Technology Stack
1. **Frontend Architecture**:
   - **HTML5**: Semantic markup, accessible structures, responsive viewport.
   - **Tailwind CSS**: Modern utility-first styling with custom theme palette tokens (`mcu-red`, `mcu-dark`, etc.), responsive breakpoints, and dark mode design.
   - **CSS3 (styles.css)**: Marvel Studios 2.2s cinematic comic-flip intro animation, dynamic theme transitions, and glowing visual effects.
   - **Vanilla JavaScript (ES6+)**: SPA view routing, instant filtering & searching, dynamic hero character hub, and LocalStorage state management.
2. **Backend & Server (Node.js)**:
   - **Node.js + Express**: Web server serving the SPA and providing RESTful API endpoints (`/api/movies`, `/api/reviews`, `/api/health`).
   - **CORS & JSON Middleware**: Handling cross-origin requests and JSON payloads.

---

## 🚀 How to Run with Node.js

Inside the `mcu-review-app` directory:

```bash
# 1. Install dependencies (already installed, or if cloned anew):
npm install

# 2. Start the application:
npm start

# Or in development auto-reload mode:
npm run dev
```

Then open your browser at:
```text
http://localhost:3000
```

---

## ✨ Key Features
- **Marvel Studios Cinematic Intro Screen**: 2.2-second comic flipping animation on Marvel red `#ED1D24` with "Skip Intro" button and LocalStorage flag.
- **Dynamic Theme Palette Switching**: Detailed view dynamically changes between *Warm Crimson & Gold* (Iron Man, Spider-Man), *Royal Blue & Cyan* (Cap, Thor), *Emerald Green* (Loki, Hulk), *Cosmic Purple* (Guardians, Doctor Strange), and *Dark Slate*.
- **Character Hub (Hero Filters)**: Instant filtering by heroes showing both solo films and crossover ensemble appearances.
- **Release Order vs. Chronological Order**: Toggle between theatrical debut date and in-universe MCU timeline.
- **5-Star Rating & Review System**: Star ratings, commenter names, and comments persisted to LocalStorage with guest login prompt guards.
- **Personal Watchlist**: Status tracking (*Want to Watch*, *Watching*, *Completed*) with progress bar percentage.
"# mcu-hub-webapp" 
