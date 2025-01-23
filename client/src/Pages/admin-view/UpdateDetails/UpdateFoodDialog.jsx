import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Slices/image-uploadSlice.js"; 

const UpdateFoodDialog = ({ open, food, onClose, onUpdate }) => {
  // State to hold updated food data
  const [updatedFood, setUpdatedFood] = useState(food || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (food) {
      setUpdatedFood(food);
    }
  }, [food]);

  // Handle changes to form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFood({ ...updatedFood, [name]: value });
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;
        dispatch(uploadImage(base64Image));
        setUpdatedFood({ ...updatedFood, foodPicture: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle the update process
  const handleUpdate = () => {
    const {
      foodId,
      foodName,
      foodDescription,
      foodPrice,
      foodCategory,
      foodPicture,
      tax,
      foodStatus,
    } = updatedFood;

    // Validate required fields
    if (!foodId || !foodName || !foodPrice || !foodCategory || !foodPicture || !tax) {
      alert("Please fill out all required fields!");
      return;
    }

    const payload = { ...updatedFood };

    onUpdate(payload); // Pass the updated food data to the parent
    onClose(); // Close the dialog
  };

  // Handle closing the dialog
  const handleClose = () => {
    setUpdatedFood(food); 
    onClose();
  };

  return (
    open && (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        onClick={handleClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-1/2 overflow-auto max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl mb-4">Update Food Details</h3>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="foodName" className="block mb-2">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={updatedFood?.foodName || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodDescription" className="block mb-2">
              Description
            </label>
            <textarea
              id="foodDescription"
              name="foodDescription"
              value={updatedFood?.foodDescription || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodPrice" className="block mb-2">
              Price
            </label>
            <input
              type="number"
              id="foodPrice"
              name="foodPrice"
              value={updatedFood?.foodPrice || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodCategory" className="block mb-2">
              Category
            </label>
            <input
              type="text"
              id="foodCategory"
              name="foodCategory"
              value={updatedFood?.foodCategory || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodPicture" className="block mb-2">
              Picture
            </label>
            <input
              type="file"
              name="foodPicture"
              onChange={handleImageChange}
              className="border p-3 rounded mt-1 shadow-lg"
            />
            {updatedFood.foodPicture && (
              <img
                src={updatedFood.foodPicture}
                alt="Food Preview"
                className="mt-2 max-w-[150px] rounded-lg"
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="tax" className="block mb-2">
              Tax
            </label>
            <input
              type="number"
              id="tax"
              name="tax"
              value={updatedFood?.tax || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodStatus" className="block mb-2">
              Status
            </label>
            <select
              id="foodStatus"
              name="foodStatus"
              value={updatedFood?.foodStatus || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateFoodDialog;
