import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeContextProvider} from "./contexts/theme";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./styles/styles.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);
