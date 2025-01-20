import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Slices/image-uploadSlice.js"; 

function UpdateGuestDialog({ open, guest, onClose, onUpdate }) {
  // State to hold updated guest data
  const [updateGuest, setupdateGuest] = useState(guest || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (guest) {
      setupdateGuest(guest);
    }
  }, [guest]);

  // Handle changes to form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setupdateGuest({ ...updateGuest, [name]: value });
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        dispatch(uploadImage(base64Image));
        setupdateGuest({ ...updateGuest, guestNicPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle the update process
  const handleUpdate = () => {
    if (!updateGuest || !updateGuest.guestId) {
      console.error("No guest selected or updateGuest is missing 'guestId'");
      return;
    }

    const {
      guestName,
      guestEmail,
      guestNicNo,
      guestContactNo,
      guestNicPicture,
      guestCity,
      guestCountry,
      guestPassword,
      guestGender,
    } = updateGuest;

    // Validate that all fields are filled out
    if (
      !guestName ||
      !guestEmail ||
      !guestNicNo ||
      !guestContactNo ||
      !guestNicPicture ||
      !guestCity ||
      !guestCountry ||
      !guestPassword ||
      !guestGender
    ) {
      alert("All fields must be filled out!");
      return;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(guestEmail)) {
      alert("Please provide a valid email address.");
      return;
    }

    // Prepare payload for the update action
    const payload = { ...updateGuest };
    if (!payload.guestPassword) {
      delete payload.guestPassword;
    }

    // Trigger the update callback with the prepared payload
    onUpdate(payload);
    onClose();
  };

  // Handle closing the dialog
  const handleClose = () => {
    setupdateGuest(guest);
    onClose();
  };

  return (
    open && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 overflow-auto max-h-[80vh]">
        <h3 className="text-2xl mb-4 text-gray-700 text-center">
          Update Guest Details
        </h3>

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="guestName" className="block mb-2 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={updateGuest.guestName}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestEmail" className="block mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="guestEmail"
              name="guestEmail"
              value={updateGuest.guestEmail}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestNicNo" className="block mb-2 text-gray-600">
              NIC Number
            </label>
            <input
              type="text"
              id="guestNicNo"
              name="guestNicNo"
              value={updateGuest.guestNicNo}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="guestContactNo"
              className="block mb-2 text-gray-600"
            >
              Contact No
            </label>
            <input
              type="text"
              id="guestContactNo"
              name="guestContactNo"
              value={updateGuest.guestContactNo}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestCity" className="block mb-2 text-gray-600">
              City
            </label>
            <input
              type="text"
              id="guestCity"
              name="guestCity"
              value={updateGuest.guestCity}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestCountry" className="block mb-2 text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="guestCountry"
              name="guestCountry"
              value={updateGuest.guestCountry}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestPassword" className="block mb-2 text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="guestPassword"
              name="guestPassword"
              value={updateGuest.guestPassword}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="guestNicPicture"
              className="block mb-2 text-gray-600"
            >
              Upload NIC Picture
            </label>
            <input
              type="file"
              name="guestPicture"
              onChange={handleImageChange}
              className="border p-3 rounded mt-1 shadow-lg"
            />
            {updateGuest.guestNicPicture && (
              <img
                src={updateGuest.guestNicPicture}
                alt="guest Preview"
                className="mt-2 max-w-[150px] rounded-lg"
              />
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={handleClose}
              type="button"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  );
}

export default UpdateGuestDialog;
