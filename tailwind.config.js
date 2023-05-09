/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#A5A5A4",
        darkRed: "#BB1E1E",
      },
    },
  },
  plugins: [],
};
