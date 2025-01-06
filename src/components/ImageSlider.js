import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the start
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); 
  };

  const currentItem = images[currentIndex]; 

  return (
    <div className="grid relative grid-cols-1 gap-8 w-full justify-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
            <button
            className="absolute left-0 top-24 bg-zinc-700 text-white p-2 z-10"
            onClick={handlePrev}
            aria-label="Previous Slide"
            >
            <MdKeyboardArrowLeft size={45} />
            </button>
        )}
        {/* Current Image */}
        <div className="flex mt-20 flex-col items-center text-center">
            <img
            src={currentItem.src}
            alt={currentItem.title || "Gift Kit"}
            className="w-full object-contain mb-4"
            />
            <h2 className="text-lg mb-2 font-semibold">{currentItem.title}</h2>
            <p className="text-sm text-gray-600">{currentItem.description}</p>
        </div>

        {/* Right Arrow */}
        {currentIndex  < images.length-1 && (
          <button
            className="absolute right-0 top-24 bg-zinc-700 text-white p-2 z-10"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <MdKeyboardArrowRight size={45} />
          </button>
        )}        
    </div>
  );
}
