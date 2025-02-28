/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#6875f5',
          600: '#5850ec',
          700: '#5145cd',
          800: '#42389d',
          900: '#2e1d78', // Dark purple-blue seen in the design
        },
        custom: {
          dark: '#16074C',
          medium: '#302C79',
          pink: '#FAD8EA',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};