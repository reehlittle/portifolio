import React from 'react';

import { MdCheck } from 'react-icons/md';
import { FaGithub, FaPlay, FaGlobe } from 'react-icons/fa';

import { 
  Container, 
  Profile,
  Name,
  Ball,
  Job,
  About,
  Divisor,
  AppContainer, 
  DescriptionContainer, 
  Description, 
  Title, 
  ItemCheck,
  GitHubButton,
  AndroidButton,
  SiteButton, 
  AppImage,
  WebImage
} from './styles';
import superTrunfo from '../../assets/images/super_trunfo_1.png';
import imageUp from '../../assets/images/images_up.png';

export default function Initial() {
  return (
    <Container>
      <Divisor>PROFILE</Divisor>
      <Profile>
        <div>
          <Name><b>renata</b> barreto <Ball /></Name>
        </div>
        <Job>Full Stack / Junior Fron End Developer</Job>
        <About> Currently working as FullStack developer, 
          but in love with React<span>*</span> and Node.</About>
      </Profile>

      <Divisor>WORKS</Divisor>
      <AppContainer>
        <DescriptionContainer>
          <Title>Game Super Trunfo</Title>
          <span>APP</span>
          <Description>
            A Card Game based on SuperTrunfo Cards. 
            On the game the player battle against the computer to see who gets all the cards.
            The APP has been developed with <b>React Native</b>.
          </Description>
          <ItemCheck>
            <MdCheck /> Redux
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Saga
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Styled Components
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Navigation
          </ItemCheck>
          <GitHubButton href={'https://github.com/reehlittle/superTrunfo'}>
            <FaGithub /> GitHub
          </GitHubButton>
        </DescriptionContainer>
        <AppImage>
          <img src={superTrunfo} alt="Super Trunfo" />
        </AppImage>
      </AppContainer>
      <AppContainer>
        <WebImage>
          <img src={imageUp} alt="Images UP" />
        </WebImage>
        <DescriptionContainer>
          <Title>Images UP</Title>
          <span>API</span>
          <Description>
            <b>React Native</b> and <b>Node</b>.
          </Description>
          <ItemCheck>
            <MdCheck /> Jwt
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Express
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Sequelize
          </ItemCheck>
          <SiteButton href={'http://www.imagesup.tk/'}>
            <FaGlobe /> Site
          </SiteButton>
        </DescriptionContainer>
      </AppContainer>
      <AppContainer>
        <DescriptionContainer>
          <Title>Beer Location</Title>
          <span>APP</span>
          <Description>
            An APP to help locate the cloesest beer from you. 
            The project started in 2015 with me and Phabiulla Nascimento. 
            At 2019 we rebuilded with the modern versions of SDK and Laravel.
            The APP was developed in <b>Android JDK</b> and the API was in 
            <b>Laravel - PHP</b>.
          </Description>
          <ItemCheck>
            <MdCheck /> Geolocalization
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> API calls
          </ItemCheck>
          <ItemCheck>
            <MdCheck /> Colaborativo
          </ItemCheck>
          <AndroidButton href={'https://play.google.com/store/apps/details?id=beerlocation.com.br&hl=en_US'}>
            <FaPlay /> Play Store
          </AndroidButton>
        </DescriptionContainer>
        <AppImage>
          <img src={superTrunfo} alt="Beer Location" />
        </AppImage>
      </AppContainer>
    </Container>
  );
}
