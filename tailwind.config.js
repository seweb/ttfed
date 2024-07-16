/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: '#0085FF29',
        border: '#dce5ef',
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
        },
        dynamic: {
          primary: '#2C8DFF'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        12: '12px',
        14: '14px'
      }
    }
  },
  variants: {
    extend: {}
  }
}
