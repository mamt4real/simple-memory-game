/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg'
      },
      perspective: {
        1000: '1000px'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px'
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)'
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d'
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
