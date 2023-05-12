import type { FormBody } from 'src/types/global';

export const formListener = (event: Event, emailForm: HTMLFormElement) => {
  event.preventDefault(); // prevent the default form submission behavior

  const formData = new FormData(emailForm);

  const body: FormBody = {};

  formData.forEach(function (value, key) {
    if (key === 'cvUpload') {
      const fileInput = document.querySelector<HTMLInputElement>('input[name="cvUpload"]');
      const file = fileInput?.files?.[0];

      if (file) {
        body[key] = file;
      }
    } else {
      body[key] = value.toString();
    }
  });

  fetch('/.netlify/functions/my-function', {
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then<Response>((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
