const CACHE_NAME = 'lahn-v26';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // بنستخدم try/catch عشان لو أيقونة ناقصة ماتضربش التثبيت كله
      for (const asset of ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('فشل تخزين:', asset);
        }
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // تخطي الطلبات اللي مش GET
  if (e.request.method !== 'GET') return;

  // 1. استراتيجية الشبكة أولاً (Network First) لملفات الـ HTML
  // دي اللي بتخلي التحديثات تظهر فوراً لما ترفعها
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          return response;
        })
        .catch(() => caches.match(e.request)) // لو مفيش نت، هات من الكاش
    );
    return;
  }

  // 2. استراتيجية الكاش أولاً (Cache First) لباقي الملفات (صور، أيقونات، إلخ)
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        return response;
      });
    })
  );
});