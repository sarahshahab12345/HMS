import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

function Brand() {
    const brands = [
        { name: 'Brand A', logo: 'https://via.placeholder.com/150', description: 'Leading in quality and innovation. Known for its impeccable customer service.' },
        { name: 'Brand B', logo: 'https://via.placeholder.com/150', description: 'A global brand with a reputation for excellence in luxury and style.' },
        { name: 'Brand C', logo: 'https://via.placeholder.com/150', description: 'Renowned for its cutting-edge technology and sustainable solutions.' },
        { name: 'Brand D', logo: 'https://via.placeholder.com/150', description: 'Innovative solutions that reshape the market with passion and expertise.' },
        { name: 'Brand E', logo: 'https://via.placeholder.com/150', description: 'Trusted for its dedication to quality craftsmanship and superior designs.' },
        { name: 'Brand F', logo: 'https://via.placeholder.com/150', description: 'A pioneer in delivering outstanding value and unbeatable prices.' },
    ];
    
    const employees = [
        { name: 'John Doe', role: 'Marketing Manager', image: 'https://randomuser.me/api/portraits/men/1.jpg', years: 5 },
        { name: 'Emma Johnson', role: 'Customer Service Lead', image: 'https://randomuser.me/api/portraits/women/1.jpg', years: 7 },
        { name: 'Chris Brown', role: 'Sales Representative', image: 'https://randomuser.me/api/portraits/men/2.jpg', years: 3 },
        { name: 'Sophia Williams', role: 'HR Specialist', image: 'https://randomuser.me/api/portraits/women/2.jpg', years: 10 },
    ];
    
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#F4F2ED] text-[#4A4A4A]">
            <div className="container mx-auto px-8 py-16">
                {/* Page Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Brand Promotions & Employee Recognition
                    </h1>
                    <p className="text-lg max-w-xl mx-auto text-gray-300">
                        Explore our top brands and celebrate the achievements of our dedicated employees. Together, we build a legacy of excellence.
                    </p>
                </motion.div>

                {/* Half-line under heading */}
                <div className="relative mb-6 flex justify-center">
                    <div className="h-1 bg-[#B89F80]" style={{ width: "20%" }}></div>
                </div>

                {/* Brand Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl font-bold text-[#4A4A4A] mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Trusted Brands
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-[#E0DED8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 w-80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-40 w-40 object-cover rounded-full mb-4 mx-auto"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-[#8E7F70] mb-2">{brand.name}</h3>
                                    <p className="text-[#4A4A4A] mb-4">{brand.description}</p>
                                    <button className="px-4 py-2 bg-[#B89F80] text-white rounded-lg shadow-md hover:bg-[#A6846E] focus:outline-none focus:ring-2 focus:ring-[#B89F80] focus:ring-opacity-50">
                                        Learn More →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Employee Recognition Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl font-bold text-[#4A4A4A] mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Employee Anniversary Celebrations
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                    <h3 className="text-2xl font-semibold text-[#8E7F70] mb-2">{employee.name}</h3>
                                    <p className="text-[#4A4A4A] mb-4">{employee.role}</p>
                                    <p className="text-gray-400">Celebrating {employee.years} years of dedicated service!</p>
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

export default Brand;
