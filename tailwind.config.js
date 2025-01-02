/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nerko: ['nerko_oneregular', 'sans-serif'],
        grotesk: ['Schibsted Grotesk', 'serif', 'sans-serif']
      },
    },
  },
  plugins: [],
};
