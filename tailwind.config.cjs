module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './index.html'],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
