import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFoodItems} from "../../Slices/foodSlice.js";
import { AiOutlineFile } from "react-icons/ai";
import FoodDetailsDialog from "../admin-view/Details/FoodDetailsDialog.jsx";

const ReceptionistViewFood = () => {
  const dispatch = useDispatch();
  const { isLoading, foodItems, error } = useSelector((state) => state.food);

  const [selectedFood, setSelectedFood] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllFoodItems());
  }, [dispatch]);

  const handleOpenDialog = (food) => {
    setSelectedFood(food);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedFood(null);
    setDialogOpen(false);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Food Management
        </h2>

        <div className="overflow-x-auto">
          {isLoading ? (
            <p>Loading food items...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Food ID</th>
                  <th className="p-4 border border-gray-300">Picture</th>
                  <th className="p-4 border border-gray-300">Name</th>
                  <th className="p-4 border border-gray-300">Description</th>
                  <th className="p-4 border border-gray-300">Price</th>
                  <th className="p-4 border border-gray-300">Category</th>
                  <th className="p-4 border border-gray-300">Tax</th>
                  <th className="p-4 border border-gray-300">Status</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {foodItems.map((food, index) => (
                  <tr
                    key={food.foodId}
                    className={`bg-white ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">
                      {food.foodId}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {food.foodPicture ? (
                        <img
                          src={food.foodPicture}
                          alt="Food"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-500">N/A</span>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {food.foodName}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {food.foodDescription || "N/A"}
                    </td>
                    <td className="p-4 border border-gray-300">
                      ${food.foodPrice}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {food.foodCategory}
                    </td>
                    <td className="p-4 border border-gray-300">{food.tax}%</td>
                    <td className="p-4 border border-gray-300">
                      {food.foodStatus}
                    </td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                   
                      <button
                        className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                        onClick={() => handleOpenDialog(food)}
                      >
                        <AiOutlineFile className="mr-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Details Dialog */}
      {selectedFood && (
        <FoodDetailsDialog
          open={dialogOpen}
          food={selectedFood}
          onClose={handleCloseDialog}
        />
      )}

    </div>
  );
};

export default ReceptionistViewFood;
