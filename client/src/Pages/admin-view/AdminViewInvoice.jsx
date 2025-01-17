import React from 'react';

const InvoiceData = [
  {
    invoiceId: "INV001",
    customerName: "Emma Watson",
    customerEmail: "emma.watson@example.com",
    billingDate: "2024-01-14",
    dueDate: "2024-02-14",
    totalAmount: 500.00,
    items: [
      {
        description: "Room Booking",
        quantity: 2,
        unitPrice: 200,
        total: 400,
      },
      {
        description: "Food & Beverage",
        quantity: 1,
        unitPrice: 100,
        total: 100,
      },
    ],
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
];

const AdminViewInvoice = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col items-center">
          {/* Heading before the table */}
          <h2 className="italic text-center text-2xl mb-4 text-gray-700">
            Invoice Management
          </h2>
          
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
                {InvoiceData.map((invoice, index) => (
                  <tr key={invoice.invoiceId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                    <td className="p-4 border border-gray-300">{invoice.invoiceId}</td>
                    <td className="p-4 border border-gray-300">{invoice.customerName}</td>
                    <td className="p-4 border border-gray-300">{invoice.customerEmail}</td>
                    <td className="p-4 border border-gray-300">{new Date(invoice.billingDate).toLocaleDateString()}</td>
                    <td className="p-4 border border-gray-300">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                    <td className="p-4 border border-gray-300">${invoice.totalAmount}</td>
                    <td className="p-4 border border-gray-300">{invoice.paymentStatus}</td>
                    <td className="p-4 border border-gray-300">{invoice.paymentMethod}</td>
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
      </div>
    </>
  );
};

export default AdminViewInvoice;
