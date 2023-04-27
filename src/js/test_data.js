import { Test, Result, Question, Answer } from './test';
import qu_people from '../images/qu_people.png';
import qu_snack from '../images/qu_snack.png';
import qu_star from '../images/qu_star.png';

//Массив с результатами
export const results = [
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
export const questions = [
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
export const test = new Test(questions, results);
