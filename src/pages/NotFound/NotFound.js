import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { BreakPoints } from "../../constants";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

const StyledNotFound = styled.div`
  min-height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #f1f1f1;
  p {
    font-weight: 900;
    font-size: 60px;
    line-height: 1;
    max-width: 255px;

    span {
      margin-top: 15px;
      display: block;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.4;
    }
  }
  @media (min-width: ${BreakPoints.small}px) {
    min-height: calc(100vh - 217px);
  }
`;

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <MainTemplate>
        <StyledNotFound>
          <p>
            404<span>Uh oh, looks like this page doesn't exist.</span>
          </p>
        </StyledNotFound>
      </MainTemplate>
    </>
  );
};

export default NotFound;
