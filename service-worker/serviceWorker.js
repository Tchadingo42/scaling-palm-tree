// setup caches 
const cacheName = "cache-v1"
const assets = ["/", "/index.html", "styles.css", "/img-2.jpg"]

// mise en cache 

self.addEventListener("install", (e)=>
{
    e.waitUntil(caches.open(cacheName).then((cache)=>
    {
        cache.addAll(assets)
    }))
})

self.addEventListener("fetch", (e)=>
{
    console.log(e.request)
    e.waitUntil(caches.match(e.request).then((cache)=>
    {
        return cache ||fetch(e.request)
    }))
})  