import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const GuestDetailsDialog = ({ open, guest, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Guest Details</DialogTitle>
      <DialogContent>
        <div className="flex flex-col space-y-2">
          <div>
            <strong>Guest ID:</strong> {guest._id}
          </div>
          <div>
            <strong>Name:</strong> {guest.guestName}
          </div>
          <div>
            <strong>Contact No:</strong> {guest.guestContactNo}
          </div>
          <div>
            <strong>City:</strong> {guest.guestCity}
          </div>
          <div>
            <strong>Country:</strong> {guest.guestCountry}
          </div>
          <div>
            <strong>Email:</strong> {guest.guestEmail}
          </div>
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
