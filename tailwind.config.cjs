/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
      '3xl': 56,
      'xxl': 200,
    },

    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#EBEFF2',
      'primary': '#1D2527',
      'secundary': '#AFAFAF',
      'tertiary': '#D2D4D9',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        500: '#81D8F7',
        200: '#A2DEF3',
      }
    },

    extend: {
      backgroundImage: {
        'bgMustang': "url('/bg-mustang.png')",
        'bgMustang2': "url('/bgMustang2.png')",
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
    },
  },
  plugins: [],
}
