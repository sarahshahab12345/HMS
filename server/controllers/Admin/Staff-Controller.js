import Staff from "../../models/Staff-Model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

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
    console.log("Error fetching staff members:", error.message); // Debugging log
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
    console.log("Adding new staff with data:", staffData); // Debugging log

    // Do not hash the password, save it as plain text
    const newStaff = await Staff.create(staffData);

    res.status(201).json({
      success: true,
      message: "Staff member added successfully",
      data: newStaff,
    });
  } catch (error) {
    console.log("Error adding staff member:", error.message); // Debugging log
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
    console.log("Updating staff with ID:", id, "and data:", updates); // Debugging log
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
    console.log("Error updating staff member:", error.message); // Debugging log
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
    console.log("Deleting staff with ID:", id); // Debugging log
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
    console.log("Error deleting staff member:", error.message); // Debugging log
    res.status(500).json({
      success: false,
      message: "Error deleting staff member",
      error: error.message,
    });
  }
};

// Login Method
const login = async (req, res) => {
  const { staffEmail, staffPassword } = req.body;

  try {
    console.log("Login attempt with email:", staffEmail); // Debugging log

    // Find staff by email
    const staff = await Staff.findOne({ staffEmail });
    if (!staff) {
      console.log("Staff not found for email:", staffEmail); // Debugging log
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    }

    // Debugging: Log the entered password and the stored password (for debugging only)
    console.log("Entered Password:", staffPassword); // Debugging log
    console.log("Stored Password:", staff.staffPassword); // Debugging log

    // Compare the entered password with the stored plain text password
    if (staffPassword !== staff.staffPassword) {
      console.log("Password mismatch for email:", staffEmail); // Debugging log
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create JWT token (do not send password)
    console.log("Generating JWT token..."); // Debugging log
    const token = jwt.sign(
      { staffId: staff._id, staffEmail: staff.staffEmail },
      process.env.SECRET_KEY, // Ensure this is securely set in .env
      { expiresIn: "1h" }
    );

    // Respond with success and the JWT token
    console.log("Login successful, sending token..."); // Debugging log
    res.status(200).json({
      success: true,
      message: "Login successful",
      token, // You can optionally return this as well for the client
    });
  } catch (error) {
    console.log("Error logging in:", error.message); // Debugging log
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.message,
    });
  }
};

// AuthMiddleware Method
const AuthMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Authorization header received:", token); // Debugging log

  if (!token) {
    console.log("No token provided."); // Debugging log
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    console.log("Verifying token..."); // Debugging log
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.staff = decoded;
    next();
  } catch (error) {
    console.log("Invalid token:", error.message); // Debugging log
    res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// Logout Method
const logout = (req, res) => {
  const clearTheToken = () => {
    res.clearCookie("authToken");
  };

  clearTheToken();

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
  login,
  AuthMiddleware,
  logout,
};
