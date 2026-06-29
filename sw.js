// Service Worker Dummy PWA Silsilah Keluarga
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Aktif');
});

self.addEventListener('fetch', (e) => {
  // Dilewati karena database utama berjalan aman di dalam Iframe GAS
});