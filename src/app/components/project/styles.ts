import styled from 'styled-components';

import { SectionContainer } from 'src/uikit/components';

export const Container = styled(SectionContainer)`
  flex-direction: row;
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  color: #fff;

  span {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }

  @media screen and (min-width: 650px) {
    width: 50%;
    span {
      font-size: 25px;
    }
  }
`;

export const Title = styled.p`
  font-weight: 100;
  line-height: 1.4;
  letter-spacing: 2px;

  font-size: 24px;

  @media screen and (min-width: 650px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.8;
  background: transparent;
  overflow-x: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
`;

export const ItemCheck = styled.div``;

export const AppImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 60%;
    height: fit-content;
  }
`;

export const WebImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 90%;
  }
`;

export const SubLink = styled.a`
  cursor: pointer;
  font-size: 16px;

  text-decoration: none;
  &:visited {
    color: white;
  }

  &:hover {
    color: #fb4dae;
  }
`;
