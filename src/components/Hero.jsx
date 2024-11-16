import { useEffect, useState } from 'react';
import { heroSlides } from '../constants/data';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000;

  useEffect(() => {
    setProgress(0);

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
          return 0;
        }
        return prevProgress + 1;
      });
    }, slideDuration / 100);

    return () => clearInterval(intervalId);
  }, [currentSlide, slideDuration]);
  

  return (
    <section className='relative w-full h-full pt-48 flex flex-col gap-y-3 justify-center'>
      <div className='flex flex-col items-center text-center justify-center text-gray-200 font-bodyText px-3 py-3'>
        
        {/* Motion component for headline sliding in from the left */}
        <motion.h1
          key={currentSlide} // Re-render when currentSlide changes
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-loose font-bold pb-3'
        >
          {heroSlides[currentSlide].headline}
        </motion.h1>
        
        {/* Motion component for subheading sliding in from the right */}
        <motion.p
          key={`${currentSlide}-sub`} // Unique key to trigger re-render on slide change
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='italic text-sm md:text-base'
        >
          {heroSlides[currentSlide].subHeading}
        </motion.p>

        <div className='p-5 max-sm:flex flex-col gap-y-4'>
          <button className='border border-softBeige px-4 py-4 rounded mx-3 hover:bg-gray-200 hover:text-[#001F3F]'>Explore Schools</button>
          <button className='bg-[#001F3F] px-4 py-4 rounded hover:border-2 hover:border-[#001F3F] hover:bg-transparent'>Apply for Travel Loan</button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1 rounded ${
              index === currentSlide ? 'bg-[#DFD0B8]' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      {/* <SearchBar /> */}
    </section>
  );
};

export default Hero;
