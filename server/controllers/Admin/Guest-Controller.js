import Guest from "../../models/Guest-Model.js"; 

// Get All Guests
const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json({
      success: true,
      message: "Guests fetched successfully",
      data: {
        count: guests.length,
        guests,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching guests",
      error: error.message,
    });
  }
};

// Get a Guest by ID
const guestById = async (req, res) => {
  const id = req.params.id;

  try {
    const guest = await Guest.findById(id);
    if (guest) {
      res.status(200).json({
        success: true,
        message: "Guest fetched successfully",
        data: guest,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Guest not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching guest",
      error: error.message,
    });
  }
};

// Add a New Guest
const addGuest = async (req, res) => {
  try {
    const guestData = req.body;
    const newGuest = await Guest.create(guestData);
    res.status(201).json({
      success: true,
      message: "Guest added successfully",
      data: newGuest,
    });
  } catch (error) {
    console.error("Error adding guest:", error.message);
    res.status(500).json({
      success: false,
      message: "Error adding guest",
      error: error.message,
    });
  }
};

// Update an Existing Guest
const updateGuest = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const updatedGuest = await Guest.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (updatedGuest) {
      res.status(200).json({
        success: true,
        message: "Guest updated successfully",
        data: updatedGuest,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Guest not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating guest",
      error: error.message,
    });
  }
};

// Delete a Guest
const deleteGuest = async (req, res) => {
  const id = req.params.id;

  try {
    const guestToDelete = await Guest.findById(id);

    if (guestToDelete) {
      await Guest.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Guest deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Guest not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting guest",
      error: error.message,
    });
  }
};

export { getAllGuests, guestById, addGuest, updateGuest, deleteGuest };
