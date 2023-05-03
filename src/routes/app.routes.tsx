import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Components/Layout";
import List from "../pages/List";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default AppRoutes;
