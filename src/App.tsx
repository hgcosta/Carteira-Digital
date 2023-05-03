import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./pages/styles/GlobalStyles";
import Layout from "./Components/Layout";
import dark from "./pages/styles/themes/dark";
import List from "./pages/List";
import ContentHeader from "./Components/ContentHeader";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
