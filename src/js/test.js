

class Test {
  constructor(type, questions, resuits) {
    this.type = type;
    this.questions = questions;
    this.results = results;
    this.result = 0;
    this.score = 0;
    this.currentQuestion = 0;
  }
}

class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answer;
  }

  choiceAnswer(index) {
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
  new Question('Ваш пол:', [
    new Answer('Мужчина', 1),
    new Answer('Женщина', 2),
  ]),
  new Question('Укажите ваш возраст:', [
    new Answer('До 18', 1),
    new Answer('От 18 до 28', 2),
    new Answer('От 29 до 35', 3),
    new Answer('От 36', 4),
  ]),
  new Question('Выберите лишнее:', [
    new Answer('Дом', 1),
    new Answer('Шалаш', 2),
    new Answer('Бунгало', 3),
    new Answer('Скамейка ', 4),
    new Answer('Скамейка ', 5),
  ]),
];

const test = new Test(1, questions, results);

function NextQuestion() {
    if (test.currentQuestion < test.questions.length) {
        
    }
}