import { Container, Name, Ball, Job, About } from './styles';
import { Project } from '@app/components';
import { Navbar, SectionTitle, SectionContainer } from '@uikit/components';

import imageUp from 'src/assets/images/images_up.png';
import beerLocation from 'src/assets/images/beer_location.png';
import cookieClicker from 'src/assets/images/cookie_clicker.png';
import moraesToledo from 'src/assets/images/moraes_toledo.png';
import box from 'src/assets/images/box.png';
const Home = () => {
  return (
    <Container>
      <Navbar />
      <SectionTitle>PROFILE</SectionTitle>
      <SectionContainer>
        <div>
          <Name>
            <b>renata</b> barreto <Ball />
          </Name>
        </div>
        <Job>Full Stack / Front End Engineer</Job>
        <About>
          A girl who loves coding and tries to learn new things everyday. Currently working as Full Stack developer and
          in love with React
          <span>JS</span>, React <span>Native</span> and Node<span>JS</span>.
        </About>
        <About>
          Contacts:
          <br />
          <a href="https://www.linkedin.com/in/renatabarreto/">Linkedin</a>
          <br />
          <span>renata.barreto2@gmail.com</span>
        </About>
      </SectionContainer>
      <SectionTitle id="projects">PROJECTS</SectionTitle>
      <Project
        title="BOX"
        type="app"
        description="The idea is to help motorcycle owners and mechanics maintain a track record of services rendered. In addition
          to save information the app will offer features like schedule, budget and tracking of the service progress."
        techs={['React Native', 'Node']}
        img={box}
        link={{ link: 'https://github.com/reehlittle/box_app', text: 'Git hub', type: 'github' }}
      />
      <Project
        title="Moraes Toledo App"
        type="app"
        description="App developed for Moraes Toledo Arq. and Engineering. The app is part of a project to help real estate
        agents to create and inform a customer the budget of a project. The agent fills a form with the quantity of
        rooms of the building and the application calculates 3 types of budgets (Invest, Live and Premium). This
        budgets represents Architecture projects that Moraes Toledo offers (http://moraestoledo.tk/)."
        privacyLink="http://moraestoledo.tk/privacy-policy"
        techs={['React ', 'Redux', 'Saga', 'React Native', 'Node']}
        img={moraesToledo}
        link={{
          link: 'https://play.google.com/store/apps/details?id=com.moraestoledoapp',
          text: 'Play Store',
          type: 'play_store',
        }}
      />
      <Project
        title="Cookie Clicker App"
        type="app"
        description="It is an incremental game (idle). The object of the game is to bake cookies by clicking on a giant cookie
        until you have enough cookies to buy upgrades. Cookie Clicker Parody is a parody of the original games
        (https://orteil.dashnet.org/cookieclicker/)."
        privacyLink="http://renatabarreto.tk/cookieClicker/term"
        techs={['Redux', 'Saga', 'React Native']}
        img={cookieClicker}
        link={{
          link: 'https://play.google.com/store/apps/details?id=com.coockieclicker',
          text: 'Play Store',
          type: 'play_store',
        }}
      />
      <Project
        title="Images"
        type="web"
        description="An API that facilitates the upload and control of images. With a graphical interface for creating users and
        managing files."
        techs={['React', 'Node']}
        img={imageUp}
        link={{
          link: 'http://www.imagesup.tk/',
          text: 'Site',
          type: 'web',
        }}
      />
      <Project
        title="Beer Location"
        type="app"
        description="An app to help you find the beer closest to you. The project started in 2015 with Phabiulla Nascimento and
        me. In 2019, we rebuilt with the modern versions of the SDK and Laravel. The application was developed on
        the Android JDK and the API was
        <b> Laravel - PHP"
        techs={['Laravel', 'Android']}
        img={beerLocation}
        link={{
          link: 'https://play.google.com/store/apps/details?id=beerlocation.com.br&hl=en_US',
          text: 'Play Store',
          type: 'play_store',
        }}
      />
    </Container>
  );
};

export default Home;
