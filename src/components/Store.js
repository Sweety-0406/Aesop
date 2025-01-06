import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6"

const Store = () => {
  const images = [
    {
      src: "/store-img1.jpg",
      link: "#",
    },
    {
      src: "/store-img2.jpg",
      link: "#",
    },
    {
      src: "/store-img3.jpg",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 1);

  return (
    <div>
        <div className="grid grid-cols-5   mt-  ">
            <div className="col-span-5 lg:col-span-2 pl-24 pr-20">
                <div style={{color:"#333"}} className='mt-20 col-span-2 '>
                    <h1 className="text-3xl  my-2">Store locator</h1>
                    <p className="mb-4 pr-4 mt-8">Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                    <button className="flex font-semibold justify-between sm:w-80 py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                        Find a nearby store
                        <span className="ml-2"><FaArrowRightLong /></span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 lg:col-span-3 mt-10 lg:mt-0 pl-16 md:pl-24">
                <div className="bg-[#fdfbee]   flex items-center justify-center">
                    <div className="relative max-w-5xl w-full flex items-center">
                        {/* Left Arrow */}
                        {currentIndex > 0 &&
                            <button
                            className="absolute left-0 bg-zinc-700 text-white  p-2"
                            onClick={prevSlide}
                            >
                            <MdKeyboardArrowLeft  className=" sm:size-12" />
                            </button>
                        }

                        {/* Images */}
                        <div className="flex gap-8 w-full justify-center">
                        {visibleImages.map((image, index) => (
                            <div
                            key={index}
                            className="flex flex-col  bottom-0 items-center text-center"
                            >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full  object-contain mb-4"
                            />
                            </div>
                        ))}
                        </div>

                        {/* Right Arrow */}
                        {currentIndex !== images.length-1 && 
                            <button
                            className="absolute right-0 bg-zinc-700 text-white  p-2"
                            onClick={nextSlide}
                            >
                            <MdKeyboardArrowRight className=" sm:size-12"/>
                            </button>
                        }
                    </div>
                </div>
                <div>Aesop Hollywood Road</div>
            </div>
        </div>
    </div>
  );
};

export default Store;
