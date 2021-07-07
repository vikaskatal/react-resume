import React from "react";
import { Helmet } from "react-helmet";
import HomeTemplate from "../../templates/HomeTemplate";
import { NotFoundContainer, TextEle } from "./NotFound.styles";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <HomeTemplate>
        <NotFoundContainer>
          <TextEle>
            404<span>Uh oh, looks like this page doesn't exist.</span>
          </TextEle>
        </NotFoundContainer>
      </HomeTemplate>
    </>
  );
};

export default NotFound;
