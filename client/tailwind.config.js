/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryButton: "#e6a157",
        primaryBg: "#050811",
      },
    },
  },
  plugins: [],
};
