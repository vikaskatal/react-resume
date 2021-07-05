import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import Info from "./Info/Info";
import WorkList from "./WorkList/WorkList";
import { ABOUT_ME, workList } from "../../constants";

const StyledHomePage = styled.div`
  background-color: #1b1d20;
  color: #cecece;
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>
      <StyledHomePage>
        <MainTemplate>
          {/* homepage */}
          <Info info={ABOUT_ME} />
          <WorkList list={workList} />
        </MainTemplate>
      </StyledHomePage>
    </>
  );
};

export default Home;
