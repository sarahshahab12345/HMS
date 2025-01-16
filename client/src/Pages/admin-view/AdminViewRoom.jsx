import React from 'react';

const roomData = [
  {
    roomId: "101",
    roomNo: "101",
    roomFloor: "1st",
    roomType: "Single",
    price: 100,
    roomStatus: "Vacant",
  },
  {
    roomId: "102",
    roomNo: "102",
    roomFloor: "1st",
    roomType: "Double",
    price: 150,
    roomStatus: "Occupied",
  }
];

const AdminViewRoom = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="overflow-x-auto">
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
              {roomData.map((room, index) => (
                <tr key={room.roomId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="p-4 border border-gray-300">{room.roomId}</td>
                  <td className="p-4 border border-gray-300">{room.roomNo}</td>
                  <td className="p-4 border border-gray-300">{room.roomFloor}</td>
                  <td className="p-4 border border-gray-300">{room.roomType}</td>
                  <td className="p-4 border border-gray-300">{room.price}</td>
                  <td className="p-4 border border-gray-300">{room.roomStatus}</td>
                  <td className="p-4 border border-gray-300 flex space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminViewRoom;
