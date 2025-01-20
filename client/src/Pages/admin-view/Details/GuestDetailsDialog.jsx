import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const GuestDetailsDialog = ({ open, guest, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Guest Details</DialogTitle>
      <DialogContent>
        <div className="flex flex-col space-y-2">
          <div>
            <strong>Name:</strong> {guest.guestName}
          </div>
          <div>
            <strong>Email:</strong> {guest.guestEmail}
          </div>
          <div>
            <strong>Contact No:</strong> {guest.guestContactNo}
          </div>
          <div>
            <strong>NIC No:</strong> {guest.guestNicNo}
          </div>
          <div>
            <strong>Address:</strong> {guest.guestAddress || "N/A"} {/* Optional field */}
          </div>
          <div>
            <strong>City:</strong> {guest.guestCity}
          </div>
          <div>
            <strong>Country:</strong> {guest.guestCountry}
          </div>
          <div>
            <strong>Gender:</strong> {guest.guestGender}
          </div>
          {/* You can add more fields as needed */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuestDetailsDialog;
