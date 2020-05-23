import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
