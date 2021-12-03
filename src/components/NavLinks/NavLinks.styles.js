import styled, { css, keyframes } from "styled-components";
import { BreakPoints, NavLinkView } from "../../constants";

export const Nav = styled.ul`
  display: block;
  @media (min-width: ${BreakPoints.small}px) {
    display: flex;
  }

  ${(props) =>
    props.viewOn === NavLinkView.MOBILE &&
    css`
      display: block;
      @media (min-width: ${BreakPoints.small}px) {
        display: none;
      }
    `}

  ${(props) =>
    props.viewOn === NavLinkView.TAB &&
    css`
      display: flex;
      @media (max-width: ${BreakPoints.small - 1}px) {
        display: none;
      }
    `}
`;

export const NavItem = styled.li`
  margin-top: 20px;
  @media (min-width: ${BreakPoints.small}px) {
    margin-top: 0px;
    & + & {
      margin-left: 20px;
    }
  }
`;

const LinkStyle = `
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const NavLink = styled.a`
  ${LinkStyle}
`;

const copy = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

export const NavLinkStyle = styled.span`
  ${LinkStyle}
  &.copy-success img {
    animation: ${copy} 0.2s linear;
  }
`;
