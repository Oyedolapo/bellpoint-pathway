import { blog } from '../constants/data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Blog = () => {
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
    <section className="my-20 lg:my-24 flex flex-col items-center">
      <div className="text-center py-10 lg:py-20 font-headingText">
        <h3 className="text-lg font-bold mb-2 uppercase text-[#001F3F] tracking-wider">
          Blog
        </h3>
        <p className="text-2xl lg:text-5xl font-bold">Your Guide to Global Education</p>
      </div>

      {/* Blog Cards Grid with Animation */}
      <motion.div
        ref={ref}
        variants={slideInFromBottomVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap xl:flex-nowrap justify-center gap-9 px-8 py-2 lg:py-7 font-bodyText"
      >
        {blog.map((item) => (
          <div key={item.id} className="w-full md:w-[80%] xl:w-[30%] group cursor-pointer">
            <div className="w-full relative">
              <div className="w-full h-72">
                <img src={item.imgUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-56 right-32 xl:left-36 md:left-56 lg:left-80 bg-gray-200 group-hover:bg-[#001F3F] rounded-full w-28 h-28 flex flex-col items-center justify-center">
                <p className="text-4xl text-[001F3F] font-bold group-hover:text-white">{item.day}</p>
                <p className="text-lg uppercase font-semibold group-hover:text-gray-100">{item.month}</p>
                <p className="text-gray-400 text-sm">{item.year}</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl text-[#001F3F] font-bold pb-5">{item.title}</h3>
              <p className="text-lg text-gray-500">{item.note}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
