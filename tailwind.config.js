/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Your other custom colors (if any)
        // 'primary-dark': '#1A237E', // You might update or remove this if it was for the old navbar color
        // 'accent-teal': '#00B8D4',
        // 'light-bg': '#F5F5F5',
        // 'text-dark': '#333333',
        // 'card-light': '#E8EAF6',

        // ADD OR UPDATE THIS NEW COLOR:
        'primary-navbar': '#B3A3CD', // The new color for navbar and footer
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}