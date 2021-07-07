import styled from "styled-components";
import { BreakPoints } from "../../../constants";

export const BackButton = styled.a`
  background-color: var(--themed-color-work);
  display: block;
  color: var(--themed-font-work);
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--themed-font-work);
    opacity: 0.8;
  }
  svg {
    margin-right: 10px;
    path {
      fill: var(--themed-font-work);
    }
  }

  @media (max-width: ${BreakPoints.small - 1}px) {
    padding: 30px 0 0;
  }
  @media (min-width: ${BreakPoints.small}px) {
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    top: 50px;
    left: 0px;
    display: inline-flex;
  }
`;

export const PageHeaderContainer = styled.header`
  background-color: var(--themed-color-work);
`;

export const Title = styled.div`
  padding: 40px 0 20px;
  color: #fff;
  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  p {
    margin: 5px 0 0;
  }
  @media (min-width: ${BreakPoints.small}px) {
    padding: 120px 0 40px;
    h1 {
      color: var(--themed-font-work);
      font-size: 3rem;
    }
    p {
      margin-top: 10px;
      color: var(--themed-font-work);
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  max-width: 300px;
  @media (min-width: ${BreakPoints.small}px) {
    max-width: 500px;
  }
`;
