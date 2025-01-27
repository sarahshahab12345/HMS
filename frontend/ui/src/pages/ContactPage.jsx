import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  // States to manage form input and toggling account details
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [identityNo, setIdentityNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [alternativeNo, setAlternativeNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [stayWith, setStayWith] = useState("");
  const [description, setDescription] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [formDate, setFormDate] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Navbar />
      <section className="py-16 bg-[#F4F2ED] text-[#4A4A4A]">
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          {/* Left Section (Booking Form) */}
          <div className="w-full md:w-[48%] p-8 rounded-lg bg-[#FFFFFF] shadow-xl">
            <h2 className="text-4xl font-bold mb-4">Hotel Booking Form</h2>

            {/* Centered Half-Line Below Heading */}
            <div className="flex justify-center items-center mb-8">
              <div className="h-1 bg-[#B89F80]" style={{ width: "40%" }}></div>
            </div>

            {/* Booking Form */}
            <form>
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* Identity No */}
              <div className="mb-6">
                <label
                  htmlFor="identityNo"
                  className="block text-lg font-medium mb-2"
                >
                  Identity No
                </label>
                <input
                  type="text"
                  id="identityNo"
                  value={identityNo}
                  onChange={(e) => setIdentityNo(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter your identity number"
                />
              </div>

              {/* Contact No */}
              <div className="mb-6">
                <label
                  htmlFor="contactNo"
                  className="block text-lg font-medium mb-2"
                >
                  Contact No
                </label>
                <input
                  type="text"
                  id="contactNo"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter your contact number"
                />
              </div>

              {/* Alternative No */}
              <div className="mb-6">
                <label
                  htmlFor="alternativeNo"
                  className="block text-lg font-medium mb-2"
                >
                  Alternative Contact No
                </label>
                <input
                  type="text"
                  id="alternativeNo"
                  value={alternativeNo}
                  onChange={(e) => setAlternativeNo(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter alternative contact number"
                />
              </div>

              {/* Type of Room */}
              <div className="mb-6">
                <label htmlFor="roomType" className="block text-lg font-medium mb-2">
                  Type of Room
                </label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                >
                  <option value="">Select Room Type</option>
                  <option value="single">Single Room</option>
                  <option value="double">Double Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>

              {/* Stay With */}
              <div className="mb-6">
                <label htmlFor="stayWith" className="block text-lg font-medium mb-2">
                  Stay With
                </label>
                <select
                  id="stayWith"
                  value={stayWith}
                  onChange={(e) => setStayWith(e.target.value)}
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                >
                  <option value="">Select Stay Type</option>
                  <option value="wife">Wife</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="single">Single</option>
                </select>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-medium mb-2">
                  Purpose of Booking
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                  className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                  placeholder="Enter your feedback"
                />
              </div>

              {/* Add Account Details Toggle */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => setShowAccountDetails(!showAccountDetails)}
                  className="w-full bg-[#B89F80] text-white py-3 rounded-lg shadow-lg hover:bg-[#a37a5c] transition-all"
                >
                  {showAccountDetails
                    ? "Hide Account Details"
                    : "Add Account Details"}
                </button>
              </div>

              {/* Account Details Fields */}
              {showAccountDetails && (
                <div className="space-y-6 mb-6">
                  <div className="mb-6">
                    <label
                      htmlFor="cardNumber"
                      className="block text-lg font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="expiryDate"
                      className="block text-lg font-medium mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="cvv" className="block text-lg font-medium mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full p-3 border border-gray-600 bg-[#FFFFFF] rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                      placeholder="Enter your CVV"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-[#B89F80] text-white py-3 rounded-lg shadow-lg hover:bg-[#a37a5c] transition-all"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>

          {/* Right Section (Map + Image Below) */}
          <div className="w-full md:w-[48%] mt-12 md:mt-0">
            <h2 className="text-4xl font-bold mb-4 text-center">Find Us Here</h2>

            {/* Centered Half-Line Below Heading */}
            <div className="flex justify-center items-center mb-8">
              <div className="h-1 bg-[#B89F80]" style={{ width: "20%" }}></div>
            </div>

            {/* Map */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.121070436113!2d-74.0060159!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a37bfb4a2e3%3A0x94fbb2e226577f65!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1636393931483!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Image Below Map */}
            <div className="mt-8">
              <img
                src="https://img.freepik.com/free-photo/receptionist-elegant-suit-work-hours-with-customer_23-2149714444.jpg?semt=ais_incoming"
                alt="Hotel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-8">
              <img
                src="https://img.freepik.com/free-photo/receptionist-elegant-suit-work-hours-with-customer_23-2149714444.jpg?semt=ais_incoming"
                alt="Hotel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
