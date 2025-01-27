import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  // Toggle dropdown on click
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F4F2ED] text-[#4A4A4A] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 items-center">
          <li className="hover:text-[#B89F80] transition">
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative group"
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            <span className="cursor-pointer hover:text-[#B89F80] transition">
              Our Details
            </span>
            {dropdownOpen && (
              <ul
                ref={dropdownRef} // Attach the ref to the dropdown menu
                className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden"
              >
                <li className="px-4 py-2 hover:bg-[#F4F2ED] hover:text-[#B89F80] transition">
                  <Link to="/admin">Founder & CEO</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F4F2ED] hover:text-[#B89F80] transition">
                  <Link to="/brand">Brands Promotion</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F4F2ED] hover:text-[#B89F80] transition">
                  <Link to="/team">Staff Details</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-[#B89F80] transition">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="hover:text-[#B89F80] transition">
            <Link to="/booking">Reservation</Link>
          </li>
          <li className="hover:text-[#B89F80] transition">
            <Link to="/policy">Our Policy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
