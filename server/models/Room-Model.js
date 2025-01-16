import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    roomId: String,
    roomNo: String,
    roomFloor: String,
    roomType: String, // Example: Single, Double, Suite
    price: Number, // Price per night
    roomStatus: String, // Example: Cleaning, Occupied, Vacant, Maintenance
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
