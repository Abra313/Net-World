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

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        
      },
      
    },
  },
  plugins: [],
}

