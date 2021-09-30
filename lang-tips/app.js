let dataReload = document.querySelectorAll("[data-reload]")

let language = 
{
    eng: {welcome: "Welcome y'all"},
    es : {welcome: "Bienvenido todos"},
    fr: {welcome: "Bienvenue a tous"}
}

if (window.location.hash)
{
    if (window.location.hash === '#es')
    {
        hi.textContent = language.es.welcome
    }
    else if (window.location.hash === '#fr')
    {
        hi.textContent = language.fr.welcome
    }
    else if (window.location.hash === '#eng')
    {
        hi.textContent = language.eng.welcome
    }
}

for (let i = 0 ; i <= dataReload.length ; i++)
{
    dataReload[i].onclick = function()
    {
        location.reload(true)
    }
}