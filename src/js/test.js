import {
  renderQuestionPage,
  renderQuestionHeader,
  renderLoader,
  renderFooter,
  renderResult,
} from './markup';
import { updateTimer } from './timer';
import { fetchCardRequest } from './fetchCardRequset';
import { test, questions, results } from './test_data';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const startTestBtn = document.querySelectorAll('.btn__start');

//Конструктор теста
export class Test {
  constructor(questions, resuits) {
    this.questions = questions;
    this.results = results;
    this.result = 0;
    this.score = 0;
    this.currentQuestion = 0;
  }

  //Добавление баллов
  Click(index) {
    let value = this.questions[this.currentQuestion].Click(index);
    this.score += value;

    let correct = -1;
    if (value >= 1) {
      correct = index;
    } else {
      for (
        let i = 0;
        i < this.questions[this.currentQuestion].answers.length;
        i += 1
      ) {
        if (this.questions[this.currentQuestion].answers[i].value >= 1) {
          correct = i;
          break;
        }
      }
    }
    this.Next();
    return correct;
  }

  //Переход к следующему вопросу
  Next() {
    this.currentQuestion += 1;
    if (this.currentQuestion >= this.questions.length) {
      this.End();
    }
  }

  //Получение результата
  End() {
    for (let i = 0; i < this.results.length; i += 1) {
      if (this.results[i].Check(this.score)) {
        this.result = i;
      }
    }
  }
}

//Конструктор вопросов теста
export class Question {
  constructor(type, text, picture, answers) {
    this.type = type;
    this.text = text;
    this.picture = picture;
    this.answers = answers;
  }

  Click(index) {
    return this.answers[index].value;
  }
}

//Конструктор ответов теста
export class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

//Конструктор результатов теста
export class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  //Проверка очков для получения определенного результата
  Check(value) {
    if (this.value <= value) {
      return true;
    } else {
      return false;
    }
  }
}

//Слушатели на кнопки запуска теста
for (let i = 0; i < startTestBtn.length; i += 1) {
  startTestBtn[i].addEventListener('click', renderPage);
}

//Рендер страницы с вопросом
function renderPage() {
  header.insertAdjacentHTML('afterbegin', renderQuestionHeader);
  main.innerHTML = renderQuestionPage;

  //Возможность загрузки следующего вопроса, если выбран хоть один вариант
  const nextQuestionBtn = document.querySelector('.btn');
  nextQuestionBtn.addEventListener('click', () => {
    if (nextQuestionBtn.classList.contains('btn--no-active')) {
      return;
    }
    nextPage();
  });
  nextPage();
}

//Функция загрузки следующего вопроса
function nextPage() {
  const questionContainer = document.querySelector('.question__container');
  const footer = document.querySelector('.footer');
  const nextQuestionBtn = document.querySelector('.btn');
  const answers = document.querySelector('.answer__list');

  if (test.currentQuestion < test.questions.length) {
    //Загрузка строки прогресса
    progress();

    footer.innerHTML = '';

    //Рендер текста вопроса в зависимости от наличия картинки в нем
    questionText();

    //Рендер вариантов ответов в зависимости от типа вопроса (текст, список, цветов, числа и т.д.)
    answers.innerHTML = '';

    answerText();

    nextQuestionBtn.classList.add('btn--no-active');

    //Функция выбора и стилизации ответов
    Init();
  } else {
    //Загрузка лоудера до результата
    questionContainer.innerHTML = renderLoader;

    //Загрузка результата теста
    renderResultPage();
  }
}

//Функция загрузки строки прогресса
const progress = () => {
  const questionProgress = document.querySelector('.question__progress');
  questionProgress.setAttribute('max', test.questions.length);
  questionProgress.setAttribute('value', test.currentQuestion);
};

//Функция загрузки текста вопроса в зависимости от наличия картинки в нем
const questionText = () => {
  const question = document.querySelector('.question');
  if (test.questions[test.currentQuestion].picture !== 0) {
    question.innerHTML = `<p class="question__text">
      ${test.questions[test.currentQuestion].text}
      </p><img class="question__img" src=${
        test.questions[test.currentQuestion].picture
      } alt="pic">`;
  } else {
    question.innerHTML = `<p class="question__text">${
      test.questions[test.currentQuestion].text
    }</p>`;
  }
};

