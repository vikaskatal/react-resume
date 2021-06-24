import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BreakPoints, NAME } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";
import Container from "../../elements/Container";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 77px;
  padding-bottom: 15px;
  align-items: center;

  @media (max-width: ${BreakPoints.small - 1}px) {
    .my-nav {
      display: none;
    }
  }
`;

const StyledLogo = styled.div`
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    text-decoration: none;
  }

  svg path {
    fill: #000;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <StyledHeader>
          <StyledLogo>
            {" "}
            <Link to="/">{NAME}</Link>{" "}
          </StyledLogo>
          <NavLinks />
        </StyledHeader>
      </Container>
    </>
  );
};

export default Header;
