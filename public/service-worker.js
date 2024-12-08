self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/robots.txt',
        '/projects',
        '/blog',
        '/education',
        '/about',
        '/contact',
        'https://placehold.co/72x72/000000/FFFFFF/png?text=B&font=montserrat',
        'https://placehold.co/96x96/000000/FFFFFF/png?text=B&font=montserrat', 
        'https://placehold.co/128x128/000000/FFFFFF/png?text=B&font=montserrat',
        'https://placehold.co/144x144/000000/FFFFFF/png?text=B&font=montserrat',
        'https://placehold.co/152x152/000000/FFFFFF/png?text=B&font=montserrat',
        'https://placehold.co/192x192/000000/FFFFFF/png?text=B&font=montserrat',
        'https://placehold.co/384x384/000000/FFFFFF/png?text=B&font=montserrat'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
