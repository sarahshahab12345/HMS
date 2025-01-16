import React from 'react';

const CheckAuth = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <div>You are not authorized to view this page</div>;
  }
  return children;
};

export default CheckAuth;
