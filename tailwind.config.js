/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "sunset",
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
    "./pages/**/*.{html,js,vue}",
    "./components/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "newblue": "#0C80DF",
        "newgrey": "#7C91BC",
        "newwhite": "#F4F9FF",
        "newgreen": "#E6F4F1"
      }
    },
  },
  plugins: [require("daisyui")],
}

