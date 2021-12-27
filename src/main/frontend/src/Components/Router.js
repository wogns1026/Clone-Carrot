import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home/Home";
import Header from "Routes/Semantic/Header";
import Footer from "Routes/Semantic/Footer";
import HotTrades from "Routes/HotTrades/HotTrades";
import TradeDetail from "Routes/TradeDetail/TradeDetail";
import SearchResult from "Routes/SearchResult/SearchResult";
import { AutoScrollToTop } from "./Universal";

const Router = () => (
  <HashRouter>
    <>
      <AutoScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot-articles" element={<HotTrades />} />
        <Route path="/articles/:id" element={<TradeDetail />} />
        <Route path="/search/:id" element={<SearchResult />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
      <Footer />
    </>
  </HashRouter>
);

export default Router;
