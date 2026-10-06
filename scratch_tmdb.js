async function test() {
  const res = await fetch('https://www.themoviedb.org/movie/557', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log('Status:', res.status);
  const text = await res.text();
  const images = [...text.matchAll(/https:\/\/image\.tmdb\.org\/t\/p\/[^\s"'>]+/g)].map(m => m[0]);
  console.log('Found images:', images.slice(0, 5));
}
test();
