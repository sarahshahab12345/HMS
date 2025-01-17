import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom } from '../../Slices/roomSlice.js';

function RoomCreatePage() {

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.room);
  
  const [roomData, setRoomData] = useState({
    roomNo: '',
    roomFloor: '',
    roomType: '',
    price: '',
    roomStatus: '',
  });

  const handleRoomChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    dispatch(createRoom(roomData));
    setRoomData({ roomNo: '', roomFloor: '', roomType: '', price: '', roomStatus: '' });
  };

  return (
    <div className="p-4 sm:ml-64">
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Room</h2>
      <form onSubmit={handleRoomSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="roomNo" className="text-gray-700 text-lg">
            Room Number
          </label>
          <input
            type="text"
            name="roomNo"
            value={roomData.roomNo}
            onChange={handleRoomChange}
            placeholder="Room Number"
            className="border p-3 rounded mt-1 shadow-lg"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="roomFloor" className="text-gray-700 text-lg">
            Floor
          </label>
          <input
            type="text"
            name="roomFloor"
            value={roomData.roomFloor}
            onChange={handleRoomChange}
            placeholder="Floor"
            className="border p-3 rounded mt-1 shadow-lg"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="roomType" className="text-gray-700 text-lg">
            Room Type
          </label>
          <select
            name="roomType"
            value={roomData.roomType}
            onChange={handleRoomChange}
            className="border p-3 rounded mt-1 shadow-lg"
            required
          >
            <option value="" disabled>Select Room Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 text-lg">
            Price per Night
          </label>
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleRoomChange}
            placeholder="Price"
            className="border p-3 rounded mt-1 shadow-lg"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="roomStatus" className="text-gray-700 text-lg">
            Room Status
          </label>
          <select
            name="roomStatus"
            value={roomData.roomStatus}
            onChange={handleRoomChange}
            className="border p-3 rounded mt-1 shadow-lg"
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="cleaning">Cleaning</option>
            <option value="occupied">Occupied</option>
            <option value="vacant">Vacant</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded"
        >
          {isLoading ? 'Creating...' : 'Submit'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  </div>
  )
}

export default RoomCreatePage