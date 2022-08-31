import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@styles/theme/theme";

import { Home } from "./pages/home/home.screen";
import { StatusBar } from "expo-status-bar";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
};

export { MyApp };
