import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tokenSlice } from "../features/tokenSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [tokenSlice.name]: tokenSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
  >;

export const wrapper = createWrapper<AppStore>(makeStore);
