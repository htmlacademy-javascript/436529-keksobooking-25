import {TITLES, TYPES, CHECKIN, CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, MAX_PRICE, MAX_ROOMS_COUNT, MAX_GUESTS_NUMBER, MIN_LAT_POINT,
  MAX_LAT_POINT, MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS, AVATAR_PATH} from './preset-const.js';
import {getRandomFractionalNumber, getRandomElementFromArray,getRandomWholeNumber, getRandomArray} from './get-random-entity.js';
import {getOrderedArray} from './get-ordered-entity.js';

// Генерировать итоговый объект с объектами
function getAdds() {
  const locationLat = getRandomFractionalNumber(MIN_LAT_POINT, MAX_LAT_POINT, COORDINATE_FRACTIONAL_DIGITS);
  const locationLng = getRandomFractionalNumber(MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS);

  return ({

    author: {
      avatar: getOrderedArray(1, AVATAR_PATH),
    },

    location: {
      lat: locationLat,
      lng: locationLng
    },

    offer: {
      title: getRandomElementFromArray(TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomWholeNumber(1, MAX_PRICE),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomWholeNumber(1, MAX_ROOMS_COUNT),
      guests: getRandomWholeNumber(1, MAX_GUESTS_NUMBER),
      checkin: getRandomElementFromArray(CHECKIN),
      checkout: getRandomElementFromArray(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    }

  });
}

export {getAdds};