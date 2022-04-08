import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TripsBook } from "./components/Booktrip";
import { LogIn } from "./components/Log-in";
import { SignUp } from "./components/Sign-up";
import { MarsTrip } from "./components/MarsTrip";
import { SpaceContextProvider } from "./context/SpaceContextModel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SpaceContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/showTrip" element={<TripsBook/>}></Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/getTripDetails" element={<MarsTrip />} />
        </Routes>
      </Router>
    </SpaceContextProvider>
  </React.StrictMode>
);
