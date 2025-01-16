import mongoose from "mongoose";

const staffSchema = mongoose.Schema(
  {
    staffId: String,
    staffName: String,
    staffNicNo: String,
    staffContactNo: String,
    staffNicPicture: String, // Store URL or path to the NIC picture
    staffRole: String, // Example: manager, receptionist, housekeeping
    staffAddress: String,
    staffCity: String,
    staffCountry: String,
    staffGender: String, // Example: male, female, other
    staffPicture: String, // Store URL or path to the profile picture
    staffEmail: String,
    staffPassword: String,
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
