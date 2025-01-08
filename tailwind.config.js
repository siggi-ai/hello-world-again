/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eighties': "url('/assets/images/80sBG.jpg')",
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}

