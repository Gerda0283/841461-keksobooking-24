import {similarAnnouncements} from './data.js';

const popupList = similarAnnouncements;

const userDialog = document.querySelector('.map__canvas');

const templateFragment = document.querySelector('#card').content; // Находим фрагмент с содержимым темплейта
const popupContainer = templateFragment.querySelector('.popup'); // В существующем фрагменте находим содержимое


popupList.forEach(({offer}) => {
  const popup = popupContainer.cloneNode(true);
  popup.querySelector('.popup__title').textContent = offer.title;
  popup.querySelector('.popup__text--address').textContent = offer.address;

  popup.querySelector('.popup__text--price').textContent = offer.price;
  const priceContainer = document.createElement('p');
  priceContainer.innerHTML = '<span>₽/ночь</span>';
  offer.price.append(priceContainer);

  const type = popup.querySelector('popup__type').value;
  const typeContainer = document.createElement('h4');
  offer.type = typeContainer(type);

  popup.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей.';
  popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

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
    const featureListItem = popup.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add('popup__feature --' + feature);
    featureListItem.textContent = features[feature];
    featuresContainer.append(featureListItem);
  });

  const getPopupPhotos = function(offerElement) {
    offer.photos.forEach((userPhoto) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      offerElement.querySelector('.popup__photos').appendChild(photoElement);
    });
  };
  getPopupPhotos();

  const newAvatar = function() {
    const avatar = popup.querySelector('.popup__avatar');
    avatar.setAttribute('src', 'author.avatar');
  };
  newAvatar();

  userDialog.appendChild(popup);
});
