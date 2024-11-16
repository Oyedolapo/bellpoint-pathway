import React from "react";
import { serviceCards } from "../constants/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger animation when 10% of the element is visible

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
    <section className="relative mt-20 lg:mt-40 px-5 sm:px-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-[#001F3F] sm:text-xl lg:text-5xl text-center py-10 font-headingText">
          Service Previews
        </h2>
        <motion.div
          ref={ref}
          className="flex flex-col flex-wrap items-center xl:flex-nowrap xl:flex-row justify-between gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {serviceCards.map((item) => (
            <motion.div
              key={item.id}
              className="md:w-[600px] lg:w-2/3 w-full flex flex-col group group-hover:shadow-xl"
              variants={cardVariants}
            >
              {/* Card Image */}
              <div className="w-full h-72 overflow-hidden rounded-t-md">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Card Content */}
              <div className="bg-[#001F3F] p-4 flex flex-col justify-between items-start min-h-40 rounded-b-md">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-white">{item.description}</p>
                <button className="bg-white px-4 py-3 rounded mt-4 hover:bg-transparent hover:border border-white hover:text-white">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
