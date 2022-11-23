/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
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
      screens: {
        sm: { min: "320px" , max: "896px" },
        // md: { min: "640px" },
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
