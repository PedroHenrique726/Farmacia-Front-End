/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'moca': '##FFE4B5',
        'quaseBranco': '#EBE9F2',
        'papayaWhip': '##FFEFD5',
        'peachPuff': '##FFDAB9',
        'paleGoldenrod': '##EEE8AA'
      },
    },
  },
  plugins: [],
}

