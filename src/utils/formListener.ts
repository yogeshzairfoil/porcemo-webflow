import axios from 'axios';

export const formListener = async (event: Event, emailForm: HTMLFormElement, vacancyId: string) => {
  event.preventDefault(); // prevent the default form submission behavior

  const formData = new FormData(emailForm);

  const body = new FormData();

  formData.forEach(function (value, key) {
    if (key === 'cvUpload') {
      const fileInput = document.querySelector<HTMLInputElement>('input[name="cvUpload"]');
      const file = fileInput?.files?.[0];

      if (file) {
        body.append(key, file);
      }
    } else {
      body.append(key, value.toString());
    }
  });
  body.append('vacancyId', vacancyId);

  // Send the FormData object to the Netlify function
  try {
    const { data } = await axios.post(
      'https://creative-pastelito-74fbff.netlify.app/.netlify/functions/jobForm',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
