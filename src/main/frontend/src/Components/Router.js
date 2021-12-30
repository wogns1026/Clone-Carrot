import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home/Home";
import Header from "Routes/Semantic/Header";
import Footer from "Routes/Semantic/Footer";
import HotTrades from "Routes/HotTrades/HotTrades";
import TradeDetail from "Routes/TradeDetail/TradeDetail";
import SearchResult from "Routes/SearchResult/SearchResult";
import Board from "Routes/Board/Board";
import { AutoScrollToTop } from "./Universal";
import SellerInfo from "Routes/SellerInfo/SellerInfo";

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
        <Route path="/board/:id" element={<Board />} />
        <Route path="/seller-info/:id" element={<SellerInfo />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
      <Footer />
    </>
  </HashRouter>
);

export default Router;
