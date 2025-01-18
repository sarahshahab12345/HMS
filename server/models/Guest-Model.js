import mongoose from "mongoose";

const guestSchema = mongoose.Schema({
  guestId: {
    type: String,
    required: [true, "Please enter the guest ID"],
    unique: true, // Assuming guest ID should be unique
  },
  guestName: {
    type: String,
    required: [true, "Please enter the guest name"],
  },
  guestEmail: {
    type: String,
    required: [true, "Please enter the guest email address"],
    unique: true, // Assuming guest email should be unique
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Please enter a valid email address"],
  },
  guestNicNo: {
    type: String,
    required: [true, "Please enter the guest NIC Number"],
    unique: true, // Assuming NIC should be unique
  },
  guestContactNo: {
    type: String,
    required: [true, "Please enter the guest contact number"],
  },
  guestNicPicture: {
    type: String, // Storing the file path or URL of the NIC picture
    required: [true, "Please upload the guest NIC picture"],
  },
  guestCity: {
    type: String,
    required: [true, "Please enter the guest city"],
  },
  guestCountry: {
    type: String,
    required: [true, "Please enter the guest country"],
  },
  guestPassword: {
    type: String,
    required: [true, "Please enter the guest password"],
  },
  guestGender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Please specify the guest gender"],
  },
}, { timestamps: true });

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;