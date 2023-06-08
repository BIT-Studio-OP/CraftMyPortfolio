/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161925",
        accent: "#FE938C",
        secondary: "#95B8D1",
        text: "#FCFCEE",
      },
    },
  },
  plugins: [],
};
