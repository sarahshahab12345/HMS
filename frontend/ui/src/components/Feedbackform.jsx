import React from "react";

const Feedbackform = () => {
  return (
    <section className="py-16 bg-[#F4F2ED] text-balck text-[#4A4A4A]">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Feedback Form (Left side) */}
        <div className="w-full md:w-[48%] p-8 rounded-lg bg-[#F4F2ED] shadow-xl">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">We Value Your Feedback</h2>

          {/* Centered Half-Line Below Heading */}
          <div className="flex justify-center items-center mb-8">
            <div className="h-1 bg-[#B89F80]" style={{ width: "40%" }}></div>
          </div>

          {/* Form */}
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-600 bg-[#FFFFFF] text-white rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 bg-[#FFFFFF] text-white rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-600 bg-[#FFFFFF] text-white rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                rows="5"
                placeholder="Enter your feedback"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B89F80] text-white py-3 rounded-lg shadow-lg hover:bg-[#a37a5c] transition-all"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Map (Right side) */}
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
        </div>
      </div>
    </section>
  );
};

export default Feedbackform;
