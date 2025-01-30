import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../Slices/roomSlice.js";
import { AiOutlineFile } from "react-icons/ai";
import RoomDetailsDialog from "../admin-view/Details/RoomDetailsDialog.jsx";

const ReceptionistViewRooms = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading, error } = useSelector((state) => state.room);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
  </div>
  );
};

export default ReceptionistViewRooms;
