import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeedbacks } from "../../Slices/feedbackSlice.js";
import { AiOutlineFile } from "react-icons/ai";
import FeedbackDetailsDialog from "./Details/FeedbackDetailsDialog.jsx";

const AdminViewFeedback = () => {
  const dispatch = useDispatch();
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { feedbacks, isLoading, error } = useSelector(
    (state) => state.feedback
  );

  const handleOpenDialog = (feedback) => {
    setSelectedFeedback(feedback);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedFeedback(null);
    setDialogOpen(false);
  };

  // Fetch all feedbacks when the component mounts
  useEffect(() => {
    dispatch(getAllFeedbacks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Feedback Management
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Feedback ID</th>
                <th className="p-4 border border-gray-300">Guest Name</th>
                <th className="p-4 border border-gray-300">Guest Email</th>
                <th className="p-4 border border-gray-300">Date</th>
                <th className="p-4 border border-gray-300">Feedback Status</th>
                <th className="p-4 border border-gray-300">Comments</th>
                <th className="p-4 border border-gray-300">Rating</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr
                  key={feedback._id}
                  className={`bg-white ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  }`}
                >
                  <td className="p-4 border border-gray-300">{feedback._id}</td>
                  <td className="p-4 border border-gray-300">
                    {feedback.guestName}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {feedback.guestEmail}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {new Date(feedback.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {feedback.feedbackStatus}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {feedback.comments}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {feedback.rating}
                  </td>
                  <td className="p-4 border border-gray-300 flex space-x-2">
                    <button
                      className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                      onClick={() => handleOpenDialog(feedback)}
                    >
                      <AiOutlineFile className="mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Details Dialog */}
      {selectedFeedback && (
        <FeedbackDetailsDialog
          open={dialogOpen}
          feedback={selectedFeedback}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default AdminViewFeedback;
