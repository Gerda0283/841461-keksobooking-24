// Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// с проверкой чисел на положительность - Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs; https://www.w3schools.com/jsref/jsref_abs.asp

const getRandomIntInclusive = function(min, max) {

  if (min < 0) {
    min = Math.ceil(Math.abs(min));
  } else {
    min = Math.ceil(min);
  }

  if (max < 0) {
    max = Math.floor(Math.abs(max));
  } else {
    max = Math.floor(max);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive();

// Source file: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Source file: https://myrusakov.ru/js-random-numbers.html

const getRandomFloat = function(min, max) {

  if (min < 0) {

    return false;

  } else if (max < 0) {

    return false;

  } else {

    return Math.random() * (max - min) + min;

  }
};

getRandomFloat();

