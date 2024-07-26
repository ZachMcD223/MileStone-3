module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'DarkRed': ' #b30000',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), 
  ],
}
