import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGuest } from '../../Slices/guestSlice';

function UpdateGuestDialog({ guestId, onClose }) {
  const dispatch = useDispatch();
  const { guests } = useSelector((state) => state.guests);

  const [guestDetails, setGuestDetails] = useState({
    guestName: '',
    guestContactNo: '',
    guestCity: '',
    guestCountry: '',
    guestEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails({
      ...guestDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestId) {
      dispatch(updateGuest({ id: guestId, formData: guestDetails }));
      onClose();
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Update Guest Details
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label htmlFor="guestName" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={guestDetails.guestName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guestContactNo" className="block text-gray-700">
              Contact No
            </label>
            <input
              type="text"
              id="guestContactNo"
              name="guestContactNo"
              value={guestDetails.guestContactNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guestCity" className="block text-gray-700">
              City
            </label>
            <input
              type="text"
              id="guestCity"
              name="guestCity"
              value={guestDetails.guestCity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guestCountry" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="guestCountry"
              name="guestCountry"
              value={guestDetails.guestCountry}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guestEmail" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="guestEmail"
              name="guestEmail"
              value={guestDetails.guestEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateGuestDialog;
