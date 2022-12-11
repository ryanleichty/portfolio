module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F7F2',
          100: '#ECEFE6',
          200: '#D9DECE',
          300: '#C5CCB8',
          400: '#B1B9A2',
          500: '#9DA58D',
          600: '#838A75',
          700: '#696E5E',
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
