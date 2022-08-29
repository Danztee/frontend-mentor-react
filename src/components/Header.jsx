import React from "react";

import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { FLex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it free</Button>
        </Nav>
        <FLex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </FLex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
