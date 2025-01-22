import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

function BookingDetailsDialog({ open, booking = {}, onClose }) {
  const {
    bookingId = "N/A",
    guestId = "N/A",
    roomId = "N/A",
    bookingPlatform = "N/A",
    bookingStartDate = "N/A",
    bookingEndDate = "N/A",
    comments = "N/A",
    checkIn = "N/A",
    checkOut = "N/A",
    isCancelled = false,
    foodsArray = [],
    totalAmount = "N/A",
  } = booking;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" component="div" fontWeight="bold">
          Booking Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={3}>
          {/* General Information */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              General Information
            </Typography>
            <Typography>
              <strong>Booking ID:</strong> {bookingId}
            </Typography>
            <Typography>
              <strong>Guest ID:</strong> {guestId._id || guestId}
            </Typography>
            <Typography>
              <strong>Room ID:</strong> {roomId._id || roomId}
            </Typography>
            <Typography>
              <strong>Booking Platform:</strong> {bookingPlatform}
            </Typography>
          </Paper>

          {/* Dates Section */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Dates
            </Typography>
            <Typography>
              <strong>Booking Start Date:</strong>{" "}
              {new Date(bookingStartDate).toLocaleDateString() || bookingStartDate}
            </Typography>
            <Typography>
              <strong>Booking End Date:</strong>{" "}
              {new Date(bookingEndDate).toLocaleDateString() || bookingEndDate}
            </Typography>
            <Typography>
              <strong>Check In:</strong> {checkIn}
            </Typography>
            <Typography>
              <strong>Check Out:</strong> {checkOut}
            </Typography>
          </Paper>

          {/* Additional Details */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Additional Details
            </Typography>
            <Typography>
              <strong>Comments:</strong> {comments}
            </Typography>
            <Typography>
              <strong>Is Cancelled:</strong>{" "}
              <span style={{ color: isCancelled ? "red" : "green", fontWeight: "bold" }}>
                {isCancelled ? "Yes" : "No"}
              </span>
            </Typography>
            <Typography>
              <strong>Total Amount:</strong>{" "}
              <span style={{ fontWeight: "bold", color: "#3f51b5" }}>{totalAmount}</span>
            </Typography>
          </Paper>

          {/* Foods List */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Foods
            </Typography>
            {foodsArray.length > 0 ? (
              <Box component="ul" sx={{ paddingLeft: 3, margin: 0 }}>
                {foodsArray.map((food, index) => (
                  <li key={index}>
                    <Typography>{food}</Typography>
                  </li>
                ))}
              </Box>
            ) : (
              <Typography>N/A</Typography>
            )}
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookingDetailsDialog;
