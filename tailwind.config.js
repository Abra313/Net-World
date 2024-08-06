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
        'max-sm': {'max': '639px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'},
        'max-xl': {'max': '1279px'},
        'max-2xl': {'max': '1535px'},
      },
      
    },
  },
  plugins: [],
}

