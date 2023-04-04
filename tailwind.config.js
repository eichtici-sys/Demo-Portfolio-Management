/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary1: "#ff6801",
        primary2: "#ffbc00",
        secondary: "#a0a0a0",
        darkText: "#1e1e1e",
        darkP: "#404040",
        lightBody: "#f2f3f3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        boxMenu: "0 -1px 4px rgba(0,0,0, 0.15)",
        boxSidebar: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      borderRadius: {
        oTop: "1.5rem 1.5rem 0 0",
      },
      borderColor: {
        rgba: "rgba(255,255,255,0.18)",
      },
      keyframes: {
        spinLoad: {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(1.0);",
          },
        },
      },
      backgroundSize: {
        "55%": "55%",
        sizeBG: "auto 600px",
      },
      backgroundPosition: {
        mobilePos: "right 3% top 25%;",
      },
      animation: {
        spinLoad: "spinLoad 1.4s infinite ease-in-out both",
      },
    },
    screens: {
      xxs: "350px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xm: "890px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      32: "-0.32s",
      16: "-0.16s",
    },
  },
  variants: {
    animationDelay: ["responsive", "hover"],
  },
  plugins: [require("tailwindcss-animation-delay")],
};
