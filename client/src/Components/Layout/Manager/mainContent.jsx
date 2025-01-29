import React from 'react';
import { useLocation } from 'react-router-dom';

import LoginForm from '../../Auth/LoginForm';
import ManagerViewDashboard from '../../../Pages/manager-view/ManagerViewDashboard';
import ManagerViewStaff from '../../../Pages/manager-view/ManagerViewStaff';
import ManagerViewRooms from '../../../Pages/manager-view/ManagerViewRooms';
import ManagerViewBookedRooms from '../../../Pages/manager-view/ManagerViewBookedRooms';
import ManagerViewFood from '../../../Pages/manager-view/ManagerViewFood';
import ManagerViewFeedback from '../../../Pages/manager-view/ManagerViewFeedback';
import ManagerViewAnnouncement from '../../../Pages/manager-view/ManagerViewAnnouncement';
import ManagerViewGuest from '../../../Pages/manager-view/ManagerViewGuest';
import GuestCreatePage from '../../../Pages/manager-view/GuestCreatePage';
import FoodCreatePage from '../../../Pages/manager-view/FoodCreatePage';

const MainContent = () => {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case '/manager':
      content = <ManagerViewDashboard />;
      break;
      case '/manager/staff':
        content = <ManagerViewStaff />;
        break;
      case '/manager/guest':
        content = <ManagerViewGuest />;
        break;
      case '/manager/rooms':
        content = <ManagerViewRooms />;
        break;
      case '/manager/booked-rooms':
        content = <ManagerViewBookedRooms />;
        break;
      case '/manager/food':
        content = <ManagerViewFood />;
        break;
      case '/manager/feedback':
        content = <ManagerViewFeedback />;
        break;
      case '/manager/announcement':
        content = <ManagerViewAnnouncement />;
        break;
      case '/manager/guest/add':
        content = <GuestCreatePage />;
        break;
      case '/manager/food/add':
        content = <FoodCreatePage />;
        break;
        case '/auth/login':
          content = <LoginForm />;
          break;
    default:
      // Redirect to a 'Not Found' or Dashboard as fallback
      content = <ManagerViewDashboard />;
  }

  return <div className="main-content">{content}</div>;
};

export default MainContent;
