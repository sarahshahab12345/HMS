import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Components/Layout/Admin/AdminLayout";
import CheckAuth from "./Common/checkAuth";
import AdminViewDashboard from "./Pages/admin-view/AdminViewDashboard";
import AdminViewStaff from "./Pages/admin-view/AdminViewStaff";
import AdminViewGuest from "./Pages/admin-view/AdminViewGuest";
import AdminViewRoom from "./Pages/admin-view/AdminViewRoom";
import AdminViewFeedback from "./Pages/admin-view/AdminViewFeedback";
import AdminViewBilling from "./Pages/admin-view/AdminViewBilling";
import AdminViewInvoice from "./Pages/admin-view/AdminViewInvoice";
import StaffCreatePage from "./Pages/admin-view/StaffCreatePage";
import RoomCreatePage from "./Pages/admin-view/RoomCreatePage";
import LoginForm from "./Components/Auth/LoginForm";
import GuestCreatePage from "./Pages/admin-view/GuestCreatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={true}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminViewDashboard />} />
          <Route path="staff" element={<AdminViewStaff />} />
          <Route path="guest" element={<AdminViewGuest />} />
          <Route path="room" element={<AdminViewRoom />} />
          <Route path="feedback" element={<AdminViewFeedback />} />
          <Route path="billing" element={<AdminViewBilling />} />
          <Route path="invoice" element={<AdminViewInvoice />} />
          <Route path="staff/add" element={<StaffCreatePage />} />
          <Route path="room/add" element={<RoomCreatePage />} />
          <Route path="guest/add" element={<GuestCreatePage />} />
        </Route>
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />{" "}
        {/* Default fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
