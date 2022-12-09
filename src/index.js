import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./screen/Welcome";
import SignUp from "./screen/SignUp";
import Success from "./screen/Success";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Welcome />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
