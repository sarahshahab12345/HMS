import React, { useState, useEffect } from 'react';

const UpdateStaffDialog = ({ open, staff, onClose, onUpdate }) => {
  const [updatedStaff, setUpdatedStaff] = useState(staff || {});

  useEffect(() => {
    if (staff) {
      setUpdatedStaff(staff);
    }
  }, [staff]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStaff({ ...updatedStaff, [name]: value });
  };

  const handleUpdate = () => {
    if (!updatedStaff || !updatedStaff._id) {
      console.error("No staff selected or updatedStaff is missing '_id'");
      return;
    }

    const { staffName, staffRole, staffEmail } = updatedStaff;

    if (!staffName || !staffRole || !staffEmail) {
      alert("All fields must be filled out!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(staffEmail)) {
      alert("Please provide a valid email address.");
      return;
    }

    const payload = { ...updatedStaff };
    if (!payload.staffPassword) {
      delete payload.staffPassword;
    }

    onUpdate(payload);
    onClose();
  };

  const handleClose = () => {
    setUpdatedStaff(staff); // Reset the form on close
    onClose();
  };

  return (
    open && (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        onClick={handleClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl mb-4">Update Staff Details</h3>
          <div className="mb-4">
            <label htmlFor="staffName" className="block mb-2">Name</label>
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
            <label htmlFor="staffRole" className="block mb-2">Role</label>
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
            <label htmlFor="staffEmail" className="block mb-2">Email</label>
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
            <label htmlFor="staffPassword" className="block mb-2">Password</label>
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
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={handleClose}>Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateStaffDialog;
