//Получение случайного целого числа в заданном интервале, включительно
// Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// с проверкой чисел на положительность - Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs; https://www.w3schools.com/jsref/jsref_abs.asp

const getRandomIntInclusive = function getRandomIntInclusive(min, max) {

  if (min < 0) {
    min = Math.ceil(Math.abs(min));// делает отрицательное число положительным
  } else {
    min = Math.ceil(min);
  }

  if (max < 0) {
    max = Math.floor(Math.abs(max)); // делает отрицательное число положительным
  } else {
    max = Math.floor(max);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(); // если я не ошиблась и случайное число может быть равно и минимуму и максимуму, то не имет значения, какое из них больше("потолок" или "пол"), поскольку функция будет возвращать >= что-то между ними <= , вне зависимости от их нахождения слева или справа.

//Получение случайного числа с плавающей точкой в заданном интервале
// Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Source file: https://myrusakov.ru/js-random-numbers.html

const getRandomFloat = function getRandomFloat(min, max) {

  if (min < 0) {

    return false; // функция останавливается, если ввели отрицательное число

  } else if (max < 0) {

    return false; // функция останавливается, если ввели отрицательное число

  } else {

    return Math.random() * (max - min) + min;

  }
};

getRandomFloat();

