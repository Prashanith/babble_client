/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "primary-d": "#0071f2",
        "secondary-d": "#2f2e41",
        "tertiary-d": "#9BA4B5",
        "quarternery-d": "#F1F6F9",
      },
    },
  },
  plugins: [],
};
