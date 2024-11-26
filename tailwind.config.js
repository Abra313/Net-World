/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#150AA1',
        ashDark: "#585858",
        ashLight: "#E4E4E4",
        secondary: "#5858FA",
      },
      height: {
        full: "100%",
        half: "50%",
        qua: "25%",
      },
    },
  },
  plugins: [],
};
