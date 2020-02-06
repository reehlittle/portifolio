import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: #fff;
  background: rgba(187, 168, 189, 0.04);
`;

export const Profile = styled.div`
  margin: 50px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 50px;
`;

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: #FB4DAE;
`;

export const Job = styled.div`
  font-size: 24px;
  color: #FB4DAE;
  font-weight: 400;
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
    color: #FB4DAE;
  }
`;

export const Divisor = styled.div`
  margin: 50px 0;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 3px solid #FB4DAE;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 120px;
  background: rgba(187, 168, 189, 0.04);
  border-radius: 4px;
  border-bottom-right-radius: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  margin: 10px 0 10px 73px;
  color: #fff;

  span {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-weight: 100;
  line-height: 1.4;
  letter-spacing: 2px;
  font-size: 40px;
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
  background: #FB4DAE;
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
  background: #4469B6;
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
  width: 30%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 250px;
    margin-top: -70px;
    margin-right: -40px;
  }
`;

export const WebImage = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  img {
    height: 200px;
    margin-left: -40px;
  }
`;