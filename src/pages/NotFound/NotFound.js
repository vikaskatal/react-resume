import React from "react";
import { Helmet } from "react-helmet";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <MainTemplate>
        <div className="not-found">
          <p>
            404<span>Uh oh, looks like this page doesn't exist.</span>
          </p>
        </div>
      </MainTemplate>
    </>
  );
};

export default NotFound;
