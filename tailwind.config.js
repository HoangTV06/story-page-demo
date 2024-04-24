/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        cta: "url('/assets/images/Frame 2415.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
