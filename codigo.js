const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const links = document.getElementById("links");

abrir.addEventListener("click",()=>{
    abrir.classList.toggle("eliminar-hamburguesa");
    cerrar.classList.toggle("activar-cerrar");
    links.classList.toggle("aparecer-links");
});

cerrar.addEventListener("click",()=>{
    cerrar.classList.toggle("activar-cerrar");
    abrir.classList.toggle("eliminar-hamburguesa");
    links.classList.toggle("aparecer-links");
});

