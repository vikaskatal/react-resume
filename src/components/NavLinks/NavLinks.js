import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink, NavLinkStyle } from "./NavLinks.styles";
import CopyIcon from "../../assets/images/copy.svg";
import { copyTextToClipboard } from "../../utils/util";

const NavLinks = ({ viewOn, links }) => {
  const copyEmailRef = useRef();

  function copyEmailToClipboard(email) {
    copyTextToClipboard(email);
    const emailContent = copyEmailRef.current;
    emailContent.classList.add("copy-success");

    setTimeout(() => {
      emailContent.classList.remove("copy-success");
    }, 500);
  }

  return (
    <Nav className="reset-ul" viewOn={viewOn}>
      {links.map(({ label, url }) => (
        <NavItem key={label.split(" ")}>
          {label === "Get in touch" || label === "Email" ? (
            <NavLinkStyle
              ref={copyEmailRef}
              className="display-flex align-items-center cursor-pointer"
              onClick={() => copyEmailToClipboard(url)}
            >
              <span>{label} &nbsp;</span>
              <img src={CopyIcon} alt="Copy" />
            </NavLinkStyle>
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
