import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@styles/theme/theme";

import { Home } from "./pages/home/home.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export { MyApp };
