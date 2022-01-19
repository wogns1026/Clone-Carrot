import sellerInfo from "./modules/sellerInfo";
import board from "./modules/board";
import review from "./modules/review";
import article from "./modules/article";
import search from "./modules/search";
import user from "./modules/user";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  board,
  review,
  sellerInfo,
  article,
  search,
  user,
});
