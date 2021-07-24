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
  PrivacyPolicy,
} from "./styles";
import imageUp from "../../assets/images/images_up.png";
import beerLocation from "../../assets/images/beer_location.png";
import cookieClicker from "../../assets/images/cookie_clicker.png";
import moraesToledo from "../../assets/images/moraes_toledo.png";
import box from "../../assets/images/box.png";
import history from "../../services/history";

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
          <Job>Full Stack / Front End Developer</Job>
          <About>
            A girl who loves coding and tries to learn new things everyday.
            Currently working as Full Stack developer and in love with React
            <span>JS</span>, React <span>Native</span> and Node<span>JS</span>.
          </About>
          <About>
            Contacts:
            <br />
            <a href="https://www.linkedin.com/in/renatabarreto/">Linkedin</a>
            <br />
            <span>renata.barreto2@gmail.com</span>
          </About>
        </Content>
      </ProfileContainer>

      <Divisor id="projects">PROJECTS</Divisor>
      <AppContainer>
        <Content direction="row">
          <DescriptionContainer>
            <Title>Box</Title>
            <span>APP</span>
            <Description>
              The age is to help motorcycle owners and mechanics maintain a
              track record of services rendered. In addition to save information
              the app will offer features like schedule, budget and traking of
              the service progress.
            </Description>
            <ItemCheck>
              <MdCheck /> React Native
            </ItemCheck>
            <ItemCheck>
              <MdCheck /> Node Js
            </ItemCheck>

            <GitHubButton href={"https://github.com/reehlittle/box_app"}>
              <FaGithub /> Git hub
            </GitHubButton>
          </DescriptionContainer>
          <AppImage>
            <img src={box} alt="Box" />
          </AppImage>
        </Content>
      </AppContainer>
      <AppContainer>
        <Content direction="row">
          <DescriptionContainer>
            <Title>Moraes Toledo App</Title>
            <span>APP</span>
            <Description>
              App developed for Moraes Toledo Arq. and Engineering. The app is
              part of a project to help real estate agents to create and inform
              a customer the budget of a project. The agent fills a form with
              the quantity of rooms of the building and the application
              calculates 3 types of budgets (Invest, Live and Premium). This
              budgets represents Architecture projects that Moraes Toledo offers
              (http://moraestoledo.tk/).
            </Description>
            <PrivacyPolicy href="http://moraestoledo.tk/privacy-policy">
              Privacy Policy Link
            </PrivacyPolicy>
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
            <AndroidButton
              href={
                "https://play.google.com/store/apps/details?id=com.moraestoledoapp"
              }
            >
              <FaPlay /> Play Store
            </AndroidButton>
          </DescriptionContainer>
          <AppImage>
            <img src={moraesToledo} alt="Moraes Toledo" />
          </AppImage>
        </Content>
      </AppContainer>
      <AppContainer>
        <Content direction="row">
          <DescriptionContainer>
            <Title>Cookie Clicker App</Title>
            <span>APP</span>
            <Description>
              It is an incremental game (idle). The object of the game is to
              bake cookies by clicking on a giant cookie until you have enough
              cookies to buy upgrades. Cookie Clicker Parody is a parody of the
              original games (https://orteil.dashnet.org/cookieclicker/).
            </Description>
            <PrivacyPolicy onClick={() => history.push("/cookieClicker/term")}>
              Privacy Policy Link
            </PrivacyPolicy>
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
            <AndroidButton
              href={
                "https://play.google.com/store/apps/details?id=com.coockieclicker"
              }
            >
              <FaPlay /> Play Store
            </AndroidButton>
          </DescriptionContainer>
          <AppImage>
            <img src={cookieClicker} alt="Super Trunfo" />
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
