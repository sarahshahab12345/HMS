import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Teampage() {
  const employees = [
    {
      name: "Sarah Williams",
      role: "General Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Doe",
      role: "Operations Manager",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Olivia Green",
      role: "Front Desk Supervisor",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
      name: "Lucas Brown",
      role: "Housekeeping Manager",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      name: "Sophia Turner",
      role: "Chef de Cuisine",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      name: "Mark Reynolds",
      role: "Security Manager",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      name: "James Smith",
      role: "Room Service Attendant",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      role: "Housekeeper",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Chris Martin",
      role: "Laundry Attendant",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      name: "Samantha Wilson",
      role: "Bellboy",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "David Johnson",
      role: "Waiter",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Jessica Green",
      role: "Chef Assistant",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Michael Clark",
      role: "Front Desk Staff",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Daniel Moore",
      role: "Security Guard",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Sophia White",
      role: "Housekeeper",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    {
      name: "Zoe Harris",
      role: "Room Service",
      image: "https://randomuser.me/api/portraits/women/39.jpg",
    },
    {
      name: "Ethan Miller",
      role: "Dishwasher",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Mia Wilson",
      role: "Cleaner",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      name: "Liam Thompson",
      role: "Porter",
      image: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      name: "Charlotte Scott",
      role: "Housekeeping Assistant",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Benjamin Lee",
      role: "Cook",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Oliver King",
      role: "Room Attendant",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      name: "Harper Adams",
      role: "Laundry Supervisor",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Amelia Baker",
      role: "Waitress",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Jackson Hall",
      role: "Maintenance",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Isabella Garcia",
      role: "Receptionist",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      name: "Henry Martinez",
      role: "Security Staff",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      name: "Avery Lee",
      role: "Bartender",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Jackson White",
      role: "Valet",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F4F2ED] text-[#4A4A4A]">
        {/* Main Container */}
        <div className="container mx-auto px-8 py-16">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Meet Our Team
            </motion.h1>
            {/* Half-line under heading */}
            <div className="relative mb-6 flex justify-center">
              <div className="h-1 bg-[#B89F80]" style={{ width: "20%" }}></div>
            </div>
            <motion.p
              className="text-lg max-w-xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Meet the passionate individuals behind our hotel's success.
              Dedicated professionals working together to deliver the best
              experience for our guests.
            </motion.p>
          </div>

          {/* Staff Section */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-[#4A4A4A] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Meet Our Staff
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {employees.map((employee, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-[#E0DED8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 w-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="h-40 w-40 object-cover rounded-full border-4 border-gray-700 mb-4 mx-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#8E7F70] mb-2">
                      {employee.name}
                    </h3>
                    <p className="text-lg text-[#4A4A4A] mb-4">
                      {employee.role}
                    </p>
                    <p className="text-gray-400">
                      {/* Custom description for each employee could be added here */}
                      {employee.role === "Housekeeper"
                        ? "Ensuring the cleanliness of the guest rooms and public areas."
                        : employee.role === "Room Service Attendant"
                        ? "Providing guests with exceptional in-room dining experiences."
                        : employee.role === "Waiter"
                        ? "Serving guests with exceptional food and beverage service."
                        : "Dedicated to providing excellent service and guest satisfaction."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Teampage;
