/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        'cream-dark': '#EDE7DF',
        stone: '#1C1A18',
        'stone-mid': '#5C5650',
        'stone-light': '#9C958E',
        gold: '#C4A35A',
        'gold-dark': '#A8893E',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
