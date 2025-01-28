import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const CheckAuth = ({ isAuthenticated, children }) => {
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (token) {
      const decoded = jwtDecode(token);
      const { staffRole } = decoded;

      if (!navigating) {
        setNavigating(true);
        setTimeout(() => {
          switch (staffRole) {
            case "Admin":
              return <Navigate to="/admin/dashboard" />;
            case "Receptionist":
              return <Navigate to="/receptionist/dashboard" />;
            case "Manager":
              return <Navigate to="/manager/dashboard" />;
            case "Housekeeper":
              return <Navigate to="/housekeeper/dashboard" />;
            default:
              return <Navigate to="/login" />;
          }
        }, 200); 
      }
    }
  }, [isAuthenticated, navigating]); 
  return <>{children}</>;
};

export default CheckAuth;
