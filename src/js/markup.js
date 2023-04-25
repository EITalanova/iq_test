import blue_brain from '../images/blue_brain.png';
import loader from '../images/loader.png';
import call from '../images/sprite.svg#icon-call';

export const renderQuestionPage = `
<div class="question__container">

    <progress class="question__progress" max="100" value="70"></progress>

 
        <div class="question">
  
            <p class="question__text"></p>
            
        </div>
       <span class="line"></span>
        <ul class="answer__list">
            <li class="answer__ell">
                <span class="answer__radioBtn"></span>
                <span class="span answer__text"></span>
            </li>
            <li class="answer__ell">
                <span class="answer__radioBtn"></span>
                <span class="span answer__text">Женщина</span>
            </li>
        </ul>
 

    <button type="button" class="btn btn--no-active a btn--next">
        <p class="btn-text">далее</p>
    </button>
 
   
</div>`;

export const renderQuestionHeader = `  <div class="header__box">
  <img src="${blue_brain}" alt="blue_brain" class="header__pic" width="48" height="47">
  <p class="header__title">тест на определение IQ

</p>
</div>`;

export const renderLoader = `<div class="loading__container"><p class="loading__title">Обработка </br> результатов</p>
    <img class="loading__img" src=${loader} alt="loader" width="65" heigth="68">
<p class="loading_text">Определение стиля мышления...........
...........................................................</p></div>`;

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
  <svg class="result--svg" width="29" height="29">
     <use href="${call}"></use>
  </svg>
  <p class="result--call">Позвонить и прослушать </br>результат</p>
</button>`;

export const renderFooter = `<footer class="footer"><p>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p></footer>`;

export function renderRequestCard(people) {
  return `<div class="card"> 
  <p class="card__name">${people.name}</p>
  <ul class="card__list">
    <li class="card__item">🧍‍♂/🧍‍♀: ${people.gender}</li>
    <li class="card__item">⚖️: ${people.height}</li>
    <li class="card__item">📏: ${people.mass}</li>
    <li class="card__item">👁: ${people.skin_color}</li>
  </ul>
  </div>`;
}
