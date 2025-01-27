import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion"; // Import framer-motion for animations
import service from "../assets/service-1-400x400.jpg";

function PolicyPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-[#F4F2ED] text-[#4A4A4A]">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-[#B89F80]">Our Policies</h2>
            <div className="flex justify-center items-center mt-4 mb-8">
              <div className="h-1 bg-[#B89F80]" style={{ width: "30%" }}></div>
            </div>
            <p className="text-xl text-[#4A4A4A]">
              Please read through our policies carefully to ensure a smooth experience.
            </p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Introduction</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              At [Your Company], we are committed to providing a transparent and secure experience for our
              users. The following policies govern the use of our services. By accessing or using our platform,
              you agree to comply with these policies.
            </p>
          </motion.div>

          {/* Privacy Policy Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Privacy Policy</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              We value your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information
              when using our services. We are committed to ensuring that your privacy is protected and will not share your
              data with third parties without your consent.
            </p>
          </motion.div>

          {/* Terms of Service Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Terms of Service</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              By using our services, you agree to the terms and conditions outlined in this agreement. These terms cover the
              rules for using the website, access to the content, and any services offered. Please read these terms carefully
              before engaging with our platform.
            </p>
          </motion.div>

          {/* Payment Policy Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Payment Policy</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              Our payment policy is designed to be simple and secure. We accept various payment methods, including credit cards, debit cards, and digital wallets. All payments are processed through secure gateways to ensure safety.
            </p>
          </motion.div>

          {/* Refund Policy Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Refund Policy</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              In case of dissatisfaction with our services, we offer a refund within a specified period. The refund policy details can be found on our website, along with the process for submitting refund requests.
            </p>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Contact Us</h3>
            <p className="text-lg leading-relaxed text-[#4A4A4A]">
              If you have any questions or concerns about our policies, please don't hesitate to reach out to us. Our team is here to assist you and provide any clarification you need.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Image Section */}
      <motion.section
        className="py-16 bg-[#F4F2ED]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-8">Our Commitment to Excellence</h3>
          <img
            src={service}
            alt="Excellence"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default PolicyPage;
