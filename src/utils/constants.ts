export const apiURL = 'https://porcemo-site.netlify.app/.netlify/functions/';
export const jobPageUrl =
  'https://procemo-dev-87a66cfc76c7abbbfc66a9247e7.webflow.io/offres-demplois';
const prefix = 'data';
const offerPrefix = 'data-offer';
export const SELECTORS = {
  title: `[${prefix}="title"]`,
  contract: `[${prefix}="contract"]`,
  contractWrapper: `[${prefix}="contract-wrapper"]`,
  location: `[${prefix}="location"]`,
  locationWrapper: `[${prefix}="location-wrapper"]`,
  meteir: `[${prefix}="metier"]`,
  date: `[${prefix}="date"]`,
  experience: `[${prefix}="exp"]`,
  experienceWrapper: `[${prefix}="exp-wrapper"]`,
  jobButton: `[${prefix}="button"]`,
  loader: `[${prefix}="loader"]`,

  //filters

  locationFilter: `[${prefix}="location-filter"]`,
  contractFilter: `[${prefix}="contract-filter"]`,
  experienceFilter: `[${prefix}="exp-filter"]`,

  //data-offer

  offerTitle: `[${offerPrefix}="title"]`,
  offerContract: `[${offerPrefix}="contract"]`,
  offerRegion: `[${offerPrefix}="region"]`,
  offerMetier: `[${offerPrefix}="metier"]`,
  offerDate: `[${offerPrefix}="date"]`,
  offerMission: `[${offerPrefix}="mission"]`,
  offerMissionWrapper: `[${offerPrefix}="mission-wrapper"]`,
  offerBusiness: `[${offerPrefix}="business"]`,
  offerBusinessWrapper: `[${offerPrefix}="business-wrapper"]`,
  offerProfile: `[${offerPrefix}="profile"]`,
  offerProfileWrapper: `[${offerPrefix}="profile-wrapper"]`,
  offerShortDescription: `[${offerPrefix}="short-descp"]`,
  offerShortDescriptionWrapper: `[${offerPrefix}="short-descp-wrapper"]`,
};
