/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        apple: "url('/public/assets/img/apple.png')",
        google: "url('/public/assets/img/google.png')",
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
