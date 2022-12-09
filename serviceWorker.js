const staticDevTachi = "Team2"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/escenario.jpeg",
  "img/esqueleto2.png",
  "img/esqueletos.png",
  "img/tachi.png",
  "img/nube.png",
  "img/suelo.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevTachi).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })