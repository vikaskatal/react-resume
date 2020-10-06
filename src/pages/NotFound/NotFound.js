import React from "react";
import { Helmet } from "react-helmet";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <HomeTemplate>
        <div className="not-found">
          <p>
            404<span>Uh oh, looks like this page doesn't exist.</span>
          </p>
        </div>
      </HomeTemplate>
    </>
  );
};

export default NotFound;
