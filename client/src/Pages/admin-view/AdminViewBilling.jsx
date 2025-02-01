import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBillings, updateBilling } from "../../Slices/billingSlice.js";
import { AiOutlineEdit, AiOutlineFile } from "react-icons/ai";
import BillingDetailsDialog from "./Details/BillingDetailsDialog.jsx";
import UpdateBillingDialog from "./UpdateDetails/UpdateBillingDialog.jsx";

const AdminViewBilling = () => {
  const dispatch = useDispatch();
  const { billingRecords = [], isLoading, error } = useSelector((state) => state.billing);

  useEffect(() => {
    dispatch(getAllBillings());
  }, [dispatch]);
  
  useEffect(() => {
    console.log(billingRecords); 
  }, [billingRecords]);  

  const [selectedBilling, setSelectedBilling] = useState(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);

  const handleOpenDetailsDialog = (billing) => {
    setSelectedBilling(billing);
    setDetailsDialogOpen(true);
  };

  const handleCloseDetailsDialog = () => {
    setSelectedBilling(null);
    setDetailsDialogOpen(false);
  };

  const handleOpenUpdateDialog = (billing) => {
    setSelectedBilling(billing);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setSelectedBilling(null);
    setUpdateDialogOpen(false);
  };

  const handleUpdate = (updatedBilling) => {
    if (updatedBilling && updatedBilling._id) {
      const { _id: id, ...formData } = updatedBilling;
      dispatch(updateBilling({ id, formData }))
        .unwrap()
        .then(() => {
          console.log("Billing record updated successfully!");
          dispatch(getAllBillings());
        })
        .catch((error) => {
          console.error("Failed to update billing record:", error);
        });
    } else {
      console.error("Invalid billing data. Cannot update.");
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Billing Management
        </h2>

        <div className="overflow-x-auto">
          {isLoading ? (
            <p>Loading billing records...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : billingRecords.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border border-gray-300">Guest ID</th>
                  <th className="p-4 border border-gray-300">Booking ID</th>
                  <th className="p-4 border border-gray-300">Payment Status</th>
                  <th className="p-4 border border-gray-300">Total Amount</th>
                  <th className="p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingRecords.map((billing, index) => (
                  <tr
                    key={billing._id}
                    className={`bg-white ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-4 border border-gray-300">{billing.guestId}</td>
                    <td className="p-4 border border-gray-300">{billing.bookingId}</td>
                    <td className="p-4 border border-gray-300">{billing.paymentStatus}</td>
                    <td className="p-4 border border-gray-300">{billing.totalAmount}</td>
                    <td className="p-4 border border-gray-300 flex space-x-2">
                      <button
                        className="flex items-center text-blue-500 px-1 border-2 border-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white"
                        onClick={() => handleOpenUpdateDialog(billing)}
                      >
                        <AiOutlineEdit className="mr-1" />
                      </button>
                      <button
                        className="flex items-center text-green-500 border-2 border-green-500 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                        onClick={() => handleOpenDetailsDialog(billing)}
                      >
                        <AiOutlineFile className="mr-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No billing records available.</p>
          )}
        </div>
      </div>

      {/* Details Dialog */}
      {selectedBilling && (
        <BillingDetailsDialog
          open={detailsDialogOpen}
          billing={selectedBilling}
          onClose={handleCloseDetailsDialog}
        />
      )}

      {/* Update Dialog */}
      {selectedBilling && (
        <UpdateBillingDialog
          open={updateDialogOpen}
          billing={selectedBilling}
          onClose={handleCloseUpdateDialog}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default AdminViewBilling;
