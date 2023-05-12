import type { CMSFilters } from './CMSFilters';
import type { CMSList } from './CMSList';

/**
 * Window object.
 */
declare global {
  interface Window {
    fsAttributes: FsAttributes;
    FsAttributes: FsAttributes;
    URLSearchParams: URLSearchParams;
  }
}

type FsAttributesCallback =
  | [
      'cmsload' | 'cmsnest' | 'cmscombine' | 'cmsprevnext' | 'cmsslider' | 'cmssort' | 'cmstabs',
      (value: CMSList[]) => void
    ]
  | ['cmsfilter', (value: CMSFilters[]) => void];

type FsAttributesBase = {
  push: (...args: FsAttributesCallback[]) => void;

  cms: {
    coreVersion?: string;
    listElements?: HTMLDivElement[];
    listInstances?: CMSList[];
    filtersInstances?: CMSFilters[];
  };
};

interface FsAttributeInit<T = unknown> {
  version?: string;
  init?: () => T | Promise<T>;
  loading?: Promise<T>;
  resolve?: (value: T) => void;
}

type FsAttributesInit = {
  [key: string]: FsAttributeInit;
};

type FsAttributes = FsAttributesBase & FsAttributesInit;

type FormBody = {
  [key: string]: string | Blob;
};

export interface Job {
  id?: number;
  title?: string;
  mission?: string;
  business?: string;
  profile?: string;
  reference?: string;
  lastPublicationDate?: string;
  hasApplied?: boolean;
  postalCode?: string | null;
  region?: string | null;
  country?: string;
  availabilityDate?: string | null;
  shortDescription?: string | null;
  commercialRecruiterLastName?: string;
  commercialRecruiterFirstName?: string;
  commercialRecruiterPhone?: string | null;
  commercialRecruiterEmail?: string;
  commercialRecruiterId?: number;
  hrRecruiterLastName?: string;
  hrRecruiterFirstName?: string;
  hrRecruiterPhone?: string | null;
  hrRecruiterEmail?: string;
  hrRecruiterId?: number;
  agencyId?: number;
  contractTypeNames?: string[];
  urlFriendly?: string;
  applicantExperienceLengths?: string[];
  businessDomains?: string[] | null;
  businessTypes?: string[] | null;
  educationLevels?: string[];
  numberOfJobs?: number;
  mobilities?: string[];
  contractComment?: string | null;
  tags?: string[] | null;
  countryCode?: string;
  poleEmploiId?: string | null;
  hrRecruiterProfileUrl?: string | null;
  commercialRecruiterProfileUrl?: string | null;
}
