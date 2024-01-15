/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md1: "970px",
        md2: "1020px",
      },
    },
  },
  plugins: [],
};
