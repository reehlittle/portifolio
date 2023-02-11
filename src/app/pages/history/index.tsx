import { Container, Job, About } from './styles';
import { Employment } from '@app/components';
import { Navbar, SectionTitle, SectionContainer } from '@uikit/components';

const History = () => {
  return (
    <Container>
      <Navbar />
      <SectionTitle>HISTORY</SectionTitle>
      <SectionContainer>
        <Job>Software Engineer</Job>
        <About>
          I`m a computer engineer who loves to find solutions to problems, whenever I can I have fun assembling and
          disassembling things. For 6 years I worked as a technical support person responsible for the IT
          infrastructure. I developed skills in Windows Server, Linux Server and got certifications like Itil foundation
          and Windows Fundamentals. I currently work as software engineer. My skills include web development (HTML, CSS,
          JS, JQuery, PHP, React and Laravel), mobile (React Native), APIs (NodeJs and Laravel), open source databases
          (PostgreSQL, MySQL) and projects using AGILE frameworks and integrated tests.
        </About>
        <About>
          Contacts:
          <br />
          <span>renata.barreto2@gmail.com</span>
        </About>
      </SectionContainer>
      <SectionTitle id="projects">PROJECTS</SectionTitle>
      <Employment
        companyName="Nook"
        title="Lead Frontend Engineer"
        startDate="Feb 2021"
        endDate="Present"
        location="Lisbon, Portugal"
        descriptions={[
          'Developed modular, component-based solution for Nook web application (ReactJs, Redux, Styled Components and API integrations)',
          'Implemented components based on designs from Figma (CSS and Styled Components).',
          'Worked closely with product management, design, and other engineering teams to understand needs and improve the customer experience.',
          'Improved engineering standards, tooling, and processes.',
          'Developed Frontend unit test (JestJs).',
        ]}
        link={{ link: 'https://nook.io', text: 'Nook.io', type: 'web' }}
      />
      <Employment
        companyName="Prime IT"
        title="Full Stack Developer"
        startDate="May 2019 "
        endDate="Feb 2021"
        location="Lisbon, Portugal"
        descriptions={[
          'Developed modular, component-based solution for Nook web application (ReactJs, Redux, Styled Components and API integrations)',
          'Implemented components based on designs from Figma (CSS and Styled Components).',
          'Worked closely with product management, design, and other engineering teams to understand needs and improve the customer experience.',
          'Improved engineering standards, tooling, and processes.',
          'Developed Frontend unit test (JestJs).',
        ]}
        link={{ link: 'https://www.primeit.pt/', text: 'Prime IT', type: 'web' }}
      />
      <Employment
        companyName="Central IT"
        title="Senior System Administrator"
        startDate="Jan 2018"
        endDate="Dec 2018"
        location="Goiás, Brazil"
        descriptions={[
          'Moving from Windows 2012 to Windows 2016 Systems, creating new backup processes and procedures for maintaining and controlling a corporate network',
          'Migration of File Servers, AD, DHCP, Printers, and Hyper-V Virtual Machine Server Creation',
          'Change Linux systems installed on an XenCitrix to Hyper-v Cluster. Systems like Postgres database, and web application server with Apache',
          'Definition of new backup procedures using bacula system. Backups of Postgres virtual machines, files, and databases',
        ]}
        link={{ link: 'https://centralit.com.br', text: 'Central IT', type: 'web' }}
      />
      <Employment
        companyName="Lanlink Informática"
        title="System Administrator"
        startDate="Jan 2013"
        endDate="Jan 2018"
        location="Goiás, Brazil"
        descriptions={[
          'Windows Server 2012 and Linux systems administration',
          'Maintenance and control of File Servers, DHCP, printers, AD and applications',
          'Maintenance and control of Postgres database, pfSense firewall, and Apache web application server',
          'Equipment configuration',
          'Switches (3com, HP and cisco) configuring vlans and link aggregations.',
          'Servers (Dell Poweredge) configuring RAIDS and OS installation',
        ]}
        link={{ link: 'https://www.lanlink.com.br', text: 'Lanlink', type: 'web' }}
      />
    </Container>
  );
};

export default History;
