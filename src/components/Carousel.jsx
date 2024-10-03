import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"; // Import feather icons

const Carousel = () => {

  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-64 w-[100%] bg-gray-200 text-gray-800 text-2xl font-bold"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${curr === index ? "bg-blue-600" : "bg-blue-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
