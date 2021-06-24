import React from "react";
import { Helmet } from "react-helmet";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import Info from "./Info/Info";
import WorkList from "./WorkList/WorkList";
import { ABOUT_ME, workList } from "../../constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>
      <MainTemplate homepage>
        <Info info={ABOUT_ME} />
        <WorkList list={workList} />
      </MainTemplate>
    </>
  );
};

export default Home;
