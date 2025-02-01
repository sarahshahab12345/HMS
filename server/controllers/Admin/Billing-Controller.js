import Billing from "../../models/Billing-Model.js";

// Create a new billing
export const createBilling = async (req, res) => {
  try {
    const { billingId, guestId, bookingId, paymentStatus, totalAmount } = req.body;

    // Check if all fields are provided
    if (!billingId || !guestId || !bookingId || !paymentStatus || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new billing object
    const newBilling = new Billing({
      billingId,
      guestId,
      bookingId,
      paymentStatus,
      totalAmount,
    });

    // Save the billing data
    const savedBilling = await newBilling.save();

    return res.status(201).json({
      message: "Billing created successfully",
      billing: savedBilling,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating billing", error: error.message });
  }
};

// Get all billings
export const getAllBillings = async (req, res) => {
  try {
    const billings = await Billing.find();

    return res.status(200).json({
      success: true,
      message: "Billings fetched successfully",
      data: {
        count: billings.length,
        billings,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching billings", error: error.message });
  }
};

// Get billing by ID
export const getBillingById = async (req, res) => {
  const { id } = req.params;
  try {
    const billing = await Billing.findById(id);

    if (!billing) {
      return res.status(404).json({ message: "Billing not found" });
    }

    return res.status(200).json({ billing });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching billing", error: error.message });
  }
};

// Update billing by ID
export const updateBilling = async (req, res) => {
  const { id } = req.params;
  const { paymentStatus, totalAmount } = req.body;

  try {
    const updatedBilling = await Billing.findByIdAndUpdate(
      id,
      { paymentStatus, totalAmount },
      { new: true, runValidators: true }
    );

    if (!updatedBilling) {
      return res.status(404).json({ message: "Billing not found" });
    }

    return res.status(200).json({
      message: "Billing updated successfully",
      billing: updatedBilling,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating billing", error: error.message });
  }
};

// Delete billing by ID
export const deleteBilling = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBilling = await Billing.findByIdAndDelete(id);

    if (!deletedBilling) {
      return res.status(404).json({ message: "Billing not found" });
    }

    return res.status(200).json({ message: "Billing deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting billing", error: error.message });
  }
};

export default {
  createBilling,
  getAllBillings,
  getBillingById,
  updateBilling,
  deleteBilling,
};
