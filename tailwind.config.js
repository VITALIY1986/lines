
module.exports = {
// @see   https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.js',
    './pages/**/*.js'],
  theme: {
    extend: {
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '308px': '19.25rem',
        'sliderlg': '80vh',
        'slidersm': '70vh',
      },
      purplebt:{
        DEFAULT: '#783ea8',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
         
          DEFAULT: '#7372aa',
          
        },
        purple: {
          DEFAULT: '#2b2b3e'
        },
        very_peri: {
          DEFAULT: '#6661b1'
        },
        very_peri_dark: {
          DEFAULT: '#413f5d'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
      width: {
        '308px': '19.25rem',
        '600px': '37.5rem',
      },
     
    },
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' )
  ]
}
