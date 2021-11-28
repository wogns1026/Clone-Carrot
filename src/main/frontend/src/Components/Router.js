import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home";
import Header from "Components/Header";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
    </>
  </HashRouter>
);
