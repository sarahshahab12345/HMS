import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const ROOMS = [
  {
    id: 1,
    name: "Deluxe Room",
    category: "Deluxe",
    image: "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "A luxurious room with a stunning view.",
    price: 200,
    discountPrice: 180,
  },
  {
    id: 2,
    name: "Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s",
    description: "Spacious suite with modern amenities.",
    price: 350,
    discountPrice: 300,
  },
  {
    id: 3,
    name: "Single Room",
    category: "Single",
    image: "https://www.cvent.com/sites/default/files/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg",
    description: "Cozy room perfect for solo travelers.",
    price: 120,
    discountPrice: 100,
  },
  {
    id: 4,
    name: "Family Room",
    category: "Family",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOzrKw4ZcJEh-A8eT9RjSLDNltajkE9x8hw&s",
    description: "Ideal room for families with extra space.",
    price: 250,
    discountPrice: 220,
  },
  {
    id: 5,
    name: "Standard Room",
    category: "Standard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaa0f8d5mk6vZ3wEuFjJrHmAnMryTGfSW5GA&s",
    description: "Affordable room with basic amenities.",
    price: 150,
    discountPrice: 130,
  },
  {
    id: 6,
    name: "Penthouse Suite",
    category: "Suite",
    image: "https://www.michaelzingraf.com/storage/images/vYgLD0a9HMIiaJ2JP1ZKj9YKwxUd8DWwCOZVxrIJ.jpeg",
    description: "The pinnacle of luxury with panoramic views.",
    price: 500,
    discountPrice: 450,
  },
  {
    id: 7,
    name: "Ocean View Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXmCJj2o1gO42j1ukNF05JWBa0tZdVYtzHQ&s",
    description: "Relaxing views of the ocean from your window.",
    price: 220,
    discountPrice: 200,
  },
  {
    id: 8,
    name: "Mountain View Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF6-R03yu-z-iicUSn2PY3sLBL059EcxX-A&s",
    description: "Enjoy breathtaking mountain views.",
    price: 230,
    discountPrice: 210,
  },
  {
    id: 9,
    name: "Poolside Room",
    category: "Family",
    image: "https://media.cntraveler.com/photos/5f89a04c832eef138f7b94e9/master/w_1600%2Cc_limit/Dorado%2520Beach%2C%2520a%2520Ritz-Carlton%2520Reserve.jpg",
    description: "Perfect for families, with direct pool access.",
    price: 280,
    discountPrice: 250,
  },
  {
    id: 10,
    name: "King's Suite",
    category: "Suite",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/355256267.jpg?k=76b856d6612f1715dd351a32d6e3e035aaab665d156c51c9ba8a02c24216fc2e&o=&hp=1",
    description: "Elegant suite with a king-sized bed and private balcony.",
    price: 400,
    discountPrice: 350,
  },
  {
    id: 11,
    name: "Honeymoon Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHDGqcQ7TCfmdingHhvIFTUknxTR0T-R1uQ&s",
    description: "Romantic suite designed for honeymooners.",
    price: 450,
    discountPrice: 420,
  },
  {
    id: 12,
    name: "Beachfront Room",
    category: "Single",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYYRZhG-gTsKz8tMRObBLwlcoZBAnQStUtA&s",
    description: "Wake up to the sound of waves in a beachfront room.",
    price: 180,
    discountPrice: 160,
  },
  {
    id: 13,
    name: "Luxury Villa",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLSPO7jKLrC8XDNi-RPrpXR87XFhyMztug&s",
    description: "A spacious villa with premium amenities.",
    price: 600,
    discountPrice: 550,
  },
  {
    id: 14,
    name: "Budget Room",
    category: "Standard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YhpSaYdT1t9RRwX_6frg18dHg5Uwax2wvQ&s",
    description: "Affordable and comfortable for budget-conscious guests.",
    price: 90,
    discountPrice: 80,
  },
  {
    id: 15,
    name: "Garden View Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViTh3hbjtkIbmwHryG2eDZOwPsS183wQPFg&s",
    description: "A peaceful view of the hotel’s garden.",
    price: 210,
    discountPrice: 190,
  },
  {
    id: 16,
    name: "Studio Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PhWUWkEKgAk0Z3swF5e6O6jXg7KXHbP3RQ&s",
    description: "Modern studio suite with full kitchen and living area.",
    price: 380,
    discountPrice: 350,
  },
  {
    id: 17,
    name: "Executive Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5ahjjj7Ve2tXDada2VaD6s5CHhJXnE05Iw&s",
    description: "Executive-level room with added amenities.",
    price: 300,
    discountPrice: 270,
  },
  {
    id: 18,
    name: "Pool View Room",
    category: "Family",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWnimgHetkE5M-aFR5ANJvzf0VB5DfdnbVw&s",
    description: "Room with a spectacular view of the hotel pool.",
    price: 270,
    discountPrice: 240,
  },
  {
    id: 19,
    name: "Royal Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwucyxbIdYjHfjlI1hiTDi3mFCqQiPig-5g&s",
    description: "A palatial suite for the most luxurious stay.",
    price: 750,
    discountPrice: 700,
  },
  {
    id: 20,
    name: "Lake View Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4mFIVeU-zFDTF_7PrayFFGA7GrSLNPxPHw&s",
    description: "Breathtaking views of the lake right from your room.",
    price: 250,
    discountPrice: 220,
  },
  // More rooms...
  {
    id: 21,
    name: "Sky Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_6ji5isUslq1-ucPwP6XONFuqgn_6EMhyw&s",
    description: "A luxurious suite with a bird's-eye view of the city.",
    price: 450,
    discountPrice: 400,
  },
  {
    id: 21,
    name: "Sky Suite",
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBF1VX8UX5xlGKGh-sub1JUVJPAWsu0RM4g&s",
    description: "A luxurious suite with a bird's-eye view of the city.",
    price: 450,
    discountPrice: 400,
  },
  {
    id: 22,
    name: "Luxury Garden Room",
    category: "Deluxe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqop7fylub5URJAoOkBaAd4R3Yp2sFlzc_jQ&s",
    description: "A private garden suite with elegant interiors.",
    price: 300,
    discountPrice: 270,
  },
  // Room data (Same data as you already provided)
];

function RoomsPage() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // Filtered Rooms
  const filteredRooms =
    filter === "All" ? ROOMS : ROOMS.filter((room) => room.category === filter);

  // Handle Book Now button click to navigate to the ContactPage
  const handleBookNowClick = () => {
    navigate('/booking');  // Navigate to the ContactPage
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto text-center py-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-black">Our Rooms</h2>

        {/* Half-line under heading */}
        <div className="relative mb-12 flex justify-center">
          <div
            className="h-1 bg-[#B89F80]"
            style={{ width: "20%" }}
          ></div>
        </div>

        <p className="text-gray-400 mb-12">
          Explore our wide range of rooms and find the perfect one for your stay.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-12">
          {["All", "Deluxe", "Suite", "Single", "Family", "Standard"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition ${
                  filter === category
                    ? "bg-[#a37a5c] text-white"
                    : "bg-[#B89F80] hover:bg-[#a37a5c]"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Room Image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover group-hover:opacity-80 transition duration-300"
              />

              {/* Room Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>

                {/* Prices */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-400 line-through">${room.price}</p>
                    <p className="text-[#EE4444] font-bold text-xl">
                      ${room.discountPrice} <span className="text-sm">/night</span>
                    </p>
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={handleBookNowClick}
                  className="w-full bg-[#B89F80] text-white py-2 rounded-md hover:bg-[#a37a5c] transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoomsPage;
