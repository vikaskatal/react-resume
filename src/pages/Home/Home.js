import React from "react";
import WorkList from "./WorkList";
import Info from "./Info";
import { Helmet } from "react-helmet";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import { ABOUT_ME, workList } from "../../constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>
      <HomeTemplate homepage>
        <Info info={ABOUT_ME} />
        <WorkList list={workList} />
      </HomeTemplate>
    </>
  );
};

export default Home;
