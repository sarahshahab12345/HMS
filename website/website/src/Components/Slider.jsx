import React from 'react';
import Suite from "../../public/suite.jpg";
import Double from "../../public/double.jpg";
import Single from "../../public/single.jpg";

function Slider() {
  return (
    <div className="relative w-full h-[90vh] bg-slate-800">
      <input
        className="hidden peer/slider1 checkbox"
        type="radio"
        name="slider"
        id="slider1"
        defaultChecked
      />
      <input
        className="hidden peer/slider2 checkbox"
        type="radio"
        name="slider"
        id="slider2"
      />
      <input
        className="hidden peer/slider3 checkbox"
        type="radio"
        name="slider"
        id="slider3"
      />

      <div
        className="relative w-[300vw] h-full flex transition-all duration-500 ease-in-out 
                   peer-checked/slider1:-left-0 
                   peer-checked/slider2:-left-[100vw] 
                   peer-checked/slider3:-left-[200vw]"
      >
        <div className="relative w-full h-full flex">
          <img 
            src={Double} 
            alt="Slide 1" 
            className="w-full h-full object-cover filter brightness-90 contrast-75" 
          />
          <div className="absolute top-1/2 left-20 text-white w-1/2">
            <h1 className="text-4xl font-bold">Double Room</h1>
            <p className="text-xl mt-4">Spacious and comfortable rooms with modern amenities.</p>
            <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded">Book Now</button>
          </div>
        </div>
        <div className="relative w-full h-full flex">
          <img 
            src={Single} 
            alt="Slide 2" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-1/2 left-20 text-white w-1/2">
            <h1 className="text-4xl font-bold">Single Room</h1>
            <p className="text-xl mt-4">Perfect for solo travelers with essential comforts.</p>
            <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded">Book Now</button>
          </div>
        </div>
        <div className="relative w-full h-full flex">
          <img 
            src={Suite} 
            alt="Slide 3" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-1/2 left-20 text-white w-1/2">
            <h1 className="text-4xl font-bold">Suite</h1>
            <p className="text-xl mt-4">Luxury and elegance for an unforgettable stay.</p>
            <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded">Book Now</button>
          </div>
        </div>
      </div>

      <div
        className="absolute w-full flex justify-center gap-2 bottom-12 
                   peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 
                   peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 
                   peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 
                   peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 
                   peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 
                   peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
      >
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 
                     transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          htmlFor="slider1"
        ></label>
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 
                     transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          htmlFor="slider2"
        ></label>
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 
                     transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          htmlFor="slider3"
        ></label>
      </div>
    </div>
  );
}

export default Slider;
