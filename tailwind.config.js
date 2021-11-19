const colors = require('tailwindcss/colors');
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    colors: {
      // primary: '#738047',
      green: {
        light: '#DFE4CE',
        DEFAULT: '#738047',
        dark: '#474F2C',
      },
      white: colors.white,
    },
    extend: { //延伸
      fontSize: {
        'mi': ['15px', '22px'],
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
