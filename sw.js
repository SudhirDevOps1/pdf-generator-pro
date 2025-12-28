// Service Worker for SudhirDevOps1 PDF Generator Pro
const CACHE_NAME = 'pdf-generator-pro-v3';
const OFFLINE_URL = './';

// Files to cache for offline use
const STATIC_CACHE = [
    './',
    './index.html',
    './manifest.json'
];

// External resources to cache
const EXTERNAL_CACHE = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js',
    'https://fonts.googleapis.com/css2?family=Fira+Code&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static files');
                // Cache static files first
                return cache.addAll(STATIC_CACHE)
                    .then(() => {
                        // Try to cache external resources (don't fail if some fail)
                        return Promise.allSettled(
                            EXTERNAL_CACHE.map(url =>
                                cache.add(url).catch(err => {
                                    console.log('[SW] Failed to cache:', url);
                                })
                            )
                        );
                    });
            })
            .then(() => {
                console.log('[SW] Installation complete');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Installation failed:', err);
            })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Activation complete');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http requests
    if (!event.request.url.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    // Fetch new version in background
                    fetchAndCache(event.request);
                    return cachedResponse;
                }

                // Not in cache, fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache if not a valid response
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Cache the fetched response
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((error) => {
                        console.log('[SW] Fetch failed:', error);

                        // Return offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match(OFFLINE_URL);
                        }

                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Background fetch and cache update
function fetchAndCache(request) {
    fetch(request)
        .then((response) => {
            if (response && response.status === 200) {
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(request, response);
                    });
            }
        })
        .catch(() => {
            // Ignore fetch errors for background updates
        });
}

// Handle messages from the main app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            console.log('[SW] Cache cleared');
        });
    }
});

// Background sync for saving documents
self.addEventListener('sync', (event) => {
    if (event.tag === 'save-document') {
        console.log('[SW] Background sync: save-document');
    }
});

// Push notifications (future feature)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New notification from PDF Generator',
        icon: './icon-192.png',
        badge: './badge-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'open', title: 'Open App' },
            { action: 'close', title: 'Close' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('PDF Generator Pro', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'open' || !event.action) {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});

console.log('[SW] Service Worker loaded');
