module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'text': 'text-decoration',
        'height': 'height'
      },
      keyframes: {
        'translate-x': {
          '0%, 20%' : { transform: 'translate(0)'},
          '25%, 45%' : { transform: 'translate(-100%)'},
          '50%, 70%' : { transform: 'translate(-200%)'},
          '75%, 100%' : { transform: 'translate(-300%)' },
          
        }
      },
      animation: {
        'slider': 'translate-x 8s linear 0s infinite alternate'
      }
    },
  },
  plugins: [],
}
