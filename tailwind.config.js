import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#36827F",
      secondary: "#F9DB6D",
      tertiary: "#464D77",
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#454141",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero-bg.png')",
        logo: "url('./assets/images/logo.png')",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

export default config;
