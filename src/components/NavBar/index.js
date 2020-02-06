import React from 'react';

import { Container, Avatar, Pages, ListItem } from './styles';
import avatar from '../../assets/images/avatar.png';

export default function NavBar() {
  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="Renata Barreto" />
      </Avatar>
      <Pages>
        <ListItem className={'selected'}>
          <p>Profile</p>
        </ListItem>
        <ListItem>
          Work
        </ListItem>
      </Pages>
    </Container>
  );
}
