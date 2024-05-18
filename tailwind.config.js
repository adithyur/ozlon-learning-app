/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-100': '#E6FFFA',
        'green-600': '#2F855A',
        'gray-700': '#4A5568',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


