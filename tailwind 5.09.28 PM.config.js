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
        primary: "#a90cec",
        secondary: "#01abb7",
      },
      backgroundImage: {
        hero: "url('./assets/ray2.jpg')",
        phases: "url('./assets/ray5.jpg')",
        features: "url('./assets/ray1.webp')",
      },
    },
  },
  plugins: [],
};
