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

const FeedbackDetailsDialog = ({ open, feedback = {}, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Feedback Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {Object.keys(feedback).length ? (
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography>
                <strong>Feedback ID:</strong> {feedback._id || "N/A"}
              </Typography>
              <Typography>
                <strong>Guest Name:</strong> {feedback.guestName || "N/A"}
              </Typography>
              <Typography>
                <strong>Guest Email:</strong> {feedback.guestEmail || "N/A"}
              </Typography>
              <Typography>
                <strong>Feedback Status:</strong> {feedback.feedbackStatus || "N/A"}
              </Typography>
              <Typography>
                <strong>Comments:</strong> {feedback.comments || "N/A"}
              </Typography>
              <Typography>
                <strong>Rating:</strong> {feedback.rating || "N/A"}
              </Typography>
              <Typography>
                <strong>Date:</strong> {new Date(feedback.date).toLocaleDateString() || "N/A"}
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
            No feedback details available.
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

export default FeedbackDetailsDialog;
