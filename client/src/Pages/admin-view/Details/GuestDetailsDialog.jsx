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

const GuestDetailsDialog = ({ open, guest = {}, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Guest Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={3}>
          {/* Guest Details Section */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Personal Information
            </Typography>
            <Typography>
              <strong>Guest ID:</strong> {guest._id || "N/A"}
            </Typography>
            <Typography>
              <strong>Name:</strong> {guest.guestName || "N/A"}
            </Typography>
            <Typography>
              <strong>Email:</strong> {guest.guestEmail || "N/A"}
            </Typography>
            <Typography>
              <strong>Contact No:</strong> {guest.guestContactNo || "N/A"}
            </Typography>
            <Typography>
              <strong>NIC No:</strong> {guest.guestNicNo || "N/A"}
            </Typography>
          </Paper>

          {/* Address Section */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Address Information
            </Typography>
            <Typography>
              <strong>Address:</strong>{" "}
              {guest.guestAddress || (
                <span style={{ color: "gray", fontStyle: "italic" }}>Not provided</span>
              )}
            </Typography>
            <Typography>
              <strong>City:</strong> {guest.guestCity || "N/A"}
            </Typography>
            <Typography>
              <strong>Country:</strong> {guest.guestCountry || "N/A"}
            </Typography>
          </Paper>

          {/* Additional Details Section */}
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Other Details
            </Typography>
            <Typography>
              <strong>Gender:</strong> {guest.guestGender || "N/A"}
            </Typography>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuestDetailsDialog;
