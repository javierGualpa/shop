/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card': '#F4edfE',
        'resalta': '#55a39e',
        'white': '#f8f8f8',
        'inicio': '#b8bac8',
        'title': '#425ea9',
        'resaltar': '#7f9dfc',
        'p': '#cee6f7',
        'button': '#162649',
        'fondo': '#004268'
      }
    },
  },
  plugins: [],
}