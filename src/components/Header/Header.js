import React from "react";
import { Link } from "react-router-dom";
import { NAME, PrimaryNav, NavLinkView } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";
import Container from "../../elements/Container";
import { HeaderContainer, LogoLink } from "./Header.styles";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <div>
            <LogoLink as={Link} to="/">
              {NAME}
            </LogoLink>
          </div>
          <NavLinks viewOn={NavLinkView.TAB} links={PrimaryNav} />
        </HeaderContainer>
      </Container>
    </>
  );
};

export default Header;
