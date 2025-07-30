"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import public_app_state from "./state";

export const public_app = createSlice({
  name: "public_app",
  initialState: public_app_state,
  reducers: {
    // add your reducers here
  },
});

export const {} = public_app.actions;

export default public_app.reducer;

export const shareableSelector = (state: RootState) => state.public_app;
