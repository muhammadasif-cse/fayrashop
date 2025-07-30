import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import APIHeader from "./APIHeader";
import { public_app } from "@/app/redux-public-app/action";

const store = configureStore({
  reducer: {
    [APIHeader.reducerPath]: APIHeader.reducer,
    public_app: public_app.reducer,
  },
  devTools: process.env.APP_NODE != "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([APIHeader.middleware]),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
