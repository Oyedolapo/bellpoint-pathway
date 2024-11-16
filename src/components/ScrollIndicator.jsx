import { FaLongArrowAltDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <div className="absolute -bottom-0 right-0 transform -translate-x-1/2">
      <div className="flex justify-center items-center">
        {/* Scroll Indicator Arrow */}
        <div className="relative w-8 h-8 rounded-full animate-pulse">
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 text-[#001F3F] text-4xl"><FaLongArrowAltDown /></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
