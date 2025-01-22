import Booking from "../../models/Booking-Model.js";

// Get All Bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate("guestId", "name email") 
            .populate("roomId", "roomNumber type"); 
        res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            data: {
                count: bookings.length,
                bookings,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching bookings",
            error: error.message,
        });
    }
};

// Get a Booking by ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate("guestId", "name email")
            .populate("roomId", "roomNumber type");
        if (booking) {
            res.status(200).json({
                success: true,
                message: "Booking fetched successfully",
                data: booking,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching booking",
            error: error.message,
        });
    }
};

// Add a New Booking
const createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new Booking(bookingData);
        const savedBooking = await newBooking.save();
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: savedBooking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating booking",
            error: error.message,
        });
    }
};

// Update a Booking by ID
const updateBooking = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
        })
            .populate("guestId", "name email")
            .populate("roomId", "roomNumber type");

        if (updatedBooking) {
            res.status(200).json({
                success: true,
                message: "Booking updated successfully",
                data: updatedBooking,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating booking",
            error: error.message,
        });
    }
};

// Delete a Booking
const deleteBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const bookingToDelete = await Booking.findById(id);

        if (bookingToDelete) {
            await Booking.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: "Booking deleted successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting booking",
            error: error.message,
        });
    }
};

export {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBooking,
};
