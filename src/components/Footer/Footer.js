import React from "react";
import styled from "styled-components";
import { BreakPoints } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";
import Container from "../../elements/Container";

const StyledFooter = styled.footer`
  padding-top: 67px;
  padding-bottom: 20px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 10px;
    padding-bottom: 70px;
  }
`;

const StyledCopyright = styled.p`
  line-height: 1.6;
  font-size: 12px;
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <NavLinks navFor="footer" />
        <StyledCopyright>Made with love in India</StyledCopyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
