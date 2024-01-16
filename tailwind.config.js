/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md1: "1000px",
        md2: "1100px",
        sm2: "824px",
        sm1: "700px",
      },
    },
  },
  plugins: [],
};
