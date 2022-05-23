import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

export default function BasicExample() {
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/" element={<SignUp />}>
            
          </Route>
          <Route path="/login" element={<Login />}>
            
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


