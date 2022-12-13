import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: rgba(187, 168, 189, 0.04);
`;

export const Content = styled.div<any>`
  @media screen and (min-width: 650px) {
    margin: 50px;
    transition: ease all 0.5s;
    ${({ direction }) =>
      direction === 'row' &&
      css`
        display: flex;
      `}
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 34px;

  @media screen and (min-width: 650px) {
    justify-content: flex-start;
    font-size: 50px;
    transition: ease all 0.5s;
  }
`;

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: #fb4dae;
`;

export const Job = styled.div`
  font-size: 20px;
  color: #fb4dae;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 650px) {
    font-size: 24px;
    text-align: start;
    transition: ease all 0.5s;
  }
`;

export const About = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.8;
  background: transparent;
  overflow-x: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  margin-top: 20px;

  span {
    color: #fb4dae;
  }

  a {
    cursor: pointer;
    color: #fb4dae;

    text-decoration: none;
    &:visited {
      color: #fb4dae;
    }

    &:hover {
      color: white;
    }
  }
`;

export const Divisor = styled.div`
  margin: 50px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 3px solid #fb4dae;

  @media screen and (min-width: 650px) {
    font-size: 18px;
    transition: ease all 0.5s;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  background: rgba(187, 168, 189, 0.04);
  border-radius: 4px;
  margin-bottom: 50px;

  img {
    display: none;
  }

  @media screen and (min-width: 650px) {
    margin: 50px;
    padding: 20px 0;
    transition: ease all 0.5s;

    img {
      display: flex;
      transition: ease all 0.5s;
    }
  }
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  color: #fff;

  span {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
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
  margin: auto;
  -webkit-font-smoothing: subpixel-antialiased;
  margin-bottom: 20px;

  @media screen and (min-width: 650px) {
    margin: 20px 0;
  }
`;

export const ItemCheck = styled.div`
  margin-bottom: 5px;
`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  margin: 20px;
  background: #fb4dae;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  :hover {
    background: #f9279c;
  }

  svg {
    margin-right: 5px;
  }
`;

export const AndroidButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  margin: 20px;
  background: #000;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  :hover {
    background: #101010;
  }

  svg {
    margin-right: 5px;
  }
`;

export const SiteButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  margin: 20px;
  background: #4469b6;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  :hover {
    background: #325db7;
  }

  svg {
    margin-right: 5px;
  }
`;

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
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    margin-left: -40px;
  }
`;

export const PrivacyPolicy = styled.a`
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;

  text-decoration: none;
  &:visited {
    color: white;
  }

  &:hover {
    color: #fb4dae;
  }
`;
