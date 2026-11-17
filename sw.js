/* Cookie Jar service worker.
   Its only job is to keep a copy of the app's own files on the device,
   so the jar opens without an internet connection.
   It never sees or sends your cookies: those stay in the browser's local storage. */
var CACHE = "cookie-jar-files-v1";
var FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-180.png",
  "fonts/bricolage-grotesque-latin-wght-normal.woff2",
  "fonts/bricolage-grotesque-latin-ext-wght-normal.woff2",
  "fonts/newsreader-latin-wght-normal.woff2",
  "fonts/newsreader-latin-ext-wght-normal.woff2",
  "fonts/newsreader-latin-wght-italic.woff2",
  "fonts/newsreader-latin-ext-wght-italic.woff2"
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Try the network first so people get new versions; fall back to the saved copy when offline. */
self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match("index.html"); });
    })
  );
});
