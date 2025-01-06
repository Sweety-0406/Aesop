
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const CarouselProducts = () => {
  const images = [
    {
      src: "/item1.jpg",
      title: "Aromatique Hand Balm Trio",
      description: "Three hydrating hand balms, unique in aroma",
      link: "#",
    },
    {
      src: "/item2.jpg",
      title: "Ptolemy Aromatique Candle",
      description: "A sensuous blend of leather, smoke and wood",
      link: "#",
    },
    {
      src: "/item3.jpg",
      title: "Reverence Duet",
      description: "A sumptuous pairing for hands",
      link: "#",
    },
    {
      src: "/item4.jpg",
      title: "Lucent Facial Concentrate",
      description: "A Vitamin C-rich layering serum",
      link: "#",
    },
    {
      src: "/item5.jpg",
      title: "Bronze Incense Holder",
      description: "Suited to any interior",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
       if (window.innerWidth >= 1280) {
        setVisibleCount(5);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [images.length]);

  const nextSlide = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="  mt-20 flex items-center justify-center">
      <div className="relative  w-full flex items-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            className="absolute left-0 bg-zinc-700 text-white p-2 z-10"
            onClick={prevSlide}
          >
            <MdKeyboardArrowLeft size={35} />
          </button>
        )}

        {/* Images */}
        <div className={`grid grid-cols-${visibleCount} gap-8 w-full`}>
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full max-w-xs  h-[320px] object-contain mb-4"
              />
              <h2 className="text-lg mb-2 font-semibold">{image.title}</h2>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex + visibleCount < images.length && (
          <button
            className="absolute right-0 bg-zinc-700 text-white p-2 z-10"
            onClick={nextSlide}
          >
            <MdKeyboardArrowRight size={35} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CarouselProducts;



