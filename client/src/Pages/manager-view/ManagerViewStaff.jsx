import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff } from "../../Slices/staffSlice.js";
import { AiOutlineFile } from "react-icons/ai";
import StaffDetailsDialog from "../admin-view/Details/StaffDetailsDialog.jsx";

const ManagerViewStaff = () => {
  const dispatch = useDispatch();
  const { staffMembers, isLoading, error } = useSelector(
    (state) => state.staff
  );

  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (staff) => {
    setSelectedStaff(staff);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedStaff(null);
    setDialogOpen(false);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Staff Management
        </h2>

        <div className="overflow-x-auto">
          {isLoading ? (
            <p>Loading staff members...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Staff ID</th>
                  <th className="p-4 border border-gray-300">Picture</th>
                  <th className="p-4 border border-gray-300">Name</th>
                  <th className="p-4 border border-gray-300">Role</th>
                  <th className="p-4 border border-gray-300">Email</th>
                  <th className="p-4 border border-gray-300">Password</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffMembers.map((staff, index) => (
                  <tr
                    key={staff._id}
                    className={`bg-white ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">{staff._id}</td>
                    <td className="p-4 border border-gray-300">
                      {staff.staffPicture ? (
                        <img
                          src={staff.staffPicture}
                          alt="Staff"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-500">N/A</span>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {staff.staffName}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {staff.staffRole}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {staff.staffEmail}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {staff.staffPassword ? "••••••" : "No password"}
                    </td>

                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button
                        className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                        onClick={() => handleOpenDialog(staff)}
                      >
                        <AiOutlineFile className="mr-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Details Dialog */}
      {selectedStaff && (
        <StaffDetailsDialog
          open={dialogOpen}
          staff={selectedStaff}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default ManagerViewStaff;
