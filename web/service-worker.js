const CACHE_NAME = "text-styler-cache-v1";
const urlsToCache = [
  "/",
  "/bold.html",
  "/manifest.json",
  "/service-worker.js"
  // Add any other assets like icons or fonts if needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
