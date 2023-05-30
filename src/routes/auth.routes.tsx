import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";

const AuthRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </Router>
);

export default AuthRoutes;
