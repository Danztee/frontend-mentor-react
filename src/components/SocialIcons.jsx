import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com/iamdanztee">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/iamdanztee">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/iamdanztee">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
