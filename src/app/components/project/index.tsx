import { MdCheck } from 'react-icons/md';

import { Container, DescriptionContainer, Title, Description, ItemCheck, AppImage, SubLink, WebImage } from './styles';
import { ProjectProps } from '@app/models';
import { Link } from '@uikit/components';

const Project = ({ title, type, description, techs, privacyLink, img, link }: ProjectProps) => {
  return (
    <Container>
      <DescriptionContainer>
        <div>
          <Title>{title}</Title>
          <span>{type}</span>
        </div>
        <Description>{description}</Description>
        {privacyLink && <SubLink>Privacy Policy Link</SubLink>}
        <div>
          {techs &&
            techs.map((tech) => (
              <ItemCheck key={tech}>
                <MdCheck /> {tech}
              </ItemCheck>
            ))}
        </div>
        {link && <Link {...link} />}
      </DescriptionContainer>
      {type === 'app' ? (
        <AppImage>
          <img src={img} alt="project_image" />
        </AppImage>
      ) : (
        <WebImage>
          <img src={img} alt="project_image" />
        </WebImage>
      )}
    </Container>
  );
};

export default Project;
