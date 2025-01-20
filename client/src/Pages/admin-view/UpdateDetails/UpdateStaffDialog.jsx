import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Slices/image-uploadSlice.js"; 

const UpdateStaffDialog = ({ open, staff, onClose, onUpdate }) => {
  // State to hold updated staff data
  const [updatedStaff, setUpdatedStaff] = useState(staff || {});
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (staff) {
      setUpdatedStaff(staff);
    }
  }, [staff]);

  // Handle changes to form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStaff({ ...updatedStaff, [name]: value });
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        dispatch(uploadImage(base64Image));
        setUpdatedStaff({ ...updatedStaff, staffPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle the update process
  const handleUpdate = () => {
    if (!updatedStaff || !updatedStaff.staffId) {
      console.error("No staff selected or updatedStaff is missing 'staffId'");
      return;
    }

    const {
      staffName,
      staffNicNo,
      staffContactNo,
      staffRole,
      staffAddress,
      staffCity,
      staffCountry,
      staffGender,
      staffPicture,
      staffEmail,
      staffPassword,
    } = updatedStaff;

    // Validate that all fields are filled out
    if (
      !staffName ||
      !staffNicNo ||
      !staffContactNo ||
      !staffRole ||
      !staffAddress ||
      !staffCity ||
      !staffCountry ||
      !staffGender ||
      !staffPicture ||
      !staffEmail ||
      !staffPassword
    ) {
      alert("All fields must be filled out!");
      return;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(staffEmail)) {
      alert("Please provide a valid email address.");
      return;
    }

    // Prepare payload for the update action
    const payload = { ...updatedStaff };
    if (!payload.staffPassword) {
      delete payload.staffPassword;
    }

    // Trigger the update callback with the prepared payload
    onUpdate(payload);
    onClose();
  };

  // Handle closing the dialog
  const handleClose = () => {
    setUpdatedStaff(staff); 
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
          <h3 className="text-2xl mb-4">Update Staff Details</h3>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="staffName" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="staffName"
              name="staffName"
              value={updatedStaff?.staffName || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffNicNo" className="block mb-2">
              NIC No
            </label>
            <input
              type="text"
              id="staffNicNo"
              name="staffNicNo"
              value={updatedStaff?.staffNicNo || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffContactNo" className="block mb-2">
              Contact No
            </label>
            <input
              type="text"
              id="staffContactNo"
              name="staffContactNo"
              value={updatedStaff?.staffContactNo || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffRole" className="block mb-2">
              Role
            </label>
            <input
              type="text"
              id="staffRole"
              name="staffRole"
              value={updatedStaff?.staffRole || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffAddress" className="block mb-2">
              Address
            </label>
            <input
              type="text"
              id="staffAddress"
              name="staffAddress"
              value={updatedStaff?.staffAddress || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffCity" className="block mb-2">
              City
            </label>
            <input
              type="text"
              id="staffCity"
              name="staffCity"
              value={updatedStaff?.staffCity || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffCountry" className="block mb-2">
              Country
            </label>
            <input
              type="text"
              id="staffCountry"
              name="staffCountry"
              value={updatedStaff?.staffCountry || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffGender" className="block mb-2">
              Gender
            </label>
            <select
              id="staffGender"
              name="staffGender"
              value={updatedStaff?.staffGender || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="staffPicture" className="block mb-2">
              Picture
            </label>
            <input
              type="file"
              name="staffPicture"
              onChange={handleImageChange}
              className="border p-3 rounded mt-1 shadow-lg"
            />
            {updatedStaff.staffPicture && (
              <img
                src={updatedStaff.staffPicture}
                alt="Staff Preview"
                className="mt-2 max-w-[150px] rounded-lg"
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="staffEmail" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="staffEmail"
              name="staffEmail"
              value={updatedStaff?.staffEmail || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="staffPassword" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="staffPassword"
              name="staffPassword"
              value={updatedStaff?.staffPassword || ""}
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

export default UpdateStaffDialog;
