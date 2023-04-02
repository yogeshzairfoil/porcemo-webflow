import type { CMSList } from 'src/types/CMSList';

import { createNewItem } from '$utils/createNewItem';
import { fetchOffers } from '$utils/fetchOffers';

window.Webflow ||= [];
window.fsAttributes = window.fsAttributes || [];

window.Webflow.push(async () => {
  // Pushing custom code into FS cms attribute
  window.fsAttributes.push([
    'cmsload',
    async (listInstances: CMSList[]) => {
      // Fetching the speakers CMS List instance
      const [listInstance] = listInstances;
      const [item] = listInstance.items;
      console.log(listInstance, 'LIST HERE');
      // Cloning the job template item
      const itemTemplateElement = item.element;
      console.log(itemTemplateElement, 'TEMPLATE');
      // hide speaker list and show loader

      // getting all job data
      const allJobs = await fetchOffers();
      console.log(allJobs);
      // remove the placeholder items
      listInstance.clearItems();
      // create the items from the external data
      const newItems = allJobs.map((eachJob) => createNewItem(eachJob, itemTemplateElement));
      // Feed new items into the CMSList
      await listInstance.addItems(newItems);
      // show speaker list and hide loader
    },
  ]);
});
