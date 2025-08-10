// Service Worker for PWA functionality
const CACHE_NAME = "lexii-v1"
const urlsToCache = [
  "/",
  "/discover",
  "/reviews",
  "/about",
  "/contact",
  "/offline",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
]

// Install event
self.addEventListener("install", (event: any) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

// Fetch event
self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (event.request.destination === "document") {
          return caches.match("/offline")
        }
      }),
  )
})

// Background sync for data updates
self.addEventListener("sync", (event: any) => {
  if (event.tag === "background-sync") {
    event.waitUntil(syncData())
  }
})

async function syncData() {
  try {
    // Sync lawyer data in background
    const response = await fetch("/api/sync-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      // Notify user of successful sync
      self.registration.showNotification("LEXII", {
        body: "Datos actualizados en segundo plano",
        icon: "/icons/icon-192x192.png",
        badge: "/icons/badge-72x72.png",
      })
    }
  } catch (error) {
    console.error("Background sync failed:", error)
  }
}
