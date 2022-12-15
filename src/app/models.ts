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
