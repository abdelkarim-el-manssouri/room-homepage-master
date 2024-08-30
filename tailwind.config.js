/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "hsl(0, 0%, 0%)",
        "primary-600": "hsl(0, 0%, 27%)",
        "primary-300": "hsl(0, 0%, 63%)",
        "primary-100": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "League-spartan": ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        "fw-regular": 500,
        "fw-semi-bold": 600,
        "fw-bold": 700,
      },
    },
  },
  plugins: [],
};
