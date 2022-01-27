import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root", // localStorage에 저장합니다.
  storage: storageSession, // sessionStorage에 저장
  whitelist: ["user"], // 적용 대상목록
  // blacklist: [""], // 제외 대상목록
};
const enhancedReducer = persistReducer(persistConfig, rootReducer);

export const getStore = () => {
  const store = configureStore({
    reducer: enhancedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production", //  개발자 도구 on/off
    // preloadedState: {}, // 스토어의 초기값
    // 개발자가 원하는 store enhancer를 미들웨어가 적용되는 순서보다 앞서서 추가 가능
    // enhancers: [reduxBatch],
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
