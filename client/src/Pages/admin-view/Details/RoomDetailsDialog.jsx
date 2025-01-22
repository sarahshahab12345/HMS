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

const RoomDetailsDialog = ({ open, room = {}, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Room Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {Object.keys(room).length ? (
          <Paper elevation={2} sx={{ padding: 3, borderRadius: 2 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography>
                <strong>Room ID:</strong> {room._id || "N/A"}
              </Typography>
              <Typography>
                <strong>Room Number:</strong> {room.roomNo || "N/A"}
              </Typography>
              <Typography>
                <strong>Floor:</strong> {room.roomFloor || "N/A"}
              </Typography>
              <Typography>
                <strong>Type:</strong> {room.roomType || "N/A"}
              </Typography>
              <Typography>
                <strong>Price:</strong> {room.price ? `$${room.price}` : "N/A"}
              </Typography>
              <Typography>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color: room.roomStatus === "Available" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {room.roomStatus || "N/A"}
                </span>
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
            No room details available.
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

export default RoomDetailsDialog;
