/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        customColor: '#4ca1af',
        hoverColor : '#36747d',
      },
      maxHeight: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}

