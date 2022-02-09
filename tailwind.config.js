module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
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
