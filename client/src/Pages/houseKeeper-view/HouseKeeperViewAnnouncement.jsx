const HouseKeeperViewAnnouncement = () => {
  // Announcements array
  const announcements = [
    {
      id: "A001",
      title: "Elevator Maintenance",
      description: "Elevators under maintenance from 2 PM to 6 PM.",
      date: "2025-01-30",
      priority: "High",
      targetAudience: "All",
    },
    {
      id: "A002",
      title: "Team Meeting",
      description: "Housekeeping meeting at 10 AM in the conference room.",
      date: "2025-01-31",
      priority: "Medium",
      targetAudience: "Housekeeper",
    },
    {
      id: "A003",
      title: "Special Discount Offer",
      description: "Guests get 20% off between Feb 1 and Feb 10.",
      date: "2025-02-01",
      priority: "Low",
      targetAudience: "Guests",
    },
  ];

  // Filter announcements for housekeepers or those that target everyone
  const housekeeperAnnouncements = announcements.filter(
    (announcement) => announcement.targetAudience === "Housekeeper" || announcement.targetAudience === "All"
  );

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-col items-center">
        <h2 className="italic text-center text-2xl mb-4 text-gray-700">
          Announcements
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-300">Announcement ID</th>
                <th className="p-4 border border-gray-300">Title</th>
                <th className="p-4 border border-gray-300">Description</th>
                <th className="p-4 border border-gray-300">Date</th>
                <th className="p-4 border border-gray-300">Priority</th>
              </tr>
            </thead>
            <tbody>
              {housekeeperAnnouncements.length > 0 ? (
                housekeeperAnnouncements.map((announcement) => (
                  <tr key={announcement.id} className="bg-gray-50 even:bg-gray-100">
                    <td className="p-4 border border-gray-300">{announcement.id}</td>
                    <td className="p-4 border border-gray-300">{announcement.title}</td>
                    <td className="p-4 border border-gray-300">{announcement.description}</td>
                    <td className="p-4 border border-gray-300">{announcement.date}</td>
                    <td className="p-4 border border-gray-300">{announcement.priority}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-4 text-center text-gray-500 border border-gray-300"
                  >
                    No announcements for housekeepers.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HouseKeeperViewAnnouncement;
