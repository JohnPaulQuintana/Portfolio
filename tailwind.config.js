/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        background: {
          dark: '#0d1b2a',
          semidark: '#001219',
        },
        color:{
          primary: '#94d2bd',

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

