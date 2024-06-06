/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    screens: {
      xs: {
        max: '480px'
      }
    }
  },
  plugins: []
};
