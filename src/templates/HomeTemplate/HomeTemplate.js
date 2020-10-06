import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ChildrenProp from "../../prop-types/ChildrenProp";

const HomeTemplate = ({ children, homepage }) => {
  return (
    <main className={homepage && "home-page"}>
      <Header />
      <>{children}</>
      <Footer />
    </main>
  );
};

HomeTemplate.propTypes = {
  children: ChildrenProp.isRequired,
};

HomeTemplate.default = {
  homepage: false,
};

export default HomeTemplate;
