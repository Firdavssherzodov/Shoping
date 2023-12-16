/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1:'#1A56DB',
        color2: 'rgb(20, 164, 77)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
