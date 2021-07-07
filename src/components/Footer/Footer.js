import React from "react";
import { PrimaryNav, SecondaryNav, NavLinkView } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";
import Container from "../../elements/Container";
import {
  FooterContainer,
  CopyrightContainer,
  SecondaryNavContainer,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <NavLinks viewOn={NavLinkView.MOBILE} vertical links={PrimaryNav} />
        {SecondaryNav.length && (
          <SecondaryNavContainer>
            <NavLinks links={SecondaryNav} />
          </SecondaryNavContainer>
        )}
        <CopyrightContainer>Made with love in India</CopyrightContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
