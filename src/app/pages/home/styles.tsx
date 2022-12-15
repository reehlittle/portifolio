import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 48px;
  padding-bottom: 48px;

  margin-left: auto;
  margin-right: auto;
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
