// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);