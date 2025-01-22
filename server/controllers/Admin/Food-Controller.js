import Food from "../../models/Food-Model.js";

// Controller to get all foods
export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({
      success: true,
      message: "Foods fetched successfully",
      data: {
        count: foods.length,
        foods,
      },
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error retrieving foods", 
      error 
    });
  }
};

// Controller to get a specific food by ID
export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await Food.findById(id);
    if (!food) {
      return res.status(404).json({ 
        success: false, 
        message: "Food not found" 
      });
    }
    res.status(200).json({
      success: true,
      message: "Food fetched successfully",
      data: food,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error retrieving food", 
      error 
    });
  }
};

// Controller to create a new food
export const createFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();
    res.status(201).json({
      success: true,
      message: "Food created successfully",
      data: savedFood,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error creating food", 
      error 
    });
  }
};

// Controller to update an existing food by ID
export const updateFood = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ 
        success: false, 
        message: "Food not found" 
      });
    }
    res.status(200).json({
      success: true,
      message: "Food updated successfully",
      data: updatedFood,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error updating food", 
      error 
    });
  }
};

// Controller to delete a food by ID
export const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ 
        success: false, 
        message: "Food not found" 
      });
    }
    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error deleting food", 
      error 
    });
  }
};

export default {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood
};
