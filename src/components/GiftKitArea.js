
import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ImageSlider from "./ImageSlider";

const GiftKitArea = () => {
  const images = [
    {
      type: "text",
      title: "Our latest Gift Kits",
      description:
        "Discover the new cinema-inspired collection, comprising a hand and body gift set, an abundant home gift, and a Geranium Leaf body care trio.",
      link: "#",
    },
    {
      src: "/gift2.jpg",
      type: "img",
      title: "Screen 1",
      description: "A quartet of staples for the hands, body, and home",
      link: "#",
    },
    {
      src: "/gift3.jpg",
      type: "img",
      title: "Screen 2",
      description: "A trio of Geranium Leaf Body Care essentials",
      link: "#",
    },
    {
      src: "/gift4.jpg",
      type: "img",
      title: "Screen 3",
      description: "A trio of hand and body care staples",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(2);
      }
    };

    updateVisibleCount();

    const resizeHandler = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(updateVisibleCount, 100);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      clearTimeout(window.resizeTimeout);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

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

  if (window.innerWidth <= 640) {
    return (
      <div className="mt-20 lg:mt-0 flex items-center justify-center">
      <div className="relative w-full flex items-center">
        <div className="grid grid-cols-1 gap-8 w-full justify-center">
          <div className="flex pl-14 w-full flex-col">
            <h1 className="text-4xl font-semibold mb-4">{images[0].title}</h1>
            <p className="text-sm mb-4">{images[0].description}</p>
            <a
              href={images[0].link}
              className="flex items-center hover:underline"
            >
              Browse Gift Kits <FaArrowRightLong className="ml-2 mt-1" />
            </a>
          </div>
          <ImageSlider images={images.filter((img)=>img.type === 'img')} />
        </div>
      </div>
    </div> 
    );
  }

  return (
    <div className="mt-20 lg:mt-0 flex items-center justify-center">
      <div className="relative w-full flex items-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            className="absolute left-0 bg-zinc-700 text-white p-2 z-10"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <MdKeyboardArrowLeft size={45} />
          </button>
        )}

        {/*  Images & Text */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-center">
          {visibleImages.map((item, index) =>
            item.type === "img" ? (
              <div
                key={index}
                className="flex mt-20 flex-col items-center text-center"
              >
                <img
                  src={item.src}
                  alt={item.title || "Gift Kit"}
                  className="w-full object-contain mb-4"
                />
                <h2 className="text-lg mb-2 font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ) : (
              <div key={index} className="flex pl-14 w-full flex-col">
                <h1 className="text-4xl font-semibold mb-4">{item.title}</h1>
                <p className="text-sm mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="flex items-center hover:underline"
                >
                  Browse Gift Kits <FaArrowRightLong className="ml-2 mt-1" />
                </a>
              </div>
            )
          )}
        </div>

        {/* Right Arrow */}
        {currentIndex + visibleCount < images.length && (
          <button
            className="absolute right-0 bg-zinc-700 text-white p-2 z-10"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <MdKeyboardArrowRight size={45} />
          </button>
        )}
      </div>
    </div>
  );
};

export default GiftKitArea;
