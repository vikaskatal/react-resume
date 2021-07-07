import styled from "styled-components";
import { BreakPoints } from "../../constants";

export const NotFoundContainer = styled.div`
  min-height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #f1f1f1;
  @media (min-width: ${BreakPoints.small}px) {
    min-height: calc(100vh - 217px);
  }
`;

export const TextEle = styled.p`
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
`;
