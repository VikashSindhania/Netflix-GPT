/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 15px var(--tw-shadow-color), 0 0 25px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
