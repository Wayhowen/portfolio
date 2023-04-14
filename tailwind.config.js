/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        homeSlide0: 'slideInLeft 0.4s ease-in',
        homeSlide1: 'slideInRight 0.5s ease-in',
        homeSlide2: 'slideInLeft 0.6s ease-in',
        homeSlide3: 'slideInRight 0.7s ease-in',
        fadeIn: 'fadeIn 0.3s forwards',
        fadeOut: 'fadeOut 0.3s forwards'
      },
      keyframes: {
        slideInLeft: {
          '0%': {transform: 'translateX(-200%)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideInRight: {
          '0%': {transform: 'translateX(200%)'},
          '100%': {transform: 'translateX(0)'},
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {transform: 'translate(-20px, 0)'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {transform: 'translate(0px, 0)'},
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
