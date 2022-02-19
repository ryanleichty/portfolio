module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#EFEFEC',
          300: '#E3E3DE',
          400: '#D8D8D0',
          500: '#CCCCC2',
          600: '#B2B2A3',
          700: '#999985',
          800: '#7D7D69',
          900: '#5F5F4F',
        },
      },
    },
    screens: {
      // laptop
      lg: { max: '1500px' },
      // tablet
      md: { max: '1100px' },
      // mobile
      sm: { max: '550px' },
    },
    fontFamily: {
      sans: 'Mabry, ui-sans-serif, system-ui',
      serif: 'Signifier, ui-sans-serif, system-ui',
      mono: 'Mabry Mono, ui-monospace, SFMono-Regular',
    },
  },
  plugins: [],
};
