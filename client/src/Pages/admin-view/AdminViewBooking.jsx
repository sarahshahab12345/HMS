import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import { getAllBookings } from "../../Slices/bookingSlice.js";

const AdminViewBookings = () => {
  const dispatch = useDispatch();
  const { isLoading, bookings, error } = useSelector((state) => state.booking);

  // Fetch bookings on component mount
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (isLoading) {
    return <p className="text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Booking Management
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Booking ID</th>
                <th className="p-4 border border-gray-300">Guest ID</th>
                <th className="p-4 border border-gray-300">Room ID</th>
                <th className="p-4 border border-gray-300">Platform</th>
                <th className="p-4 border border-gray-300">Start Date</th>
                <th className="p-4 border border-gray-300">End Date</th>
                <th className="p-4 border border-gray-300">Total Amount</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(bookings.data?.bookings) ? (
                bookings.data.bookings.length > 0 ? (
                  bookings.data.bookings.map((booking, index) => (
                    <tr
                      key={booking._id}
                      className={`bg-white ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                      }`}
                    >
                      <td className="p-4 border border-gray-300">{booking.bookingId}</td>
                      <td className="p-4 border border-gray-300">
                        {booking.guestId ? booking.guestId._id : "N/A"}
                      </td>
                      <td className="p-4 border border-gray-300">
                        {booking.roomId ? booking.roomId._id : "N/A"}
                      </td>
                      <td className="p-4 border border-gray-300">{booking.bookingPlatform}</td>
                      <td className="p-4 border border-gray-300">
                        {new Date(booking.bookingStartDate).toLocaleDateString()}
                      </td>
                      <td className="p-4 border border-gray-300">
                        {new Date(booking.bookingEndDate).toLocaleDateString()}
                      </td>
                      <td className="p-4 border border-gray-300">${booking.totalAmount}</td>
                      <td className="p-4 border border-gray-300 flex space-x-2">
                        <button className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white">
                          <AiOutlineEdit className="mr-1" />
                        </button>
                        <button className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white">
                          <AiOutlineDelete className="mr-1" />
                        </button>
                        <button className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white">
                          <AiOutlineFile className="mr-1" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-4 border border-gray-300 text-center">
                      No bookings available.
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="8" className="p-4 border border-gray-300 text-center">
                    Loading data...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewBookings;
