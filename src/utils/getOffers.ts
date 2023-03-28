import type { Job } from 'src/types/global';

import { apiURL } from './constants';

/**
 * Fetches jobs data from the netlify cloud function endpoint
 */
export const fetchOffers = async (): Promise<Job[]> => {
  try {
    const response = await fetch(`${apiURL}fetchVacancies`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const speakers = await response.json();

    return speakers.data;
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON response from API');
    }
    throw new Error(`Failed to fetch speakers from API: ${error.message}`);
  }
};
