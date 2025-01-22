import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGuests, deleteGuest, updateGuest } from "../../Slices/guestSlice.js";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import GuestDetailsDialog from "./Details/GuestDetailsDialog.jsx";
import UpdateGuestDialog from "./UpdateDetails/UpdateGuestDialog.jsx";

const AdminViewGuests = () => {
  const dispatch = useDispatch();
  const { guests, isLoading, error } = useSelector((state) => state.guests);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); 

  useEffect(() => {
    dispatch(getAllGuests());
  }, [dispatch]);

  const handleOpenDialog = (guest) => {
    setSelectedGuest(guest);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedGuest(null);
  };

  const handleOpenUpdateDialog = (guest) => {
    setSelectedGuest(guest);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setSelectedGuest(null);
    setUpdateDialogOpen(false);
  };

  const handleOpenDeleteDialog = (guest) => {
    setSelectedGuest(guest);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedGuest(null);
  };

  const handleDelete = () => {
    if (selectedGuest && selectedGuest._id) {
      dispatch(deleteGuest(selectedGuest._id))
        .then(() => {
          alert("Guest deleted successfully");
          dispatch(getAllGuests()); // Refresh the list
        })
        .catch((error) => {
          console.error("Failed to delete guest:", error);
          alert("Failed to delete guest");
        })
        .finally(() => {
          handleCloseDeleteDialog();
        });
    }
  };

  const handleUpdate = (updatedGuest) => {
    if (updatedGuest && updatedGuest._id) {
      const { _id: id, ...formData } = updatedGuest; // Extract id and formData
      dispatch(updateGuest({ id, formData }))
        .unwrap()
        .then(() => {
          dispatch(getAllGuests());
        })
        .catch((error) => {
          console.error("Failed to update Guest:", error);
        });
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Guest Management
        </h2>
        <div className="overflow-x-auto">
          {isLoading ? (
            <p>Loading guests...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Guest ID</th>
                  <th className="p-4 border border-gray-300">NIC Picture</th>
                  <th className="p-4 border border-gray-300">Name</th>
                  <th className="p-4 border border-gray-300">Contact No</th>
                  <th className="p-4 border border-gray-300">City</th>
                  <th className="p-4 border border-gray-300">Country</th>
                  <th className="p-4 border border-gray-300">Email</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest, index) => (
                  <tr
                    key={guest._id}
                    className={`bg-white ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">{guest._id}</td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestNicPicture ? (
                        <img
                          src={guest.guestNicPicture}
                          alt="guest"
                          className="h-12 w-12 object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500">N/A</span>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestName}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestContactNo}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestCity}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestCountry}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {guest.guestEmail}
                    </td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button
                        className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white"
                        onClick={() => handleOpenUpdateDialog(guest)}
                      >
                        <AiOutlineEdit className="mr-1" />
                      </button>
                      <button
                        className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleOpenDeleteDialog(guest)}
                      >
                        <AiOutlineDelete className="mr-1" />
                      </button>
                      <button
                        className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                        onClick={() => handleOpenDialog(guest)}
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

      {openDialog && (
        <GuestDetailsDialog
          open={openDialog}
          guest={selectedGuest}
          onClose={handleCloseDialog}
        />
      )}

      {deleteDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p>Are you sure you want to delete this guest?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleCloseDeleteDialog}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedGuest && (
        <UpdateGuestDialog
          open={updateDialogOpen}
          guest={selectedGuest}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default AdminViewGuests;
