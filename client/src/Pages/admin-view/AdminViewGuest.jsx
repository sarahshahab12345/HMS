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
    console.log("Opening update dialog for guest:", guest);
    setSelectedGuest(guest);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setSelectedGuest(null);
    setUpdateDialogOpen(false);
  };

  // Handle Delete functionality
  const handleDelete = (guestId) => {
    dispatch(deleteGuest(guestId))
      .then(() => {
        alert("Guest deleted successfully");
      })
      .catch((error) => {
        console.error("Failed to delete guest:", error);
        alert("Failed to delete guest");
      });
  };

  const handleUpdate = (updatedGuest) => {
    if (updatedGuest && updatedGuest._id) {
      const { _id: id, ...formData } = updatedGuest; // Extract id and formData
      dispatch(updateGuest({ id, formData }))
        .unwrap()
        .then(() => {
          console.log("Guest updated successfully!");
          // Fetch the updated guest list
          dispatch(getAllGuests());
        })
        .catch((error) => {
          console.error("Failed to update Guest:", error);
        });
    } else {
      console.error("Invalid Guest data. Cannot update.");
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
                        onClick={() => handleDelete(guest._id)}
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

      {/* Update Dialog Component */}
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
