import React from "react";

import { Container, Avatar, Pages, ListItem } from "./styles";
import avatar from "../../assets/images/avatar.png";
import history from "../../services/history";

export default function NavBar() {
  return (
    <Container>
      <Avatar>
        <img
          onClick={() => history.push("/")}
          src={avatar}
          alt="Renata Barreto"
        />
      </Avatar>
      <Pages>
        <ListItem className={"selected"}>Profile</ListItem>
        <ListItem href="#projects">Projects</ListItem>
      </Pages>
    </Container>
  );
}
