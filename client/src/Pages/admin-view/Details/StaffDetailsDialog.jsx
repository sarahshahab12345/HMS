import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const StaffDetailsDialog = ({ open, staff, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Staff Details</DialogTitle>
      <DialogContent>
        <div className="flex flex-col space-y-2">
          <div>
            <strong>Name:</strong> {staff.staffName}
          </div>
          <div>
            <strong>Role:</strong> {staff.staffRole}
          </div>
          <div>
            <strong>Email:</strong> {staff.staffEmail}
          </div>
          <div>
            <strong>Contact No:</strong> {staff.staffContactNo}
          </div>
          <div>
            <strong>Address:</strong> {staff.staffAddress}
          </div>
          <div>
            <strong>City:</strong> {staff.staffCity}
          </div>
          <div>
            <strong>Country:</strong> {staff.staffCountry}
          </div>
          <div>
            <strong>Gender:</strong> {staff.staffGender}
          </div>
          <div>
            <strong>NIC No:</strong> {staff.staffNicNo}
          </div>
          {/* Add any other details as needed */}
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

export default StaffDetailsDialog;
