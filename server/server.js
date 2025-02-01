import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/db-config.js";
import GuestRouter from "./Routes/Admin/Guest-Routes.js";
import StaffRouter from "./Routes/Admin/Staff-Routes.js";
import RoomRouter from "./Routes/Admin/Room-Routes.js";
import BookingRouter from "./Routes/Admin/Booking-Routes.js";
import FoodRouter from "./Routes/Admin/Food-Routes.js";
import FeedbackRouter from "./Routes/Admin/Feedback-Routes.js";
import BillingRouter from "./Routes/Admin/Billing-Routes.js";
import uploadImageRouter from "./Routes/Admin/image-upload-Routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Connect to the database
connectToDb();

const app = express();
const port = process.env.PORT || 5002;

// Middleware setup
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/admin/guest", GuestRouter);
app.use("/api/admin/staff", StaffRouter);
app.use("/api/admin/room", RoomRouter);
app.use("/api/admin/booking", BookingRouter);
app.use("/api/admin/food", FoodRouter);
app.use("/api/admin/feedback", FeedbackRouter);
app.use("/api/admin/billing", BillingRouter);
app.use("/api/img", uploadImageRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
