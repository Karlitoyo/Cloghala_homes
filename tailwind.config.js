/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
        secondary: "#F59E0B", // Custom amber
        accent: "#10B981", // Custom green
        dark: "#111111", // Custom dark gray
        yellowApp: "#EADF97", // Custom yellow
        footerBrown: "#231F1D" // Custom footer brown
      },
      borderRadius: {
        "heroCustom-bl": "300px",
        "midAboutCustom-bl": "150px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
}