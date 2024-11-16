import grad from '../assets/grad.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const WhatWeDo = () => {
  // Controls and observer
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Start animation when 20% of the component is visible

  // Trigger animation when inView changes
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const slideInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row w-full justify-center pt-20 gap-x-10 px-5 lg:px-0"
    >
      {/* Image Section (Unaffected) */}
      <div className="lg:w-[40%] md:h-[400px] w-full">
        <img
          src={grad}
          alt="Graduation Picture"
          className="rounded w-full h-full object-cover"
        />
      </div>

      {/* Text Section (With Animation) */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        className="lg:w-[40%] w-full px-2 pt-4"
      >
        <h2 className="text-[#001F3F] text-4xl py-2 font-bold font-headingText">
          What We Do
        </h2>
        <p className="text-xl py-4 font-medium font-bodyText text-gray-700">
          BellPoint Pathway specializes in both Education and Immigration
          Services. We specialize in guiding and placing students into various
          widely recognized accredited universities.
        </p>
        <p className="text-xl py-4 font-medium font-bodyText text-gray-700">
          We also offer full range immigration services assisting with necessary
          travel visas including student visas, study permits, visitors visas,
          and work permits.
        </p>
        <button className="relative overflow-hidden px-10 py-3 mt-5 rounded-full border border-[#001f3f] text-white cursor-pointer group">
          <span className="relative z-10 group-hover:text-white text-[#001f3f]">
            Learn more
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
