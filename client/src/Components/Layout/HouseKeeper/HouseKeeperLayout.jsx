import React from 'react'
import MainContent from '../HouseKeeper/mainContent'
import Sidebar from '../HouseKeeper/sidebar'
import { useDispatch } from "react-redux";
import { logout } from "../../../Slices/AdminAuthSlice.js"; 
import { useNavigate } from "react-router-dom";

function HouseKeeperLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout()); 
    navigate("/auth/login"); 
  };

  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    <div className="flex-1">
      {/* Header with Buttons */}
      <div className="flex items-center justify-end p-4 bg-gray-700 text-white">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
            <button
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded mr-2"
                  onClick={handleLogout} 
                >
                  Logout
                </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4">
        <MainContent />
      </div>
    </div>
  </div>
  )
}

export default HouseKeeperLayout