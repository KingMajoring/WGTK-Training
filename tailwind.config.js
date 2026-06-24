/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F15A22',
        'brand-dark': '#C04A1A',
        'surface-1': '#0d0d0d',
        'surface-2': '#141414',
        'surface-3': '#1c1c1c',
        'surface-4': '#252525',
        'surface-5': '#333333',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
