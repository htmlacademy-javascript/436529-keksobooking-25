import {form} from './dom-nodes.js';
import {mapFilter} from './filters.js';

const formChildren = form.querySelectorAll('fieldset');
const filterChildrenSelect = mapFilter.querySelectorAll('select');
const filterChildrenFieldset = mapFilter.querySelectorAll('fieldset');

const allFormAndFilterChildren = [...formChildren, ...filterChildrenSelect, ...filterChildrenFieldset];

export const disableFilter = () => {
  mapFilter.classList.add('map__filters--disabled');
};

export const disableForm = () => {
  form.classList.add('ad-form--disabled');
};


// Инактивация элементов
export const disableInterface = () => {

  disableForm();
  disableFilter();

  allFormAndFilterChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
};

// Активация элементов
export const enableInterface = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  allFormAndFilterChildren.forEach((child) => {
    child.removeAttribute('disabled', 'disabled');
  });
};
