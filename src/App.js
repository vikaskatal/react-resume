import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.scss";
import AppRoutes from "./App.routes";
import { NAME } from "./constants";

const App = () => {
  return (
    <>
      <Helmet defaultTitle={NAME} titleTemplate={`${NAME} | %s`} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
