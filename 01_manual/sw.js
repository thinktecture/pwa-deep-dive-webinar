self.addEventListener('install', event => {
    event.waitUntil(caches.open('pwa-demo-v1')
        .then(cache => cache.addAll(['/', '/index.html', 'mainz.png']))
        .then(() => self.skipWaiting()));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(response => response || fetch(event.request)));
});
