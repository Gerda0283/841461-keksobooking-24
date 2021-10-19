const getRandomNumber = function(min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};
getRandomNumber();


// Автор ( объект.одно поле)

const imageNumber = [ 1,2,3,4,5,6,7,8,9,10 ];

const getAvatar = function(min, max) {
  const randomNumber = getRandomNumber(min, max);
  min = Math.ceil(Math.abs(imageNumber[0]));
  max = Math.floor(Math.abs(imageNumber.length));
  Math.floor(Math.random() * (max - min + 1)) + min;
  const avatarNumber = randomNumber <= imageNumber.length-1 ? '0'+randomNumber : randomNumber;

  return `img/avatars/user${avatarNumber}.png`;
};


// Название помещения.строка

const titleList = ['Фудзи', 'Саккура', 'Утреннее солнце', 'Горы в тумане', 'Морской бриз', 'Бирюза', 'Вишнёвый сад', 'Хижина у моря', 'Летний дом', 'Зимний дом'];

const getTitle = function(min, max) {

  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

const title = titleList[getTitle(0, (titleList.length - 1))];


// Адрес и местоположение.строка(значения с плавающей точкой)

const getLat =(latMin, latMax, digits = 4) => {

  const lower = Math.min(Math.abs(latMin), Math.abs(latMax));
  const upper = Math.max(Math.abs(latMin), Math.abs(latMax));

  const locationLat = Math.random() * (upper - lower) + lower;

  return locationLat.toFixed(digits);
};

const latitude = getLat(35.65000, 35.70000);


const getLng =(lngmin, lngMax, digits = 4) => {

  const lower = Math.min(Math.abs(lngmin), Math.abs(lngMax));
  const upper = Math.max(Math.abs(lngmin), Math.abs(lngMax));

  const locationLng = Math.random() * (upper - lower) + lower;

  return locationLng.toFixed(digits);
};

const longitude = getLng(139.70000, 139.80000);

const address = `${latitude}, ${longitude}`;


// Цена.число

const getPrice = function(minPrice, maxPrice) {

  minPrice = Math.ceil(Math.abs(minPrice));
  maxPrice = Math.floor(Math.abs(maxPrice));

  return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};


// Тип недвижимости.строка(одно случайное значение из массива)

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const getType = function(min, max) {

  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

const type = types[getType(0, (types.length - 1))];


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

const hours = ['12:00', '13:00', '14:00'];

const getCheck = function(min, max) {

  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

const checkin = hours[getCheck(0, (hours.length - 1))];
const checkout = hours[getCheck(0, (hours.length - 1))];


// Характеристики.массив строк случайной длины

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getFeature() {
  const maxLength = featuresList.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfItem = getRandomNumber(0, maxLength - 1);
    const item = featuresList[indexOfItem];

    if (!array.includes(item)) {
      array.push(item);
    }
  }
  return array;
}


// Описание помещения.строка

const descriptionList = ['С видом на Фудзи', 'Дом окружён парком', 'Большую часть дня в квартире естественный свет', 'для тех, кто любит высоту', 'С видом на океан', 'Все оттенки голубого прекрасно охладят в жару', 'Вишнёвый цвет в Ваших окнах', 'Пляжный домик', 'одноэтажное бунгало для друзей', 'тут вы сможете в комфорте пережить холодное время года'];

const getDescription = function() {

  const randomDescriptionItemIndex = getRandomNumber(0, descriptionList.length - 1);

  return descriptionList[randomDescriptionItemIndex];
};


// Фотографии помещения.массив строк случайной длины

const images = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getPhoto() {
  const maxLength = images.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfItem = getRandomNumber(0, maxLength - 1);
    const item = images[indexOfItem];

    if (!array.includes(item)) {
      array.push(item);
    }
  }
  return array;
}


//Сборка

const createAnnouncement = () => {
  const author = {
    avatar: getAvatar()
  };

  const offer = {
    title: titleList[getTitle(0, (titleList.length - 1))],
    address: `${getLat()}, ${getLng()}`,
    price: getPrice(),
    type: types[getType(0, (types.length - 1))],
    rooms: getRoom(),
    guests: getGuests(),
    checkin: hours[getCheck(0, (hours.length - 1))],
    checkout: hours[getCheck(0, (hours.length - 1))],
    features: getFeature(),
    description: getDescription(),
    photos: getPhoto()
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

const announcement = createAnnouncement();
const announcementItems = 10;

const similarAnnouncements = Array.from({length:announcementItems}, createAnnouncement);
