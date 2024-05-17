/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerC: '#F9F7F7',
        bodyC: '#DBE2EF',
        footerC: '#3F72AF',
        textC: '#3F72AF',
      },
      blur: {
        '90': '90%',
      }
    },
  },
  plugins: [],
}
