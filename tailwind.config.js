/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#A5A5A4",
        myBlack: "#1D1D1B",
        darkRed: "#bb1e1e",
        redTrans: "rgba(187, 30, 30, 0.1)",
      },
    },
  },
  plugins: [],
};
