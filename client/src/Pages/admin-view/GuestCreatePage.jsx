import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGuest } from "../../Slices/guestSlice.js";

function GuestCreatePage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    guestNicNo: "",
    guestContactNo: "",
    guestAddress: "",
    guestCity: "",
    guestCountry: "",
    guestGender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGuest(formData));
    setFormData({
      guestName: "",
      guestEmail: "",
      guestNicNo: "",
      guestContactNo: "",
      guestAddress: "",
      guestCity: "",
      guestCountry: "",
      guestGender: "",
    });
  };

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Guest</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="guestName" className="text-gray-700 text-lg">
                Name
              </label>
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
              <label htmlFor="guestEmail" className="text-gray-700 text-lg">
                Email
              </label>
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
              <label htmlFor="guestNicNo" className="text-gray-700 text-lg">
                NIC Number
              </label>
              <input
                type="text"
                name="guestNicNo"
                value={formData.guestNicNo}
                onChange={handleChange}
                placeholder="NIC Number"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestContactNo" className="text-gray-700 text-lg">
                Contact Number
              </label>
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
              <label htmlFor="guestAddress" className="text-gray-700 text-lg">
                Address
              </label>
              <input
                type="text"
                name="guestAddress"
                value={formData.guestAddress}
                onChange={handleChange}
                placeholder="Address"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestCity" className="text-gray-700 text-lg">
                City
              </label>
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
              <label htmlFor="guestCountry" className="text-gray-700 text-lg">
                Country
              </label>
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
              <label htmlFor="guestGender" className="text-gray-700 text-lg">
                Gender
              </label>
              <select
                name="guestGender"
                value={formData.guestGender}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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

export default GuestCreatePage;
