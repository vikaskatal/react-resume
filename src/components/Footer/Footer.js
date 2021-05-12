import React from "react";
// import { NAME } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="my-container">
          <NavLinks />
          <p className="copyright">
            {/* {NAME} © All rights Reserved. 2020 */}
            Made with love in India
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
