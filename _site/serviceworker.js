const CACHE_NAME = 'your-site-cache-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/script.js',
  "/impressum",
  "/ueberuns",
];

self.addEventListener('install', event => {
    console.log('SW installing...');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
        .then(() => self.skipWaiting()) // ← Wichtig für Firefox!
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('SW activating...');
    event.waitUntil(clients.claim()); // ← Übernimmt sofort Kontrolle
  });

self.addEventListener('fetch', event => {
    console.log('SW fetching...');
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});