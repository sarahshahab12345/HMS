import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './Components/Layout/AdminLayout';
import CheckAuth from './Common/checkAuth';
import AdminViewDashboard from './Pages/admin-view/AdminViewDashboard';
import AdminViewStaff from './Pages/admin-view/AdminViewStaff';
import AdminViewGuest from './Pages/admin-view/AdminViewGuest';
import AdminViewRoom from './Pages/admin-view/AdminViewRoom';
import AdminViewFeedback from './Pages/admin-view/AdminViewFeedback';
import AdminViewBilling from './Pages/admin-view/AdminViewBilling';
import AdminViewInvoice from './Pages/admin-view/AdminViewInvoice';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
