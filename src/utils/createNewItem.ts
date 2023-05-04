/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Job } from 'src/types/global';

import { SELECTORS } from './constants';
import { formatDate } from './formatDate';

export const createNewItem = (job: Job, templateElement: HTMLDivElement) => {
  // clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  // query the internal elements of the collection item
  const title = newItem.querySelector(SELECTORS.title) as HTMLElement;
  const contract = newItem.querySelector(SELECTORS.contract) as HTMLElement;
  const contractWrapper = newItem.querySelector(SELECTORS.contract) as HTMLElement;
  const location = newItem.querySelector(SELECTORS.location) as HTMLElement;
  const locationWrapper = newItem.querySelector(SELECTORS.locationWrapper) as HTMLElement;
  const metier = newItem.querySelector(SELECTORS.meteir) as HTMLElement;
  const date = newItem.querySelector(SELECTORS.date) as HTMLElement;
  const experience = newItem.querySelector(SELECTORS.experience) as HTMLElement;
  const experienceWrapper = newItem.querySelector(SELECTORS.experienceWrapper) as HTMLElement;

  const jobButton = newItem.querySelector(SELECTORS.jobButton) as HTMLAnchorElement;
  jobButton.href += `?id=${job.id}`;
  if (title) title.innerText = job.title!;
  if (contract && job.contractTypeNames) {
    contractWrapper.innerHTML = '';
    for (const contractTypeName of job.contractTypeNames) {
      const contractEl = contract.cloneNode(true) as HTMLElement;
      contractEl.innerText = contractTypeName;
      contractWrapper.append(contractEl);
    }
  }
  if (location && job.mobilities) {
    locationWrapper.innerHTML = '';
    for (const eachMobilities of job.mobilities) {
      const locationEl = location.cloneNode(true) as HTMLElement;
      locationEl.innerText = eachMobilities;
      locationWrapper.append(locationEl);
    }
  }
  if (metier) {
    metier.innerText = '';
    if (job.businessDomains) {
      for (const eachBusinessDomain of job.businessDomains!) {
        metier.innerText += `${eachBusinessDomain}`;
      }
    }
    if (job.businessTypes) {
      for (const eachBusinessType of job.businessTypes!) {
        metier.innerText += `${eachBusinessType}`;
      }
    }
  }
  if (date) {
    const formatedDate = formatDate(job.lastPublicationDate!);
    date.innerText = formatedDate;
  }

  if (experience && job.applicantExperienceLengths) {
    experienceWrapper.innerHTML = '';
    for (const eachExp of job.applicantExperienceLengths) {
      const experienceEl = experience.cloneNode(true) as HTMLElement;
      experienceEl.innerText = eachExp;
      experienceWrapper.append(experienceEl);
    }
  }
  return newItem;
};
