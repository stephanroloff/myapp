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
        // 'themeColor': '#ff1744',          
        // 'themeColorSoft': '#ff8a80',      
        // 'themeColorObscure': '#330000',   
        // 'themeColorLightSoft': '#ffe6e6', 


        // 'themeColor': '#ffd700',          
        // 'themeColorSoft': '#ffeb99',      
        // 'themeColorObscure': '#665c00',   
        // 'themeColorLightSoft': '#fff9e6', 

        // 'themeColor': '#007bff',          
        // 'themeColorSoft': '#80d3f7',      
        // 'themeColorObscure': '#003366',  
        // 'themeColorLightSoft': '#e6f2ff', 


        'themeColor': '#02a76e',
        'themeColorSoft': '#5ce49b',
        'themeColorObscure': '#162528',
        'themeColorLightSoft': '#f0f8f4',

        'customBlack': '#131a21',
        'cardGray': '#1c252e',
        'customGray': '#283440',
        'customGraySoft': '#f1f1f1'
      },
      boxShadow: {
        'custom': '0 4px 26px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.6)',
      },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      fontPrimary: ['publicSans'],
      fontSecondary: ['barlow'],
    },
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