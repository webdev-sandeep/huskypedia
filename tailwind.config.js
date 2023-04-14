/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D9D3C0",
        "secondary-color": "#2D4550",
        "bright-color": "#F8F0E2",
        "skin-color": "#DE9873",
      },
      backgroundImage: {
        "landing-husky":
          "url('/src/assets/images/illustrations/landinghusky.webp')",
      },
    },
  },
  plugins: [],
};
