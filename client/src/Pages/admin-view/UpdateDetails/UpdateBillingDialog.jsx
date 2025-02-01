import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const UpdateBillingDialog = ({ open, billing, onClose, onUpdate }) => {
  const [updatedBilling, setUpdatedBilling] = useState(billing || {});
  const dispatch = useDispatch();

  useEffect(() => {
    if (billing) {
      setUpdatedBilling(billing);
    }
  }, [billing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBilling({ ...updatedBilling, [name]: value });
  };

  const handleUpdate = () => {
    const { billingId, guestId, bookingId, paymentStatus, totalAmount } = updatedBilling;

    // Validation
    if (!billingId || !guestId || !bookingId || !paymentStatus || !totalAmount) {
      alert("All required fields must be filled out!");
      return;
    }

    if (isNaN(totalAmount)) {
      alert("Total amount must be a valid number.");
      return;
    }

    const payload = { ...updatedBilling };
    onUpdate(payload);
    onClose();
  };

  const handleClose = () => {
    setUpdatedBilling(billing);
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
          <h3 className="text-2xl mb-4">Update Billing Details</h3>

          <div className="mb-4">
            <label htmlFor="billingId" className="block mb-2">
              Billing ID
            </label>
            <input
              type="text"
              id="billingId"
              name="billingId"
              value={updatedBilling.billingId || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guestId" className="block mb-2">
              Guest ID
            </label>
            <input
              type="text"
              id="guestId"
              name="guestId"
              value={updatedBilling.guestId || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bookingId" className="block mb-2">
              Booking ID
            </label>
            <input
              type="text"
              id="bookingId"
              name="bookingId"
              value={updatedBilling.bookingId || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="paymentStatus" className="block mb-2">
              Payment Status
            </label>
            <select
              id="paymentStatus"
              name="paymentStatus"
              value={updatedBilling.paymentStatus || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="totalAmount" className="block mb-2">
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              value={updatedBilling.totalAmount || ""}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
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

export default UpdateBillingDialog;
