/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Deep blue
        secondary: "#9333EA", // Purple
        accent: "#F59E0B", // Orange
        muted: "#64748B", // Grayish blue
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Improves form elements
    require("@tailwindcss/typography"), // Enhances text readability
    require("@tailwindcss/aspect-ratio"), // Enables aspect ratio utilities
  ],
};
