import React from "react";
import styled from "styled-components";
import { BreakPoints, PrimaryNav, SecondaryNav } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";
import Container from "../../elements/Container";

const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 20px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 10px;
    padding-bottom: 70px;
  }
`;

const StyledCopyright = styled.p`
  line-height: 1.6;
  font-size: 12px;
  margin: 50px 0 0 0;
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 16px;
    margin-top: 0px;
  }
`;

const StyledSecondaryNav = styled.div`
  @media (min-width: ${BreakPoints.small}px) {
    padding: 20px 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <NavLinks viewOn="mobile" vertical links={PrimaryNav} />
        {SecondaryNav.length && (
          <StyledSecondaryNav>
            <NavLinks links={SecondaryNav} />
          </StyledSecondaryNav>
        )}
        <StyledCopyright>Made with love in India</StyledCopyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
