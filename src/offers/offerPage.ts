import type { CMSFilters } from 'src/types/CMSFilters';
import type { CMSList } from 'src/types/CMSList';

import { SELECTORS } from '$utils/constants';
import { createNewFilter } from '$utils/createNewFilter';
import { createNewItem } from '$utils/createNewItem';
import { fetchOffers } from '$utils/fetchOffers';
import { getUniquePropertyValues } from '$utils/getUniquePropertyValues';

window.Webflow ||= [];
window.fsAttributes = window.fsAttributes || [];

window.Webflow.push(async () => {
  // Pushing custom code into FS cms attribute
  window.fsAttributes.push([
    'cmsload',
    async (listInstances: CMSList[]) => {
      // Fetching the CMS List instances
      const jobListInstance = listInstances[3];

      const locationFilterListInstance = listInstances[0];
      const contractFilterListInstance = listInstances[1];
      const experienceFilterListInstance = listInstances[2];

      //Fetching the first items of each list instances to use as templates
      const [item] = jobListInstance.items;

      const [locationFilterItem] = locationFilterListInstance.items;
      const [contractFilterItem] = contractFilterListInstance.items;
      const [experienceFilterItem] = experienceFilterListInstance.items;

      // Cloning the template items
      const itemTemplateElement = item.element;

      const locationFilterElement = locationFilterItem.element;
      const contractFilterElement = contractFilterItem.element;
      const experienceFilterElement = experienceFilterItem.element;
      // hide speaker list and show loader

      // getting all job data
      const allJobs = await fetchOffers();

      // array of all location values from allJobs
      const allLocations = getUniquePropertyValues(allJobs, 'mobilities');

      // array of all contract values from allJobs
      const allContractTypes = getUniquePropertyValues(allJobs, 'contractTypeNames');

      // array of all experience values from allJobs
      const allExperiences = getUniquePropertyValues(allJobs, 'applicantExperienceLengths');

      // remove the placeholder items
      jobListInstance.clearItems();

      // removing filter placeholders
      locationFilterListInstance.clearItems();
      contractFilterListInstance.clearItems();
      experienceFilterListInstance.clearItems();
      // create the items from the external data
      const newItems = allJobs.map((eachJob) => createNewItem(eachJob, itemTemplateElement));

      // creating new filters
      const newLocationItems = allLocations.map((eachLocation) =>
        createNewFilter(locationFilterElement, SELECTORS.locationFilter, eachLocation)
      );

      const newContractItems = allContractTypes.map((eachContractType) =>
        createNewFilter(contractFilterElement, SELECTORS.contractFilter, eachContractType)
      );

      const newExperienceItems = allExperiences.map((eachExperience) =>
        createNewFilter(experienceFilterElement, SELECTORS.experienceFilter, eachExperience)
      );

      // Feed new items into the CMSList
      await jobListInstance.addItems(newItems);

      // Feeding items in filters
      await locationFilterListInstance.addItems(newLocationItems);
      await contractFilterListInstance.addItems(newContractItems);
      await experienceFilterListInstance.addItems(newExperienceItems);

      window.fsAttributes.push([
        'cmsfilter',
        async (filtersInstances: CMSFilters[]) => {
          const [filtersInstance] = filtersInstances;

          // resseting filters instance
          filtersInstance.storeFiltersData();
        },
      ]);
      //  hide loader
      //toggleLoaderVisibility(false);
    },
  ]);
});
