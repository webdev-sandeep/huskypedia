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
        "husky-photo":
          "url('https://images.unsplash.com/photo-1541914626313-73371f4e3917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      },
      boxShadow: {
        btn: "0 0 1rem rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [],
};
