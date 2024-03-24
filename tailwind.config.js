/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./built/*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 1/2)'}

      }
    },
  },
  plugins: [],
}

