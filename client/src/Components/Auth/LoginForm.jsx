import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, checkAuth } from "../../Slices/AdminAuthSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, staff } = useSelector((state) => state.auth); // Directly use Redux state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Dispatch the login action
      await dispatch(login({ staffEmail: email, staffPassword: password })).unwrap();
      
      // Check if the user is authenticated and their role
      const authResponse = await dispatch(checkAuth()).unwrap();
      if (!authResponse?.staff?.staffRole) {
        console.error("No staff role found, staying on login page");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  
  // UseEffect hook directly listens to the staff state
  useEffect(() => {
    if (staff && staff.staffRole) {
      // Role-based navigation logic once authentication is successful
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
  }, [staff, navigate]); // Directly track the staff state for changes

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-200 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
