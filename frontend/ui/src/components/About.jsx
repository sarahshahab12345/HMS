import React from "react";
import AboutImage from "../assets/slide2.jpg";

function About() {
  return (
    <section className="bg-[#F4F2ED] text-[#4A4A4A] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        {/* Image */}
        <div>
          <img
            src={AboutImage}
            alt="About"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black">About Us</h2>

          {/* Half-line under heading */}
          <div className="relative mb-6">
            <div
              className="absolute top-0 h-1 bg-[#B89F80]"
              style={{ width: "20%" }}
            ></div>
          </div>

          <p className="text-lg leading-relaxed">
            We are a passionate team dedicated to providing the best experience
            for our customers. Our mission is to deliver exceptional services
            while maintaining the highest quality standards. With years of
            experience and a strong commitment to excellence, we strive to
            exceed expectations and create lasting relationships with everyone
            we serve.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you are looking for a relaxing getaway, a memorable
            experience, or the best in customer service, we are here to make
            your dreams come true. Our expert team ensures every detail is
            taken care of, from start to finish.
          </p>

          {/* Centered Button */}
          <div className="flex justify-start mt-6">
            <button className="px-6 py-2 text-white bg-[#B89F80] rounded-lg shadow-lg hover:bg-[#a6846e] focus:outline-none focus:ring-2 focus:ring-[#B89F80] focus:ring-opacity-50">
              View More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
