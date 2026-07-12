/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '3.5rem',
        '11xl': '4rem',
        '12xl': '4.5rem',
      },
    },
  },
  plugins: [],
}
