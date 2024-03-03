import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/common.scss";
import "./styles/utilities.scss";
import "./styles/screen-media-query.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
