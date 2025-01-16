import mongoose from "mongoose";

const guestSchema = mongoose.Schema(
  {
    guestId: String,
    guestName: String,
    guestEmail: String,
    guestNicNo: String,
    guestContactNo: String,
    guestNicPicture: String, // Store URL or path to the NIC picture
    guestAddress: String, // Optional field for guest address
    guestCity: String,
    guestCountry: String,
    guestGender: String, // Example: male, female, other
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;
