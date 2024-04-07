/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        
        'fl': '85vh'
      },  

      colors: {
        'primary': '#1c2841;',
        'secondary': '#ada16b',
        'btn': '#ce0e2d',
        'sec':  "#2f0000"
      },

    },
  },
  plugins: [],
}
