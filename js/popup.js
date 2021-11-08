import {similarAnnouncements} from './data.js';

const popupList = similarAnnouncements;
const userDialog = document.querySelector('.map__canvas');

const createPopup =function() {
  const templateFragment = document.querySelector('#card').content.querySelector('.popup'); // Находим фрагмент с содержимым темплейта
  const popupFragment = document.createDocumentFragment();
  const popup = templateFragment.cloneNode(true); // клонировала фрагмент шаблона тут
  popupList.forEach(({author}) => {
    popup.querySelector('.popup__avatar').content = author.avatar;
  });

  popupList.forEach(({offer}) => {
    popup.querySelector('.popup__title').textContent = offer.title;
    popup.querySelector('.popup__text--address').textContent = offer.address;

    const priceContainer = document.createElement('p');
    priceContainer.innerHTML = '<span>₽/ночь</span>';
    popup.querySelector('.popup__text--price').textContent = offer.price + priceContainer.innerHTML;

    const typeContainer = document.createElement('h4');
    popup.querySelector('.popup__type').textContent = typeContainer.insertAdjacentHTML('afterbegin', offer.type);

    popup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей.`;
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    popup.querySelector('.popup__description').textContent = offer.description;
  });

  const photoContainer = popup.querySelector('.popup__photos');

  popupList.forEach(({photos}) => {

    const photoElement = document.createElement('img');

    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    photoContainer.appendChild(photoElement);
  });

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

  userDialog.appendChild(popupFragment);
};

createPopup();

export {
  createPopup
};
