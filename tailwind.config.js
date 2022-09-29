/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e1b7a1'
      },
      keyframes: {
          'leftToRight': {
                'from':{left:'-100px'},
                'to': {left: 0}
          },
          'bottomToTop': {
            'from':{bottom:'-100px'},
            'to': {bottom: 0}
          },
          'topToBottom': {
            'from':{top:'-100px'},
            'to': {top: 0}
          },
          'rightToLeft': {
            'from':{right:'-100px'},
            'to': {right: 0}
          }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
