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
      bg: "#3B3D60",
    },
    extend: {
      borderRadius: {
        photo: "60px 120px 60px 120px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": " cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": { transform: "rotate(1deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        ghost: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        meditate: {
          "0%, 100%": {
            transform: "translateY(-2%) rotate(1deg)",
            "animation-timing-function": " cubic-bezier(0.8, 0, 1, 1)",
          },
          "30%": { transform: "translateY(-4%) rotate(2deg)" },
          "80%": { transform: "translateY(-1%) rotate(2deg)" },
        },
      },
      animation: {
        ghost: "ghost 1s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        meditate: "meditate 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      minHeight: {
        edu: "30rem",
      },
      maxWidth: {
        "8xl": "90rem",
        uum: "15rem",
      },
    },
  },
  plugins: [],
};
