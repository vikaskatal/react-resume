import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "./NavLinks.styles";

const NavLinks = ({ viewOn, links }) => {
  return (
    <Nav className="reset-ul" viewOn={viewOn}>
      {links.map(({ label, url }) => (
        <NavItem key={label.split(" ")}>
          {label === "Get in touch" || label === "Email" ? (
            <NavLink href={`mailto:${url}`}> {label} </NavLink>
          ) : label === "Phone" ? (
            <NavLink href={`tel:${url}`}> {label} </NavLink>
          ) : (
            <NavLink rel="noopener noreferrer" target="_blank" href={url}>
              {" "}
              {label}{" "}
            </NavLink>
          )}
        </NavItem>
      ))}
    </Nav>
  );
};

NavLinks.propTypes = {
  viewOn: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

NavLinks.defaultProps = {
  viewOn: "",
};

export default NavLinks;
