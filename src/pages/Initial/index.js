import React from "react";

import { MdCheck } from "react-icons/md";
import { FaGithub, FaPlay, FaGlobe } from "react-icons/fa";

import {
  Container,
  ProfileContainer,
  Content,
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
  WebImage,
} from "./styles";
import superTrunfo from "../../assets/images/super_trunfo.png";
import imageUp from "../../assets/images/images_up.png";
import beerLocation from "../../assets/images/beer_location.png";

export default function Initial() {
  return (
    <Container>
      <Divisor>PROFILE</Divisor>
      <ProfileContainer>
        <Content>
          <div>
            <Name>
              <b>renata</b> barreto <Ball />
            </Name>
          </div>
          <Job>Full Stack / Junior Front End Developer</Job>
          <About>
            {" "}
            A girl who loves coding and tries to learn new things everyday.
            Currently working as Full Stack developer, but in love with React
            <span>JS</span>, React <span>Native</span> and Node<span>JS</span>.
          </About>
        </Content>
      </ProfileContainer>

      <Divisor>PROJECTS</Divisor>
      <AppContainer>
        <Content direction="row">
          <DescriptionContainer>
            <Title>Game Super Trunfo</Title>
            <span>APP</span>
            <Description>
              A Card Game based on SuperTrunfo Cards. On the game the player
              battles against the computer to see who gets all the cards. The
              APP has been developed with <b>React Native</b>.
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
            <GitHubButton href={"https://github.com/reehlittle/superTrunfo"}>
              <FaGithub /> GitHub
            </GitHubButton>
          </DescriptionContainer>
          <AppImage>
            <img src={superTrunfo} alt="Super Trunfo" />
          </AppImage>
        </Content>
      </AppContainer>
      <AppContainer>
        <Content direction="row">
          <WebImage>
            <img src={imageUp} alt="Images UP" />
          </WebImage>
          <DescriptionContainer>
            <Title>Images UP</Title>
            <span>API</span>
            <Description>
              An API that facilitates the upload and control of images. With a
              graphical interface for creating users and managing files. Created
              with <b>React</b> and <b>Node</b>.
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
            <SiteButton href={"http://www.imagesup.tk/"}>
              <FaGlobe /> Site
            </SiteButton>
          </DescriptionContainer>
        </Content>
      </AppContainer>
      <AppContainer>
        <Content direction="row">
          <DescriptionContainer>
            <Title>Beer Location</Title>
            <span>APP</span>
            <Description>
              An app to help you find the beer closest to you. The project
              started in 2015 with Phabiulla Nascimento and me. In 2019, we
              rebuilt with the modern versions of the SDK and Laravel. The
              application was developed on the <b>Android JDK</b> and the API
              was
              <b> Laravel - PHP</b>.
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
            <AndroidButton
              href={
                "https://play.google.com/store/apps/details?id=beerlocation.com.br&hl=en_US"
              }
            >
              <FaPlay /> Play Store
            </AndroidButton>
          </DescriptionContainer>
          <AppImage>
            <img src={beerLocation} alt="Beer Location" />
          </AppImage>
        </Content>
      </AppContainer>
    </Container>
  );
}
