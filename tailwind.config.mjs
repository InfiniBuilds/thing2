/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // This is the magic line. It forces class-based toggling.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}