module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'primary-red': 'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'neutral-dark-blue': 'hsl(249, 10%, 26%)',
        'neutral-grayish-blue': 'hsl(246, 10%, 26%)',
      },
      backgroundImage: {
        'intro-desktop': 'url("assets/images/bg-intro-desktop.png")',
        'intro-mobile': 'url("assets/images/bg-intro-mobile.png")',
      },
      brightness: {
        120: '1.2',
      },
    },
    screens: {
      sm: '375px',
      lg: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ],
};
