const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.coolGray,
        text: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
