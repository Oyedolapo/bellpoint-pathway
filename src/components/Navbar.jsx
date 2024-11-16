import { useState } from "react";
import { navigationLinks } from "../constants/data";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <header
      className="fixed top-0 w-full flex items-center justify-between px-8 py-4 z-20 bg-gray-100 shadow-lg transition-colors duration-300"
    >
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl md:text-3xl font-bold font-headingText text-[#001F3F]">
          BellPoint Pathway
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden xl:flex gap-x-6">
        {navigationLinks.map((item) => (
          <p
            key={item.name}
            className="text-lg font-semibold text-black cursor-pointer hover:text-[#001F3F] transition-colors duration-200 font-headingText"
          >
            {item.name}
          </p>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden xl:flex items-center gap-x-6">
        <h4
          className="text-xl font-bold text-[#001F3F] cursor-pointer transition-colors duration-200 hover:underline"
        >
          Login
        </h4>
        <div className="w-1 h-6 bg-[#001F3F] rounded"></div>
        <button
          className="px-4 py-2 border border-[#001F3F] text-[#001F3F] rounded transition-all duration-200 hover:bg-[#001F3F] hover:text-white"
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden">
        {toggleNavbar ? (
          <IoMdClose
            fontSize={35}
            className="text-[#001F3F] cursor-pointer"
            onClick={() => setToggleNavbar(false)}
          />
        ) : (
          <HiBars3CenterLeft
            fontSize={35}
            className="text-[#001F3F] cursor-pointer"
            onClick={() => setToggleNavbar(true)}
          />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {toggleNavbar && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-10 shadow-lg"
        >
          {navigationLinks.map((item) => (
            <p
              key={item.name}
              className="text-2xl font-bold text-[#001F3F] cursor-pointer transition-colors duration-200 hover:text-gray-600"
              onClick={() => setToggleNavbar(false)} // Close menu on link click
            >
              {item.name}
            </p>
          ))}
          <div className="flex flex-col gap-4 mt-8">
            <button
              className="text-[#001F3F] font-bold text-xl underline"
              onClick={() => setToggleNavbar(false)}
            >
              Login
            </button>
            <button
              className="px-6 py-2 border border-[#001F3F] text-[#001F3F] rounded transition-all duration-200 hover:bg-[#001F3F] hover:text-white"
              onClick={() => setToggleNavbar(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
