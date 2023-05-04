import type { Job } from 'src/types/global';

import { SELECTORS } from './constants';
import { formatDate } from './formatDate';
import { hideElement } from './hideElement';

export const populateAboutOffer = (jobData: Job) => {
  const offerTitle = document.querySelector(SELECTORS.offerTitle) as HTMLElement;
  const offerContract = document.querySelector(SELECTORS.offerContract) as HTMLElement;
  const offerRegion = document.querySelector(SELECTORS.offerRegion) as HTMLElement;
  const offerMetier = document.querySelector(SELECTORS.offerMetier) as HTMLElement;
  const offerDate = document.querySelector(SELECTORS.offerDate) as HTMLElement;
  const offerMission = document.querySelector(SELECTORS.offerMission) as HTMLElement;
  const offerMissionWrapper = document.querySelector(SELECTORS.offerBusinessWrapper) as HTMLElement;
  const offerBusiness = document.querySelector(SELECTORS.offerBusiness) as HTMLElement;
  const offerBusinessWrapper = document.querySelector(
    SELECTORS.offerBusinessWrapper
  ) as HTMLElement;
  const offerProfile = document.querySelector(SELECTORS.offerProfile) as HTMLElement;
  const offerProfileWrapper = document.querySelector(SELECTORS.offerProfileWrapper) as HTMLElement;
  const offerShortDescription = document.querySelector(
    SELECTORS.offerShortDescription
  ) as HTMLElement;
  const offerShortDescriptionWrapper = document.querySelector(
    SELECTORS.offerShortDescriptionWrapper
  ) as HTMLElement;

  if (offerTitle) offerTitle.innerText = jobData.title!;

  if (offerContract && jobData.contractTypeNames) {
    offerContract.innerText = '';
    for (const eachContract of jobData.contractTypeNames!) {
      offerContract.innerText += ` ${eachContract}`;
    }
  }

  if (offerRegion) offerRegion.innerText = jobData.region!;

  if (offerMetier) {
    offerMetier.innerText = '';
    if (jobData.businessDomains) {
      for (const eachBusinessDomain of jobData.businessDomains) {
        offerMetier.innerText += `${eachBusinessDomain}`;
      }
    }
    if (jobData.businessTypes) {
      for (const eachBusinessType of jobData.businessTypes) {
        offerMetier.innerText += `${eachBusinessType}`;
      }
    }
  }

  if (offerDate) {
    const formatedDate = formatDate(jobData.lastPublicationDate!);
    offerDate.innerText = formatedDate;
  }

  if (offerMission && jobData.mission) {
    offerMission.innerHTML = jobData.mission;
  } else {
    hideElement(offerMissionWrapper, true);
  }

  if (offerBusiness && jobData.business) {
    offerBusiness.innerHTML = jobData.business;
  } else {
    hideElement(offerBusinessWrapper, true);
  }
  if (offerProfile && jobData.profile) {
    offerProfile.innerHTML = jobData.profile;
  } else {
    hideElement(offerProfileWrapper, true);
  }

  if (offerShortDescription && jobData.shortDescription) {
    offerShortDescription.innerHTML = jobData.shortDescription;
  } else {
    hideElement(offerShortDescriptionWrapper, true);
  }
};
