import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../Slices/AdminAuthSlice";

const CheckAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { staff, loading } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (staff && staff.staffRole) {
        switch (staff.staffRole) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "receptionist":
            navigate("/receptionist/dashboard");
            break;
          case "manager":
            navigate("/manager/dashboard");
            break;
          case "housekeeper":
            navigate("/housekeeper/dashboard");
            break;
          default:
            navigate("/login");
            break;
        }
      } else {
        setChecked(true); // No staff or role, proceed to login
      }
    }
  }, [staff, loading, navigate]); // Watch for updates in staff or loading state
  

  if (loading || !checked) return null;

  return <>{children}</>;
};

export default CheckAuth;
