"use client";

import React, { ReactNode } from "react";

import { Provider } from "react-redux";

import store from "./store";
import { ThemeProvider } from "@/components/theme-provider";

const ReduxProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ReduxProviders;
