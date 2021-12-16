module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "420px" },
      // => @media (max-width: 420px) { ... }
      um: { max: "320px" },
      // => @media (max-width: 320px) { ... }
    },
    colors: {
      light: "#EEEEEE",
      dark: "#101124",
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
