import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { FLex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <FLex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+234 81 5353 7619</li>
            <li>olowoniyidaniel@gmai.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </FLex>
        <p>&copy; 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
