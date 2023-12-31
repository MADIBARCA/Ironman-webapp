import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/index";

import "./i18n";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect" 
        href="https://fonts.gstatic.com"
        crossOrigin={"true"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@500&display=swap"
        rel="stylesheet"
      />
      <App />
    </BrowserRouter>
  </Provider>
);
