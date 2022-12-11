const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        header: 'var(--header-height)',
        screen: 'var(--screen-height, 100vh)',
        'screen-no-header': 'calc(var(--screen-height, 100vh) - var(--header-height))',
      },
      height: {
        header: 'var(--header-height)',
        screen: 'var(--screen-height, 100vh)',
        'screen-no-header': 'calc(var(--screen-height, 100vh) - var(--header-height))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'hsl(var(--color-black) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
      gray: {
        50: 'hsl(var(--color-gray-50) / <alpha-value>)',
        100: 'hsl(var(--color-gray-100) / <alpha-value>)',
        200: 'hsl(var(--color-gray-200) / <alpha-value>)',
        300: 'hsl(var(--color-gray-300) / <alpha-value>)',
        400: 'hsl(var(--color-gray-400) / <alpha-value>)',
        500: 'hsl(var(--color-gray-500) / <alpha-value>)',
        600: 'hsl(var(--color-gray-600) / <alpha-value>)',
        700: 'hsl(var(--color-gray-700) / <alpha-value>)',
        800: 'hsl(var(--color-gray-800) / <alpha-value>)',
        900: 'hsl(var(--color-gray-900) / <alpha-value>)',
      },
    },
    fontFamily: {
      sans: ['var(--font-mabry)', ...fontFamily.sans],
    },
    fontSize: {
      xs: [
        '0.875rem',
        {
          lineHeight: '1.45',
        },
      ],
      sm: [
        '1rem',
        {
          lineHeight: '1.35',
        },
      ],
      base: [
        '1.25rem',
        {
          lineHeight: '1.35',
        },
      ],
      lg: [
        '1.5rem',
        {
          lineHeight: '1.25',
        },
      ],
      xl: [
        '2rem',
        {
          lineHeight: '1.25',
        },
      ],
      '2xl': [
        '2.5rem',
        {
          lineHeight: '1.15',
        },
      ],
      '3xl': [
        '3rem',
        {
          lineHeight: '1.15',
        },
      ],
      '4xl': [
        '4rem',
        {
          lineHeight: '1.15',
          fontWeight: '300',
        },
      ],
      '5xl': [
        '5rem',
        {
          lineHeight: '1.15',
          fontWeight: '300',
        },
      ],
      '6xl': [
        '6rem',
        {
          lineHeight: '1.15',
          fontWeight: '300',
        },
      ],
      '7xl': [
        '8rem',
        {
          lineHeight: '1.1',
          fontWeight: '300',
        },
      ],
      '8xl': [
        '10rem',
        {
          lineHeight: '1.1',
          fontWeight: '300',
        },
      ],
      '9xl': [
        '12rem',
        {
          lineHeight: '1.1',
          fontWeight: '300',
        },
      ],
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
