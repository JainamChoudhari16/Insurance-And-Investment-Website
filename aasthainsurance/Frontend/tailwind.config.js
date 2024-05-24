const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        headerC: '#FEFAF6',
        bodyC: '#EADBC8',
        footerC: '#DAC0A3',
        textC: '#102C57'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}
