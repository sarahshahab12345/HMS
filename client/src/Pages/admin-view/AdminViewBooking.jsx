import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import {
  getAllBookings,
  deleteBooking,
  updateBooking,
} from "../../Slices/bookingSlice.js";
import BookingDetailsDialog from "./Details/BookingDetailsDialog.jsx";
import UpdateBookingDialog from "./UpdateDetails/UpdateBookingDialog.jsx";

const AdminViewBookings = () => {
  const dispatch = useDispatch();
  const { isLoading, bookings, error } = useSelector((state) => state.booking);

  // Fetch bookings on component mount
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  const [selectedBooking, setselectedBooking] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  const handleOpenDialog = (booking) => {
    setselectedBooking(booking);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setselectedBooking(null);
    setDialogOpen(false);
  };

  const handleOpenUpdateDialog = (booking) => {
    setselectedBooking(booking);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setselectedBooking(null);
    setUpdateDialogOpen(false);
  };

  const openConfirmDialog = (id) => {
    setBookingToDelete(id);
    setConfirmDialogOpen(true);
  };

  const closeConfirmDialog = () => {
    setBookingToDelete(null);
    setConfirmDialogOpen(false);
  };

  const handleUpdate = (updatedBooking) => {
    if (updatedBooking && updatedBooking._id) {
      const { _id: id, ...formData } = updatedBooking; 
      dispatch(updateBooking({ id, formData }))
        .unwrap()
        .then(() => {
          console.log("Booking updated successfully!");
          // Fetch the updated booking list
          dispatch(getAllBookings());
        })
        .catch((error) => {
          console.error("Failed to update booking:", error);
        });
    } else {
      console.error("Invalid booking data. Cannot update.");
    }
  };

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id))
      .unwrap()
      .then(() => {
        console.log("Booking deleted successfully!");
        // Delay fetching updated bookings slightly
        setTimeout(() => {
          dispatch(getAllBookings());
        }, 100); // Adjust delay if needed
      })
      .catch((error) => {
        console.error("Failed to delete booking:", error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
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
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
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
                        <td className="p-4 border border-gray-300">
                          {booking.bookingId}
                        </td>
                        <td className="p-4 border border-gray-300">
                          {booking.guestId ? booking.guestId._id : "N/A"}
                        </td>
                        <td className="p-4 border border-gray-300">
                          {booking.roomId ? booking.roomId._id : "N/A"}
                        </td>
                        <td className="p-4 border border-gray-300">
                          {booking.bookingPlatform}
                        </td>
                        <td className="p-4 border border-gray-300">
                          {new Date(
                            booking.bookingStartDate
                          ).toLocaleDateString()}
                        </td>
                        <td className="p-4 border border-gray-300">
                          {new Date(
                            booking.bookingEndDate
                          ).toLocaleDateString()}
                        </td>
                        <td className="p-4 border border-gray-300">
                          ${booking.totalAmount}
                        </td>
                        <td className="p-4 border border-gray-300 flex space-x-2">
                          <button
                            className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white"
                            onClick={() => handleOpenUpdateDialog(booking)}
                          >
                            <AiOutlineEdit className="mr-1" />
                          </button>
                          <button
                            className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white"
                            onClick={() => openConfirmDialog(booking._id)}
                          >
                            <AiOutlineDelete className="mr-1" />
                          </button>

                          <button
                            className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                            onClick={() => handleOpenDialog(booking)}
                          >
                            <AiOutlineFile className="mr-1" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="p-4 border border-gray-300 text-center"
                      >
                        No bookings available.
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="p-4 border border-gray-300 text-center"
                    >
                      Loading data...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* Dialog Component */}
      {selectedBooking && (
        <BookingDetailsDialog
          open={dialogOpen}
          booking={selectedBooking}
          onClose={handleCloseDialog}
        />
      )}

      {/* Update Dialog Component */}
      {selectedBooking && (
        <UpdateBookingDialog
          open={updateDialogOpen}
          booking={selectedBooking}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
        />
      )}

      {confirmDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Are you sure you want to delete this booking?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeConfirmDialog}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                  handleDeleteBooking(bookingToDelete);
                  closeConfirmDialog();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminViewBookings;
