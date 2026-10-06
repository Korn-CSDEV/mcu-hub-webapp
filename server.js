/**
 * Marvel Cinematic Universe (MCU) Review & Hub
 * Node.js & Express Full-Stack Application Server
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets (index.html, styles.css, app.js, data.js, assets)
app.use(express.static(path.join(__dirname)));

// Load initial movie catalog from data.js for backend API endpoints
function getCatalogData() {
  try {
    const dataPath = path.join(__dirname, 'data.js');
    const content = fs.readFileSync(dataPath, 'utf8');
    // Extract JSON or evaluate in safe sandbox
    const sandbox = { window: {} };
    const vm = require('vm');
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    return sandbox.window.MCU_CATALOG || [];
  } catch (err) {
    console.error('Error reading catalog data:', err);
    return [];
  }
}

// ============================================================================
// RESTful API Endpoints
// ============================================================================

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'Marvel Cinematic Universe (MCU) Review & Hub',
    runtime: 'Node.js ' + process.version,
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// 2. Get all titles (with query filters)
app.get('/api/movies', (req, res) => {
  const catalog = getCatalogData();
  let results = [...catalog];

  // Optional query filters
  const { phase, saga, type, hero, search } = req.query;

  if (phase && phase !== 'all') {
    results = results.filter(m => m.phase.toLowerCase() === phase.toLowerCase());
  }
  if (saga && saga !== 'all') {
    results = results.filter(m => m.saga.toLowerCase() === saga.toLowerCase());
  }
  if (type && type !== 'all') {
    results = results.filter(m => m.type.toLowerCase() === type.toLowerCase());
  }
  if (hero && hero !== 'all') {
    results = results.filter(m => m.activeHeroes && m.activeHeroes.includes(hero));
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.activeHeroes.some(h => h.toLowerCase().includes(q))
    );
  }

  res.json({
    total: results.length,
    movies: results
  });
});

// 3. Get single movie by ID
app.get('/api/movies/:id', (req, res) => {
  const catalog = getCatalogData();
  const movie = catalog.find(m => m.id === req.params.id);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found in MCU archive' });
  }
  res.json(movie);
});

// 4. API endpoint to receive review submissions
app.post('/api/reviews', (req, res) => {
  const { movieId, author, rating, text } = req.body;
  if (!movieId || !author || !rating || !text) {
    return res.status(400).json({ error: 'Missing required review fields' });
  }

  // Simulated server acknowledgment (Client also persists in LocalStorage)
  const review = {
    id: `rev-${Date.now()}`,
    movieId,
    author,
    rating: parseFloat(rating),
    text,
    date: new Date().toISOString().split('T')[0],
    likes: 0
  };

  res.status(201).json({
    success: true,
    message: 'Review successfully recorded on MCU server',
    review
  });
});

// 5. Auth Login endpoint (Mock verification)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username or email is required' });
  }

  res.json({
    success: true,
    message: `Welcome back, Avenger ${username}!`,
    user: {
      username,
      token: 'mcu_token_' + Date.now()
    }
  });
});

// 6. SPA Route Fallback (Any route not matching API serves index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ============================================================================
// Start Server
// ============================================================================
app.listen(PORT, () => {
  console.log('\n======================================================');
  console.log('   ★ MARVEL CINEMATIC UNIVERSE (MCU) REVIEW & HUB ★  ');
  console.log('======================================================');
  console.log(` > Server running at: http://localhost:${PORT}`);
  console.log(` > Stack: HTML5 + Tailwind CSS + Vanilla JS + Node.js Express`);
  console.log(` > Press Ctrl + C to stop the server\n`);
});
