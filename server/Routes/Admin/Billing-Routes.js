import express from "express";
import {
  createBilling,
  getAllBillings,
  getBillingById,
  updateBilling,
  deleteBilling,
} from "../../controllers/Admin/Billing-Controller.js";

const router = express.Router();

// Create a new billing
router.post("/create", createBilling);

// Get all billings
router.get("/all", getAllBillings);

// Get billing by ID
router.get("/get/:id", getBillingById);

// Update billing by ID
router.put("/update/:id", updateBilling);

// Delete billing by ID
router.delete("/delete/:id", deleteBilling);

export default router;
