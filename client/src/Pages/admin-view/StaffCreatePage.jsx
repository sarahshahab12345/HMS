import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStaff } from "../../Slices/staffSlice.js";
import axios from "axios";

function StaffCreatePage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    staffName: "",
    staffNicNo: "",
    staffContactNo: "",
    staffRole: "",
    staffAddress: "",
    staffCity: "",
    staffCountry: "",
    staffGender: "",
    staffEmail: "",
    staffPassword: "",
    staffPicture: "", // new field for image URL
  });

  const [imageFile, setImageFile] = useState({});
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const inputRef = React.createRef(null);

  const handleImageFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const uploadImage = async () => {
    try {
      setIsImageLoading(true);
      const data = new FormData();
      data.append("file", imageFile);
      const response = await axios.post(
        "http://localhost:5000/staff/upload-image",
        data
      );
      if (response.status === 200) {
        setUploadedImageUrl(response?.data?.result?.url);
        return response?.data?.result?.url;
      }
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setIsImageLoading(false);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadImage();
    if (imageUrl) {
      setFormData({ ...formData, staffPicture: imageUrl });
    }
    dispatch(createStaff(formData));
    setFormData({
      staffName: "",
      staffNicNo: "",
      staffContactNo: "",
      staffRole: "",
      staffAddress: "",
      staffCity: "",
      staffCountry: "",
      staffGender: "",
      staffEmail: "",
      staffPassword: "",
      staffPicture: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Staff</h2>
        <form onSubmit={handleOnSubmit} className="space-y-6">
          {/* Other form fields unchanged */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="staffName" className="text-gray-700 text-lg">
                Name
              </label>
              <input
                type="text"
                name="staffName"
                value={formData.staffName}
                onChange={handleChange}
                placeholder="Staff Name"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffNicNo" className="text-gray-700 text-lg">
                NIC Number
              </label>
              <input
                type="text"
                name="staffNicNo"
                value={formData.staffNicNo}
                onChange={handleChange}
                placeholder="NIC Number"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffContactNo" className="text-gray-700 text-lg">
                Contact Number
              </label>
              <input
                type="text"
                name="staffContactNo"
                value={formData.staffContactNo}
                onChange={handleChange}
                placeholder="Contact Number"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffRole" className="text-gray-700 text-lg">
                Role
              </label>
              <select
                name="staffRole"
                value={formData.staffRole}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="manager">Manager</option>
                <option value="receptionist">Receptionist</option>
                <option value="housekeeping">Housekeeping</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffAddress" className="text-gray-700 text-lg">
                Address
              </label>
              <input
                type="text"
                name="staffAddress"
                value={formData.staffAddress}
                onChange={handleChange}
                placeholder="Address"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffCity" className="text-gray-700 text-lg">
                City
              </label>
              <input
                type="text"
                name="staffCity"
                value={formData.staffCity}
                onChange={handleChange}
                placeholder="City"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffCountry" className="text-gray-700 text-lg">
                Country
              </label>
              <input
                type="text"
                name="staffCountry"
                value={formData.staffCountry}
                onChange={handleChange}
                placeholder="Country"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffGender" className="text-gray-700 text-lg">
                Gender
              </label>
              <select
                name="staffGender"
                value={formData.staffGender}
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
            <div className="flex flex-col">
              <label htmlFor="staffEmail" className="text-gray-700 text-lg">
                Email
              </label>
              <input
                type="email"
                name="staffEmail"
                value={formData.staffEmail}
                onChange={handleChange}
                placeholder="Email"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="staffPassword" className="text-gray-700 text-lg">
                Password
              </label>
              <input
                type="password"
                name="staffPassword"
                value={formData.staffPassword}
                onChange={handleChange}
                placeholder="Password"
                className="border p-3 rounded mt-1 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="text-gray-700 text-lg">
                Staff Picture
              </label>
              <input
                id="image"
                type="file"
                name="staffPicture"
                onChange={handleImageFileChange}
                ref={inputRef}
                className="w-full px-3 py-2 border rounded"
              />
              {isImageLoading && <p>Uploading...</p>}
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
