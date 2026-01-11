/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004E64",
        secondary: "#E3B04B",
        accent: "#46B5D1",
        neutral: "#1F2937",
        light: "#F9FAFB",
        muted: "#CBD5E1",
      },

    },
  },
  plugins: [],
};
