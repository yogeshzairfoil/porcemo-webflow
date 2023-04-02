export const apiURL = 'https://porcemo-site.netlify.app/.netlify/functions/';

const prefix = 'data';

export const SELECTORS = {
  title: `[${prefix}="title"]`,
  contract: `[${prefix}="contract"]`,
  location: `[${prefix}="location"]`,
  meteir: `[${prefix}="metier"]`,
  date: `[${prefix}="date"]`,
};
