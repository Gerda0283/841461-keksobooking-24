import {similarAnnouncements} from './data.js';
const [{author}, {offer}] = similarAnnouncements;

const userDialog = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card').content.querySelector('.popup'); // Находим фрагмент с содержимым темплейта
const popupFragment = document.createDocumentFragment();

const featuresContainer = templateFragment.querySelector('.popup__features');
const featureList = featuresContainer.querySelectorAll('.popup__feature');
const features = offer.features.map((userFeature) => `popup__feature--${userFeature}`);
featureList.forEach((featureListItem) => {
  const feature = featureListItem.classList[1];
  if (!features.includes(feature)) {
    featureListItem.remove();
  }
});

const createAvatar=(userAvatar) => {
  const avatarElement = document.createElement('img');
  avatarElement.classList.add('popup__avatar');
  avatarElement.width = 70;
  avatarElement.height = 70;
  avatarElement.alt = 'Аватар пользователя';
  return userAvatar;
};

createAvatar(author.avatar);

const photoContainer = templateFragment.querySelector('.popup__photos');
photoContainer.innerHTML = '';
offer.photos.forEach((photo) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('popup__photo');
  photoElement.src = photo;
  photoElement.width = 45;
  photoElement.height = 40;
  photoElement.alt = 'Фотография жилья';
  photoContainer.appendChild(photoElement);
});

const createPopup =() => {
  const popup = templateFragment.cloneNode(true), // клонировала фрагмент шаблона тут
    popupTitle = popup.querySelector('.popup__title'),
    popupType = popup.querySelector('.popup__type'),
    popupAddress = popup.querySelector('.popup__text--address'),
    popupPrice = popup.querySelector('.popup__text--price'),
    popupCapacity = popup.querySelector('.popup__text--capacity'),
    popupCheckInOut = popup.querySelector('.popup__text--time'),
    popupDescription = popup.querySelector('.popup__description'),
    popupAvatar = popup.querySelector('.popup__avatar'),
    popupPhoto = photoContainer.querySelectorAll('.popup__photo');

  popupTitle.textContent = offer.title;
  if (!offer.title) {popupTitle.remove();}
  popupType.textContent = offer.type;
  if (!offer.type) {popupType.remove();}
  popupAddress.textContent = offer.address;
  if (!offer.address) {popupAddress.remove();}
  popupPrice.textContent = `${offer.price} ₽/ночь`;
  if (!offer.address) {popupAddress.remove();}
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей.`;
  if (!offer.rooms || !offer.guests) {popupCapacity.remove();}
  popupCheckInOut.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  if (!offer.checkin || !offer.checkout) {popupCheckInOut.remove();}
  popupDescription.textContent = offer.description;
  if (!offer.description) {popupDescription.remove();}
  popupAvatar.src = author.avatar;
  if (!author.avatar) {popupAvatar.remove();}
  popupPhoto.src = offer.photos.photo;

  popupFragment.appendChild(popup);
  return userDialog.appendChild(popupFragment);
};

createPopup(similarAnnouncements[0]);
