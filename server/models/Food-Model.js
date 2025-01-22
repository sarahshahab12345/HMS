import mongoose from "mongoose";

const foodScheme = new mongoose.Schema(
  {
    foodId: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: [true, "Food name is required"],
    },
    foodDescription: {
      type: String,
      required: false,
    },
    foodPrice: {
      type: Number,
      required: [true, "Food price is required"],
    },
    foodCategory: {
      type: String,
      required: [true, "Food category is required"],
    },
    foodPicture: {
      type: String, 
      required: [true, "Food picture is required"],
    },
    tax: {
      type: Number,
      required: [true, "Tax is required"],
    },
    foodStatus: {
      type: String,
      enum: ["Active", "Inactive", "Out of Stock"], 
      default: "Active", 
    },
  },
  { timestamps: true } 
);

const Food = mongoose.model("Food", foodScheme);

export default Food;