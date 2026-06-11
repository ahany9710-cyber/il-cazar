/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        tatweer: {
          orange: '#2E7D4F',
          'orange-light': '#3D9A63',
          navy: '#0E2A1E',
        },
      },
    },
  },
  plugins: [],
}
