import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home";
import Header from "./Semantic/Header";
import Footer from "./Semantic/Footer";
import TopTradePosts from "Routes/TopTradePosts";
import TradeDetail from "Routes/TradeDetail";
import AutoScrollToTop from "./Universal/AutoScrollToTop";

const Router = () => (
  <HashRouter>
    <>
      <AutoScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_trade_posts" element={<TopTradePosts />} />
        <Route path="/trade_post/:id" element={<TradeDetail />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
      <Footer />
    </>
  </HashRouter>
);

export default Router;
