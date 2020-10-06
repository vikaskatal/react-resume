import React from "react";
import { Link } from "react-router-dom";
import { NAME } from "../../constants";
import NavLinks from "../NavLinks/NavLinks";

const Header = () => {
  return (
    <>
      <header className="my-header my-container">
        <div className="my-header__name">
          <Link to="/">{NAME}</Link>
        </div>
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
