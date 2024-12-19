/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    screens: {
      xs: "320px", // Very small mobile screens
      sm: "480px", // Smaller smartphones (iPhone SE, etc.)
      md: "640px", // Medium to large smartphones (iPhone 6/7/8, etc.)
      lg: "768px", // Tablets and small tablets (portrait)
      xl: "1024px", // Larger tablets, small desktops
    },
    extend: {},
  },
  plugins: [],
};
