import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Components/Layout/Admin/AdminLayout";
import ReceptionistLayout from "./Components/Layout/Receptionist/ReceptionistLayout";
import ManagerLayout from "./Components/Layout/Manager/ManagerLayout";
import HousekeeperLayout from "./Components/Layout/Housekeeper/HousekeeperLayout";
import LoginForm from "./Components/Auth/LoginForm";
import CheckAuth from "./Common/checkAuth";

// Import pages
import AdminViewDashboard from "./Pages/admin-view/AdminViewDashboard";
import ReceptionistViewDashboard from "./Pages/receptionist-view/ReceptionistViewDashboard";
import ManagerViewDashboard from "./Pages/manager-view/ManagerViewDashboard";
import HouseKeeperViewDashboard from "./Pages/houseKeeper-view/HouseKeeperViewDashboard";

// Add other pages...

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in cookies on page load
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Navigate to="/auth/login" />}
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={<CheckAuth isAuthenticated={isAuthenticated}><AdminLayout /></CheckAuth>}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<AdminViewDashboard />} />
          {/* Other admin routes */}
        </Route>

        {/* Receptionist routes */}
        <Route
          path="/receptionist"
          element={<CheckAuth isAuthenticated={isAuthenticated}><ReceptionistLayout /></CheckAuth>}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ReceptionistViewDashboard />} />
        </Route>

        {/* Manager routes */}
        <Route
          path="/manager"
          element={<CheckAuth isAuthenticated={isAuthenticated}><ManagerLayout /></CheckAuth>}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ManagerViewDashboard />} />
        </Route>

        {/* Housekeeper routes */}
        <Route
          path="/housekeeper"
          element={<CheckAuth isAuthenticated={isAuthenticated}><HousekeeperLayout /></CheckAuth>}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<HouseKeeperViewDashboard />} />
        </Route>

        {/* Login route */}
        <Route path="/auth/login" element={<LoginForm />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/auth/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
