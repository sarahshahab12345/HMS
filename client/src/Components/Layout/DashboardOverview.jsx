import React from "react";
import checkedin from "../../../public/checkedin.png";
import guest from "../../../public/guest.jpg";
import maintenance from "../../../public/maintenance.png";
import occupied from "../../../public/occupied.png";
import rating from "../../../public/rating.png";
import roomAvailable from "../../../public/roomAvailable.png";
import staff from "../../../public/staff.png";
import totalroom from "../../../public/totalroom.png";
import DashboardGraph from "./DashboardGraph";

function DashboardOverview() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={checkedin}
                alt="Total Checked-In" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">TOTAL CHECKED-IN</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={guest} 
                alt="Total Guest" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">TOTAL GUEST</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={staff} 
                alt="Total Staff" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">TOTAL STAFF</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={rating} 
                alt="Total Rating" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">TOTAL RATING</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={totalroom} 
                alt="Total Rooms" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">TOTAL ROOMS</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={occupied} 
                alt="Occupied Rooms" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">OCCUPIED ROOMS</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={roomAvailable} 
                alt="Available Rooms" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">AVAILABLE ROOMS</p>
          </div>
          <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <img 
                src={maintenance} 
                alt="Rooms in Maintenance" 
                className="w-10 h-10"
              />
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 ml-4">ROOMS MAINTENANCE</p>
          </div>
        </div>
      <DashboardGraph/>
      </div>

    </>
  );
}

export default DashboardOverview;
