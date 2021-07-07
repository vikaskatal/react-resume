import styled, { css } from "styled-components";
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

export const NavLink = styled.a`
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
