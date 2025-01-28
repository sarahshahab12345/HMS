import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import AdminLayout from "./Components/Layout/Admin/AdminLayout";
import ReceptionistLayout from "./Components/Layout/Receptionist/ReceptionistLayout";
import ManagerLayout from "./Components/Layout/Manager/ManagerLayout";
import HousekeeperLayout from "./Components/Layout/Housekeeper/HousekeeperLayout";
import CheckAuth from "./Common/checkAuth";
import AdminViewDashboard from "./Pages/admin-view/AdminViewDashboard";
import LoginForm from "./Components/Auth/LoginForm";
import ReceptionistViewDashboard from "./Pages/receptionist-view/ReceptionistViewDashboard";
import ManagerViewDashboard from "./Pages/manager-view/ManagerViewDashboard";
import HouseKeeperViewDashboard from "./Pages/houseKeeper-view/HouseKeeperViewDashboard";
import AdminViewStaff from "./Pages/admin-view/AdminViewStaff";
import HouseKeeperViewRooms from "./Pages/houseKeeper-view/HouseKeeperViewRooms";
import AdminViewGuests from "./Pages/admin-view/AdminViewGuest";
import AdminViewRoom from "./Pages/admin-view/AdminViewRoom";
import AdminViewBookings from "./Pages/admin-view/AdminViewBooking";
import AdminViewFood from "./Pages/admin-view/AdminViewFood";
import AdminViewFeedback from "./Pages/admin-view/AdminViewFeedback";
import AdminViewBilling from "./Pages/admin-view/AdminViewBilling";
import AdminViewInvoice from "./Pages/admin-view/AdminViewInvoice";
import GuestCreatePage from "./Pages/admin-view/GuestCreatePage";
import StaffCreatePage from "./Pages/admin-view/StaffCreatePage";
import BookingCreatePage from "./Pages/admin-view/BookingCreatePage";
import FoodCreatePage from "./Pages/admin-view/FoodCreatePage";
import RoomCreatePage from "./Pages/admin-view/RoomCreatePage";
import HouseKeeperViewAnnouncement from "./Pages/houseKeeper-view/HouseKeeperViewAnnouncement";
import HouseKeeperViewBookedRooms from "./Pages/houseKeeper-view/HouseKeeperViewBookedRooms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={true}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Navigate to="dashboard" />} /> 
          <Route path="dashboard" element={<AdminViewDashboard />} />
          <Route path="staff" element={<AdminViewStaff />} />
          <Route path="guest" element={<AdminViewGuests />} />
          <Route path="room" element={<AdminViewRoom />} />
          <Route path="booking" element={<AdminViewBookings />} />
          <Route path="food" element={<AdminViewFood />} />
          <Route path="feedback" element={<AdminViewFeedback />} />
          <Route path="billing" element={<AdminViewBilling />} />
          <Route path="invoice" element={<AdminViewInvoice />} />
          <Route path="staff/add" element={<StaffCreatePage />} />
          <Route path="guest/add" element={<GuestCreatePage />} />
          <Route path="room/add" element={<RoomCreatePage />} />
          <Route path="booking/add" element={<BookingCreatePage />} />
          <Route path="billing" element={<AdminViewBilling />} />
          <Route path="food/add" element={<FoodCreatePage />} />
          <Route path="auth/login" element={<LoginForm />} />
        </Route>

        {/* Receptionist routes */}
        <Route
          path="/receptionist"
          element={
            <CheckAuth isAuthenticated={true}>
              <ReceptionistLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ReceptionistViewDashboard />} />
        </Route>

        {/* Manager routes */}
        <Route
          path="/manager"
          element={
            <CheckAuth isAuthenticated={true}>
              <ManagerLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ManagerViewDashboard />} />
        </Route>

        {/* Housekeeper routes */}
        <Route
          path="/housekeeper"
          element={
            <CheckAuth isAuthenticated={true}>
              <HousekeeperLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<HouseKeeperViewDashboard />} />
          <Route path="rooms" element={<HouseKeeperViewRooms />} /> 
          <Route path="booked-rooms" element={<HouseKeeperViewBookedRooms />} /> 
          <Route path="announcement" element={<HouseKeeperViewAnnouncement />} /> 
          <Route path="auth/login" element={<LoginForm />} />
        </Route>

        {/* Login route */}
        <Route path="/auth/login" element={<LoginForm />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
