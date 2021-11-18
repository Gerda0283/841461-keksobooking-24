const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_BY_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};
const MAX_PRICE = 1000000;
const MAX_NUMBER_OF_ROOMS = 100;
const MIN_CAPACITY = 0;

const userFiltersForm = document.querySelector('.map__filters');
const userForm = document.querySelector('.ad-form');
const userFieldsets = userForm.querySelector('.ad-form__element');
const userTitleInput = userForm.querySelector('[name="title"]');
const userPriceInput = userForm.querySelector('[name="price"]');
const userTypeInput = userForm.querySelector('[name="type"]');
const userRoomInput = userForm.querySelector('[name="rooms"]');
const userGuestInput = userForm.querySelector('[name="capacity"]');
const userTimeIn = userForm.querySelector('[name="timein"]');
const userTimeOut = userForm.querySelector('[name="timeout"]');

const setDisabledMode = () => {
  userForm.classList.add('shownad-form--disabled');
  for (const userFieldset of userFieldsets) {
    userFieldset.disabled = true;
    userFieldset.classList.add('disabled');
  }
  userFiltersForm.disabled = true;
  userFiltersForm.classList.add('map__filters--disabled');
};

const setActiveMode = () => {
  userForm.classList.remove('shownad-form--disabled');
  for (const userFieldset of userFieldsets) {
    userFieldset.disabled = false;
    userFieldset.classList.remove('disabled');
  }
  userFiltersForm.disabled = false;
  userFiltersForm.classList.remove('map__filters--disabled');
};
setActiveMode();

//userForm.addEventListener('DOMContentLoaded', setDisabledMode);
//userForm.addEventListener('load', setActiveMode);


userTitleInput.addEventListener('input', () => {
  const valueLength = userTitleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    userTitleInput.setCustomValidity(`Добавьте ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    userTitleInput.style ='box-shadow: 0 0 2px 2px red';
  } else if (valueLength > MAX_TITLE_LENGTH) {
    userTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH  } симв.`);
    userTitleInput.style ='box-shadow: 0 0 2px 2px red';
  } else {
    userTitleInput.setCustomValidity('');
    userTitleInput.style ='';
  }
  userTitleInput.reportValidity();
});

const setMinPrice = (evt) => {
  const minPrice = MIN_PRICE_BY_TYPE[evt.target.value];
  userPriceInput.setAttribute('min', minPrice);
  userPriceInput.setAttribute('placeholder', minPrice);
};
userTypeInput.addEventListener('change', setMinPrice);


userPriceInput.addEventListener('input', (evt) => {
  const priceValue = userPriceInput.value;
  if (priceValue < MIN_PRICE_BY_TYPE[evt.target.value]) {
    userPriceInput.setCustomValidity(`Для ${userTypeInput.value} цена не меньше ${ MIN_PRICE_BY_TYPE[evt.target.value]} ₽/ночь`);
    userPriceInput.style ='box-shadow: 0 0 2px 2px red';
  } else if (priceValue > MAX_PRICE) {
    userPriceInput.setCustomValidity(`Цена не должна превышать ${ MAX_PRICE} ₽/ночь`);
    userPriceInput.style ='box-shadow: 0 0 2px 2px red';
  } else {
    userPriceInput.setCustomValidity('');
    userPriceInput.style ='';
  }
  userPriceInput.reportValidity();
});

const setGuestCapacity = () => {
  const rooms = userRoomInput.value;
  const guests = userGuestInput.value;
  if (rooms === MAX_NUMBER_OF_ROOMS && guests !== MIN_CAPACITY) {
    userGuestInput.setCustomValidity(`для варианта ${MAX_NUMBER_OF_ROOMS} доступен только вариант ${MIN_CAPACITY}`);
    userGuestInput.style ='box-shadow: 0 0 2px 2px red';
  } else if (guests > rooms) {
    userGuestInput.setCustomValidity('Данный вариант размещения не возможен');
    userGuestInput.style ='box-shadow: 0 0 2px 2px red';
  } else if (rooms !== MAX_NUMBER_OF_ROOMS && guests === MIN_CAPACITY) {
    userGuestInput.setCustomValidity('Нужно выбрать вариант размещения минимум 1-го гостя');
    userGuestInput.style ='box-shadow: 0 0 2px 2px red';
  } else {
    userGuestInput.setCustomValidity('');
    userGuestInput.style ='';
  }
  userGuestInput.reportValidity();
};

userRoomInput.addEventListener('change', setGuestCapacity);
userGuestInput.addEventListener('change', setGuestCapacity);

userTimeIn.addEventListener('input', () => {
  userTimeOut.value = userTimeIn.value;
});

userTimeOut.addEventListener('input', () => {
  userTimeIn.value = userTimeOut.value;
});

userForm.addEventListener('submit', (evt) => {
  if (!userGuestInput.checkValidity()) {
    userGuestInput.style ='box-shadow: 0 0 2px 2px red';
    evt.preventDefault();
  }
});
