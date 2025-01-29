import Staff from "../../models/Staff-Model.js";
import jwt from "jsonwebtoken";
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
    console.log("Error fetching staff members:", error.message); 
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
    console.log("Adding new staff with data:", staffData); 

    const newStaff = await Staff.create(staffData);

    res.status(201).json({
      success: true,
      message: "Staff member added successfully",
      data: newStaff,
    });
  } catch (error) {
    console.log("Error adding staff member:", error.message); 
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
    console.log("Updating staff with ID:", id, "and data:", updates); 
    const updatedStaff = await Staff.findByIdAndUpdate(id, updates, {
      new: true,
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
    console.log("Error updating staff member:", error.message); 
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
    console.log("Deleting staff with ID:", id); 
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
    console.log("Error deleting staff member:", error.message); 
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
    console.log("Login attempt with email:", staffEmail);
    const staff = await Staff.findOne({ staffEmail });

    if (!staff) {
      console.log("Staff not found for email:", staffEmail);
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    }

    if (staffPassword !== staff.staffPassword) {
      console.log("Password mismatch for email:", staffEmail);
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { staffId: staff._id, staffEmail: staff.staffEmail, staffRole: staff.staffRole },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    console.log("Token generated:", token);    

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false, 
      sameSite: "strict", // SameSite attribute
      maxAge: 3600000, // 1 hour in milliseconds
    });    

    console.log("Login successful, token set in cookie...");

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log("Error logging in:", error.message);
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.message,
    });
  }
};

// AuthMiddleware Method
const AuthMiddleware = (req, res, next) => {
  const token = req.cookies.authToken; // Read token from cookie
  console.log("Token from cookie:", token);

  if (!token) {
    console.log("No token provided.");
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    console.log("Verifying token...");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.staff = decoded;
    next();
  } catch (error) {
    console.log("Invalid token:", error.message);
    res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// Logout Method
const logout = (req, res) => {
  console.log("Clearing authToken cookie...");
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

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
