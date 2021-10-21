import {
  FEATURESLIST,
  DESCRIPTIONLIST,
  IMAGES
}
  from './data.js';

const getRandomNumber = function(min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

// Автор ( объект.одно поле)

const getAvatar = function(min, max) {
  const randomNumber = getRandomNumber(min, max);
  const avatarNumber = randomNumber <= 9 ? '0' + randomNumber : randomNumber;

  return `img/avatars/user${avatarNumber}.png`;
};

// Название помещения.строка

const getTitle = function(min, max) {

  const randomNumber = getRandomNumber(min, max);
  const title = randomNumber;

  return title;
};

// Адрес и местоположение.строка(значения с плавающей точкой)

const getLat =(latMin, latMax, digits = 4) => {

  const lower = Math.min(Math.abs(latMin), Math.abs(latMax));
  const upper = Math.max(Math.abs(latMin), Math.abs(latMax));

  const locationLat = Math.random() * (upper - lower) + lower;

  return locationLat.toFixed(digits);
};

const getLng =(lngmin, lngMax, digits = 4) => {

  const lower = Math.min(Math.abs(lngmin), Math.abs(lngMax));
  const upper = Math.max(Math.abs(lngmin), Math.abs(lngMax));

  const locationLng = Math.random() * (upper - lower) + lower;

  return locationLng.toFixed(digits);
};

// Цена.число

const getPrice = function(minPrice, maxPrice) {

  minPrice = Math.ceil(Math.abs(minPrice));
  maxPrice = Math.floor(Math.abs(maxPrice));

  return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

// Тип недвижимости.строка(одно случайное значение из массива)

const getType = function(min, max) {

  const randomNumber = getRandomNumber(min, max);
  const type = randomNumber;

  return type;
};

// Количество комнат.случайное число

const getRoom = function(minRoom, maxRoom) {

  minRoom = Math.ceil(Math.abs(minRoom));
  maxRoom = Math.floor(Math.abs(maxRoom));

  return Math.floor(Math.random() * (maxRoom - minRoom + 1)) + minRoom;
};

// Количество гостей.случайное число

const getGuests = function(minGuests, maxGuests) {

  minGuests = Math.ceil(Math.abs(minGuests));
  maxGuests = Math.floor(Math.abs(maxGuests));

  return Math.floor(Math.random() * (maxGuests - minGuests + 1)) + minGuests;
};

// Чекин и чекаут.фиксированные значения из массива

const getCheck = function(min, max) {

  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  return (Math.floor(Math.random() * (max - min + 1)) + min);
};


// Характеристики.массив строк случайной длины

function getFeature() {
  const maxLength = FEATURESLIST.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfItem = getRandomNumber(0, maxLength - 1);
    const item = FEATURESLIST[indexOfItem];

    if (!array.includes(item)) {
      array.push(item);
    }
  }
  return array;
}

// Описание помещения.строка

const getDescription = function() {

  const randomDescriptionItemIndex = getRandomNumber(0, DESCRIPTIONLIST.length - 1);

  return DESCRIPTIONLIST[randomDescriptionItemIndex];
};

// Фотографии помещения.массив строк случайной длины

function getPhoto() {
  const maxLength = IMAGES.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfItem = getRandomNumber(0, maxLength - 1);
    const item = IMAGES[indexOfItem];

    if (!array.includes(item)) {
      array.push(item);
    }
  }
  return array;
}

export {
  getAvatar,
  getTitle,
  getLat,
  getLng,
  getPrice,
  getType,
  getRoom,
  getGuests,
  getCheck,
  getFeature,
  getDescription,
  getPhoto
};
