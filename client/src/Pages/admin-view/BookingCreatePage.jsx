import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../Slices/bookingSlice";
import { getAllGuests } from "../../Slices/guestSlice";  

function BookingCreatePage() {
  const dispatch = useDispatch();
  const { guests, isLoading, error } = useSelector((state) => state.guests); 
  const [formData, setFormData] = useState({
    guestId: "",
    roomId: "",
    bookingPlatform: "",
    bookingStartDate: "",
    bookingEndDate: "",
    comments: "",
    checkOut: "",
    isCancelled: false,
    foodsArray: [],
    totalAmount: "",
  });

  useEffect(() => {
    dispatch(getAllGuests());  
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isCancelled: e.target.checked });
  };

  const generateBookingId = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900); 9
    return `B${randomNumber}`;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Generate random booking ID
    const generatedBookingId = generateBookingId();

    // Capture the exact current time for checkIn
    const currentTime = new Date().toISOString();

    const newFormData = {
      ...formData,
      bookingId: generatedBookingId,
      checkIn: currentTime, // Automatically set current time as checkIn
    };

    // Dispatch the action to create the booking
    dispatch(createBooking(newFormData));

    // Reset form data
    setFormData({
      guestId: "",
      roomId: "",
      bookingPlatform: "",
      bookingStartDate: "",
      bookingEndDate: "",
      comments: "",
      checkOut: "",
      isCancelled: false,
      foodsArray: [],
      totalAmount: "",
    });
  };

  if (isLoading) {
    return <p>Loading guests...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Booking</h2>
        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="guestId" className="text-gray-700 text-lg">
                Guest ID
              </label>
              <select
                name="guestId"
                value={formData.guestId}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              >
                <option value="">Select Guest</option>
                {guests.map((guests) => (
                  <option key={guests._id} value={guests._id}>
                    {guests.name} ({guests._id})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="roomId" className="text-gray-700 text-lg">
                Room ID
              </label>
              <input
                type="text"
                name="roomId"
                value={formData.roomId}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Room ID"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="bookingPlatform" className="text-gray-700 text-lg">
                Booking Platform
              </label>
              <select
                name="bookingPlatform"
                value={formData.bookingPlatform}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              >
                <option value="">Select Platform</option>
                <option value="OnSite">OnSite</option>
                <option value="Website">Website</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="bookingStartDate" className="text-gray-700 text-lg">
                Booking Start Date
              </label>
              <input
                type="date"
                name="bookingStartDate"
                value={formData.bookingStartDate}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="bookingEndDate" className="text-gray-700 text-lg">
                Booking End Date
              </label>
              <input
                type="date"
                name="bookingEndDate"
                value={formData.bookingEndDate}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="comments" className="text-gray-700 text-lg">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Comments"
                rows="4"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="checkOut" className="text-gray-700 text-lg">
                Check Out
              </label>
              <input
                type="time"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="isCancelled" className="text-gray-700 text-lg">
                Is Cancelled
              </label>
              <input
                type="checkbox"
                name="isCancelled"
                checked={formData.isCancelled}
                onChange={handleCheckboxChange}
                className="mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodsArray" className="text-gray-700 text-lg">
                Foods Array (Optional)
              </label>
              <input
                type="text"
                name="foodsArray"
                value={formData.foodsArray}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Food Items"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="totalAmount" className="text-gray-700 text-lg">
                Total Amount
              </label>
              <input
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Total Amount"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingCreatePage;
