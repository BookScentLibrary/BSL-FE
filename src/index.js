import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import configStore from "./core/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={configStore}>
    <App />
  </Provider>
);
