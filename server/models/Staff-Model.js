import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  staffId: { type: String, required: true },
  staffName: { type: String, required: true },
  staffNicNo: { type: String, required: true },
  staffContactNo: { type: String, required: true },
  staffRole: { type: String, required: true },
  staffAddress: { type: String, required: true },
  staffCity: { type: String, required: true },
  staffCountry: { type: String, required: true },
  staffGender: { type: String, required: true },
  staffPicture: { type: String, required: true },
  staffEmail: { type: String, required: true },
  staffPassword: { type: String, required: true },
});

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
