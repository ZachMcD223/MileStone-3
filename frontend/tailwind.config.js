module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'red-background': '#cc0000',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), 
  ],
}
