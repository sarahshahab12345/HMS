import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms, updateRoom } from "../../Slices/roomSlice.js";
import { AiOutlineEdit, AiOutlineFile } from "react-icons/ai";
import RoomDetailsDialog from "../admin-view/Details/RoomDetailsDialog.jsx";
import UpdateRoomDialog from "../admin-view/UpdateDetails/UpdateRoomDialog.jsx";

const HouseKeeperViewRooms = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading, error } = useSelector((state) => state.room);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

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

export default HouseKeeperViewRooms;
