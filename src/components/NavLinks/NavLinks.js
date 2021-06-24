import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import {
  EMAIL_ADDRESS,
  RESUME_URL,
  LINKEDIN_URL,
  BreakPoints,
} from "../../constants";

const StyledNav = styled.ul`
  a {
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }

  ${(props) =>
    props.navFor === "footer"
      ? css`
          display: block;
          margin-bottom: 50px;
          li + li {
            margin-left: 0;
            margin-top: 25px;
          }
          @media (min-width: ${BreakPoints.small}px) {
            display: none;
          }
        `
      : css`
          display: flex;
          li + li {
            margin-left: 20px;
          }
          @media (max-width: ${BreakPoints.small - 1}px) {
            display: none;
          }
        `}
`;

const NavLinks = ({ navFor }) => {
  return (
    <StyledNav className="reset-ul" navFor={navFor}>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={RESUME_URL}>
          Download resume
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={LINKEDIN_URL}>
          Linked In
        </a>
      </li>
      <li>
        <a href={`mailto:${EMAIL_ADDRESS}`}>Get in touch</a>
      </li>
    </StyledNav>
  );
};

NavLinks.propTypes = {
  navFor: PropTypes.string,
};

NavLinks.defaultProps = {
  navFor: "",
};

export default NavLinks;
