import { partners } from '../constants/data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the section is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants for Bottom to Top animation
  const slideInFromBottomVariants = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen at the bottom
    visible: {
      opacity: 1,
      y: 0, // Move to its natural position
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-10 bg-gray-100">
      <div>
        <h2 className="text-2xl md:text-3xl capitalize font-bold tracking-tight text-[#001F3F] sm:text-2xl lg:text-4xl text-center pt-5 font-headingText">
          Our Partners
        </h2>
      </div>

      {/* Partners Grid with Animation */}
      <motion.div
        ref={ref}
        variants={slideInFromBottomVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-4 md:grid-cols-7 gap-x-11 items-center justify-center max-w-7xl mx-auto px-8 lg:px-10"
      >
        {partners.map((partner) => (
          <div className="flex justify-center" key={partner.name}>
            <img
              src={partner.image}
              alt={partner.name}
              className="w-36 sm:w-48 md:w-64 hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
