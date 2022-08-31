import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { TaskContextProvider } from "@contexts/task-context";

import { theme } from "@styles/theme/theme";

import { Home } from "./pages/home/home.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </ThemeProvider>
  );
};

export { MyApp };
