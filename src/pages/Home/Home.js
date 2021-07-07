import React from "react";
import { Helmet } from "react-helmet";
import HomeTemplate from "../../templates/HomeTemplate";
import Projects from "./Projects/Projects";
import { ABOUT_ME } from "../../constants";
import Container from "../../elements/Container";
import {
  HomePageContainer,
  InfoContainer,
  InfoContentContainer,
  InfoContent,
} from "./Home.styles";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>

      <HomePageContainer>
        <HomeTemplate>
          <Container>
            <InfoContainer>
              <InfoContentContainer>
                <InfoContent>{ABOUT_ME}</InfoContent>
              </InfoContentContainer>
            </InfoContainer>

            <Projects />
          </Container>
        </HomeTemplate>
      </HomePageContainer>
    </>
  );
};

export default Home;
