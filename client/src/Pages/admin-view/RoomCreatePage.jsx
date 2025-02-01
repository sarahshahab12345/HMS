import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../Slices/roomSlice.js";
import { uploadImage } from "../../Slices/image-uploadSlice.js";
import { useNavigate } from "react-router-dom";

function RoomCreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomId: "",
    roomNo: "",
    roomTitle: "",
    roomDescription: "",
    roomFloor: "",
    roomPicture: "",
    roomType: "",
    price: "",
    roomStatus: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        // Dispatch the image to Redux store
        dispatch(uploadImage(base64Image));
        setFormData({ ...formData, roomPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to be sent
    const newFormData = { ...formData, roomId: "generated_server_side_id" }; 
    dispatch(createRoom(newFormData));
    navigate("/admin/room");
    setFormData({
      roomId: "",
      roomNo: "",
      roomTitle: "",
      roomDescription: "",
      roomFloor: "",
      roomPicture: "",
      roomType: "",
      price: "",
      roomStatus: "",
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Room</h2>
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="roomNo" className="text-gray-700 text-lg">
              Room Number
            </label>
            <input
              type="text"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              placeholder="Room Number"
              className="border p-3 rounded mt-1 shadow-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomTitle" className="text-gray-700 text-lg">
              Room Title
            </label>
            <input
              type="text"
              name="roomTitle"
              value={formData.roomTitle}
              onChange={handleChange}
              placeholder="Room Title"
              className="border p-3 rounded mt-1 shadow-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomDescription" className="text-gray-700 text-lg">
              Room Description
            </label>
            <textarea
              name="roomDescription"
              value={formData.roomDescription}
              onChange={handleChange}
              placeholder="Room Description"
              className="border p-3 rounded mt-1 shadow-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomFloor" className="text-gray-700 text-lg">
              Floor
            </label>
            <input
              type="text"
              name="roomFloor"
              value={formData.roomFloor}
              onChange={handleChange}
              placeholder="Floor"
              className="border p-3 rounded mt-1 shadow-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomPicture" className="text-gray-700 text-lg">
              Room Picture
            </label>
            <input
              type="file"
              name="roomPicture"
              onChange={handleImageChange}
              className="border p-3 rounded mt-1 shadow-lg"
            />
            {formData.roomPicture && (
              <img
                src={formData.roomPicture}
                alt="Room Preview"
                className="mt-2 max-w-[150px] rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomType" className="text-gray-700 text-lg">
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="border p-3 rounded mt-1 shadow-lg"
              required
            >
              <option value="" disabled>
                Select Room Type
              </option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 text-lg">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-3 rounded mt-1 shadow-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomStatus" className="text-gray-700 text-lg">
              Room Status
            </label>
            <select
              name="roomStatus"
              value={formData.roomStatus}
              onChange={handleChange}
              className="border p-3 rounded mt-1 shadow-lg"
              required
            >
              <option value="" disabled>
                Select Room Status
              </option>
              <option value="Cleaning">Cleaning</option>
              <option value="Occupied">Occupied</option>
              <option value="Vacant">Vacant</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Booked">Booked</option>
            </select>
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

export default RoomCreatePage;
