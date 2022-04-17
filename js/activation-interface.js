import {form, mapFilter} from './dom-nodes.js';

const formChildren = form.querySelectorAll('fieldset');
const filterChildrenSelect = mapFilter.querySelectorAll('select');
const filterChildrenFieldset = mapFilter.querySelectorAll('fieldset');

const allFormAndFilterChildren = [...formChildren, ...filterChildrenSelect, ...filterChildrenFieldset];

// Инактивация элементов
export const disableInterface = () => {

  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

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
