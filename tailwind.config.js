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
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        14: '14px'
      }
    }
  },
  variants: {
    extend: {}
  }
}

{
  /* <div class="font-inter font-thin">Thin (100)</div>
<div class="font-inter font-extralight">Extralight (200)</div>
<div class="font-inter font-light">Light (300)</div>
<div class="font-inter font-normal">Normal (400)</div>
<div class="font-inter font-medium">Medium (500)</div>
<div class="font-inter font-semibold">Semibold (600)</div>
<div class="font-inter font-bold">Bold (700)</div>
<div class="font-inter font-extrabold">Extrabold (800)</div>
<div class="font-inter font-black">Black (900)</div> */
}
