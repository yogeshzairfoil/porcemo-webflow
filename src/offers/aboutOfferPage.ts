import { jobPageUrl } from '$utils/constants';
import { fetchAboutOffers } from '$utils/fetchAboutOffer';
import { getURLParams } from '$utils/getURLParams';
import { populateAboutOffer } from '$utils/populateAboutOffer';

window.Webflow ||= [];
window.fsAttributes = window.fsAttributes || [];
window.Webflow.push(async () => {
  // getting the id from query params
  const jobId = getURLParams('id');
  // if no id, then send user back to agenda page
  if (!jobId) return window.location.replace(jobPageUrl);

  const aboutJobData = await fetchAboutOffers(jobId);

  populateAboutOffer(aboutJobData);
});
