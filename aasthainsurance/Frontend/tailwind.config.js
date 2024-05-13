/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerC: '#F4EEFF',
        bodyC: '#DCD6F7',
        footerC: '#A6B1E1',
        textC: '#424874',
      },
      blur: {
        '90': '90%',
      }
    },
  },
  plugins: [],
}
