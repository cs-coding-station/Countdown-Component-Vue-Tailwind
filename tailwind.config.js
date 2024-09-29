/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        numberIn: 'numberIn 0.5s ease-in-out',
        numberOut: 'numberOut 0.5s ease-in-out',
        hideCounter: 'hideCounter 0.2s ease-in-out',
        showReplay: 'showReplay 0.2s ease-in-out'
      },

      keyframes: {
        showReplay: {
          '0%': { transform: 'scale(0)' },
          '30%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' }
        },

        hideCounter: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },

        numberIn: {
          '0%': { transform: 'rotate(120deg)' },
          '30%': { transform: 'rotate(-20deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },

        numberOut: {
          '0%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(-120deg)' }
        }
      }
    }
  },
  plugins: []
}
