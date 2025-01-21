import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        unique: true,
    },
    guestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: [true, "Guest ID is required"],
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: [true, "Room ID is required"],
    },
    bookingPlatform: {
        type: String,
        enum: ["OnSite", "Website"],
        required: [true, "Booking Platform is required"],
    },
    bookingStartDate: {
        type: Date,
        required: [true, "Booking start date is required"],
    },
    bookingEndDate: {
        type: Date,
        required: [true, "Booking end date is required"],
    },
    comments: {
        type: String,
    },
    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    },
    isCancelled: {
        type: Boolean,
        default: false,
    },
    foodsArray: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
        },
    ],
    totalAmount: {
        type: Number,
        required: [true, "Total amount is required"]
    }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
