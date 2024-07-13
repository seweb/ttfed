/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          white: '#FFFFFF',
          black: '#000F30'
        },
        neutral: {
          light: {
            100: '#D3DFEB',
            60: '#E5ECF3'
          },
          dark: {
            80: '#6C869F'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  }
}
