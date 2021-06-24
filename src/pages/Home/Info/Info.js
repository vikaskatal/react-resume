import React from "react";
import styled from "styled-components";
import Container from "../../../elements/Container";
import { BreakPoints } from "../../../constants";

const StyledInfoContainer = styled.div`
  padding-top: 23px;
  padding-bottom: 40px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

const StyledContent = styled.div`
  max-width: 800px;
  h2 {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    @media (min-width: ${BreakPoints.small}px) {
      font-size: 36px;
    }
  }
`;

const Info = ({ info }) => {
  return (
    <StyledInfoContainer>
      <Container>
        <StyledContent>
          <h2>{info}</h2>
        </StyledContent>
      </Container>
    </StyledInfoContainer>
  );
};

export default Info;
