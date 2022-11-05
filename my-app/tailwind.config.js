/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        yekan: ["Yekan"],
        Titr: ["Titr"],
        Bzar: ["Bzar"],
        BzarBold:["BzarBold"]
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "765px" },
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
