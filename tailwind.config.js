module.exports = {
  theme: {
    extend: {
      colors: {
          'vue-green': '#42b883',
          'vue-blue': '#35495e',
          'vue-grey': '#7f939d',
          'plum': '#60406D',
          'red': '#D13E4D',
          'yellow': '#EDDD68',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '75%': '75%',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 2s ease',
        'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      }  
    })
  ]
};
