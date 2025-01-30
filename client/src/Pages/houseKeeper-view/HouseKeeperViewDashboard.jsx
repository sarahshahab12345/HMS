import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HouseKeeperViewDashboard = () => {
  const chartData = {
    labels: ["Rooms Cleaned", "Laundry", "Requests", "Complaints"],
    datasets: [
      {
        label: "Housekeeping Overview",
        data: [25, 15, 7, 3], 
        backgroundColor: ["#34D399", "#10B981", "#6EE7B7", "#34D399"],
      },
    ],
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center">
        <h1 className="italic text-center text-4xl font-bold mb-4 text-gray-700">
          Housekeeper Dashboard
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl">
          <Card title="Rooms Cleaned" count="25" color="text-green-600" />
          <Card title="Laundry" count="15" color="text-green-600" />
          <Card title="Requests" count="7" color="text-green-600" />
          <Card title="Complaints" count="3" color="text-green-600" />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
          <Card title="Supplies" count="5" color="text-green-600" />
          <Card title="Staff Meetings" count="2" color="text-green-600" />
          <Card title="Reports" count="1" color="text-green-600" />
        </div>

        {/* Chart Section */}
        <div className="w-full max-w-4xl mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Housekeeping Overview</h2>
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

export default HouseKeeperViewDashboard;
