import { LinkProps } from '@uikit/models';
export interface ProjectProps {
  title: string;
  description: string;
  type: 'app' | 'web' | 'app & web';
  techs?: string[];
  privacyLink?: string;
  img: string;
  link?: LinkProps;
}

export interface EmploymentProps {
  title: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  descriptions?: string[];
  img?: string[];
  link?: LinkProps;
  skills?: string[];
}

export interface LocationPinProps {
  location: string;
}
