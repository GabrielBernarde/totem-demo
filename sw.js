// Gerado por web/pwa/pwa.mjs: guarda a demonstração no aparelho para abrir sem internet.
const CACHE = 'totem-demo-8a08d515c77f';
const FILES = ["./","./assets/demo-CF41XQJp.js","./assets/index-LpDcuNKe.css","./assets/index-oqrR0obQ.js","./demo/imagens/1720039580006blob.webp","./demo/imagens/1720039801685blob.webp","./demo/imagens/1720039988724blob.webp","./demo/imagens/1720103975610blob.webp","./demo/imagens/1720103989033blob.webp","./demo/imagens/1720104054738blob.webp","./demo/imagens/1720104064434blob.webp","./demo/imagens/1720104080000blob.webp","./demo/imagens/1720104091041blob.webp","./demo/imagens/1720104159864blob.webp","./demo/imagens/1720104244581blob.webp","./demo/imagens/1720104292193blob.webp","./demo/imagens/1720104302702blob.webp","./demo/imagens/1720104375181blob.webp","./demo/imagens/1720104418759blob.webp","./demo/imagens/1720104440436blob.webp","./demo/imagens/1720104476644blob.webp","./demo/imagens/1720104485223blob.webp","./demo/imagens/1720104501530blob.webp","./demo/imagens/1720104535573blob.webp","./demo/imagens/1720104543567blob.webp","./demo/imagens/1720104575294blob.webp","./demo/imagens/1720104581962blob.webp","./demo/imagens/1720104588690blob.webp","./demo/imagens/1720104643497blob.webp","./demo/imagens/1720104651533blob.webp","./demo/imagens/1720104776776blob.webp","./demo/imagens/1740341193857blob.webp","./demo/imagens/1740341334881blob.webp","./demo/imagens/1740341421366blob.webp","./demo/imagens/1740341771614blob.webp","./demo/imagens/1740341869491blob.webp","./demo/imagens/1740341949251blob.webp","./demo/imagens/1740342000874blob.webp","./demo/imagens/1740342053298blob.webp","./demo/imagens/1740342137858blob.webp","./demo/imagens/1740342204428blob.webp","./demo/imagens/1740342265018blob.webp","./demo/imagens/1740342329576blob.webp","./demo/imagens/1740342377945blob.webp","./demo/imagens/1740342437501blob.webp","./demo/imagens/1740342491986blob.webp","./demo/imagens/1740342541223blob.webp","./demo/imagens/1740342719348blob.webp","./demo/imagens/1740342821095blob.webp","./demo/imagens/1740342861116blob.webp","./demo/imagens/1740342983691blob.webp","./demo/imagens/1740343109328blob.webp","./demo/imagens/1740343187973blob.webp","./demo/imagens/1740343234309blob.webp","./demo/imagens/1743013517135blob.webp","./demo/imagens/1743460394599blob.webp","./demo/imagens/1743460448254blob.webp","./demo/imagens/1743468351102blob.webp","./demo/imagens/1743699305440blob.webp","./demo/imagens/1744399920515blob.webp","./demo/imagens/1744400162903blob.webp","./demo/imagens/1744400181010blob.webp","./demo/imagens/1744577475809blob.webp","./demo/imagens/1744655001694blob.webp","./demo/imagens/1744655055775blob.webp","./demo/imagens/1744655845345blob.webp","./demo/imagens/1744655934897blob.webp","./demo/imagens/1744656326396blob.webp","./demo/imagens/1744656377775blob.webp","./demo/imagens/1744656524338blob.webp","./demo/imagens/1744656873764blob.webp","./demo/imagens/1744657156609blob.webp","./demo/imagens/1744657244856blob.webp","./demo/imagens/1744658588449blob.webp","./demo/imagens/1744658807721blob.webp","./demo/imagens/1744660460271blob.webp","./demo/imagens/1744660614765blob.webp","./demo/imagens/1744660638871blob.webp","./demo/imagens/1744930130088blob.webp","./demo/imagens/1745427577501blob.webp","./demo/imagens/1745427735541blob.webp","./demo/imagens/1787876927981blob.webp","./demo/loja.json","./icons/apple-touch-icon.png","./icons/favicon-32.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./index.html","./manifest.webmanifest"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('totem-demo-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Página: tenta a internet primeiro (pega atualizações); sem internet, usa a cópia guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./index.html').then((r) => r || caches.match('./'))));
    return;
  }
  // Arquivos (scripts, fotos, cardápio): cópia guardada primeiro
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
    )
  );
});
