import Staff from "../../models/Staff-Model.js"; 

// Get All Staff Members
const getAllStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.status(200).json({
      success: true,
      message: "Staff members fetched successfully",
      data: {
        count: staffMembers.length,
        staffMembers,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching staff members",
      error: error.message,
    });
  }
};

// Add a New Staff Member
const addStaff = async (req, res) => {
  try {
    const staffData = req.body;
    const newStaff = await Staff.create(staffData);
    res.status(201).json({
      success: true,
      message: "Staff member added successfully",
      data: newStaff,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding staff member",
      error: error.message,
    });
  }
};

// Update an Existing Staff Member
const updateStaff = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const updatedStaff = await Staff.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (updatedStaff) {
      res.status(200).json({
        success: true,
        message: "Staff member updated successfully",
        data: updatedStaff,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating staff member",
      error: error.message,
    });
  }
};

// Delete a Staff Member
const deleteStaff = async (req, res) => {
  const id = req.params.id;

  try {
    const staffToDelete = await Staff.findById(id);

    if (staffToDelete) {
      await Staff.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Staff member deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting staff member",
      error: error.message,
    });
  }
};

export { getAllStaff, addStaff, updateStaff, deleteStaff };
