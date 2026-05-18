const CACHE_NAME = 'mun-csub-v1';

// All the files to cache for offline use
const ASSETS = [
    '/pages/index.html',
    '/pages/about.html',
    '/pages/events.html',
    '/pages/resources.html',
    '/pages/faqs.html',
    '/pages/contact.html',
    '/styles/style.css',
    '/scripts/navbar.js',
    '/scripts/script.js',
    '/images/MUN.png',
    '/images/frontPage.PNG',
    '/images/La.jpg'
];

// Install — cache everything
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys
                    .filter(function (key) { return key !== CACHE_NAME; })
                    .map(function (key) { return caches.delete(key); })
            );
        })
    );
    self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (cached) {
            return cached || fetch(e.request);
        })
    );
});