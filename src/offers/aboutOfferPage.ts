import { jobPageUrl, SELECTORS } from '$utils/constants';
import { fetchAboutOffers } from '$utils/fetchAboutOffer';
import { formListener } from '$utils/formListener';
import { getURLParams } from '$utils/getURLParams';
import { hideElement } from '$utils/hideElement';
import { populateAboutOffer } from '$utils/populateAboutOffer';

window.Webflow ||= [];
window.fsAttributes = window.fsAttributes || [];
window.Webflow.push(async () => {
  console.log('heloo');
  const loader = document.querySelector(SELECTORS.loader) as HTMLElement;
  // getting the id from query params
  const jobId = getURLParams('id');
  // if no id, then send user back to agenda page
  if (!jobId) return window.location.replace(jobPageUrl);

  const aboutJobData = await fetchAboutOffers(jobId);

  populateAboutOffer(aboutJobData);

  // adding Event listener to offer form
  const formEl = document.querySelector(SELECTORS.formEl) as HTMLFormElement;
  formEl.addEventListener('submit', (event: Event) => formListener(event, formEl));
  console.log(formEl);
  hideElement(loader, true);
});
