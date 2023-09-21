import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import CreateAccountForm from "./components/user/Signup";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
