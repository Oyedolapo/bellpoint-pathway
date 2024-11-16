import React from "react";
import { howItWorksCards } from "../constants/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger animation when 10% of the section is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: below and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger animations of child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative mt-20 lg:mt-40 px-5">
      {/* Section Title */}
      <div>
        <h2 className="text-3xl capitalize font-bold tracking-tight text-[#001F3F] sm:text-xl lg:text-5xl text-center py-10 font-headingText">
          How it works
        </h2>
      </div>

      {/* Animated Cards */}
      <motion.div
        ref={ref}
        className="flex flex-wrap lg:flex-nowrap justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {howItWorksCards.map((item, index) => (
          <motion.div
            key={item.id}
            className="w-[150px] md:w-[200px] lg:w-[300px] flex flex-col items-center"
            variants={cardVariants}
          >
            {/* Card Icon */}
            <div className="bg-gray-100 p-10 lg:p-14 rounded-full relative flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover"
              />

              {/* Number Badge */}
              <div className="absolute top-3 right-2 transform translate-x-2 -translate-y-2 w-12 h-12 bg-[#001F3F] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
