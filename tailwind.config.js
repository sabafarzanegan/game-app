/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: "vazir",
        lale: "lale",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
