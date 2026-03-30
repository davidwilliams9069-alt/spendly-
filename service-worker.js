const cacheName = 'spendly-v1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital@1&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
