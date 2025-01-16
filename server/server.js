import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/db-config.js";
import GuestRouter from "./Routes/Admin/Guest-Routes.js";
import StaffRouter from "./Routes/Admin/Staff-Routes.js";
import RoomRouter from "./Routes/Admin/Room-Routes.js";
import UserAuthRouter from "./Routes/Admin/User-Auth-Routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

connectToDb();
const app = express();

const port = process.env.PORT || 5002;

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
app.use("/api/admin/guest", GuestRouter);
app.use("/api/admin/staff", StaffRouter);
app.use("/api/admin/room", RoomRouter);
app.use("/api/auth", UserAuthRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });