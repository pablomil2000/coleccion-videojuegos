/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003366",
          "secondary": "#0f0f0f",
          // "background-color": "#123d3f",
          "background-color-secondary": "#FFFF00"
        },
      },
    ],
  },
}