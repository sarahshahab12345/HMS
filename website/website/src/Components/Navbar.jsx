import React from "react";
import Logo from "../../public/HotelLogo.png";
function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Brand */}
          <a href="#" className="flex items-center">
            <img
              src={Logo}
              className="h-20 mr-3" 
              alt="Logo"
            />
          </a>

          {/* Navbar Links */}
          <div
            className="hidden md:flex flex-grow justify-center"
            id="navbar-default"
          >
            <ul className="font-medium flex space-x-8">
              <li>
                <a
                  href="#"
                  className="py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#Room"
                  className="py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Room
                </a>
              </li>
              <li>
                <a
                  href="#Gallery"
                  className="py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
