import styled from "styled-components";
import { BreakPoints } from "../../constants";

export const HomePageContainer = styled.div`
  background-color: #1b1d20;
  color: #cecece;
`;

export const InfoContainer = styled.div`
  padding-top: 23px;
  padding-bottom: 40px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export const InfoContentContainer = styled.div`
  max-width: 800px;
`;

export const InfoContent = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 36px;
  }
`;
