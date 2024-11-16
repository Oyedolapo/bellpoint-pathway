import happyClients from "../assets/happyClients.jpg";
import TestimonialSlide from "./TestimonialSlide";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Testimonial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the section is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
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
    <section
      className="relative bg-cover bg-center bg-scroll pt-10 pb-10 lg:pb-0 lg:pt-20 px-4 sm:px-8 md:px-16 lg:px-20 mt-10 sm:mt-20 lg:mt-40"
      style={{ backgroundImage: `url(${happyClients})` }}
      aria-label="Testimonials from happy clients"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#001f3f] opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center text-white">
        <h2 className="text-sm sm:text-base lg:text-xl uppercase font-bold tracking-wider py-3 sm:py-5 font-headingText">
          Success Stories
        </h2>
        <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">
          Happy Clients
        </p>
      </div>

      {/* Testimonial Slider with Animation */}
      <motion.div
        ref={ref}
        variants={slideInFromBottomVariants}
        initial="hidden"
        animate={controls}
        className="relative mt-10 lg:mt-16"
      >
        <TestimonialSlide />
      </motion.div>
    </section>
  );
};

export default Testimonial;
