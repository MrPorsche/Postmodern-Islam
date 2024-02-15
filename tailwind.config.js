const plugin = require('tailwindcss/plugin')
import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        BackCover: "url('./src/Components/bg.jpg')",
        ProfilePic: "url('./src/Components/profile.png')"
      },
      colors: {
        linkedin: "#0077B5",
        twitter: "#1DA1F2",
        facebook: "#1877F2",
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow",),
    ({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "3px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
  }),
  ],
}