/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      McLaren: ["McLaren", "cursive"],
      Merriweather: ["Merriweather", "serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primaryBg: "#F9F8F4",
      primary: "#FBF4E2",
      secondary: "#B4D51E",
      primary2: "#FFC735",
      secondary2: "#463C74",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
