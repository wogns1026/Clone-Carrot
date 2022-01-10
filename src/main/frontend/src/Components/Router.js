import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
import Home from "Routes/Home/Home";
import Header from "Routes/Header/Header";
import Footer from "Routes/Footer/Footer";
import HotArticleList from "Routes/HotArticles/HotArticleList";
import ArticleDetail from "Routes/ArticleDetail/ArticleDetail";
import SearchResult from "Routes/SearchResult/SearchResult";
import Board from "Routes/Board/Board";
import { AutoScrollToTop } from "./Universal";
import SellerInfo from "Routes/SellerInfo/SellerInfo";
import Signup from "Routes/Welcome/Signup/Signup";
import Signin from "Routes/Welcome/Signin/Signin";
import BoardRegist from "Routes/Regist/BoardRegist";

const Router = () => (
  <HashRouter>
    <>
      <AutoScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot-articles" element={<HotArticleList />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/search/:id" element={<SearchResult />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/regist/board" element={<BoardRegist />} />
        <Route path="/seller-info/:id" element={<SellerInfo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
      <Footer />
    </>
  </HashRouter>
);

export default Router;
