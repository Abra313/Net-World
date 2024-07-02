/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#3490dc',
        secondary: '#ffed4a',
        // Add more colors as needed
      },
      fontFamily: {
        // Add custom font families here
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        // Add more font families as needed
      },
      screens: {
        // Add custom screen sizes here
        'sm': '640px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1280px',   // Extra large screens
        // Add more screen sizes as needed
      },
    },
  },
  plugins: [],
}

