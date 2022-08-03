/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#daded4',
        accentText: '#39603D',
        light: '#a3bcb6',
        lighter: '#ffffff',
        text: '#3c403d'
      }
    },
  },
  plugins: [],
}
