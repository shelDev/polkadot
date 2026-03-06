
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          light: '#2D5282',
          dark: '#0F2340',
          muted: '#4A6FA5',
        },
        coral: {
          DEFAULT: '#F4845F',
          hover: '#E8694A',
          light: '#FDE8E0',
        },
        surface: '#F8F9FC',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
