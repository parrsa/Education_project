/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: { min: "320px" , max: "600px" },
      md: { min: "601px" , max: "1024px" }
    }, 
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: {
        yekan: ["Yekan"],
        Titr: ["Titr"],
        Bzar: ["Bzar"],
        BzarBold:["BzarBold"],
        KALAMEHBOLD:["KALAMEHBOLD"]
      },
      width: {
        128: "420px",
        129: "450px",
        130: "470px",
        131: "620px",
      },
     
    },
  },
  plugins: [],
};
