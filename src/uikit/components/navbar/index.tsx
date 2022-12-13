import { useNavigate } from 'react-router-dom';

import { Container, Avatar, Pages, ListItem } from './styles';
import avatar from 'src/assets/images/avatar.png';

export default function navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Avatar>
        <img onClick={() => navigate('/')} src={avatar} alt="Renata Barreto" />
      </Avatar>
      <Pages>
        <ListItem className={'selected'}>Profile</ListItem>
        <ListItem href="#projects">Projects</ListItem>
      </Pages>
    </Container>
  );
}
