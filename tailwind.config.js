/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      dancingScript: ['Dancing Script', 'cursive']
    },
    extend: {
    },
  },
  plugins: [],
}
