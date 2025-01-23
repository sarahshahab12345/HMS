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

const FoodDetailsDialog = ({ open, food = {}, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Food Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {Object.keys(food).length ? (
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography>
                <strong>Food ID:</strong> {food._id || "N/A"}
              </Typography>
              <Typography>
                <strong>Name:</strong> {food.foodName || "N/A"}
              </Typography>
              <Typography>
                <strong>Category:</strong> {food.foodCategory || "N/A"}
              </Typography>
              <Typography>
                <strong>Description:</strong> {food.foodDescription || "N/A"}
              </Typography>
              <Typography>
                <strong>Price:</strong> {food.foodPrice ? `$${food.foodPrice}` : "N/A"}
              </Typography>
              <Typography>
                <strong>Tax:</strong> {food.tax || "N/A"}
              </Typography>
              <Typography>
                <strong>Food Status:</strong> {food.foodStatus || "N/A"}
              </Typography>
              <Typography>
                <strong>Image:</strong>
                {food.foodPicture ? (
                  <Box mt={1}>
                    <img
                      src={food.foodPicture}
                      alt="Food"
                      style={{ maxWidth: "200px", borderRadius: "8px" }}
                    />
                  </Box>
                ) : (
                  "N/A"
                )}
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
            No food details available.
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

export default FoodDetailsDialog;
