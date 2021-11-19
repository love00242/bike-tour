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
      gray: {
        light: '#EEE',
        DEFAULT: '#9A9A9A',
        dark: '#767676',
      },
      white: colors.white,
    },
    boxShadow: {
      DEFAULT: '4px 4px 20px rgba(118, 118, 118, 0.3)',
    },
    extend: { //延伸
      fontSize: {
        'mi': ['15px', '22px'],
      },
      width: {
        22: '5.5rem',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '80vh',
      },
      borderRadius: {
        large: '40px'
      },
      inset: {
        100: '28rem',
        114: '42rem',
      },
      zIndex: {
        '-1': '-1',
        '2': '2',
        '99': '99',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
