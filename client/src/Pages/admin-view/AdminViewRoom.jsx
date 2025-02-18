import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms, deleteRoom, updateRoom } from "../../Slices/roomSlice.js";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";
import RoomDetailsDialog from "./Details/RoomDetailsDialog.jsx";
import UpdateRoomDialog from "./UpdateDetails/UpdateRoomDialog.jsx";

const AdminViewRoom = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading, error } = useSelector((state) => state.room);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const handleOpenDeleteDialog = (roomId) => {
    setRoomToDelete(roomId);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setRoomToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleOpenDialog = (room) => {
    setSelectedRoom(room);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedRoom(null);
    setDialogOpen(false);
  };

  const handleOpenUpdateDialog = (room) => {
    console.log("Opening update dialog for room:", room);
    setSelectedRoom(room);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setSelectedRoom(null);
    setUpdateDialogOpen(false);
  };

  const handleUpdate = (updatedRoom) => {
    if (updatedRoom && updatedRoom._id) {
      const { _id: id, ...formData } = updatedRoom;
      dispatch(updateRoom({ id, formData }))
        .unwrap()
        .then(() => {
          console.log("Room updated successfully!");
          // Fetch the updated guest list
          dispatch(getAllRooms());
        })
        .catch((error) => {
          console.error("Failed to update Room:", error);
        });
    } else {
      console.error("Invalid Room data. Cannot update.");
    }
  };

  const confirmDeleteRoom = () => {
    if (roomToDelete) {
      dispatch(deleteRoom(roomToDelete))
        .then(() => {
          alert("Room deleted successfully");
          setDeleteDialogOpen(false);
        })
        .catch((error) => {
          console.error("Failed to delete room:", error);
          alert("Failed to delete room");
        });
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Room Management
        </h2>

        <div className="overflow-x-auto">
          {isLoading ? (
            <p>Loading rooms...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Room ID</th>
                  <th className="p-4 border border-gray-300">Picture</th>
                  <th className="p-4 border border-gray-300">Room No</th>
                  <th className="p-4 border border-gray-300">Floor</th>
                  <th className="p-4 border border-gray-300">Room Type</th>
                  <th className="p-4 border border-gray-300">Price</th>
                  <th className="p-4 border border-gray-300">Room Status</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr
                    key={room._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">{room._id}</td>
                    <td className="p-4 border border-gray-300">
                      {room.roomPicture ? (
                        <img
                          src={room.roomPicture}
                          alt="room"
                          className="h-12 w-12 object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500">N/A</span>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {room.roomNo}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {room.roomFloor}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {room.roomType}
                    </td>
                    <td className="p-4 border border-gray-300">{room.price}</td>
                    <td className="p-4 border border-gray-300">
                      {room.roomStatus}
                    </td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button
                        className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white"
                        onClick={() => handleOpenUpdateDialog(room)}
                      >
                        <AiOutlineEdit className="mr-1" />
                      </button>
                      <button
                        className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleOpenDeleteDialog(room._id)}
                      >
                        <AiOutlineDelete className="mr-1" />
                      </button>

                      <button
                        className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                        onClick={() => handleOpenDialog(room)}
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

      {selectedRoom && (
        <RoomDetailsDialog
          open={dialogOpen}
          room={selectedRoom}
          onClose={handleCloseDialog}
        />
      )}

      {deleteDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">Are you sure you want to delete this room?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={handleCloseDeleteDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDeleteRoom}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Dialog Component */}
      {selectedRoom && (
        <UpdateRoomDialog
          open={updateDialogOpen}
          room={selectedRoom}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default AdminViewRoom;
