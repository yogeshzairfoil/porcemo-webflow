import type { CMSList } from 'src/types/CMSList';

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

      // Cloning the job template item
      const itemTemplateElement = item.element;
      console.log(itemTemplateElement);
      // hide speaker list and show loader

      // getting all speakers data

      // remove the placeholder items

      // create the items from the external data

      // Feed new items into the CMSList

      // show speaker list and hide loader
    },
  ]);
});
