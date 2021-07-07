import styled from "styled-components";
import { BreakPoints } from "../../../constants";

export const FooterContainer = styled.footer`
  background-color: var(--themed-color-work);
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 42px;
    padding-bottom: 42px;
  }
`;

export const FooterLink = styled.a`
  display: inline-block;
  color: var(--themed-font-work);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  text-decoration: none;
  text-align: center;
  span {
    display: block;
    margin-top: 5px;
  }
  svg {
    path {
      fill: var(--themed-font-work);
    }
  }
  &:hover {
    color: var(--themed-font-work);
    opacity: 0.8;
  }
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 16px;
    span {
      margin-top: 12px;
    }
  }
`;
