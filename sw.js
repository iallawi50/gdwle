const CACHE_NAME = "static_cache";
const STATIC_ASSETS = [
  "/",
  "/fonts/swissra-medium.ttf",
  "/webfonts/fa-solid-900.ttf",
  "/webfonts/fa-solid-900.woff2",
  "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
  "/webfonts",
  "/index.html",
  "/create.html",
  "/set.html",
  "/settings.html",
  "/today.html",
  "/week.html",
  "/js/app.js",
  "/js/components.js",
  "/js/create.js",
  "/js/set.js",
  "/js/settings.js",
  "/js/today.js",
  "/js/week.js",
  "/css/all.min.css",
  "/css/normalize.css",
  "/css/settings.css",
  "/css/style.css",
  "/imgs/logo.png",
  "/imgs/tvtc.jpg",
];

async function preCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(STATIC_ASSETS);
}

self.addEventListener("install", (event) => {
  // console.log("[SW] installed");
  event.waitUntil(preCache());
});

self.addEventListener("activate", (event) => {
  // console.log("[SW] activated");
});

async function fetchAssets(event) {
  try {
    const response = await fetch(event.request);
    return response;
  } catch (err) {
    const cache = await caches.open(CACHE_NAME);
    return cache.match(event.request);
  }
}

self.addEventListener("fetch", (event) => {
  // console.log("[SW] fetched");
  event.respondWith(fetchAssets(event));
});
