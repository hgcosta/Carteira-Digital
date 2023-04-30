import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./pages/styles/GlobalStyles";
import Layout from "./Components/Layout";
import dark from "./pages/styles/themes/dark";
import List from "./pages/List";
import ContentHeader from "./Components/ContentHeader";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
