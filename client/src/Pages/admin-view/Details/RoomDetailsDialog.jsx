import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const RoomDetailsDialog = ({ open, room, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Room Details</DialogTitle>
      <DialogContent>
        {room ? (
          <div className="flex flex-col space-y-2">
            <div>
              <strong>Room ID:</strong> {room.roomId || "N/A"}
            </div>
            <div>
              <strong>Room Number:</strong> {room.roomNo || "N/A"}
            </div>
            <div>
              <strong>Floor:</strong> {room.roomFloor || "N/A"}
            </div>
            <div>
              <strong>Type:</strong> {room.roomType || "N/A"}
            </div>
            <div>
              <strong>Price:</strong> {room.price ? `$${room.price}` : "N/A"}
            </div>
            <div>
              <strong>Status:</strong> {room.roomStatus || "N/A"}
            </div>
          </div>
        ) : (
          <div>No room details available.</div>
        )}
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
