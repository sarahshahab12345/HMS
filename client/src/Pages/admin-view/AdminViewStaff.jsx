import React from 'react';
const staffData = [
  {
    staffId: "001",
    staffName: "John Doe",
    staffNicNo: "123456789",
    staffContactNo: "+123456789",
    staffRole: "Manager",
    staffAddress: "123 Main Street",
    staffCity: "Karachi",
    staffCountry: "Pakistan",
    staffGender: "Male",
    staffPicture: "path_to_image",
    staffEmail: "john.doe@example.com",
    staffPassword: "******"
  },
  {
    staffId: "002",
    staffName: "Jane Smith",
    staffNicNo: "987654321",
    staffContactNo: "+987654321",
    staffRole: "Receptionist",
    staffAddress: "456 Elm Street",
    staffCity: "Lahore",
    staffCountry: "Pakistan",
    staffGender: "Female",
    staffPicture: "path_to_image",
    staffEmail: "jane.smith@example.com",
    staffPassword: "******"
  },
  
];
const AdminViewStaff = () => {
  return (
    <>
        <div className="p-4 sm:ml-64">
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 border border-gray-300">Staff ID</th>
            <th className="p-4 border border-gray-300">Name</th>
            <th className="p-4 border border-gray-300">Role</th>
            <th className="p-4 border border-gray-300">Contact No</th>
            <th className="p-4 border border-gray-300">City</th>
            <th className="p-4 border border-gray-300">Country</th>
            <th className="p-4 border border-gray-300">Email</th>
            <th className="p-4 border border-gray-300">Gender</th>
            <th className="p-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={staff.staffId} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
              <td className="p-4 border border-gray-300">{staff.staffId}</td>
              <td className="p-4 border border-gray-300">{staff.staffName}</td>
              <td className="p-4 border border-gray-300">{staff.staffRole}</td>
              <td className="p-4 border border-gray-300">{staff.staffContactNo}</td>
              <td className="p-4 border border-gray-300">{staff.staffCity}</td>
              <td className="p-4 border border-gray-300">{staff.staffCountry}</td>
              <td className="p-4 border border-gray-300">{staff.staffEmail}</td>
              <td className="p-4 border border-gray-300">{staff.staffGender}</td>
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

export default AdminViewStaff;
