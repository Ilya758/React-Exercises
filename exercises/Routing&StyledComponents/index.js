import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react/cjs/react.production.min";
import App from "./App";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
  document.getElementById("root")
);
