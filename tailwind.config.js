/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#150AA1',
        ashDark: "#585858",
        ashLight: "#E4E4E4",
        secondary: "#5858FA"

      },
      
    },
  },
  plugins: [],
}

