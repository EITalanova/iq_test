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

export const renderQuestionHeader = `  <div class="header__container">
    <button class="header__btn" type="button">
      <svg width="24" height="16">
        <use href="./images/sprite.svg#icon-menu"></use>
      </svg>
    </button>
    <img src="./images/blue_brain.png" alt="brain" class="header__img" width="48" height="47">
    <p class="header__title">тест на определение IQ</p>
  </div>`;
