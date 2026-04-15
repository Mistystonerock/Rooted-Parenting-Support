const CACHE_NAME = "rooted-parenting-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./supabase-config.js",
  "./parent-login.html",
  "./parent-setup.html",
  "./staff-login.html",
  "./staff-portal.html",
  "./privacy-policy.html",
  "./terms.html",
  "./disclaimer.html",
  "./rooted-parenting-completion-certificate.html",
  "./rooted-parenting-pre-post-assessment.html",
  "./rooted-parenting-attendance-progress-report.html",
  "./icons/rooted-parenting-icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const clonedResponse = networkResponse.clone();
          if (event.request.url.startsWith(self.location.origin)) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
