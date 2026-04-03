/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      titillium: ["'Titillium Web'"],
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      text: "var(--text)",
      accent: "var(--accent)",
      secondAccent: "var(--secondAccent)",
      background: "var(--background)",
      "bulletpoint-orange": "var(--bulletpoint-orange)",
      "bulletpoint-red": "var(--bulletpoint-red)",
      "bulletpoint-pink": "var(--bulletpoint-pink)",
      "bulletpoint-green": "var(--bulletpoint-green)",
      "bulletpoint-blue": "var(--bulletpoint-blue)",
      whiteColor: "var(--whiteColor)",
      whiteColorDark: "var(--whiteColor-dark)",
      whiteColorTrans: "rgba(240, 245, 247,0.9)", //used sparingly for backgrounds
      blackColor: "var(--blackColor)",
      transparent: "var(--transparent)",
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
