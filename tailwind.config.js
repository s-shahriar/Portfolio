/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'primaryCol': '#212121',
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms'), require('flowbite/plugin')],
}