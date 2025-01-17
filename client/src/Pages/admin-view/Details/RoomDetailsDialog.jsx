import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const RoomDetailsDialog = ({ open, room, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Room Details</DialogTitle>
      <DialogContent>
        <div className="flex flex-col space-y-2">
          <div>
            <strong>Room No:</strong> {room.roomNo}
          </div>
          <div>
            <strong>Floor:</strong> {room.roomFloor}
          </div>
          <div>
            <strong>Room Type:</strong> {room.roomType}
          </div>
          <div>
            <strong>Price:</strong> {room.price}
          </div>
          <div>
            <strong>Room Status:</strong> {room.roomStatus}
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

export default RoomDetailsDialog;
