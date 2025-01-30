import express from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from "../../controllers/Admin/Feedback-Controller.js";

const router = express.Router();

// Create a new feedback
router.post("/create", createFeedback);

// Get all feedbacks
router.get("/all", getAllFeedbacks);

// Get feedback by ID
router.get("/get/:id", getFeedbackById);

// Update feedback by ID
router.put("/update/:id", updateFeedback);

// Delete feedback by ID
router.delete("/delete/:id", deleteFeedback);

export default router;
