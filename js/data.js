import {getRandomNumber} from './util';

//Константы

const TITLELIST = ['Фудзи', 'Саккура', 'Утреннее солнце', 'Горы в тумане', 'Морской бриз', 'Бирюза', 'Вишнёвый сад', 'Хижина у моря', 'Летний дом', 'Зимний дом'];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const HOURS = ['12:00', '13:00', '14:00'];

const FEATURESLIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONLIST = ['С видом на Фудзи', 'Дом окружён парком', 'Большую часть дня в квартире естественный свет', 'для тех, кто любит высоту', 'С видом на океан', 'Все оттенки голубого прекрасно охладят в жару', 'Вишнёвый цвет в Ваших окнах', 'Пляжный домик', 'одноэтажное бунгало для друзей', 'тут вы сможете в комфорте пережить холодное время года'];

const IMAGES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const ANNOUNCEMENTITEMS = 10;

//Функции

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

//Сборка ДАННЫХ

const createAnnouncement = () => {
  const author = {
    avatar: getAvatar(0, 9)
  };

  const offer = {
    title: TITLELIST[getTitle(0, (TITLELIST.length - 1))],
    address: `${getLat(35,65, 35.70)}, ${getLng(139.70, 139.80)}`,
    price: getPrice(200, 1000),
    type: TYPES[getType(0, (TYPES.length - 1))],
    rooms: getRoom(1, 10),
    guests: getGuests(1, 15),
    checkin: HOURS[getCheck(0, (HOURS.length - 1))],
    checkout: HOURS[getCheck(0, (HOURS.length - 1))],
    features: getFeature(0, 5),
    description: getDescription(0, 9),
    photos: getPhoto(0, 2)
  };

  const location = {
    lat: getLat(35.65000, 35.70000),
    lng: getLng(139.70000, 139.80000)
  };

  return {
    author,
    offer,
    location
  };
};

createAnnouncement();

const similarAnnouncements = Array.from({length:ANNOUNCEMENTITEMS}, createAnnouncement);

export {
  similarAnnouncements
};
