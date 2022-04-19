import './libs/noUiSlider-init.js';
import {pristine} from './libs/pristin-init.js';
import {range, capacityField, roomsField, formInputs, priceField, titleField, typeField} from './dom-nodes.js';
import {ROOMS_GUESTS_ERROR_MESSAGE} from './const.js';
import {TYPES_MIN_PRICE} from './form.js';

export const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

export const guestsOption = {
  '1': ['1', '2', '3'],
  '2': ['2', '3'],
  '3': ['3'],
  '0': ['100']
};

// Валидируем число комнат и гостей
const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const validateGuests = () => guestsOption[capacityField.value].includes(roomsField.value);

pristine.addValidator(roomsField, validateRooms, ROOMS_GUESTS_ERROR_MESSAGE);
pristine.addValidator(capacityField, validateGuests, ROOMS_GUESTS_ERROR_MESSAGE);

// Валидируем поле с ценой на минимум
const validateMinPrice = () => priceField.value >= TYPES_MIN_PRICE[typeField.value];
pristine.addValidator(priceField, validateMinPrice, 'Слишком маленькое число');

// Валидируем поле с названием на максимум знаков
const validateMaxTitleMessage = () => titleField.value.length <= 99;
pristine.addValidator(titleField, validateMaxTitleMessage, 'Не больше 100 символов');

// Привязываем значения ползунка к инпуту и убираем сообщение об ошибке, когда оно не нужно
range.noUiSlider.on('update', (values, handle) => {
  priceField.value = values[handle];

  if (isFinite(priceField.value) ) {
    pristine.reset();
  }
});

// Функция для удаления ошибок пристины
export const onInputBlur = (evt) => {

  const errorMessage = evt.target.nextElementSibling;

  if (errorMessage) {

    pristine.reset();

  }
};

// Убираем сообщение об ошибке при отсутствии фокуса
formInputs.forEach((input) => {
  input.addEventListener('blur', onInputBlur);
});
