const CACHE_NAME = 'security-ywy-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // ❌ ข้ามทุก request ที่ไม่ใช่ http/https (chrome-extension, data:, etc.)
  if (!url.startsWith('http')) return;

  // ❌ ไม่ cache GAS / Google APIs
  if (url.includes('script.google.com') || url.includes('googleapis.com')) return;

  // ❌ ไม่ cache CDN (โหลดสดดีกว่า)
  if (url.includes('cdnjs.cloudflare.com') || url.includes('jsdelivr.net') || url.includes('fonts.googleapis.com')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        // cache เฉพาะ response ที่ ok และเป็น basic (same-origin)
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            try { cache.put(e.request, clone); } catch(err) {}
          });
        }
        return res;
      }).catch(() => cached);
    })
  );
});
