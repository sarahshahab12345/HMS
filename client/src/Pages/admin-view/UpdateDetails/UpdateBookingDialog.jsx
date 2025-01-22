import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Slices/image-uploadSlice.js"; // Adjust if necessary

const UpdateBookingDialog = ({ open, booking, onClose, onUpdate }) => {
  const [updatedBooking, setUpdatedBooking] = useState(booking || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (booking) {
      setUpdatedBooking(booking);
    }
  }, [booking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking({ ...updatedBooking, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking({ ...updatedBooking, [name]: new Date(value) });
  };

  const handleUpdate = () => {
    const {
      guestId,
      roomId,
      bookingPlatform,
      bookingStartDate,
      bookingEndDate,
      comments,
      checkIn,
      checkOut,
      isCancelled,
      foodsArray,
      totalAmount,
    } = updatedBooking;

    if (
      !guestId ||
      !roomId ||
      !bookingPlatform ||
      !bookingStartDate ||
      !bookingEndDate ||
      !totalAmount
    ) {
      alert("All required fields must be filled out!");
      return;
    }

    if (isNaN(totalAmount)) {
      alert("Total amount must be a valid number.");
      return;
    }

    const payload = { ...updatedBooking };
    onUpdate(payload);
    onClose();
  };

  const handleClose = () => {
    setUpdatedBooking(booking);
    onClose();
  };

  return (
    open && (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        onClick={handleClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-1/2 overflow-auto max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl mb-4">Update Booking Details</h3>

          <div className="mb-4">
            <label htmlFor="guestId" className="block mb-2">
              Guest ID
            </label>
            <input
              type="text"
              id="guestId"
              name="guestId"
              value={updatedBooking.guestId || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomId" className="block mb-2">
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              name="roomId"
              value={updatedBooking.roomId || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bookingPlatform" className="block mb-2">
              Booking Platform
            </label>
            <select
              id="bookingPlatform"
              name="bookingPlatform"
              value={updatedBooking.bookingPlatform || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="">Select Platform</option>
              <option value="OnSite">OnSite</option>
              <option value="Website">Website</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="bookingStartDate" className="block mb-2">
              Booking Start Date
            </label>
            <input
              type="date"
              id="bookingStartDate"
              name="bookingStartDate"
              value={
                updatedBooking.bookingStartDate
                  ? updatedBooking.bookingStartDate.split("T")[0]
                  : ""
              }
              onChange={handleDateChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bookingEndDate" className="block mb-2">
              Booking End Date
            </label>
            <input
              type="date"
              id="bookingEndDate"
              name="bookingEndDate"
              value={
                updatedBooking.bookingEndDate
                  ? updatedBooking.bookingEndDate.split("T")[0]
                  : ""
              }
              onChange={handleDateChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comments" className="block mb-2">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={updatedBooking.comments || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="totalAmount" className="block mb-2">
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              value={updatedBooking.totalAmount || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateBookingDialog;
