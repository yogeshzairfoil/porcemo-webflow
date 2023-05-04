/**
 * Adds and removes the attribute data-hidden=true from element
 * @param element the target element
 * @param hidden boolean to hide element
 */
export const hideElement = (element: HTMLElement, hidden: boolean): void => {
  if (hidden) {
    element.setAttribute('data-hidden', 'true');
  } else {
    element.removeAttribute('data-hidden');
  }
};
