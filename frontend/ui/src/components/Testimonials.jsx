import React, { useState } from "react";
  // Import the background image

// Sample Reviews Data
const REVIEWS = [
  {
    id: 1,
    name: "Pedro",
    role: "Front End",
    avatar: "https://i.pravatar.cc/150?img=13",
    review: `This service blew my mind! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
  },
  {
    id: 2,
    name: "Pepe",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?img=19",
    review: `An absolute treasure trove for book lovers. The selection is vast, and the ease of discovering new reads is addictively delightful!`,
  },
  {
    id: 3,
    name: "David",
    role: "Full Stack",
    avatar: "https://i.pravatar.cc/150?img=8",
    review: `Results speak louder than words. I've never seen progress like this. The workouts are challenging but oh-so-rewarding. Kudos!`,
  },
  {
    id: 4,
    name: "James",
    role: "UI/UX",
    avatar: "https://i.pravatar.cc/150?img=61",
    review: `It's very easy to customize and categorize lists for new projects/task categories.`,
  },
  {
    id: 5,
    name: "Kate",
    role: "Web Developer",
    avatar: "https://i.pravatar.cc/150?img=57",
    review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  // Go to next slide
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-[#EDEBE7] text-[#4A4A4A] text-black">
      {/* Set background image for the whole body */}
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Background"
          className="w-full h-full object-cover opacity-70" // Adjust opacity if needed
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>

        {/* Centered Half-Line Below the Heading */}
        <div className="flex justify-center items-center mb-12">
          <div className="h-1 bg-[#B89F80]" style={{ width: "20%" }}></div>
        </div>

        {/* Testimonials Section */}
        <div className="flex justify-center gap-12 w-full h-90">
          <div
            className="bg-white text-slate-800 rounded-xl p-2 relative overflow-hidden shadow-lg w-[60%] z-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)", // White with some opacity for readability
            }}
          >
           

            {/* Testimonials Slider */}
            <div className="relative h-56 text-black">
              {REVIEWS.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute w-full flex flex-col justify-between p-6 h-full transition-transform duration-500 ${
                    index === currentIndex
                      ? "translate-x-0 opacity-100"
                      : index > currentIndex
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <blockquote className="line-clamp-4 italic text-lg">
                    "{review.review}"
                  </blockquote>
                  <div className="details text-sm flex items-center gap-2">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="text-left">
                      <p className="text-sm font-bold">{review.name}</p>
                      <p className="text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                className="text-2xl bg-[#B89F80] text-white p-2 rounded-full hover:bg-[#a37a5c] transition"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-[#B89F80] text-white p-2 rounded-full hover:bg-[#a37a5c] transition"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
