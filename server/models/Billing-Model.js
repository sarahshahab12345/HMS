import mongoose from "mongoose";

const billingSchema = mongoose.Schema(
  {
    billingId:{
      type: String,
      required: [true, "Please enter the billing ID"],
      unique: true,
    },
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest", // Reference to the Guest model
      required: [true, "Guest ID is required"],
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking", // Reference to the Booking model
      required: [true, "Booking ID is required"],
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"], // Enum for payment status
      required: [true, "Payment status is required"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Billing = mongoose.model("Billing", billingSchema);

export default Billing;