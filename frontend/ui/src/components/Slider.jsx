import React, { useState } from "react";
// Import images from assets
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";

function Slider() {
  const slides = [
    {
      id: 1,
      image: Slide1,
      title: "Beautiful Destinations",
      description: "Discover the most beautiful places around the world.",
    },
    {
      id: 2,
      image: Slide2,
      title: "Luxurious Stays",
      description: "Experience world-class accommodations and services.",
    },
    {
      id: 3,
      image: Slide3,
      title: "Adventure Awaits",
      description: "Embark on thrilling adventures tailored just for you.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  // Next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Slide Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-[#B68B06]"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
