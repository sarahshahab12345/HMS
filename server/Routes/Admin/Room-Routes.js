import express from "express";
import {
  getAllRooms,
  addRoom,
  updateRoom,
  deleteRoom,
} from "../../controllers/Admin/Room-Controller.js";

const router = express.Router();

router.get("/all", getAllRooms);
router.post("/create", addRoom);
router.put("/update/:id", updateRoom);
router.delete("/delete/:id", deleteRoom);

export default router;
