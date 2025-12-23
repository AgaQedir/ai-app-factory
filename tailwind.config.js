/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      colors: {
        dark: "#0a0a0a",
        panel: "#111111",
        border: "#222222",
        primary: "#0070f3",
        accent: "#7928ca"
      }
    } 
  },
  plugins: [],
}
