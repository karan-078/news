import React from "react";
import ReactDOM from "react-dom/client";
// import { AppProvider } from './sidebar/Contex';
// import { AppProvider } from './stripe/Context';
//  import { AppProvider } from './cart/Context';s
// import {AppProvider } from './Context';
// import { AppProvider } from "./move/Contex";
// import { AppProvider } from "./hackernews/context";
// import { AppProvider } from "./quiz/context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppProvider>
      <App />
    </AppProvider> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
