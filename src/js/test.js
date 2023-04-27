import {
  renderQuestionPage,
  renderQuestionHeader,
  renderLoader,
  renderFooter,
  renderResult,
} from './markup';
import { updateTimer } from './timer';
import qu_people from '../images/qu_people.png';
import qu_snack from '../images/qu_snack.png';
import qu_star from '../images/qu_star.png';
import { fetchCardRequest } from './fetchCardRequset';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const startTestBtn = document.querySelectorAll('.btn__start');

//Тест
class Test {
  constructor(questions, resuits) {
    this.questions = questions;
    this.results = results;
    this.result = 0;
    this.score = 0;
    this.currentQuestion = 0;
  }

  //Добавление очков
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

//Вопросы теста
class Question {
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

//Ответы теста
class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

//Результаты теста
class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  //Проверка очков для получения результата
  Check(value) {
    if (this.value <= value) {
      return true;
    } else {
      return false;
    }
  }
}

//Массив с результатами
const results = [
  new Result(
    'Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!',
    0
  ),
  new Result(
    'Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!',
    30
  ),
];

//Массив с вопросами и ответами
const questions = [
  new Question('text', 'Ваш пол:', 0, [
    new Answer('Мужчина', 1),
    new Answer('Женщина', 2),
  ]),
  new Question('text', 'Укажите ваш возраст:', 0, [
    new Answer('До 18', 1),
    new Answer('От 18 до 28', 2),
    new Answer('От 29 до 35', 3),
    new Answer('От 36', 4),
  ]),
  new Question('text', 'Выберите лишнее:', 0, [
    new Answer('Дом', 1),
    new Answer('Шалаш', 2),
    new Answer('Бунгало', 3),
    new Answer('Скамейка', 4),
    new Answer('Хижина', 5),
  ]),
  new Question('text', 'Продолжите числовой ряд: </br> 18  20  24  32  ', 0, [
    new Answer('62', 1),
    new Answer('48', 2),
    new Answer('74', 3),
    new Answer('57', 4),
    new Answer('60', 5),
    new Answer('77', 6),
  ]),
  new Question(
    'color',
    'Выберите цвет, который </br>сейчас наиболее Вам </br>приятен:',
    0,
    [
      new Answer('A8A8A8', 1),
      new Answer('0000A9', 2),
      new Answer('00A701', 3),
      new Answer('F60100', 4),
      new Answer('FDFF19', 5),
      new Answer('A95403', 4),
      new Answer('000000', 5),
      new Answer('850068', 6),
      new Answer('46B2AC', 7),
    ]
  ),
  new Question(
    'color',
    'Отдохните пару секунд, еще </br>раз Выберите цвет, который </br>сейчас наиболее Вам </br>приятен:',
    0,
    [
      new Answer('A8A8A8', 1),
      new Answer('46B2AC', 2),
      new Answer('A95403', 3),
      new Answer('00A701', 4),
      new Answer('000000', 5),
      new Answer('F60100', 6),
      new Answer('850068', 7),
      new Answer('FDFF19', 8),
      new Answer('0000A9', 9),
    ]
  ),
  new Question('text', 'Какой из городов</br> лишний?', 0, [
    new Answer('Вашингтон', 1),
    new Answer('Лондон ', 2),
    new Answer('Париж', 3),
    new Answer('Нью-Йорк', 4),
    new Answer('Москва', 5),
    new Answer('Оттава', 6),
  ]),
  new Question(
    'numbers',
    'Выберите правильную фигуру</br> из четырёх пронумерованных.',
    qu_people,
    [
      new Answer('1', 1),
      new Answer('2', 2),
      new Answer('3', 3),
      new Answer('4', 4),
    ]
  ),
  new Question('text', 'Вам привычнее и важнее:', 0, [
    new Answer('Наслаждаться </br>каждой минутой </br>проведенного времени', 1),
    new Answer('Быть устремленными </br>мыслями в будущее', 2),
    new Answer('Учитывать в ежедневной</br> практике прошлый опыт', 3),
  ]),
  new Question(
    'text',
    'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    qu_snack,
    [
      new Answer('Оно остроконечное', 1),
      new Answer('Оно устойчиво', 2),
      new Answer('Оно находится в </br>состоянии равновесия', 3),
    ]
  ),
  new Question('numbers&line', 'Вставьте подходящее число', qu_star, [
    new Answer('34', 1),
    new Answer('36', 2),
    new Answer('53', 3),
    new Answer('44', 4),
    new Answer('66', 5),
    new Answer('53', 6),
  ]),
];

//Создание теста
const test = new Test(questions, results);

//Слушатели на кнопки запуска теста
for (let i = 0; i < startTestBtn.length; i += 1) {
  startTestBtn[i].addEventListener('click', renderPage);
}

//Рендер страницы с вопросом
function renderPage() {
  header.insertAdjacentHTML('afterbegin', renderQuestionHeader);
  main.innerHTML = renderQuestionPage;
  nextQuestion();

  //Возможность загрузки следующего вопроса, если выбран хоть один вариант
  const nextQuestionBtn = document.querySelector('.btn');
  nextQuestionBtn.addEventListener('click', () => {
    if (nextQuestionBtn.classList.contains('btn--no-active')) {
      return;
    }
    nextQuestion();
  });
}

//Функция загрузки следующего вопроса
function nextQuestion() {
  const questionContainer = document.querySelector('.question__container');
  const headerTitle = document.querySelector('.header__title');
  const headerBox = document.querySelector('.header__box');
  const footer = document.querySelector('.footer');
  const nextQuestionBtn = document.querySelector('.btn');
  const questionProgress = document.querySelector('.question__progress');
  const question = document.querySelector('.question');
  const answers = document.querySelector('.answer__list');
  const line = document.querySelector('.line');

  //Данные для строки прогресса
  questionProgress.setAttribute('max', test.questions.length);

  if (test.currentQuestion < test.questions.length) {
    questionProgress.setAttribute('value', test.currentQuestion);

    footer.innerHTML = '';

    //Рендер текста вопроса в зависимости от наличия картинки в нем
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

    //Рендер вариантов ответов в зависимости от типа вопроса (текст, список, цветов, числа и т.д.)
    answers.innerHTML = '';

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

    nextQuestionBtn.classList.add('btn--no-active');

    //Функция выбора и стилизации ответов
    function Init() {
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
              if (
                answersBtn[i].classList.contains('answer__colorEll--active')
              ) {
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
    }
    Init();
  } else {
    //Загрузка лоудера до результата
    questionContainer.innerHTML = renderLoader;

    //Загрузка результата теста
    const renderResultPage = () => {
      setTimeout(() => {
        questionContainer.innerHTML = renderResult;

        const result = document.querySelector('.result');
        result.innerHTML = test.results[test.result].text;
        headerTitle.innerHTML = 'Готово!';
        headerBox.classList.add('header__box--result');
        questionContainer.classList.add('result__container');
        footer.innerHTML = renderFooter;

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
    renderResultPage();
  }

  function Click(index) {
    let correct = test.Click(index);
  }
}
