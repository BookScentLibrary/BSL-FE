import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
