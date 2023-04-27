import { renderMainPage } from './markup';

const main = document.querySelector('.main');
const burgerMenu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.header__btn');
const menuCloseBtn = document.querySelector('.menu__btn-close');
const menuLink = document.querySelector('.menu__list');

const toggleMenu = () => {
  burgerMenu.classList.toggle('invisible');
};

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
menuLink.addEventListener('click', () => {
  const mainContainer = document.querySelector('.main-page__hero');

  if (!mainContainer) {
    main.innerHTML = renderMainPage;
    const headerBox = document.querySelector('.header__box');
    headerBox.innerHTML = '';
    toggleMenu();
  } else {
    toggleMenu();
  }
});
