import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BreakPoints } from "../../constants";

const StyledNav = styled.ul`
  display: block;
  li {
    margin-top: 20px;
  }
  @media (min-width: ${BreakPoints.small}px) {
    display: flex;
    li {
      margin-top: 0px;
      & + li {
        margin-left: 20px;
      }
    }
  }

  a {
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }

  ${(props) =>
    props.viewOn === "mobile" &&
    css`
      display: block;
      @media (min-width: ${BreakPoints.small}px) {
        display: none;
      }
    `}

  ${(props) =>
    props.viewOn === "tab" &&
    css`
      display: flex;
      @media (max-width: ${BreakPoints.small - 1}px) {
        display: none;
      }
    `}
`;

const NavLinks = ({ viewOn, links }) => {
  return (
    <StyledNav className="reset-ul" viewOn={viewOn}>
      {links.map(({ label, url }) => (
        <li key={label.split(" ")}>
          {label === "Get in touch" ||
          label === "Contact" ||
          label === "Email" ? (
            <a href={`mailto:${url}`}> {label} </a>
          ) : label === "Phone" ? (
            <a href={`tel:${url}`}> {label} </a>
          ) : (
            <a rel="noopener noreferrer" target="_blank" href={url}>
              {" "}
              {label}{" "}
            </a>
          )}
        </li>
      ))}
    </StyledNav>
  );
};

NavLinks.propTypes = {
  viewOn: PropTypes.string,
  links: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

NavLinks.defaultProps = {
  viewOn: "",
};

export default NavLinks;
