import express from "express";
import {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
  login,
  AuthMiddleware,
  logout,
} from "../../controllers/Admin/Staff-Controller.js";

const router = express.Router();

// Staff Member Routes
router.get("/all", getAllStaff);
router.post("/create", addStaff);
router.put("/update/:id", updateStaff);
router.delete("/delete/:id", deleteStaff);

// Authentication Routes
router.post("/login", login); 
router.post("/logout", logout); 
router.get("/checkAuth", AuthMiddleware, (req, res) => {
  // If the token is valid, this route will be called
  res.status(200).json({
    success: true,
    message: "Token is valid",
    staff: req.staff, 
  });
});

export default router;
