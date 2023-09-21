import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
