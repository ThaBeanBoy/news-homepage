/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,

  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      header: '560px',
    },

    colors: {
      // Primary colors
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',

      //Neutral colors
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    fontSize: {
      normal: '15px',
      'lg-1': '18px',
    },

    spacing: {
      0: '0px',
      16: '16px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      96: '96px',
    },

    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
