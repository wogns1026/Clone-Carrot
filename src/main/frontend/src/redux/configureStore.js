import logger from "redux-logger";
// import { reduxBatch } from "@manaflair/redux-batch";
import { configureStore } from "@reduxjs/toolkit";
import sellerInfoReducer from "./modules/sellerInfo";
import boardReducer from "./modules/board";
import reviewReducer from "./modules/review";
import articleReducer from "./modules/article";
import searchReducer from "./modules/search";
import userReducer from "./modules/user";

const rootReducer = {
  board: boardReducer,
  review: reviewReducer,
  sellerInfo: sellerInfoReducer,
  article: articleReducer,
  search: searchReducer,
  user: userReducer,
};

const preloadedState = {
  // user: {
  //   userId: "",
  //   accessToken: "",
  //   refreshToken: "",
  // },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production", //  개발자 도구 on/off
  preloadedState, // 스토어의 초기값

  // 개발자가 원하는 store enhancer를 미들웨어가 적용되는 순서보다 앞서서 추가 가능
  // enhancers: [reduxBatch],
});
export default store;
