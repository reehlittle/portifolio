import { Container, Title, TimeAndPlace, Description, Image, ImageContainer, Skill, Content } from './styles';
import { EmploymentProps } from '@app/models';
import { Link, LocationPin } from '@uikit/components';

const Employment = ({
  title,
  companyName,
  location,
  startDate,
  endDate,
  descriptions,
  img,
  link,
  skills,
}: EmploymentProps) => {
  return (
    <Container>
      <Title>
        {title},{companyName}
      </Title>
      <TimeAndPlace>
        {startDate} - {endDate}
        <LocationPin location={location} />
      </TimeAndPlace>
      <Content>
        {descriptions?.map((description, index) => (
          <Description key={index}>{description}</Description>
        ))}
      </Content>
      {img && (
        <ImageContainer>
          {img.map((src, index) => (
            <Image key={index} src={src} />
          ))}
        </ImageContainer>
      )}
      {skills?.map((skill, index) => (
        <Skill key={index}>{skill}</Skill>
      ))}
      {link && <Link {...link} />}
    </Container>
  );
};

export default Employment;
