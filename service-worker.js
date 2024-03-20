console.log('updated')
// TODO: use workbox

self.addEventListener('install', (ev) => {
    ev.waitUntil(self.skipWaiting())
})

self.addEventListener('active', (ev) => {
    ev.waitUntil(clients.claim())
})

self.addEventListener('fetch', (ev) => {
  console.log(ev)  
  if (ev.request.url.endsWith('/api/data.json')) {
    ev.respondWith(new Response(
        JSON.stringify({id: 1, status: 'ok'}),
        {
            status: 200
        }
    ))

    return
  }

  // send to network
  ev.respondWith(fetch(ev.request))
})