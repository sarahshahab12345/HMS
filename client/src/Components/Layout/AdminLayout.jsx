import React from 'react';
import Sidebar from './sidebar';
import MainContent from './MainContent';

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1">
        {/* Header with Logout */}
        <div className="flex items-center justify-between p-4 bg-gray-700 text-white">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          
          {/* Logout Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
        
        {/* Main Content Area */}
        <div className="p-4">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
