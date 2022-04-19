import {disableInterface, enableInterface, disableFilter} from './activation-interface.js';
import {mapLoaded, mainPin} from './libs/leaflet-init.js';
import './validate-form.js';
import {interactWithForm, onImageAreaLoad, fileAvatarChooser, avatarPreview, filePhotoChooser, photoPreview} from './form.js';
import {getData} from './api.js';
import {onMainPinMoveend} from './map.js';
import {GETTING_DATA_URL} from './const.js';
import {fillMapFilteredAdds} from './filters.js';

// Деактивировали интерфейс
disableInterface();

// Инициализировали карту
if (mapLoaded) {
  // Включили интерфейс
  enableInterface();
  // Получили данные и разместили метки на карте с возможностью фильтрации (если данные пришли)
  getData(GETTING_DATA_URL, fillMapFilteredAdds, disableFilter);
}

// Взаимодействуем с главным пином
mainPin.on('moveend', onMainPinMoveend);

//Делаем просмотр превью изображений
onImageAreaLoad(fileAvatarChooser, avatarPreview);
onImageAreaLoad(filePhotoChooser, photoPreview);

// Отслеживание отправки данных
interactWithForm();
