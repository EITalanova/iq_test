import { renderQuestionPage, renderQuestionHeader } from './markup';
import qu_people from '../images/qu_people.png';
import qu_snack from '../images/qu_snack.png';
import qu_star from '../images/qu_star.png';
import loader from '../images/loader.png'

const refs = {
  header: document.querySelector('.header'),
  main: document.querySelector('.main'),
  startTestBtn: document.querySelectorAll('.btn__start'),
};

class Test {
  constructor(questions, resuits) {
    this.questions = questions;
    this.results = results;
    this.result = 0;
    this.score = 0;
    this.currentQuestion = 0;
  }

  Click(index) {
    let value = this.questions[this.currentQuestion].Click(index);
    console.log(value);
    this.score += value;
  }
}

class Question {
  constructor(type, text, picture, answers) {
    this.type = type;
    this.text = text;
    this.picture = picture;
    this.answers = answers;
  }

  Click(index) {
    console.log(this.answers[index]);
    return this.answers[index].value;
  }
}

class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

const results = [
  new Result(
    'Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!',
    0
  ),
  new Result(
    'Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!',
    5
  ),
];

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

const test = new Test(questions, results);

startTestBtns = Array.prototype.slice.call(refs.startTestBtn);

startTestBtns.forEach(function (ell, i) {
  ell.addEventListener('click', renderPage);
});



function renderPage() {
  refs.header.insertAdjacentHTML('afterbegin', renderQuestionHeader);
  refs.main.innerHTML = renderQuestionPage;
  nextQuestion();
  const nextQuestionBtn = document.querySelector('.btn');
  nextQuestionBtn.addEventListener('click', nextQuestion);
}

function nextQuestion() {
  // console.log(test.currentQuestion);
  // console.log(test.questions.length);
  // console.log(test.questions[test.currentQuestion].type);

  if (test.currentQuestion < test.questions.length) {
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answer__list');
    const line = document.querySelector('.line');

    if (test.questions[test.currentQuestion].picture !== 0) {
      question.innerHTML = `<p class="question__text">
      ${test.questions[test.currentQuestion].text}
      </p>
      <img class="question__img" src=${
        test.questions[test.currentQuestion].picture
      } alt="pic">`;
    } else {
      question.innerHTML = `<p class="question__text">${
        test.questions[test.currentQuestion].text
      }</p>`;
    }
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
            `<li class="answer__ell">
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
            `<li class="answer__colorEll" style="background:#${
              test.questions[test.currentQuestion].answers[i].text
            }"><button class="btn--answer"type="button"></button></li>`
          );
          break;

        case 'numbers':
          answers.classList.remove('answer__list--color');
          answers.classList.add('answer__list--numbers');
          answers.insertAdjacentHTML(
            'beforeend',
            `<li class="answer__numPic">${
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
            `<li class="answer__numPic">${
              test.questions[test.currentQuestion].answers[i].text
            }</li>`
          );

          break;
      }
    }

    test.currentQuestion += 1;

    //     function changeAnswer(e) {
    //       console.log('fff');
    //       e.target.classList.add('answer__ell--active');
    //     }

    // startTestBtns = Array.prototype.slice.call(refs.startTestBtn);

    // startTestBtns.forEach(function (ell, i) {
    //   ell.addEventListener('click', renderPage);
    // });

    const answersEll = document.querySelectorAll('.answer__colorEll');
    answerTestBtns = Array.prototype.slice.call(answersEll);

    answerTestBtns.forEach(function (ell, i) {
      ell.addEventListener('click', function (e) { Click(e.target.getAttribute("index")); });
    });

    // for (let i = 0; i < answersEll.length; i += 1) {
    //   answersEll[i].addEventListener('click', rrrrr);

    // }
  } else {
    refs.main.innerHTML = `<p class="loading__title">Обработка результатов</p>
<img scr=${loader} alt="loader" width="65" heigth="68">
<p class="loading_text">Определение стиля мышления...........
.......................................................</p>`
  }

  // answersEll[i].firstChild.classList.add('answer__ell--active');

  function Click(index) {
   
    let correct = test.Click(index);
     console.log(correct);

    // let btns = document.querySelectorAll('.btn--answer');
    // for (let i = 0; i < btns.length; i++) {
    //   btns[i].setAttribute('disabled', 'disabled');
    // }
    // btns[index].classList.add('answer__ell--active');
    // console.log("e.target.index");
    // answersEll[index].classList.add('answer__ell--active');
  }
  //     const answersArr = Array.prototype.slice.call(answersEll);

  // answersArr.forEach(function (ell, i) {
  //   ell.addEventListener('click', changeAnswer);
  //   })
  //  вывести результат
  // }
}

// function changeAnswer(e) {
//   console.log(e);
// }

// const answers = document.querySelector('.answer__list');

// answers.addEventListener('click', changeAnswer);
