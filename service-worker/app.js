// check if the serviceWorker file is available

if ("serviceWorker" in navigator)
{
    navigator.serviceWorker
    .register('/serviceWorker')
    .then(()=> { console.log("SW successfully registered")})
    .catch((err)=> { console.log(err)})
}