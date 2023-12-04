// Fichier sw.js pour le service worker

// Définir le nom et la version du cache
const CACHE_NAME = 'pwa-cache-v1';

// Définir les fichiers à mettre en cache
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activer le service worker et supprimer les anciens caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Intercepter les requêtes réseau et répondre avec le cache ou le réseau
self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});