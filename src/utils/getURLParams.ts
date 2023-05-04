/**
 * Gets the query value for the passed query from the URL
 * @param query
 */
export const getURLParams = (query: string) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get(query);
};
