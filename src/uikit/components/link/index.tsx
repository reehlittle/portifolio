import { FaGithub, FaPlay, FaGlobe } from 'react-icons/fa';

import { LinkProps } from '@uikit/models';
import { Container } from './styles';

const Link = ({ text, link, type }: LinkProps) => {
  return (
    <Container type={type} href={link}>
      {type === 'github' && <FaGithub />}
      {type === 'play_store' && <FaPlay />}
      {type === 'web' && <FaGlobe />}
      {text}
    </Container>
  );
};

export default Link;
