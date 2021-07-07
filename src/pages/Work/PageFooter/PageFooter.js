import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTop } from "../../../assets/images/arrow-top.svg";
import Container from "../../../elements/Container";
import { FooterContainer, FooterLink } from "./PageFooter.styles";

function PageFooter() {
  return (
    <FooterContainer className="text-center">
      <Container>
        <FooterLink to="/" as={Link}>
          <IconTop />
          <span>Home</span>
        </FooterLink>
      </Container>
    </FooterContainer>
  );
}

export default PageFooter;
