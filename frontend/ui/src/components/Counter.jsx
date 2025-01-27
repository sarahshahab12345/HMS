import React from "react";

const counters = [
  {
    id: 1,
    title: "Rooms",
    count: 120,
  },
  {
    id: 2,
    title: "Guests",
    count: 500,
  },
  {
    id: 3,
    title: "Events",
    count: 80,
  },
  {
    id: 4,
    title: "Staff",
    count: 50,
  },
];

const Counter = () => {
  return (
    <section className="bg-[#F4F2ED] text-[#4A4A4A] py-16">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-6">
        {/* Left Side: Counter Circles */}
        <div className="flex flex-wrap justify-center gap-12 w-full md:w-1/2 mt-8">
          {counters.map((counter) => (
            <div
              key={counter.id}
              className="flex flex-col items-center justify-center w-40 h-40 bg-[#B89F80] text-white rounded-full text-center shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <div className="text-5xl font-bold animate-bounce">{counter.count}</div>
              <div className="text-lg mt-2">{counter.title}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mt-12 md:mt-0">
          <h2 className="text-4xl font-bold mb-4 ml-6">Our Progress</h2>

          {/* Half-Line Under Heading */}
          <div className="relative mb-6 ml-6">
            <div
              className="absolute top-0 h-1 bg-[#B89F80]"
              style={{ width: "20%" }}
            ></div>
          </div>

          <p className="text-lg text-[#4A4A4A] ml-6">
            We pride ourselves on providing excellent service and amenities to our guests. 
            With a variety of rooms, events, and dedicated staff, we ensure that every stay is memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
