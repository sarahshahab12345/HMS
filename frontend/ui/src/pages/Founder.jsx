import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';


function Founder(){
    return(
        <>
        <Navbar/>
        <section className="py-16 bg-[#F4F2ED] text-[#4A4A4A]">
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          {/* Left Section: Admin Info */}
          <div className="w-full md:w-[48%] p-8 rounded-lg bg-white shadow-xl">
            <motion.h2
              className="text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Admin Details
            </motion.h2>

            <motion.div
              className="flex justify-center items-center mb-8"
              initial={{ width: '0%' }}
              animate={{ width: '40%' }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 bg-[#B89F80]" />
            </motion.div>

            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Admin"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#B89F80]"
              />
              <p className="text-xl font-medium">John Doe</p>
              <p className="text-sm text-[#888]">Chief Administrator</p>
            </motion.div>

            {/* Admin Info */}
            <motion.div
              className="bg-[#fff] rounded-lg shadow-xl p-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <p className="font-medium">Email:</p>
                <p className="text-[#4A4A4A]">johndoe@example.com</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Phone:</p>
                <p className="text-[#4A4A4A]">+1 234 567 890</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Location:</p>
                <p className="text-[#4A4A4A]">New York, USA</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Joined On:</p>
                <p className="text-[#4A4A4A]">January 2020</p>
              </div>
            </motion.div>
          </div>

          {/* Right Section: Admin Actions */}
          
          <div className="w-full md:w-[48%] p-8 rounded-lg bg-white shadow-xl">
            <motion.h2
              className="text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Admin Details
            </motion.h2>

            <motion.div
              className="flex justify-center items-center mb-8"
              initial={{ width: '0%' }}
              animate={{ width: '40%' }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 bg-[#B89F80]" />
            </motion.div>

            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Admin"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#B89F80]"
              />
              <p className="text-xl font-medium">John Doe</p>
              <p className="text-sm text-[#888]">Chief Administrator</p>
            </motion.div>

            {/* Admin Info */}
            <motion.div
              className="bg-[#fff] rounded-lg shadow-xl p-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <p className="font-medium">Email:</p>
                <p className="text-[#4A4A4A]">johndoe@example.com</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Phone:</p>
                <p className="text-[#4A4A4A]">+1 234 567 890</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Location:</p>
                <p className="text-[#4A4A4A]">New York, USA</p>
              </div>

              <div className="mb-4">
                <p className="font-medium">Joined On:</p>
                <p className="text-[#4A4A4A]">January 2020</p>
              </div>
            </motion.div>
          </div>

          </div>
      
      </section>



        <Footer/>
        </>
    )
}


export default Founder;