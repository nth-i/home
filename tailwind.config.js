/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Tells the compiler exactly which files to scan for classes
  content: ["./nthi_web/index.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        "nthi-space": "#060913",
        "nthi-teal": "#14b8a6",
        "nthi-sky": "#0284c7",
        "nthi-card": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
