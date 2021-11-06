import {similarAnnouncements} from './data.js';

const popupList = similarAnnouncements;
const userDialog = document.querySelector('.map__canvas');

const templateFragment = document.querySelector('#card').content.querySelector('.popup'); // Находим фрагмент с содержимым темплейта

const popup = templateFragment.cloneNode(true); // клонировала фрагмент шаблона тут

const createPopupText = () => {

  popup.querySelector('.popup__avatar').src = popupList.offer.avatar;
  popup.querySelector('.popup__title').textContent = popupList.offer.title;
  popup.querySelector('.popup__text--address').textContent = popupList.offer.address;

  const priceContainer = document.createElement('p');
  priceContainer.innerHTML = '<span>₽/ночь</span>';
  popup.querySelector('.popup__text--price').textContent = popupList.offer.price + priceContainer.innerHTML;

  const typeContainer = document.createElement('h4');
  popup.querySelector('popup__type').textContent = typeContainer.insertAdjacentHTML('afterbegin', popupList.offer.type);

  popup.querySelector('.popup__text--capacity').textContent = `${popupList.offer.rooms} комнаты для ${popupList.offer.guests} гостей.`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${popupList.offer.checkin}, выезд до ${popupList.offer.checkout}`;
  popup.querySelector('.popup__description').textContent = popupList.offer.description;
};

createPopupText();

const photoContainer = popup.querySelector('.popup__photos');

const getPopupPhotos = (popupList, offer) => {

  popupList.photos.forEach((userPhoto) => {
    const photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    photoContainer.appendChild(photoElement);
  });

};

getPopupPhotos();

const getFeatures = function() {
  const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];
  const featuresContainer = popup.querySelector('.popup__features');
  featuresContainer.innerHTML = '';
  features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature--' + feature);
    featureListItem.textContent = features[feature];
    featuresContainer.append(featureListItem);
  });
};

getFeatures();


//const popupFragment = document.createDocumentFragment();


/*const photoContainer = popup.querySelector('.popup__photos');

const getPopupPhotos = function() {
  popupList.offer.photos.forEach((userPhoto) => {
    const photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    photoContainer.appendChild(photoElement);
  });
};
getPopupPhotos();

const newAvatar = function(author) {
  popup.querySelector('.popup__avatar').content = author.avatar;
  author.setAttribute('src', 'author.avatar');
};
newAvatar();

const createPopup = function(popupList) {

  const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];
  const featuresContainer = popup.querySelector('.popup__features');
  featuresContainer.innerHTML = '';
  features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add(('popup__feature--') + feature);
    featureListItem.textContent = features[feature];
    featuresContainer.append(featureListItem);
  });

  popupList.forEach(({offer}) => {
    popup.querySelector('.popup__title').textContent = offer.title;
    popup.querySelector('.popup__text--address').textContent = offer.address;

    const priceContainer = document.createElement('p');
    priceContainer.innerHTML = '<span>₽/ночь</span>';
    popup.querySelector('.popup__text--price').textContent = offer.price + priceContainer.innerHTML;

    const typeContainer = document.createElement('h4');
    popup.querySelector('popup__type').textContent = typeContainer.insertAdjacentHTML('afterbegin', offer.type);

    popup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей.`;
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    popup.querySelector('.popup__description').textContent = offer.description;
  });
};*/

userDialog.appendChild(popup);

export {
  createPopupText,
  getFeatures,
  getPopupPhotos
};
