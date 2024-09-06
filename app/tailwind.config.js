/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        'autofit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'autofill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      colors: {
        'customBlack': '#242424',
      },
      boxShadow: {
        'custom': '0 4px 26px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.6)',
      },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'iphone': '400px'
    }
  },
  plugins: [],
}