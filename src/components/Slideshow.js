import { useState, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { FaGripLinesVertical } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa6";

const Slideshow = () => {
  const slides = [
    { type: 'video', src: '/vid1.mp4', caption: "", title: "Timely gifts", description: "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store.", buttonText: "Discover more" },
    { type: 'image', src: '/img1.jpg', caption: "Online only", title: "Four bundles for hair, hands and home", description: "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.", buttonText: "Explore bundles" },
    { type: 'image', src: '/img2.jpg', caption: "Tokens of appreciation", title: "Corporate gifts", description: "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.", buttonText: "Learn more about this service" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);


  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const rightHandler = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }
  const leftHandler = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <div className='mb-10'>
      <div className="relative w-full h-[910px] lg:min-h-[550px]  bg-gray-100">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="grid lg:hidden grid-cols-2 h-full">

              {/* Media Section */}
              <div className="col-span-2 ">
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    autoPlay={isPlaying && index === currentIndex}
                    muted
                    loop
                    className="w-full cursor-pointer aspect-video h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full cursor-pointer aspect-video h-full object-cover"
                  />
                )}
                <div className="absolute text-zinc-500 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <MdKeyboardArrowLeft onClick={leftHandler} className='size-7  cursor-pointer'/>
                  <p>{currentIndex+1}/{slides.length}</p>
                  <MdKeyboardArrowRight onClick={rightHandler} className='size-7  cursor-pointer' />
                  {isPlaying === true ?
                  <FaGripLinesVertical className='size-5 mt-1 cursor-pointer' onClick={() => setIsPlaying(false)}/>
                  :
                  <IoIosPlay className='size-5 mt-1 cursor-pointer' onClick={() => setIsPlaying(true)}/>
                  }
                </div> 
              </div>
              <div className='absolute hidden sm:block text-5xl font-serif'>
                Aēsop <span className='text-xs -ml-2'>®</span>
              </div>
              <div className=" flex absolute text-white pt-6 px-6 w-full justify-between sm:hidden gap-4">
                  <div className='col-span-1 cursor-pointer text-2xl  font-serif'>
                      Aēsop <span className='text-xs -ml-2'>®</span>
                  </div>
                  <div className="flex gap-4">
                      <div className="cursor-pointer">
                          <IoSearch className="size-5"/>
                      </div>
                      <div className="cursor-pointer">
                          <FaRegHeart className="size-5"/>
                      </div>
                      <div className="cursor-pointer">Cart</div>
                      <div className="cursor-pointer">
                          <FaGripLines className="size-5"/>
                      </div>
                  </div>
              </div>

              {/* Text Section */}
              <div style={{backgroundColor:"#F6F5E8"}} className="col-span-2 justify-center  px-6 flex flex-col h-full  ">
                <div className='flex mx-auto sm:mx-[20%] '>
                  <div style={{color:"#333"}} className=' col-span-2 '>
                    <div className="text-sm ">{slide.caption}</div>
                    <h1 className="text-3xl  my-2">{slide.title}</h1>
                    <p className="mb-4">{slide.description}</p>
                    <button className="flex  font-semibold justify-between lg:w-80 py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                      {slide.buttonText}
                      <span className="ml-2"><FaArrowRightLong /></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:grid hidden grid-cols-2 h-full">
              {/* Text Section */}
              <div style={{backgroundColor:"#F6F5E8"}} className="col-span-1 px-6 flex flex-col h-full border   ">
                <div className='grid grid-cols-3'>
                  <div className='col-span-1 text-5xl font-serif'>
                    Aēsop <span className='text-xs -ml-2'>®</span>
                  </div>
                  <div style={{color:"#333"}} className='mt-20 col-span-2 '>
                    <div className="text-sm ">{slide.caption}</div>
                    <h1 className="text-3xl  my-2">{slide.title}</h1>
                    <p className="mb-4">{slide.description}</p>
                    <button className="flex font-semibold justify-between lg:w-80 py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                      {slide.buttonText}
                      <span className="ml-2"><FaArrowRightLong /></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Media Section */}
              <div className="col-span-1 ">
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    autoPlay={isPlaying && index === currentIndex}
                    muted
                    loop
                    className="w-full cursor-pointer aspect-video h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full cursor-pointer aspect-video h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
      {/* Control Buttons*/}
      <div className="absolute hidden  text-zinc-500 left-1/2 transform -translate-x-1/2 lg:flex space-x-4">
        <MdKeyboardArrowLeft onClick={leftHandler} className='size-7  cursor-pointer'/>
        <p>{currentIndex+1}/{slides.length}</p>
        <MdKeyboardArrowRight onClick={rightHandler} className='size-7  cursor-pointer' />
        {isPlaying === true ?
        <FaGripLinesVertical className='size-5 mt-1 cursor-pointer' onClick={() => setIsPlaying(false)}/>
        :
        <IoIosPlay className='size-5 mt-1 cursor-pointer' onClick={() => setIsPlaying(true)}/>
        }
      </div> 
    </div>
  );
};

export default Slideshow;
