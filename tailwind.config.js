/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","style.css","./src/**/*.{js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9'
      },
      backgroundImage: {
        'sanFrancisco': 'url(/img/sanFrancisco.jpg)',
        'sanFranciscoDesktop': "url('/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('/img/yosemite.jpg')",
			  'LA': "url('/img/LA.jpg')",
			  'seattle': "url('/img/seattle.jpg')",
			  'new_york': "url('/img/new_york.jpg')",
			  'norway': "url('/img/norway.jpg')",
			  'sydney': "url('/img/sydney.jpg')",
			  'miami': "url('/img/miami.jpg')",
			  'switzerland': "url('/img/switzerland.jpg')",
			  'bali': "url('/img/bali.jpg')",
			  'norway': "url('/img/norway.jpg')",
			  'chicago': "url('/img/chicago.jpg')",
			  'europe': "url('/img/europe.jpg')",
			  'iceland': "url('/img/iceland.jpg')",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"]
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
