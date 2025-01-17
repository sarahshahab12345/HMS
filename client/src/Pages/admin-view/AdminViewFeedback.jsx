import React from 'react';

const feedbackData = [
  {
    feedbackId: "F001",
    userName: "Jane Doe",
    userEmail: "jane.doe@example.com",
    feedbackDate: "2024-01-14",
    feedbackType: "Suggestion",
    feedbackMessage: "It would be great if you could add more payment options.",
    feedbackStatus: "Pending",
  },
  {
    feedbackId: "F002",
    userName: "John Smith",
    userEmail: "john.smith@example.com",
    feedbackDate: "2024-01-12",
    feedbackType: "Complaint",
    feedbackMessage: "The room service was delayed by over 30 minutes.",
    feedbackStatus: "Reviewed",
  },
];

const AdminViewFeedback = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col items-center">
          {/* Heading before the table */}
          <h2 className="italic text-center text-2xl mb-4 text-gray-700">
            Feedback Management
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Feedback ID</th>
                  <th className="p-4 border border-gray-300">User Name</th>
                  <th className="p-4 border border-gray-300">Email</th>
                  <th className="p-4 border border-gray-300">Date</th>
                  <th className="p-4 border border-gray-300">Type</th>
                  <th className="p-4 border border-gray-300">Message</th>
                  <th className="p-4 border border-gray-300">Status</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((feedback, index) => (
                  <tr key={feedback.feedbackId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                    <td className="p-4 border border-gray-300">{feedback.feedbackId}</td>
                    <td className="p-4 border border-gray-300">{feedback.userName}</td>
                    <td className="p-4 border border-gray-300">{feedback.userEmail}</td>
                    <td className="p-4 border border-gray-300">{new Date(feedback.feedbackDate).toLocaleDateString()}</td>
                    <td className="p-4 border border-gray-300">{feedback.feedbackType}</td>
                    <td className="p-4 border border-gray-300">{feedback.feedbackMessage}</td>
                    <td className="p-4 border border-gray-300">{feedback.feedbackStatus}</td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button className="bg-green-500 text-white px-2 py-1 rounded">Mark as Resolved</button>
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded">Assign</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewFeedback;
