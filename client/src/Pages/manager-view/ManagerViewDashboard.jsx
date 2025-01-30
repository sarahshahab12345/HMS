import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ManagerViewDashboard = () => {
  const chartData = {
    labels: ["Staff", "Guests", "Rooms", "Booked Rooms"],
    datasets: [
      {
        label: "Dashboard Overview",
        data: [9, 30, 18, 12], 
        backgroundColor: ["#16A34A", "#22C55E", "#4ADE80", "#34D399"],
      },
    ],
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center">
        <h1 className="italic text-center text-4xl font-bold mb-4 text-gray-700">
          Manager View Dashboard
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl">
          <Card title="Staff" count="9" color="text-green-600" />
          <Card title="Guests" count="30" color="text-green-600" />
          <Card title="Rooms" count="18" color="text-green-600" />
          <Card title="Booked Rooms" count="12" color="text-green-600" />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
          <Card title="Food" count="12" color="text-green-600" />
          <Card title="Feedback" count="6" color="text-green-600" />
          <Card title="Announcement" count="2" color="text-green-600" />
        </div>

        {/* Chart Section */}
        <div className="w-full max-w-4xl mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Dashboard Overview</h2>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ title, count, color }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className={`text-3xl font-bold ${color}`}>{count}</p>
    </div>
  );
};

export default ManagerViewDashboard;
