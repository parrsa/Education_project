/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    screens: {
      sm: {'max': '640px'},
      md: {'max': '765px'},
    },
    extend: {
      width: {
        '128': '420px',
      }
    },
  },
  plugins: [],
}