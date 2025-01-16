import React from 'react';
const guestData = [
  {
    guestId: "001",
    guestName: "Alice Johnson",
    guestEmail: "alice.johnson@example.com",
    guestNicNo: "654321123",
    guestContactNo: "+654321123",
    guestNicPicture: "path_to_nic_image",
    guestAddress: "789 Oak Avenue",
    guestCity: "Islamabad",
    guestCountry: "Pakistan",
    guestGender: "Female",
  },
  
]
const AdminViewGuest = () => {
  return (
    <>
        <div className="p-4 sm:ml-64">
     <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
    <thead className="bg-gray-200">
      <tr>
        <th className="p-4 border border-gray-300">Guest ID</th>
        <th className="p-4 border border-gray-300">Name</th>
        <th className="p-4 border border-gray-300">Email</th>
        <th className="p-4 border border-gray-300">Contact No</th>
        <th className="p-4 border border-gray-300">City</th>
        <th className="p-4 border border-gray-300">Country</th>
        <th className="p-4 border border-gray-300">Gender</th>
        <th className="p-4 border border-gray-300">Actions</th>
      </tr>
    </thead>
    <tbody>
      {guestData.map((guest, index) => (
        <tr key={guest.guestId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
          <td className="p-4 border border-gray-300">{guest.guestId}</td>
          <td className="p-4 border border-gray-300">{guest.guestName}</td>
          <td className="p-4 border border-gray-300">{guest.guestEmail}</td>
          <td className="p-4 border border-gray-300">{guest.guestContactNo}</td>
          <td className="p-4 border border-gray-300">{guest.guestCity}</td>
          <td className="p-4 border border-gray-300">{guest.guestCountry}</td>
          <td className="p-4 border border-gray-300">{guest.guestGender}</td>
          <td className="p-4 border border-gray-300 flex space-x-2">
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
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

export default AdminViewGuest;
