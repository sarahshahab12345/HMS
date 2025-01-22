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

const StaffDetailsDialog = ({ open, staff = {}, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Staff Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {Object.keys(staff).length ? (
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography>
                <strong>Staff ID:</strong> {staff._id || "N/A"}
              </Typography>
              <Typography>
                <strong>Name:</strong> {staff.staffName || "N/A"}
              </Typography>
              <Typography>
                <strong>Role:</strong> {staff.staffRole || "N/A"}
              </Typography>
              <Typography>
                <strong>Email:</strong> {staff.staffEmail || "N/A"}
              </Typography>
              <Typography>
                <strong>Contact No:</strong> {staff.staffContactNo || "N/A"}
              </Typography>
              <Typography>
                <strong>Address:</strong> {staff.staffAddress || "N/A"}
              </Typography>
              <Typography>
                <strong>City:</strong> {staff.staffCity || "N/A"}
              </Typography>
              <Typography>
                <strong>Country:</strong> {staff.staffCountry || "N/A"}
              </Typography>
              <Typography>
                <strong>Gender:</strong> {staff.staffGender || "N/A"}
              </Typography>
              <Typography>
                <strong>NIC No:</strong> {staff.staffNicNo || "N/A"}
              </Typography>
            </Box>
          </Paper>
        ) : (
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            sx={{ marginTop: 2 }}
          >
            No staff details available.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ textTransform: "none", paddingX: 3 }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StaffDetailsDialog;
