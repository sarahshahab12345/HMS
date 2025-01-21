import express from "express";
import {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
} from "../../controllers/Admin/Booking-Controller.js";

const router = express.Router();

router.post("/create", createBooking);

router.get("/all", getAllBookings);

router.get("/get/:id", getBookingById);

router.put("/update/:id", updateBooking);

router.delete("/delete/:id", deleteBooking);

export default router;
