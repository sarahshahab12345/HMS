import React from 'react';
import { useLocation } from 'react-router-dom';

import HouseKeeperViewDashboard from '../../../Pages/houseKeeper-view/HouseKeeperViewDashboard';
import HouseKeeperViewRooms from '../../../Pages/houseKeeper-view/HouseKeeperViewRooms';
import HouseKeeperViewBookedRooms from '../../../Pages/houseKeeper-view/HouseKeeperViewBookedRooms';
import HouseKeeperViewAnnouncement from '../../../Pages/houseKeeper-view/HouseKeeperViewAnnouncement';
import LoginForm from '../../Auth/LoginForm';

const MainContent = () => {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case '/housekeeper':
      content = <HouseKeeperViewDashboard />;
      break;
      case '/housekeeper/rooms':
        content = <HouseKeeperViewRooms />;
        break;
      case '/housekeeper/booked-rooms':
        content = <HouseKeeperViewBookedRooms />;
        break;
      case '/housekeeper/announcement':
        content = <HouseKeeperViewAnnouncement />;
        break;
        case '/auth/login':
          content = <LoginForm />;
          break;
    default:
      // Redirect to a 'Not Found' or Dashboard as fallback
      content = <HouseKeeperViewDashboard />;
  }

  return <div className="main-content">{content}</div>;
};

export default MainContent;
