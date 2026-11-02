/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        strawberry: {
          DEFAULT: '#EE5B91',
          light: '#F5B6CC',
        },
        matcha: {
          DEFAULT: '#858653',
          light: '#C6C59C',
        },
        invitation: {
          bg: '#F0F1E6',
          backdrop: '#E4E6D6',
        },
      },
      fontFamily: {
        patrick: ["'Patrick Hand'", 'cursive'],
        amatic: ["'Amatic SC'", 'cursive'],
        caveat: ["'Caveat'", 'cursive'],
        cormorant: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sacramento: ["'Sacramento'", 'cursive'],
      },
    },
  },
  plugins: [],
};

