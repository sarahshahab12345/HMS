import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    default: "admin@example.com",
  },
  password: {
    type: String,
    required: true,
    default: "admin123",
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
