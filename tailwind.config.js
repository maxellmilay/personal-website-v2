/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        moveLine : {
          '0%': {height: 0},
          '100%': {height: '100%'}
        },
        moveDown: {
          '0%': {opacity: 1, transform: 'translateY(-30px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'}
        }
      },
      animation: {
        'move-line': 'moveLine 6s linear forwards',
        'move-down': 'moveDown 1s linear forwards'
      }
    },
  },
  plugins: [],
};

