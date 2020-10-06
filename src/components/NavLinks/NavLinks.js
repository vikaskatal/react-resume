import React from "react";
import { EMAIL, RESUME, LINKEDIN } from "../../constants";

const NavLinks = () => {
  return (
    <div className="my-nav">
      <ul className="menu">
        <li className="menu-item">
          <a rel="noopener noreferrer" target="_blank" href={RESUME}>
            Download resume
          </a>
        </li>
        <li className="menu-item">
          <a rel="noopener noreferrer" target="_blank" href={LINKEDIN}>
            Linked In
          </a>
        </li>
        <li className="menu-item">
          <a href={`mailto:${EMAIL}`}>Get in touch</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
