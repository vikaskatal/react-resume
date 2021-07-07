import styled from "styled-components";
import { BreakPoints } from "../../constants";

export const FooterContainer = styled.footer`
  padding-top: 50px;
  padding-bottom: 20px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 10px;
    padding-bottom: 70px;
  }
`;

export const CopyrightContainer = styled.p`
  line-height: 1.6;
  font-size: 12px;
  margin: 50px 0 0 0;
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 16px;
    margin-top: 0px;
  }
`;

export const SecondaryNavContainer = styled.div`
  @media (min-width: ${BreakPoints.small}px) {
    padding: 20px 0;
  }
`;
