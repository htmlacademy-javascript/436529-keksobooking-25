import {form} from '../dom-nodes.js';

// Инициализируем pristine
export const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});
