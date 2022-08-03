/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9FDAEA',
        secondary: '#febb52',
        tertiary: '#3F3D48',
        quaternary: '#f8fef0',
      }
    },
  },
  plugins: [],
}
