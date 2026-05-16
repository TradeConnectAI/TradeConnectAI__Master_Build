/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          blueDark: "#1E3A8A",
          sky: "#38BDF8",
        },

        slatebg: {
          light: "#F8FAFC",
          dark: "#0F172A",
        },
      },
    },
  },

  plugins: [],
};