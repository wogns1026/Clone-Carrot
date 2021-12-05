import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home";
import Header from "./Semantic/Header";
import Footer from "./Semantic/Footer";
import TopTradePosts from "Routes/TopTradePosts";

const Router = () => (
  <HashRouter>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_trade_posts" element={<TopTradePosts />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
      <Footer />
    </>
  </HashRouter>
);

export default Router;
