import React from 'react';

const billingData = [
  {
    invoiceId: "INV001",
    customerName: "Emma Watson",
    customerEmail: "emma.watson@example.com",
    billingDate: "2024-01-14",
    dueDate: "2024-02-14",
    totalAmount: 500.00,
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
  {
    invoiceId: "INV002",
    customerName: "Robert Brown",
    customerEmail: "robert.brown@example.com",
    billingDate: "2024-01-10",
    dueDate: "2024-02-10",
    totalAmount: 1200.00,
    paymentStatus: "Paid",
    paymentMethod: "Bank Transfer",
  },
];

const AdminViewBilling = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Invoice ID</th>
                <th className="p-4 border border-gray-300">Customer Name</th>
                <th className="p-4 border border-gray-300">Email</th>
                <th className="p-4 border border-gray-300">Billing Date</th>
                <th className="p-4 border border-gray-300">Due Date</th>
                <th className="p-4 border border-gray-300">Total Amount</th>
                <th className="p-4 border border-gray-300">Payment Status</th>
                <th className="p-4 border border-gray-300">Payment Method</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((billing, index) => (
                <tr key={billing.invoiceId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="p-4 border border-gray-300">{billing.invoiceId}</td>
                  <td className="p-4 border border-gray-300">{billing.customerName}</td>
                  <td className="p-4 border border-gray-300">{billing.customerEmail}</td>
                  <td className="p-4 border border-gray-300">{new Date(billing.billingDate).toLocaleDateString()}</td>
                  <td className="p-4 border border-gray-300">{new Date(billing.dueDate).toLocaleDateString()}</td>
                  <td className="p-4 border border-gray-300">${billing.totalAmount}</td>
                  <td className="p-4 border border-gray-300">{billing.paymentStatus}</td>
                  <td className="p-4 border border-gray-300">{billing.paymentMethod}</td>
                  <td className="p-4 border border-gray-300 flex space-x-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded">View</button>
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded">Download</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminViewBilling;
