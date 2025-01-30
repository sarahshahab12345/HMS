import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    guestId: {
      type: String,
      required: true,
    },
    guestid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
    guestEmail: {
      type: String,
      required: [true, "Guest email is required"],
    },
    guestName: {
      type: String,
      required: [true, "Guest name is required"],
    },
    guestNicPicture: {
      type: String,
      required: [true, "Guest NIC picture is required"],
    },
    feedbackStatus: {
      type: String,
      enum: ["Good", "Bad", "Worst"],
      required: [true, "Feedback status is required"],
    },
    comments: {
      type: String,
      required: [true, "Comments are required"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Rating is required and should be between 1 and 5"]
    },
    date: {
      type: Date,
      default: Date.now, // Automatically set to the current date
    },
  },
  { timestamps: true } // Automatically tracks createdAt and updatedAt
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;