/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Job } from 'src/types/global';

import { SELECTORS } from './constants';

export const createNewItem = (job: Job, templateElement: HTMLDivElement) => {
  // clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  // query the internal elements of the collection item
  const title = newItem.querySelector(SELECTORS.title) as HTMLElement;
  const contract = newItem.querySelector(SELECTORS.contract) as HTMLElement;
  const location = newItem.querySelector(SELECTORS.location) as HTMLElement;
  const metier = newItem.querySelector(SELECTORS.meteir) as HTMLElement;
  const date = newItem.querySelector(SELECTORS.date) as HTMLElement;
  console.log(title, contract, location, metier, date);
  if (title) title.innerText = job.title!;
  if (contract && job.contractTypeNames) {
    for (const contractTypeName of job.contractTypeNames) {
      contract.innerText += contractTypeName;
    }
  }
  if (location && job.mobilities) {
    for (const eachMobilities of job.mobilities) {
      location.innerText += eachMobilities;
    }
  }
  if (metier) {
    if (job.businessDomains) {
      for (const eachBusinessDomain of job.businessDomains!) {
        metier.innerText += eachBusinessDomain;
      }
    }
    if (job.businessTypes) {
      for (const eachBusinessType of job.businessTypes!) {
        metier.innerText += eachBusinessType;
      }
    }
  }
  if (date) {
    date.innerText = job.lastPublicationDate!;
  }
  return newItem;
};
