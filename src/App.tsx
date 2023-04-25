import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./pages/styles/GlobalStyles";
import Layout from "./Components/Layout";
import dark from "./pages/styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
