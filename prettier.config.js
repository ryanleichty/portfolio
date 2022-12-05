module.exports = {
  // These settings are duplicated in .editorconfig:
  tabWidth: 2, // indent_size = 2
  useTabs: false, // indent_style = space
  endOfLine: 'lf', // end_of_line = lf
  semi: false, // default: true
  singleQuote: true, // default: false
  printWidth: 100, // default: 80
  trailingComma: 'es5',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'flow',
      },
    },
  ],
}

// Note: This configuration was copied from Tailwind’s official repository:
// https://github.com/tailwindlabs/tailwindcss/blob/master/prettier.config.js
