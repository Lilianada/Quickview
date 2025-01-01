/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nerko: ['nerko_oneregular', 'sans-serif'],
        monaSans: ['mona-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
