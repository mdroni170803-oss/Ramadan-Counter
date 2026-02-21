const cacheName = 'age-app-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&family=Poppins:wght@400;600&display=swap'
];

// ফাইলগুলো ক্যাশ করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// অফলাইনে ফাইলগুলো পরিবেশন করা
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
