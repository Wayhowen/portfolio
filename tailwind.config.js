/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'c': 'repeat(3, 33%)',
      },
      // gridAutoColumns: {
      //   'ac': 'minmax(0, 2fr)',
      // },
      animation: {
        homeSlideL4: 'slideInLeft 0.4s ease-in',
        homeSlideL5: 'slideInLeft 0.5s ease-in',
        homeSlideL6: 'slideInLeft 0.6s ease-in',
        homeSlideL7: 'slideInLeft 0.7s ease-in',
        homeSlideR4: 'slideInRight 0.4s ease-in',
        homeSlideR5: 'slideInRight 0.5s ease-in',
        homeSlideR6: 'slideInRight 0.6s ease-in',
        homeSlideR7: 'slideInRight 0.7s ease-in',
        fadeIn: 'fadeIn 0.3s forwards',
        fadeOut: 'fadeOut 0.3s forwards'
      },
      keyframes: {
        slideInLeft: {
          '0%': {transform: 'translateX(-500%)'},
          '100%': {transform: 'translateX(0px)'},
        },
        slideInRight: {
          '0%': {transform: 'translateX(500%)'},
          '100%': {transform: 'translateX(0px)'},
        },
        fadeIn: {
          '0%': {opacity: '0.5'},
          '100%': {transform: 'translate(-20px, 0px)'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {transform: 'translate(0px, 0px)'},
        }
      },
      fontFamily: {
        sans: ['Source Code Pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
        heading: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'custom': '3.5rem'
      }
    },
    plugins: [],
  }
}
