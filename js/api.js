import {FORM_ERROR_MESSAGE} from './const.js';
import {showDataError} from './show-error-or-success.js';

export const getData = (url, onSuccess, onError) => {
  fetch(url,

    {
      method: 'GET',
      credentials: 'same-origin',
    },

  )
    .then((response) => response.json())

    .then((data) =>  {

      if(data) {
        onSuccess(data);
      }

    })

    .catch((error) => {
      showDataError();
      onError(error);
    });

};

export const sendData = (url, onSuccess, onError, body) => {
  fetch(url,

    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {

      if (response.ok) {

        onSuccess();

      } else {

        onError(FORM_ERROR_MESSAGE);

      }
    })

    .catch(() => {

      onError(FORM_ERROR_MESSAGE);
    });
};
