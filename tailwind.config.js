/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      },
    },
    extend: {
      content: {
        con: "after:h-1 after:w-full after:m-auto after:bg-main-blue after:left-0 after:bottom-0 after:absolute",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        600: "1300px",
        700: "900px",
        626: "626px",
        "300px": "300px",
        "600px": "35rem",
      },
      height: {
        434: "434.75px",
        "230px": "230px",
      },
      colors: {
        "main-white": "rgba(220, 220, 220, 0.6)",
        "main-black": "rgba(0, 0, 0, 1)",
        "main-hover-black": "rgba(0, 0, 0, 0.6)",
        "main-gradient-black": "rgba(0, 0, 0, 0.6)",
        "main-gradient-end": "rgba(0, 0, 0, 0.6)",
        "main-blue": "#5F9DF7",
        "main-orange": "#FF731D",
        "start-orange": "#EE9322",
        "main-white": "rgba(255, 255, 255, 1)",
        "hover-white": "rgba(255, 255, 255, .6)",
        "main-grey": "rgba(211, 211, 211, 1)",
        "main-yellow": "#F8DE22",
        "start-blue": "#4E4FEB",
        "main-blue": "rgba(6, 143, 255, 1)",
        "different-white": "#f7f7f7",
        color: "#BC1A45",
      },

      spacing: {
        "2px": "-2px",
        "4px": "-4px",
        "50px": "-50%",
        128: "32rem",
        130: "41rem",
        "90vh": "90vh",
        "70vh": "70vh",
        "80vh": "80vh",
        49: "49%",
        16: "16px",
      },
    },
  },
  plugins: [],
};
