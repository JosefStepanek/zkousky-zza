/* Service worker — aplikace funguje i bez signálu.
   Při změně souborů zvyš VERSION tady i ?v= v index.html. */
const VERSION = '9';
const CACHE = 'zza-v' + VERSION;
const CORE = [
  './', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
  'img/plane-nestovice.jpg', 'img/zardenky.jpg', 'img/borelioza.jpg', 'img/opar.jpg', 'img/koprivka.jpg', 'img/plisen-nohou.jpg', 'img/ekzem.jpg', 'img/plisen-nehtu.jpg', 'img/rautek.png',
  ...['figs', 'bank1', 'bank2', 'bank3', 'bank4', 'bank5', 'bank6', 'bank7', 'revize', 'recall', 'coverage', 'icons', 'app'].map(f => `${f}.js?v=${VERSION}`)
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('zza-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Stránka: nejdřív síť (aby se načetla nová verze), bez signálu z cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // Skripty, obrázky a písma: z cache, na pozadí obnovit
  const sameOrigin = url.origin === self.location.origin;
  const fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !fonts) return;
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req)
        .then(res => {
          if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
