/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#283618",
        secondary: "#2c3217",
        tertiary: "#fefae0",
        fourth: "#dda15e",
        fifth: "#bc6c25",
        icon: "#c4c7b9",
      },
      screens: {
        lg: { max: "1023px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
