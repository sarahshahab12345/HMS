import React from "react";
import { useLocation } from "react-router-dom";

import LoginForm from "../../Auth/LoginForm";
import GuestCreatePage from "../../../Pages/manager-view/GuestCreatePage";
import ReceptionistViewAnnouncement from "../../../Pages/receptionist-view/ReceptionistViewAnnouncement";
import ReceptionistViewDashboard from "../../../Pages/receptionist-view/ReceptionistViewDashboard";
import ReceptionistViewGuest from "../../../Pages/receptionist-view/ReceptionistViewGuest";
import ReceptionistViewRooms from "../../../Pages/receptionist-view/ReceptionistViewRooms";
import ReceptionistViewBookedRooms from "../../../Pages/receptionist-view/ReceptionistViewBookedRooms";
import ReceptionistViewFood from "../../../Pages/receptionist-view/ReceptionistViewFood";
import ReceptionistViewFeedback from "../../../Pages/receptionist-view/ReceptionistViewFeedback";
import CreateBookedRoomsPage from "../../../Pages/receptionist-view/CreateBookedRoomsPage";
import CreateFeedbackPage from "../../../Pages/receptionist-view/CreateFeedbackPage";

const MainContent = () => {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case "/receptionist":
      content = <ReceptionistViewDashboard />;
      break;
    case "/receptionist/guest":
      content = <ReceptionistViewGuest />;
      break;
    case "/receptionist/rooms":
      content = <ReceptionistViewRooms />;
      break;
    case "/receptionist/booked-rooms":
      content = <ReceptionistViewBookedRooms />;
      break;
    case "/receptionist/food":
      content = <ReceptionistViewFood />;
      break;
    case "/receptionist/feedback":
      content = <ReceptionistViewFeedback />;
      break;
    case "/receptionist/announcement":
      content = <ReceptionistViewAnnouncement />;
      break;
    case "/receptionist/guest/add":
      content = <GuestCreatePage />;
      break;
    case "/receptionist/booked-rooms/add":
      content = <CreateBookedRoomsPage />;
      break;
    case "/receptionist/feedback/add":
      content = <CreateFeedbackPage />;
      break;
    case "/auth/login":
      content = <LoginForm />;
      break;
    default:
      // Redirect to a 'Not Found' or Dashboard as fallback
      content = <ReceptionistViewDashboard />;
  }

  return <div className="main-content">{content}</div>;
};

export default MainContent;
