import React from 'react';
import { useLocation } from 'react-router-dom';

import AdminViewDashboard from '../../Pages/admin-view/AdminViewDashboard';
import AdminViewStaff from '../../Pages/admin-view/AdminViewStaff';
import AdminViewGuest from '../../Pages/admin-view/AdminViewGuest';
import AdminViewRoom from '../../Pages/admin-view/AdminViewRoom';
import AdminViewFeedback from '../../Pages/admin-view/AdminViewFeedback';
import AdminViewBilling from '../../Pages/admin-view/AdminViewBilling';
import AdminViewInvoice from '../../Pages/admin-view/AdminViewInvoice';

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
    case '/admin/feedback':
      content = <AdminViewFeedback />;
      break;
    case '/admin/billing':
      content = <AdminViewBilling />;
      break;
    case '/admin/invoice':
      content = <AdminViewInvoice />;
      break;
    default:
      content = <AdminViewDashboard />;
  }

  return <div className="main-content">{content}</div>;
};

export default MainContent;
