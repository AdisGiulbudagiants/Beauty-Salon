/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    fontFamily: {
      EbBold: ["EbBold"],
      EbRegular: ["EbRegular"],
      CormorantBold: ["CormorantBold"],
      CormorantRegular: ["CormorantRegular"],
      CormorantSemibold: ["CormorantSemibold"],
    },
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      xxl: "1296px",
    },
    textColor: {
      gold: "#CDAA7D",
      white: "#fff",
      black: "$000",
    },
    extend: {},
  },
  plugins: [],
}
