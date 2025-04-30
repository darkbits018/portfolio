/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        imagine: ['ImagineFont', 'sans-serif'], // Add your custom font
      },
      width: {
        100: '33rem', // 100 = 25rem (400px)
      },
    },
  },
  plugins: [],
};
