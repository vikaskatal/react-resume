import React from "react";
import { EMAIL_ADDRESS, RESUME_URL, LINKEDIN_URL } from "../../constants";

const NavLinks = () => {
  return (
    <div className="my-nav">
      <ul className="menu reset-ul">
        <li className="menu-item">
          <a rel="noopener noreferrer" target="_blank" href={RESUME_URL}>
            Download resume
          </a>
        </li>
        <li className="menu-item">
          <a rel="noopener noreferrer" target="_blank" href={LINKEDIN_URL}>
            Linked In
          </a>
        </li>
        <li className="menu-item">
          <a href={`mailto:${EMAIL_ADDRESS}`}>Get in touch</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
