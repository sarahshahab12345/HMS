import React from "react";
import checkedin from "../../../public/checkedin.png";
import guest from "../../../public/guest.jpg";
import maintenance from "../../../public/maintenance.png";
import occupied from "../../../public/occupied.png";
import rating from "../../../public/rating.png";
import roomAvailable from "../../../public/roomAvailable.png";
import staff from "../../../public/staff.png";
import totalroom from "../../../public/totalroom.png";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminViewDashboard = () => {
  const chartData = {
    labels: ["Staff", "Guest", "Room", "Booking", "Food", "Feedback", "Billing", ],
    datasets: [
      {
        label: "Staff Overview",
        data: [20, 18, 15, 13, 19, 4, 17], 
        backgroundColor: ["#002244", "#034694", "#4B9CD3"],
      },
    ],
  };

  return (
    <div className="p-4 sm:ml-64">
      {/* First Row */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={checkedin} alt="Total Checked-In" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">TOTAL CHECKED-IN</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">200</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={guest} alt="Total Guest" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">TOTAL GUEST</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">50</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={staff} alt="Total Staff" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">TOTAL STAFF</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">30</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={rating} alt="Total Rating" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">TOTAL RATING</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">4.8</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={totalroom} alt="Total Rooms" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">TOTAL ROOMS</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">120</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={occupied} alt="Occupied Rooms" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">OCCUPIED ROOMS</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">80</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={roomAvailable} alt="Available Rooms" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">AVAILABLE ROOMS</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">40</p>
        </div>
        <div className="flex flex-col items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <img src={maintenance} alt="Rooms in Maintenance" className="w-10 h-10" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 mt-2">ROOMS MAINTENANCE</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">10</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="max-full mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-xl font-semibold mb-4">Staff Overview</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default AdminViewDashboard;
