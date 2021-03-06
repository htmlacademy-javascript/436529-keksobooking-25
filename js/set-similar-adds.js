const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const COUNT_FOR_CORRECT_END = 4;

const roomsCount = {
  'alone': 'комната',
  'some': 'комнаты',
  'many': 'комнат'
};

export const guestsCount = {
  'alone': 'гостя',
  'many': 'гостей',
};

const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

// Подставляем текстовый контент
const setTextContent = (obj) => {
  Object.entries(obj).forEach(([, value]) => {
    Object.values(value)[0].textContent = Object.values(value)[1];
  });
};

// Удаляем блок
const removeBlock = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value[key] === undefined || value[key].length === 0) {
      Object.values(value)[0].remove();
    }
  });
};

// Генерируем разные окончания в текстовом блоке
const getCorrectKeyForRooms = (count) => {
  if (count === 1) {
    return roomsCount.alone;
  } else if (count > 1 && count <= COUNT_FOR_CORRECT_END) {
    return roomsCount.some;
  } return roomsCount.many;
};

const getCorrectKeyForGuests = (count) => {
  if (count === 1) {
    return guestsCount.alone;
  } return guestsCount.many;
};

// Добавляем фотографии
const addPhotos = (array, blockPhoto, blockPhotos) => {
  blockPhotos.innerHTML = '';

  array.forEach((photo) => {
    blockPhoto.src = photo;
    const addPhoto = blockPhoto.cloneNode(true);
    blockPhotos.insertAdjacentElement('beforeend', addPhoto);
  });
};


export const setAdd = (object) => {
  // Копируем шаблон
  const addElement = similarAddTemplate.cloneNode(true);
  // Определяем переменные
  const popupTitle = addElement.querySelector('.popup__title');
  const popupAddress = addElement.querySelector('.popup__text--address');
  const popupPrice = addElement.querySelector('.popup__text--price');
  const popupType = addElement.querySelector('.popup__type');
  const popupCapacity = addElement.querySelector('.popup__text--capacity');
  const popupTime = addElement.querySelector('.popup__text--time');
  const popupFeatures = addElement.querySelector('.popup__features');
  const popupList = popupFeatures.querySelectorAll('.popup__feature');
  const popupDescription = addElement.querySelector('.popup__description');
  const popupPhoto = addElement.querySelector('.popup__photo');
  const popupPhotos = addElement.querySelector('.popup__photos');
  const popupAvatar = addElement.querySelector('.popup__avatar');
  const popupAvatars = addElement.querySelectorAll('.popup__avatar');

  // Деструктурируем
  const [
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    photos,
    description,
    avatar
  ] = [
    object.offer.title,
    object.offer.address,
    object.offer.price,
    object.offer.type,
    object.offer.rooms,
    object.offer.guests,
    object.offer.checkin,
    object.offer.checkout,
    object.offer.features,
    object.offer.photos,
    object.offer.description,
    object.author.avatar
  ];

  // Удаляем пустые блоки
  const blockObjectsForRemoveBlock = {
    title: {popupTitle, title},
    address: {popupAddress, address},
    price: {popupPrice, price},
    type: {popupType, type},
    rooms: {popupCapacity, rooms},
    guests: {popupCapacity, guests},
    checkin: {popupTime, checkin},
    checkout: {popupTime, checkout},
    features: {popupFeatures, features},
    photos: {popupPhotos, photos},
    description: {popupDescription, description},
    avatar: {popupAvatar, avatar}
  };

  removeBlock(blockObjectsForRemoveBlock);

  // Подставляем данные в текст контент
  const blockObjectsForSetByTextContent = {
    title: {popupTitle, title},
    address: {popupAddress, address},
    type: {popupType, type},
    description: {popupDescription, description}
  };

  setTextContent(blockObjectsForSetByTextContent);

  // Добавляем цену
  popupPrice.textContent = `${price  } ₽/ночь`;

  // Добавляем тип жилища
  popupType.textContent = TYPES[type];

  // Добавляем сообщение с кол-вом комнат и гостей
  popupCapacity.textContent = `${rooms } ${getCorrectKeyForRooms(rooms) } для ${guests } ${getCorrectKeyForGuests(guests) }`;

  // Добавляем сообщение с датами заезда и выезда
  popupTime.textContent = `Заезд после ${checkin }, выезд до ${checkout }`;

  // Добавляем характеристики
  if (features !== undefined) {

    popupList.forEach((popupListItem) => {
      const isNecessary = features.some(
        (feature) => popupListItem.classList.contains(`popup__feature--${  feature}`),
      );

      if (!isNecessary) {
        popupListItem.remove();
      }

    });
  }

  // Добавляем фото
  if (photos !== undefined) {

    popupPhotos.removeChild(popupPhoto);
    addPhotos(photos, popupPhoto, popupPhotos);

  }

  // Добавляем аватар
  popupAvatars.forEach(() => {

    popupAvatar.src = avatar;

  });

  return addElement;

};


