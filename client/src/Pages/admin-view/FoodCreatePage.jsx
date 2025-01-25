import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodItem } from "../../Slices/foodSlice.js"; 
import { uploadImage } from "../../Slices/image-uploadSlice.js"; 

function FoodCreatePage() {
  const dispatch = useDispatch();

  const generateFoodId = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900);
    return `F${randomNumber}`; // Prefix 'F' for food ID
  };

  const [formData, setFormData] = useState({
    foodId: "",
    foodName: "",
    foodDescription: "",
    foodPrice: "",
    foodCategory: "",
    foodPicture: "",
    tax: "",
    foodStatus: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        dispatch(uploadImage(base64Image));
        setFormData({ ...formData, foodPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const foodId = generateFoodId(); // Generate the food ID
    const newFormData = { ...formData, foodId }; // Add the generated ID to form data
    dispatch(addFoodItem(newFormData));
    setFormData({
      foodId: "",
      foodName: "",
      foodDescription: "",
      foodPrice: "",
      foodCategory: "",
      foodPicture: "",
      tax: "",
      foodStatus: "Active",
    });
  };

  return (
    <div className="p-10 sm:ml-64">
      <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Food</h2>
        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="foodName" className="text-gray-700 text-lg">Food Name</label>
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Food Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodDescription" className="text-gray-700 text-lg">Description</label>
              <textarea
                name="foodDescription"
                value={formData.foodDescription}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Description"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodPrice" className="text-gray-700 text-lg">Price</label>
              <input
                type="number"
                name="foodPrice"
                value={formData.foodPrice}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Price"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodCategory" className="text-gray-700 text-lg">Category</label>
              <input
                type="text"
                name="foodCategory"
                value={formData.foodCategory}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Category"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tax" className="text-gray-700 text-lg">Tax</label>
              <input
                type="number"
                name="tax"
                value={formData.tax}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                placeholder="Enter Tax"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodStatus" className="text-gray-700 text-lg">Status</label>
              <select
                name="foodStatus"
                value={formData.foodStatus}
                onChange={handleChange}
                className="border p-3 rounded mt-1 shadow-lg"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="foodPicture" className="text-gray-700 text-lg">Food Picture</label>
              <input
                type="file"
                name="foodPicture"
                onChange={handleImageChange}
                className="border p-3 rounded mt-1 shadow-lg"
              />
              {formData.foodPicture && (
                <img src={formData.foodPicture} alt="Food Preview" className="mt-2 max-w-[150px] rounded-lg" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoodCreatePage;
