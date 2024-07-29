/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'mobile': '360px'
    },
    extend: {
      fontFamily: {
        DM: ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}