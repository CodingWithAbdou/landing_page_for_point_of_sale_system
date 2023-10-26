/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      // keyframes:{
      //   upDown :{ 
      //   "0% , 100% " : { top: '25px'} ,
      //   "50%" :  { top: '-25px'}
      //   },
      // },
      // animation: {
      //   upDown: 'upDown 3s ease infinite;',
      // }  
  
    },
    fontFamily : {
      'sans' : ['Alexandria']
    } ,
    // colors : {
    //   seconde : ''
    // }  
  
  },
  plugins: [],
}

