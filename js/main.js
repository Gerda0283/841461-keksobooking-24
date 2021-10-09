// Автор ( объект.одно поле)

const imageNumber = [ 1,2,3,4,5,6,7,8,9,10 ];

const getAvatar = function(min, max) {

  min = Math.ceil(Math.abs(imageNumber[0]));
  max = Math.floor(Math.abs(imageNumber.length + 1));

  if (min <= 9) {

    return 'img/avatars/user' + '0' + (Math.floor(Math.random() * (max - min + 1)) + min) + '.png';

  } else {

    return 'img/avatars/user' + (Math.floor(Math.random() * (max - min + 1)) + min) + '.png';
  }
};

const authorImage = getAvatar();

const author = {
  avatar: authorImage
};


// Адрес и местоположение.строка(значения с плавающей точкой)

const minLat = 35.65000;
const maxLat = 35.70000;
const minLng = 139.70000;
const maxLng = 139.80000;

const getLat =(minLat, maxLat, digits = 4) => {

  const lower = Math.min(Math.abs(minLat), Math.abs(maxLat));
  const upper = Math.max(Math.abs(minLat), Math.abs(maxLat));

  const locationLat = Math.random() * (upper - lower) + lower;

  return locationLat.toFixed(digits);
};

const latitude = getLat(minLat, maxLat);

const getLng =(minLng, maxLng, digits = 4) => {

  const lower = Math.min(Math.abs(minLng), Math.abs(maxLng));
  const upper = Math.max(Math.abs(minLng), Math.abs(maxLng));

  const locationLng = Math.random() * (upper - lower) + lower;

  return locationLng.toFixed(digits);
};

const longitude = getLng(minLng, maxLng);

const location = {
  lat: latitude,
  lng: longitude
};

const address = location.lat + ',' + location.lng;


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

function getFeature(featuresList) {
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

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

const features = getFeature(featuresList);


// Фотографии помещения.массив строк случайной длины

const images = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getPhoto(images) {
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

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

const photos = getPhoto(images);


//Сборка

console.log(author);

// Название.строка

const title = 'Название';

// Описание помещения.строка

const description = 'Описание помещения';

const price = getPrice();
const rooms = getRoom();
const guests = getGuests();

//объект недвижимости .объект с полями, просчитанными выше

const offer = {
  title: title,
  address: address,
  price: price,
  type: type,
  rooms: rooms,
  guests: guests,
  checkin: checkin,
  checkout: checkout,
  features: features,
  description: description,
  photos: photos
};

console.log(offer);
console.log(location);
