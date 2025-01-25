import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // If the user is on the root route and not authenticated, redirect to login
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      // Redirect based on the role of the user
      switch (user?.userRole) {
        case "admin":
          return <Navigate to="/admin/dashboard" />;
        case "receptionist":
          return <Navigate to="/receptionist/dashboard" />;
        case "manager":
          return <Navigate to="/manager/dashboard" />;
        case "housekeeper":
          return <Navigate to="/housekeeper/dashboard" />;
        default:
          return <Navigate to="/auth/login" />;
      }
    }
  }

  // If not authenticated and the user is not on the login or register pages, redirect to login
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // If authenticated but trying to access login or register page, redirect based on role
  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register"))
  ) {
    switch (user?.userRole) {
      case "admin":
        return <Navigate to="/admin/dashboard" />;
      case "receptionist":
        return <Navigate to="/receptionist/dashboard" />;
      case "manager":
        return <Navigate to="/manager/dashboard" />;
      case "housekeeper":
        return <Navigate to="/housekeeper/dashboard" />;
      default:
        return <Navigate to="/auth/login" />;
    }
  }

  // Block access to admin, receptionist, or manager panels for the wrong user role
  if (isAuthenticated) {
    if (user?.userRole === "admin" && location.pathname.includes("receptionist")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "admin" && location.pathname.includes("manager")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "admin" && location.pathname.includes("housekeeper")) {
      return <Navigate to="/un-auth" />;
    }

    if (user?.userRole === "receptionist" && location.pathname.includes("admin")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "receptionist" && location.pathname.includes("manager")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "receptionist" && location.pathname.includes("housekeeper")) {
      return <Navigate to="/un-auth" />;
    }

    if (user?.userRole === "manager" && location.pathname.includes("admin")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "manager" && location.pathname.includes("receptionist")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "manager" && location.pathname.includes("housekeeper")) {
      return <Navigate to="/un-auth" />;
    }

    if (user?.userRole === "housekeeper" && location.pathname.includes("admin")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "housekeeper" && location.pathname.includes("receptionist")) {
      return <Navigate to="/un-auth" />;
    }
    if (user?.userRole === "housekeeper" && location.pathname.includes("manager")) {
      return <Navigate to="/un-auth" />;
    }
  }

  // If everything is good, render the children (i.e. the protected route content)
  return <>{children}</>;
}

export default CheckAuth;
