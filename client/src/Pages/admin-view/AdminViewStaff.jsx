import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff, deleteStaff, updateStaff } from "../../Slices/staffSlice.js";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import StaffDetailsDialog from "./Details/StaffDetailsDialog.jsx";
import UpdateStaffDialog from "./UpdateDetails/UpdateStaffDialog.jsx";

const AdminViewStaff = () => {
  const dispatch = useDispatch();
  const { staffMembers, isLoading, error } = useSelector((state) => state.staff);

  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleOpenDialog = (staff) => {
    setSelectedStaff(staff);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedStaff(null);
    setDialogOpen(false);
  };

  const handleOpenUpdateDialog = (staff) => {
    setSelectedStaff(staff);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setSelectedStaff(null);
    setUpdateDialogOpen(false);
  };

  const handleOpenDeleteDialog = (staff) => {
    setSelectedStaff(staff);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setSelectedStaff(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedStaff && selectedStaff._id) {
      dispatch(deleteStaff(selectedStaff._id))
        .unwrap()
        .then(() => {
          console.log("Staff deleted successfully!");
          dispatch(getAllStaff());
        })
        .catch((error) => {
          console.error("Failed to delete staff:", error);
        })
        .finally(() => {
          setDeleteDialogOpen(false);
          setSelectedStaff(null);
        });
    }
  };

  const handleUpdate = (updatedStaff) => {
    if (updatedStaff && updatedStaff._id) {
      const { _id: id, ...formData } = updatedStaff;
      dispatch(updateStaff({ id, formData }))
        .unwrap()
        .then(() => {
          console.log("Staff updated successfully!");
          dispatch(getAllStaff());
        })
        .catch((error) => {
          console.error("Failed to update staff:", error);
        });
    } else {
      console.error("Invalid staff data. Cannot update.");
    }
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
                      {staff.staffPassword}
                    </td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button
                        className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white"
                        onClick={() => handleOpenUpdateDialog(staff)}
                      >
                        <AiOutlineEdit className="mr-1" />
                      </button>
                      <button
                        className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleOpenDeleteDialog(staff)}
                      >
                        <AiOutlineDelete className="mr-1" />
                      </button>
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

      {/* Update Dialog */}
      {selectedStaff && (
        <UpdateStaffDialog
          open={updateDialogOpen}
          staff={selectedStaff}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && selectedStaff && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-6 shadow-lg">
            <p>Are you sure you want to delete {selectedStaff.staffName}?</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleCloseDeleteDialog}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminViewStaff;
