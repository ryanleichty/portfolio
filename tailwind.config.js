const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: {
        50: '#F6F7F2',
        100: '#ECEFE6',
        200: '#D9DECE',
        300: '#C5CCB8',
        400: '#B1B9A2',
        500: '#9DA58D',
        600: '#838A75',
        700: '#696E5E',
        800: '#494D42',
        900: '#2F322A',
      },
    },
    fontFamily: {
      sans: ['var(--font-mabry)', ...fontFamily.sans],
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': [
        '4rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      '5xl': [
        '5rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      '6xl': [
        '6rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      '7xl': [
        '8rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      '8xl': [
        '10rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      '8xl': [
        '12rem',
        {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
