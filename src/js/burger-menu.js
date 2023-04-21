const burgerMenu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.header__btn');
const menuCloseBtn = document.querySelector('.menu__btn-close');
const menuLink = document.querySelector('.menu__list');

const toggleMenu = () => {
    console.log("click");
    burgerMenu.classList.toggle("invisible");
    } 

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
menuLink.addEventListener('click', toggleMenu);