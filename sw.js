// Beri nama cache unik jika diperlukan nanti
const CACHE_NAME = 'silsilah-pwa-v1';

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal di ruang lingkup ini');
  self.skipWaiting(); // Memaksa SW baru untuk langsung aktif
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Aktif dan siap mengontrol');
  return self.clients.claim(); // Langsung mengontrol halaman tanpa perlu refresh
});

self.addEventListener('fetch', (e) => {
  // Dilewati karena database utama berjalan aman di dalam Iframe GAS
});
