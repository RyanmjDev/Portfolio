module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './index.html'],
  theme: {

      extend: {
        colors:
        {
          'accent-blue': '#17376f',
          'card-blue': '#3a5891',
          'steel-blue': '#c7dbff',
          
        },
        fontFamily: {
          'roboto': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
