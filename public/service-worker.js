// service-worker.js 예시
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker fetching.', event.request.url);
  // 여기에 캐싱 전략을 구현할 수 있습니다.
});
