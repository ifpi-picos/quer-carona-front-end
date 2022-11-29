/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        black: {
          900: '#040404'
        },
        yellow: {
          900: '#F3B507'
        }
      }
    },
  },
  plugins: [],
}
