/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      dancingScript: ['Dancing Script', 'cursive']
    },
    extend: {
      backgroundImage: {
        "heroContact": "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
        "hero" : "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"
    },
  },
  plugins: [],
}
}
