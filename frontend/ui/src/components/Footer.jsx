import React from "react";
import Logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing React icons for social media

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 text-[#4A4A4A]"
      style={{ backgroundImage: "url('../assets/hotel-image.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Section 1: Logo */}
        <div>
          <img src={Logo} alt="Logo" className="mb-4" />
        </div>

        {/* Section 2: Pages */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pages</h2>
          {/* Half-line separator */}
          <div className="relative mb-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#B89F80]"></div>
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gray-300"
              style={{ width: "50%" }}
            ></div>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-200 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-200 hover:text-white transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-200 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Room Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Room Categories</h2>
          {/* Half-line separator */}
          <div className="relative mb-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#B89F80]"></div>
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gray-300"
              style={{ width: "50%" }}
            ></div>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="#deluxe"
                className="text-gray-200 hover:text-white transition"
              >
                Deluxe Room
              </a>
            </li>
            <li>
              <a
                href="#suite"
                className="text-gray-200 hover:text-white transition"
              >
                Suite
              </a>
            </li>
            <li>
              <a
                href="#single"
                className="text-gray-200 hover:text-white transition"
              >
                Single Room
              </a>
            </li>
            <li>
              <a
                href="#family"
                className="text-gray-200 hover:text-white transition"
              >
                Family Room
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          {/* Half-line separator */}
          <div className="relative mb-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#B89F80]"></div>
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gray-300"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} HHMS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
