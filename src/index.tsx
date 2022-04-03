import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TripsBook } from "./components/Booktrip";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/showTrip" element={<TripsBook></TripsBook>}></Route>
        <Route path="/showMarsTrip" element={<TripsBook></TripsBook>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
