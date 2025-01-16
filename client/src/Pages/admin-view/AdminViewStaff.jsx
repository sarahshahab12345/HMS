import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaff } from '../../Slices/staffSlice.js';

const AdminViewStaff = () => {
  const dispatch = useDispatch();
  const { staffMembers, isLoading, error } = useSelector((state) => state.staff);

  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading staff members...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Staff ID</th>
                <th className="p-4 border border-gray-300">Name</th>
                <th className="p-4 border border-gray-300">Role</th>
                <th className="p-4 border border-gray-300">Email</th>
                <th className="p-4 border border-gray-300">Password</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff, index) => (
                <tr key={staff._id} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="p-4 border border-gray-300">{staff._id}</td>
                  <td className="p-4 border border-gray-300">{staff.staffName}</td>
                  <td className="p-4 border border-gray-300">{staff.staffRole}</td>
                  <td className="p-4 border border-gray-300">{staff.staffEmail}</td>
                  <td className="p-4 border border-gray-300">{staff.staffPassword}</td>
                  <td className="p-4 border border-gray-300 flex space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminViewStaff;
