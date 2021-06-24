import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ChildrenProp from "../../prop-types/ChildrenProp";

const MainTemplate = ({ children, homepage }) => {
  return (
    <main className={homepage && "home-page"}>
      <Header />
      <>{children}</>
      <Footer />
    </main>
  );
};

MainTemplate.propTypes = {
  children: ChildrenProp.isRequired,
};

MainTemplate.default = {
  homepage: false,
};

export default MainTemplate;
