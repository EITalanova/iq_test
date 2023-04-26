import blue_brain from '../images/blue_brain.png';
import loader from '../images/loader.png';
import call from '../images/call.png';

export function renderQuestionPage() {
   return `
<div class="question__container">
    <progress class="question__progress" max="0" value="0"></progress>
        <div class="question">
            <p class="question__text"></p>
        </div>
       <span class="line"></span>
        <ul class="answer__list">
            <li class="answer__ell">
            <button type="button">
                <span class="answer__radioBtn"></span>
                <span class="span answer__text"></span>
                </button>
            </li>
            <li class="answer__ell">
                <span class="answer__radioBtn"></span>
                <span class="span answer__text">Женщина</span>
            </li>
        </ul>
    <button type="button" class="btn btn--no-active a btn--next">
        <p class="btn-text">далее</p>
    </button>
</div>`};

export const renderQuestionHeader = `  <div class="header__box">
  <img src="${blue_brain}" alt="blue_brain" class="header__pic" width="48" height="47">
  <p class="header__title">тест на определение IQ
</p>
</div>`;

export const renderLoader = `<div class="loading__container"><p class="loading__title">Обработка </br> результатов</p>
    <img class="loading__img" src=${loader} alt="loader" width="65" heigth="68">
<p class="loading__text">Определение стиля мышления...........</br>
..........................................................</p></div>`;

export const renderResult = ` <p class="result--title">Ваш результат рассчитан:</p>
<p class="result">Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 
15 пунктов отличается от среднего в большую или меньшую сторону! </p>
<p class="result--appeal">Скорее получите свой результат!</p>
<p class="result--info">
  В целях защиты персональных данных результат теста, их подробная интерпретация
  и рекомендации доступны в виде голосового сообщения по звонку с вашего
  мобильного телефона
</p>
<p class="result--callTimer">Звоните скорее, запись доступна всего </br> 
<span class="min">10</span>
:
<span class="sec">00</span>
минут</p>
<button type="button" class="result--callBox">
<img class="result--svg" src=${call} alt="call" width="29" height="29">
<p class="result--call">Позвонить и прослушать </br>результат</p>
</button>`;

export const renderFooter = `<p class="footer__text">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>`;

export function renderRequestCard(people) {
  return `<div class="card"> 
  <p class="card__name">${people.name}</p>
  <ul class="card__list">
    <li class="card__item">🧍‍♂/🧍‍♀: ${people.gender}</li>
    <li class="card__item">📏: ${people.height}</li>
    <li class="card__item">⚖️: ${people.mass}</li>
    <li class="card__item">👁: ${people.skin_color}</li>
  </ul>
  </div>`;
}

export function renderMainPage() {
  return `<section>
  <div id="main" class="main-page__hero">

    <p class="main-page__text">Пройдите точный и быстрый</p>

    <h1 class="main-page__title">
      тест на <br />
      определение <br />
      IQ
    </h1>
    <button class="btn btn__start">пРойти тест</button>
    <p class="main-page__text">
      и получите рекомендации <br />по развитию своего интеллекта
    </p>
    <p class="main-page__text main-page__text--yellow">
      и улучшению финансового <br />благосостояния и личной жизни
    </p>
    <a class="main-page__btn" href="#info">
      <svg class="main-page__btn-arrow" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow"></use>
      </svg>
      <p class="main-page__btn-text">Подробнее</p>
    </a>
  </div>

  <div id="info" class="main-page__discription">
    <svg class="main-page__quotation-mark" width="23" height="22">
      <use href="./images/sprite.svg#icon-quotation-mark"></use>
    </svg>
    <p class="main-page__discription-text">
      Профессиональный <br />IQ-тест позволяет не <br />только определить
      <br />коэффициент вашего <br />интеллекта,<br />
      но и выработать список <br />рекомендаций для <br />повышения этого
      <br />показателя.
    </p>
    <svg class="main-page__quotation-mark--reverse" width="23" height="22">
      <use href="./images/sprite.svg#icon-quotation-mark"></use>
    </svg>
  </div>

  <div class="main-page__details">
    <p class="main-page__details-text">
      Также по результатам теста<br />
      <span class="main-page__details-text--upper">вы получите</span>
      подробные<br />
      <span class="main-page__details-text--upper">советы</span> по определению
      наиболее <br />
      перспективной
      <span class="main-page__details-text--upper">для вашего <br />типа</span>
      <span class="main-page__details-text--weight">интеллекта</span>
      <span class="main-page__details-text--upper"
        >сферы <br />деятельности,<br
      /></span>
      которая принесет вам скорейший <br />финансовый результат.
    </p>
    <img src="./images/brain.png" alt="brain" class="main-page__img-brain" />
    <button class="btn btn__start">
      <p class="btn-text">пройти тест</p>
    </button>
  </div>

  <div id="test" class="main-page__brief">
    <img src="./images/lightning(1).png" alt="lightning" class="main-page__brief-img1">
    <img src="./images/lightning(2).png" alt="lightning" class="main-page__brief-img2">
    <p class="main-page__details-text--white">
      Прохождение теста займет у <br />вас не более
      <span class="main-page__details-text--yellow">12 минут,</span> а его
      <br /><span class="main-page__details-text--weight">результаты</span> вы
      сможете <br /><span class="main-page__details-text--yellow"
        >использовать всю жизнь.</span
      >
    </p>
    <p class="main-page__details-text main-page__text-box">Профессиональная <br />интерпретация и детально <br /><span class="main-page__details-text--weight">проработанные <br />рекомендации</span> позволят вам <br />качественно <span class="main-page__details-text--weight"></span>изменить все <br />аспекты своей
    жизни:</span> от <br />финансового до любовного.</p>
    <button class="btn btn--black btn__start">
      <p class="btn-text">пройти тест</p>
    </button>
  </div>
</section>
`;
}
