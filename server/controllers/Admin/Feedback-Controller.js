import Feedback from "../../models/Feedback-Model.js";

// Create a new feedback
export const createFeedback = async (req, res) => {
  try {
    const {
      guestId,
      guestid,
      guestEmail,
      guestName,
      guestNicPicture,
      feedbackStatus,
      comments,
      rating,
    } = req.body;

    if (
      !guestId ||
      !guestid ||
      !guestEmail ||
      !guestName ||
      !guestNicPicture ||
      !feedbackStatus ||
      !comments ||
      !rating
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new feedback
    const newFeedback = new Feedback({
      guestId,
      guestid, // Include guestid here
      guestEmail,
      guestName,
      guestNicPicture,
      feedbackStatus,
      comments,
      rating,
    });

    const savedFeedback = await newFeedback.save();

    return res
      .status(201)
      .json({
        message: "Feedback created successfully",
        feedback: savedFeedback,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error creating feedback", error: error.message });
  }
};

// Get all feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    return res.status(200).json({
      success: true,
      message: "Feedback fetched successfully",
      data: {
        count: feedbacks.length,
        feedbacks,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error fetching feedbacks", error: error.message });
  }
};

// Get feedback by ID
export const getFeedbackById = async (req, res) => {
  const { id } = req.params;
  try {
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    return res.status(200).json({ feedback });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error fetching feedback", error: error.message });
  }
};

// Update feedback by ID
export const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { feedbackStatus, comments, rating } = req.body;

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { feedbackStatus, comments, rating },
      { new: true, runValidators: true }
    );

    if (!updatedFeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    return res
      .status(200)
      .json({
        message: "Feedback updated successfully",
        feedback: updatedFeedback,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error updating feedback", error: error.message });
  }
};

// Delete feedback by ID
export const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);

    if (!deletedFeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    return res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error deleting feedback", error: error.message });
  }
};

export default {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};
