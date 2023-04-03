import { SELECTORS } from './constants';

export const toggleLoaderVisibility = (show: boolean): void => {
  const loaderEl = document.querySelector(SELECTORS.loader) as HTMLElement;

  loaderEl.style.display = show ? '' : 'none';
};
