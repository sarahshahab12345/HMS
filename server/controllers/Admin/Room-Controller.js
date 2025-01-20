import Room from "../../models/Room-Model.js";

// Get All Rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      message: "Rooms fetched successfully",
      data: {
        count: rooms.length,
        rooms,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching rooms",
      error: error.message,
    });
  }
};

// Add a New Room
const addRoom = async (req, res) => {
  try {
    const roomData = req.body;
    const newRoom = await Room.create(roomData);
    res.status(201).json({
      success: true,
      message: "Room added successfully",
      data: newRoom,
    });
  } catch (error) {
    console.error("Error adding room:", error.message);
    res.status(500).json({
      success: false,
      message: "Error adding room",
      error: error.message,
    });
  }
};

// Update an Existing Room
const updateRoom = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, updates, { new: true });
    if (updatedRoom) {
      res.status(200).json({
        success: true,
        message: "Room updated successfully",
        data: updatedRoom,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating room",
      error: error.message,
    });
  }
};

// Delete a Room
const deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const roomToDelete = await Room.findById(id);

    if (roomToDelete) {
      await Room.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Room deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting room",
      error: error.message,
    });
  }
};

export { getAllRooms, addRoom, updateRoom, deleteRoom };
