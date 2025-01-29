import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../Slices/AdminAuthSlice";

const CheckAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { staff, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && staff) {
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
    }
  }, [staff, loading, navigate]);

  return <>{children}</>;
};

export default CheckAuth;
