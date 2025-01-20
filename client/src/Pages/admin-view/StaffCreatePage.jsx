import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStaff } from "../../Slices/staffSlice.js";
import { uploadImage } from "../../Slices/image-uploadSlice.js"; 

function StaffCreatePage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    staffId: "",
    staffName: "",
    staffNicNo: "",
    staffContactNo: "",
    staffRole: "",
    staffAddress: "",
    staffCity: "",
    staffCountry: "",
    staffGender: "",
    staffPicture: "",
    staffEmail: "",
    staffPassword: "",
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
        setFormData({ ...formData, staffPicture: base64Image });
      };
  
      reader.readAsDataURL(file);
    }
  };  

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to be sent
    const newFormData = { ...formData, staffId: "generated_server_side_id" }; 
    dispatch(createStaff(newFormData));
    setFormData({
      staffId: "",
      staffName: "",
      staffNicNo: "",
      staffContactNo: "",
      staffRole: "",
      staffAddress: "",
      staffCity: "",
      staffCountry: "",
      staffGender: "",
      staffPicture: "",
      staffEmail: "",
      staffPassword: "",
    });
  };  

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Staff</h2>
        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="staffName" className="text-gray-700 text-lg">Staff Name</label>
              <input
                type="text"
                name="staffName"
                value={formData.staffName}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Staff Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffNicNo" className="text-gray-700 text-lg">Staff NIC Number</label>
              <input
                type="text"
                name="staffNicNo"
                value={formData.staffNicNo}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter NIC Number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffContactNo" className="text-gray-700 text-lg">Contact Number</label>
              <input
                type="text"
                name="staffContactNo"
                value={formData.staffContactNo}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Contact Number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffRole" className="text-gray-700 text-lg">Role</label>
              <select
                name="staffRole"
                value={formData.staffRole}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              >
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="receptionist">Receptionist</option>
                <option value="housekeeper">House Keeper</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffAddress" className="text-gray-700 text-lg">Address</label>
              <input
                type="text"
                name="staffAddress"
                value={formData.staffAddress}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffCity" className="text-gray-700 text-lg">City</label>
              <input
                type="text"
                name="staffCity"
                value={formData.staffCity}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter City"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffCountry" className="text-gray-700 text-lg">Country</label>
              <input
                type="text"
                name="staffCountry"
                value={formData.staffCountry}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Country"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffGender" className="text-gray-700 text-lg">Gender</label>
              <select
                name="staffGender"
                value={formData.staffGender}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffEmail" className="text-gray-700 text-lg">Email</label>
              <input
                type="email"
                name="staffEmail"
                value={formData.staffEmail}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffPassword" className="text-gray-700 text-lg">Password</label>
              <input
                type="password"
                name="staffPassword"
                value={formData.staffPassword}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffPicture" className="text-gray-700 text-lg">Staff Picture</label>
              <input
                type="file"
                name="staffPicture"
                onChange={handleImageChange}
                className="border p-3 rounded mt-1 shadow-lg"
              />
              {formData.staffPicture && (
                <img src={formData.staffPicture} alt="Staff Preview" className="mt-2 max-w-[150px] rounded-lg" />
              )}
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

export default StaffCreatePage;
