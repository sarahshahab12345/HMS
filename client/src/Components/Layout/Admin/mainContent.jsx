import React from 'react';
import { useLocation } from 'react-router-dom';

import AdminViewDashboard from '../../../Pages/admin-view/AdminViewDashboard';
import AdminViewStaff from '../../../Pages/admin-view/AdminViewStaff';
import AdminViewGuest from '../../../Pages/admin-view/AdminViewGuest';
import AdminViewRoom from '../../../Pages/admin-view/AdminViewRoom';
import AdminViewFeedback from '../../../Pages/admin-view/AdminViewFeedback';
import AdminViewBilling from '../../../Pages/admin-view/AdminViewBilling';
import StaffCreatePage from '../../../Pages/admin-view/StaffCreatePage';
import RoomCreatePage from '../../../Pages/admin-view/RoomCreatePage';   
import LoginForm from '../../Auth/LoginForm';
import GuestCreatePage from '../../../Pages/admin-view/GuestCreatePage';
import BookingCreatePage from '../../../Pages/admin-view/BookingCreatePage';
import AdminViewBooking from '../../../Pages/admin-view/AdminViewBooking';
import AdminViewFood from '../../../Pages/admin-view/AdminViewFood';
import FoodCreatePage from '../../../Pages/admin-view/FoodCreatePage';

const MainContent = () => {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case '/admin/dashboard':
      content = <AdminViewDashboard />;
      break;
    case '/admin/staff':
      content = <AdminViewStaff />;
      break;
    case '/admin/guest':
      content = <AdminViewGuest />;
      break;
    case '/admin/room':
      content = <AdminViewRoom />;
      break;
    case '/admin/booking':
      content = <AdminViewBooking />;
      break;
    case '/admin/food':
      content = <AdminViewFood />;
      break;
    case '/admin/feedback':
      content = <AdminViewFeedback />;
      break;
    case '/admin/billing':
      content = <AdminViewBilling />;
      break;
    case '/admin/staff/add':
      content = <StaffCreatePage />;
      break;
    case '/admin/guest/add':
      content = <GuestCreatePage />;
      break;
    case '/admin/room/add':
      content = <RoomCreatePage />;
      break;
    case '/admin/booking/add':
      content = <BookingCreatePage />;
      break;
    case '/admin/food/add':
      content = <FoodCreatePage />;
      break;
    case '/auth/login':
      content = <LoginForm />;
      break;
    default:
      // Redirect to a 'Not Found' or Dashboard as fallback
      content = <AdminViewDashboard />;
  }

  return <div className="main-content">{content}</div>;
};

export default MainContent;
