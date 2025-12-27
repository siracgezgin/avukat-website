/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'law-navy': '#0f172a',
        'law-gold': '#d97706',
        'law-gray': '#475569',
        'law-light': '#f8fafc',
      },
    },
  },
  plugins: [],
}
