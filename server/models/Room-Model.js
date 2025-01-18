import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    roomId: {
      type: String,
      required: [true, "Please enter the room ID"],
      unique: true, // Assuming room ID should be unique
    },
    roomNo: {
      type: String,
      required: [true, "Please enter the room number"],
    },
    roomTitle: {
      type: String,
      required: [true, "Please enter the room title"],
    },
    roomDescription: {
      type: String,
      required: [true, "Please enter the room description"],
    },
    roomFloor: {
      type: String,
      required: [true, "Please specify the room floor"],
    },
    roomPicture: {
      type: String,
      required: [true, "Please upload the room picture"],
    },
    roomType: {
      type: String,
      enum: ["Single", "Double", "Suite"], // Predefined room types
      required: [true, "Please select the room type"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the price per night"],
    },
    roomStatus: {
      type: String,
      enum: ["Cleaning", "Occupied", "Vacant", "Maintenance", "Booked"], // Room status options
      required: [true, "Please select the room status"],
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;