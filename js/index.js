

console.log("salut");

// constantes et variables  menu mobile //
const barres = document.querySelector(".icon-menu");
const menu = document.querySelector(".modal-mobile");
const barresIcone = document.querySelector(".fa-bars");
// constantes et variables  menu mobile //


// scripts menu //
barres.addEventListener('click', function (){
    menu.classList.toggle("change-modal-mobile");
    barresIcone.classList.toggle("rotate");
});

menu.addEventListener('click', function (){
    menu.classList.toggle("change-modal-mobile");
    barresIcone.classList.toggle("rotate");
});

// scripts menu //
