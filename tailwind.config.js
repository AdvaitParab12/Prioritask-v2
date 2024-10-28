/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
      libre: ["Libre", "serif"],
    },
  },
  exports: {
    daisyui: {
      themes: ["aqua"],
    },
  },
  plugins: [require("daisyui")],
};
