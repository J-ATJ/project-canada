
const CACHE_NAME = 'project-canada-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './js/db.js',
  './js/nivel1.js',
  './js/nivel2.js',
  './js/nivel3.js',
  './js/main.js',
  './icons/maple.png'
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Elimina cachés viejas automáticamente cuando el Service Worker se actualiza
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Project Canada: Limpiando caché antigua...', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Estrategia: Stale-While-Revalidate (Muestra lo viejo rápido, actualiza en segundo plano)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(e.request).then(cachedResponse => {

        const fetchedResponse = fetch(e.request).then(networkResponse => {
          if (networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => null);

        return cachedResponse || fetchedResponse;
      });
    })
  );
});
