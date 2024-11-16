/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#fff",
        secondaryBlue: "#3C5B6F",
        softBeige: "#DFD0B8"
      },
      fontFamily: {
        bodyText: ["Poppins", "sans-serif"],
        headingText: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}