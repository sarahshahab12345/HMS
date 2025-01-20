import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Slices/image-uploadSlice.js";

function UpdateRoomDialog({ open, room, onClose, onUpdate }) {
  // State to hold updated room data
  const [updateRoom, setupdateRoom] = useState(room || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (room) {
      setupdateRoom(room);
    }
  }, [room]);

  // Handle changes to form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setupdateRoom({ ...updateRoom, [name]: value });
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        dispatch(uploadImage(base64Image));
        setupdateRoom({ ...updateRoom, roomPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle the update process
  const handleUpdate = () => {
    if (!updateRoom || !updateRoom.roomId) {
      console.error("No room selected or updateRoom is missing 'roomId'");
      return;
    }

    const {
      roomNo,
      roomTitle,
      roomDescription,
      roomFloor,
      roomPicture,
      roomType,
      price,
      roomStatus,
    } = updateRoom;

    // Validate that all fields are filled out
    if (
      !roomNo ||
      !roomTitle ||
      !roomDescription ||
      !roomFloor ||
      !roomType ||
      !price ||
      !roomStatus ||
      !roomPicture
    ) {
      alert("All fields must be filled out!");
      return;
    }

    // Prepare payload for the update action
    const payload = { ...updateRoom };
    if (!payload.roomPassword) {
      delete payload.roomPassword;
    }

    // Trigger the update callback with the prepared payload
    onUpdate(payload);
    onClose();
  };

  // Handle closing the dialog
  const handleClose = () => {
    setupdateRoom(room);
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
          <h3 className="text-2xl mb-4">Update Room Details</h3>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="roomNo" className="block mb-2">
              Room No
            </label>
            <input
              type="text"
              id="roomNo"
              name="roomNo"
              value={updateRoom.roomNo}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomPicture" className="block mb-2">
              Picture
            </label>
            <input
              type="file"
              name="roomPicture"
              onChange={handleImageChange}
              className="border p-3 rounded mt-1 shadow-lg"
            />
            {updateRoom.roomPicture && (
              <img
                src={updateRoom.roomPicture}
                alt="Room Preview"
                className="mt-2 max-w-[150px] rounded-lg"
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="roomTitle" className="block mb-2">
              Room Title
            </label>
            <input
              type="text"
              id="roomTitle"
              name="roomTitle"
              value={updateRoom.roomTitle}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomDescription" className="block mb-2">
              Room Description
            </label>
            <input
              type="text"
              id="roomDescription"
              name="roomDescription"
              value={updateRoom.roomDescription}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomFloor" className="block mb-2">
              Room Floor
            </label>
            <input
              type="text"
              id="roomFloor"
              name="roomFloor"
              value={updateRoom.roomFloor}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomType" className="block mb-2">
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={updateRoom.roomType}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={updateRoom.price}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roomStatus" className="block mb-2">
              Status
            </label>
            <select
              id="roomStatus"
              name="roomStatus"
              value={updateRoom.roomStatus}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="">Select Room Status</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Occupied">Occupied</option>
              <option value="Vacant">Vacant</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Booked">Booked</option>
            </select>
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
}

export default UpdateRoomDialog;
