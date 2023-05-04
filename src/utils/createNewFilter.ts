import { cloneNode } from '@finsweet/ts-utils';

export const createNewFilter = (
  filterElement: HTMLElement,
  elementSelector: string,
  filterData: string
) => {
  const filterTemplateEl = cloneNode(filterElement);

  const filterText = filterTemplateEl.querySelector(elementSelector) as HTMLElement;

  if (filterText) {
    filterText.innerText = filterData;
  }

  return filterTemplateEl;
};
