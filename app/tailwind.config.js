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
        // 'themeColor': '##426fff',
        'themeColor': '#02a76e',
        // 'themeColorSoft': '#00b9ff',
        'themeColorSoft': '#5ce49b',
        // 'themeColorObscure': '#092D43',
        'themeColorObscure': '#162528',

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