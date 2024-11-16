import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../constants/data";

const TestimonialSlide = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // Treat md as lg
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3, // Treat lg as xl
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4, // For larger screens
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        speed={2000}
        className="max-w-[90%] xl:max-w-[80%]"
      >
        {testimonials.map((item) => (
          <SwiperSlide
            key={item.name}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col gap-4 bg-white shadow-lg text-[#001F3F] rounded-2xl px-6 sm:px-8 py-6 sm:py-10 mx-6 md:mx-10 w-full max-w-[350px] lg:max-w-[360px] transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <p className="text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-600 flex-grow">
                "{item.text}"
              </p>
              <div className="flex gap-4 items-center mt-6">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <p className="text-sm sm:text-base font-bold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.school}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Center pagination below the slides */}
      <style jsx>{`
        .swiper-pagination {
          position: relative;
          bottom: -30px;
          text-align: center;
          margin-top: 40px;
        }
        .swiper-pagination-bullet {
          background: #dfd0b8;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlide;
