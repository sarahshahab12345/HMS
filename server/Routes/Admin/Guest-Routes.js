import express from "express";
import {
  getAllGuests,
  addGuest,
  updateGuest,
  deleteGuest,
} from "../../controllers/Admin/Guest-Controller.js";

const router = express.Router();

router.get("/all", getAllGuests);
router.post("/create", addGuest);
router.put("/update/:id", updateGuest);
router.delete("/delete/:id", deleteGuest);

export default router;
