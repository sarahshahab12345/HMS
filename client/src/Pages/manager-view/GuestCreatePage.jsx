import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGuest } from "../../Slices/guestSlice.js";
import { uploadImage } from "../../Slices/image-uploadSlice.js";

function GuestCreatePage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    guestId: "",
    guestName: "",
    guestEmail: "",
    guestNicNo: "",
    guestContactNo: "",
    guestPassword: "",
    guestCity: "",
    guestCountry: "",
    guestGender: "",
    guestNicPicture: "",
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
        setFormData({ ...formData, guestNicPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newFormData = { ...formData, guestId: "generated_server_side_id" };
    dispatch(createGuest(newFormData));
    setFormData({
      guestId: "",
      guestName: "",
      guestEmail: "",
      guestNicNo: "",
      guestContactNo: "",
      guestPassword: "",
      guestCity: "",
      guestCountry: "",
      guestGender: "",
      guestNicPicture: "",
    });
  };

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Guest</h2>
        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="guestName" className="text-gray-700 text-lg">Name</label>
              <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                placeholder="Guest Name"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestEmail" className="text-gray-700 text-lg">Email</label>
              <input
                type="email"
                name="guestEmail"
                value={formData.guestEmail}
                onChange={handleChange}
                placeholder="Email"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestNicNo" className="text-gray-700 text-lg">NIC Number</label>
              <input
                type="text"
                name="guestNicNo"
                value={formData.guestNicNo}
                onChange={handleChange}
                placeholder="00000-00000000-0"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestContactNo" className="text-gray-700 text-lg">Contact Number</label>
              <input
                type="text"
                name="guestContactNo"
                value={formData.guestContactNo}
                onChange={handleChange}
                placeholder="Contact Number"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestPassword" className="text-gray-700 text-lg">Password</label>
              <input
                type="password"
                name="guestPassword"
                value={formData.guestPassword}
                onChange={handleChange}
                placeholder="Password"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestCity" className="text-gray-700 text-lg">City</label>
              <input
                type="text"
                name="guestCity"
                value={formData.guestCity}
                onChange={handleChange}
                placeholder="City"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestCountry" className="text-gray-700 text-lg">Country</label>
              <input
                type="text"
                name="guestCountry"
                value={formData.guestCountry}
                onChange={handleChange}
                placeholder="Country"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestGender" className="text-gray-700 text-lg">Gender</label>
              <select
                name="guestGender"
                value={formData.guestGender}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestNicPicture" className="text-gray-700 text-lg">NIC Picture</label>
              <input
                type="file"
                name="guestNicPicture"
                onChange={handleImageChange}
                className="border p-3 rounded mt-1 shadow-lg"
              />
              {formData.guestNicPicture && (
                <img src={formData.guestNicPicture} alt="Guest NIC Preview" className="mt-2 max-w-[150px] rounded-lg" />
              )}
            </div>
          </div>
          <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default GuestCreatePage;