//Функция загрузки вариантов ответов в зависимости от типа вопроса (текст, список, цветов, числа и т.д.)
const answerText = () => {
  const answers = document.querySelector('.answer__list');
  const line = document.querySelector('.line');
  for (
    let i = 0;
    i < test.questions[test.currentQuestion].answers.length;
    i += 1
  ) {
    switch (test.questions[test.currentQuestion].type) {
      case 'text':
        answers.classList.remove('answer__list--color');
        answers.classList.remove('answer__list--numbers');

        answers.insertAdjacentHTML(
          'beforeend',
          `<li class="answer__ell ell">
            <span class="answer__radioBtn"></span>
                <span class="span answer__text">${
                  test.questions[test.currentQuestion].answers[i].text
                }</span>
            </li>`
        );
        break;

      case 'color':
        answers.classList.add('answer__list--color');
        answers.classList.remove('answer__list--numbers');

        answers.insertAdjacentHTML(
          'beforeend',
          `<li class="answer__colorEll ell" style="background:#${
            test.questions[test.currentQuestion].answers[i].text
          }"><button class="btn--answer"type="button"></button></li>`
        );
        break;

      case 'numbers':
        answers.classList.remove('answer__list--color');
        answers.classList.add('answer__list--numbers');

        answers.insertAdjacentHTML(
          'beforeend',
          `<li class="answer__numPic ell">${
            test.questions[test.currentQuestion].answers[i].text
          }</li>`
        );
        break;

      case 'numbers&line':
        line.classList.add('line--active');
        answers.classList.add('answer__list--numbers');
        answers.classList.remove('answer__list--color');

        answers.insertAdjacentHTML(
          'beforeend',
          `<li class="answer__numPic ell">${
            test.questions[test.currentQuestion].answers[i].text
          }</li>`
        );
        break;
    }
  }
};

//Функция выбора и стилизации ответов
const Init = () => {
  const nextQuestionBtn = document.querySelector('.btn');
  let answersBtn = document.querySelectorAll('.ell');

  for (let i = 0; i < answersBtn.length; i += 1) {
    answersBtn[i].addEventListener('click', function (e) {
      if (answersBtn[i].classList.contains('answer__ell')) {
        for (let i = 0; i < answersBtn.length; i += 1) {
          if (answersBtn[i].classList.contains('answer__ell--active')) {
            answersBtn[i].classList.remove('answer__ell--active');
          }
        }
        answersBtn[i].classList.add('answer__ell--active');
      }

      if (answersBtn[i].classList.contains('answer__colorEll')) {
        for (let i = 0; i < answersBtn.length; i += 1) {
          if (answersBtn[i].classList.contains('answer__colorEll--active')) {
            answersBtn[i].classList.remove('answer__colorEll--active');
          }
        }
        answersBtn[i].classList.add('answer__colorEll--active');
      }
      if (answersBtn[i].classList.contains('answer__numPic')) {
        for (let i = 0; i < answersBtn.length; i += 1) {
          if (answersBtn[i].classList.contains('answer__numPic--active')) {
            answersBtn[i].classList.remove('answer__numPic--active');
          }
        }
        answersBtn[i].classList.add('answer__numPic--active');
      }
      nextQuestionBtn.classList.remove('btn--no-active');
      Click(i);
    });
  }
};

const Click = index => {
  let correct = test.Click(index);
};

//Функция загрузки результата теста
const renderResultPage = () => {
  const questionContainer = document.querySelector('.question__container');
  const headerTitle = document.querySelector('.header__title');
  const headerBox = document.querySelector('.header__box');
  const footer = document.querySelector('.footer');

  setTimeout(() => {
    questionContainer.innerHTML = renderResult;

    const result = document.querySelector('.result');
    result.innerHTML = test.results[test.result].text;
    headerTitle.innerHTML = 'Готово!';
    footer.innerHTML = renderFooter;

    headerBox.classList.add('header__box--result');
    questionContainer.classList.add('result__container');

    //Установка слушателя на скрол для футера
    const footerText = document.querySelector('.footer__text');
    window.addEventListener('scroll', () =>
      footerText.classList.add('footer__text--scroll')
    );

    //Запуск тамера
    updateTimer();

    //Установка слушателя на кнопку звонка для запроса к API
    const callBox = document.querySelector('.result--callBox');
    callBox.addEventListener('click', fetchCardRequest);
  }, 1000);
};
