import styled from 'styled-components';

import { SectionContainer } from 'src/uikit/components';

export const Container = styled(SectionContainer)`
  row-gap: 8px;
`;

export const Title = styled.p`
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 2px;

  font-size: 24px;

  @media screen and (min-width: 650px) {
    font-size: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.li`
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 1.8;
  background: transparent;
  overflow-x: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
`;

export const TimeAndPlace = styled.div``;

export const Image = styled.img``;

export const ImageContainer = styled.div``;

export const Skill = styled.div``;
