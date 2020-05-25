import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
