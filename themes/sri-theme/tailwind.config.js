/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../layouts/**/*.html',
    '../../content/**/*.md',
    './layouts/**/*.html',
    './static/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'warm-brown': '#B07A4A',
        'warm-brown-dark': '#C5936B',
        'neutral-gray': '#6B7280', // Improved contrast from #4A4A4A
        'neutral-gray-light': '#9CA3AF', // For better contrast in dark mode
        'light-bg': '#FFFFFF',
        'light-text': '#0B0B0B',
        'dark-bg': '#0B0B0B',
        'dark-text': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Sanchez', 'sans-serif'],
      },
      maxWidth: {
        'reading': '70ch',
        'content': '760px',
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 0.6s ease-in-out',
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};