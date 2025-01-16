import express from "express";
import {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} from "../../controllers/Admin/Staff-Controller.js";

const router = express.Router();

router.get("/all", getAllStaff);
router.post("/create", addStaff);
router.put("/update/:id", updateStaff);
router.delete("/delete/:id", deleteStaff);

export default router;
