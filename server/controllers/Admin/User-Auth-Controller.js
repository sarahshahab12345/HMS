import Admin from "../../models/User-Auth-Model.js";

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Incoming request body:", req.body);  // Log the incoming request

    const admin = await Admin.findOne({ email: req.body.email });  // Find admin by email
    
    console.log("Admin found:", admin);  // Log if admin was found or not
    
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
  
    // Compare password (assuming plain text, if hashed, you need to use bcrypt)
    if (admin.password !== req.body.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
  
    return res.status(200).json({ message: "Login successful", email: admin.email });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
