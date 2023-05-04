import type { Job } from 'src/types/global';

import { apiURL } from './constants';

/**
 * Fetches individual job data from the netlify cloud function endpoint
 */
export const fetchAboutOffers = async (id: string): Promise<Job> => {
  try {
    const response = await fetch(`${apiURL}fetchVacancies?id=${id}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const jobData = await response.json();

    return jobData;
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON response from API');
    }
    throw new Error(`Failed to fetch speakers from API: ${error.message}`);
  }
};
