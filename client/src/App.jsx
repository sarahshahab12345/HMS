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
import AdminViewStaff from './Pages/admin-view/AdminViewStaff';
import AdminViewGuest from './Pages/admin-view/AdminViewGuest';
import AdminViewRoom from './Pages/admin-view/AdminViewRoom';
import AdminViewFeedback from './Pages/admin-view/AdminViewFeedback';
import AdminViewBilling from './Pages/admin-view/AdminViewBilling';
import AdminViewInvoice from './Pages/admin-view/AdminViewInvoice';
import StaffCreatePage from './Pages/admin-view/StaffCreatePage';
import RoomCreatePage from './Pages/admin-view/RoomCreatePage';   
import GuestCreatePage from './Pages/admin-view/GuestCreatePage';
import BookingCreatePage from './Pages/admin-view/BookingCreatePage';
import AdminViewBooking from './Pages/admin-view/AdminViewBooking';
import AdminViewFood from './Pages/admin-view/AdminViewFood';
import FoodCreatePage from './Pages/admin-view/FoodCreatePage';
import ReceptionistViewDashboard from "./Pages/receptionist-view/ReceptionistViewDashboard";
import ManagerViewDashboard from "./Pages/manager-view/ManagerViewDashboard";
import HouseKeeperViewDashboard from "./Pages/houseKeeper-view/HouseKeeperViewDashboard";
import HouseKeeperViewRooms from "./Pages/houseKeeper-view/HouseKeeperViewRooms";
import HouseKeeperViewBookedRooms from "./Pages/houseKeeper-view/HouseKeeperViewBookedRooms";
import HouseKeeperViewAnnouncement from "./Pages/houseKeeper-view/HouseKeeperViewAnnouncement";
import ManagerViewStaff from "./Pages/manager-view/ManagerViewStaff";
import ManagerViewGuest from "./Pages/manager-view/ManagerViewGuest";
import ManagerViewRooms from "./Pages/manager-view/ManagerViewRooms";
import ManagerViewBookedRooms from "./Pages/manager-view/ManagerViewBookedRooms";
import ManagerViewFood from "./Pages/manager-view/ManagerViewFood";
import ManagerViewFeedback from "./Pages/manager-view/ManagerViewFeedback";
import ManagerViewAnnouncement from "./Pages/manager-view/ManagerViewAnnouncement";
import GuestCreatePageForManager from './Pages/manager-view/GuestCreatePage';
import FoodCreatePageForManager from './Pages/manager-view/FoodCreatePage';

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
          <Route path="staff" element={<AdminViewStaff />} />
          <Route path="guest" element={<AdminViewGuest />} />
          <Route path="room" element={<AdminViewRoom />} />
          <Route path="booking" element={<AdminViewBooking />} />
          <Route path="food" element={<AdminViewFood />} />
          <Route path="feedback" element={<AdminViewFeedback />} />
          <Route path="billing" element={<AdminViewBilling />} />
          <Route path="invoice" element={<AdminViewInvoice />} />
          <Route path="staff/add" element={<StaffCreatePage />} />
          <Route path="guest/add" element={<GuestCreatePage />} />
          <Route path="room/add" element={<RoomCreatePage />} />
          <Route path="booking/add" element={<BookingCreatePage />} />
          <Route path="food/add" element={<FoodCreatePage />} />
          <Route path="login" element={<LoginForm />} />
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
          <Route path="staff" element={<ManagerViewStaff />} />
          <Route path="guest" element={<ManagerViewGuest />} />
          <Route path="rooms" element={<ManagerViewRooms />} />
          <Route path="booked-rooms" element={<ManagerViewBookedRooms />} />
          <Route path="food" element={<ManagerViewFood />} />
          <Route path="feedback" element={<ManagerViewFeedback />} />
          <Route path="announcement" element={<ManagerViewAnnouncement />} />
          <Route path="guest/add" element={<GuestCreatePageForManager />} />
          <Route path="food/add" element={<FoodCreatePageForManager />} />
        </Route>

        {/* Housekeeper routes */}
        <Route
          path="/housekeeper"
          element={<CheckAuth isAuthenticated={isAuthenticated}><HousekeeperLayout /></CheckAuth>}
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<HouseKeeperViewDashboard />} />
          <Route path="rooms" element={<HouseKeeperViewRooms />} />
          <Route path="booked-rooms" element={<HouseKeeperViewBookedRooms />} />
          <Route path="announcement" element={<HouseKeeperViewAnnouncement />} />
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
