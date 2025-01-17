import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGuests } from '../../Slices/guestSlice.js';

const AdminViewGuests = () => {
  const dispatch = useDispatch();
  const { guests, isLoading, error } = useSelector((state) => state.guests);

  useEffect(() => {
    dispatch(getAllGuests());
  }, [dispatch]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading guests...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Guest ID</th>
                <th className="p-4 border border-gray-300">Name</th>
                <th className="p-4 border border-gray-300">Contact No</th>
                <th className="p-4 border border-gray-300">City</th>
                <th className="p-4 border border-gray-300">Country</th>
                <th className="p-4 border border-gray-300">Email</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, index) => (
                <tr key={guest._id} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="p-4 border border-gray-300">{guest._id}</td>
                  <td className="p-4 border border-gray-300">{guest.guestName}</td>
                  <td className="p-4 border border-gray-300">{guest.guestContactNo}</td>
                  <td className="p-4 border border-gray-300">{guest.guestCity}</td>
                  <td className="p-4 border border-gray-300">{guest.guestCountry}</td>
                  <td className="p-4 border border-gray-300">{guest.guestEmail}</td>
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

export default AdminViewGuests;
