/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#061425",
      secondary: "#2B3036",
      accent: "#f4d35e",
      accent1: "#f4d45e",
      accent2: "#ef4444",
      accent3: "#0ea5e9",
      accent4: "#11DB76",
      accent5: "#c711db",

      primaryDark: "#191919",
      highlight: "#e80000",
      whiteColor: "rgba(231, 231, 231, 1)",
      whiteColorTran: "rgba(231, 231, 231, 0.9)",
      blackColor: "#000814",
      greyColor: "#535353",
      transparent: "transparent",
      boxShadow: "rgba(0,0,0,0.4)",
    },
    screens: {
      xxxs: "450px", // Iphone SE...
      xxs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
