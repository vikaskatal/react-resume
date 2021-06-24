import React from "react";
import { Helmet } from "react-helmet";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
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
      <HomeTemplate homepage>
        <Info info={ABOUT_ME} />
        <WorkList list={workList} />
      </HomeTemplate>
    </>
  );
};

export default Home;
