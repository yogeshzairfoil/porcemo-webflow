import type { Job } from 'src/types/global';

export const getUniquePropertyValues = (allJobs: Job[], propertyName: keyof Job): string[] => {
  // Get an array of all property values across all jobs
  const allValues = allJobs.flatMap((job) => job[propertyName] || []);

  // Get an array of unique property values
  const uniqueValues = [...new Set(allValues)] as string[];
  return uniqueValues;
};
