// NAV

const navElement = document.querySelector(".js-nav");
const hamburgerElement = document.querySelector(".js-hamburger");

hamburgerElement.addEventListener("click", ()=>{
    navElement.classList.toggle("nav-open");
    hamburgerElement.classList.toggle("hamburger-open");
});

navElement.addEventListener("click", ()=>{
    navElement.classList.remove("nav-open");
    hamburgerElement.classList.remove("hamburger-open");
});

