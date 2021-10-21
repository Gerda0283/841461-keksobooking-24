import {
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
}
  from './util.js';

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
  FEATURESLIST,
  DESCRIPTIONLIST,
  IMAGES,
  similarAnnouncements
};
