
const burgerMenu = document.querySelector('.burger__icon');
const navLinks = document.querySelector('.burger__nav');


burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    burgerMenu.classList.toggle('active'); 
    document.querySelector('.burger__close').classList.toggle('active'); 
});

document.querySelector('.burger__close').addEventListener("click", () => {
    navLinks.classList.toggle('active'); 
    burgerMenu.classList.toggle('active'); 
    document.querySelector('.burger__close').classList.toggle('active'); 
})