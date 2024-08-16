/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './products.html',
    '../index.html',
    './services.html',
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

