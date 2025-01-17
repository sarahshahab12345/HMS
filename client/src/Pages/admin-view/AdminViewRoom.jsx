import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../Slices/roomSlice.js";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFile } from "react-icons/ai";

const AdminViewRoom = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading, error } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        {/* Heading before the table */}
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
                    className={`bg-white ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">{room._id}</td>
                    <td className="p-4 border border-gray-300">{room.roomNo}</td>
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
                      <button className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white">
                        <AiOutlineEdit className="mr-1" />
                      </button>
                      <button className="flex items-center text-red-500 border-2 border-red-500 px-1 py-1 rounded hover:bg-red-500 hover:text-white">
                        <AiOutlineDelete className="mr-1" />
                      </button>
                      <button className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white">
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
    </div>
  );
};

export default AdminViewRoom;
