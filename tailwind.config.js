/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
=======
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
>>>>>>> T-main
  ],
  theme: {
    extend: {
      colors:{
        primary: '#150AA1',
        ashDark: "#585858",
        ashLight: "#E4E4E4",
<<<<<<< HEAD
        secondary: "#5858FA"

      },
    height:{
      full:"100%",
      half :"50%",
      qua:"25%"
       }  
      
    
=======
        secondary: "#5858FA",
        white: "#fff"

      },

      screens: {
        'max-sm': {'max': '639px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'},
        'max-xl': {'max': '1279px'},
        'max-2xl': {'max': '1535px'},
      },
      
>>>>>>> T-main
    },
  },
  plugins: [],
}

