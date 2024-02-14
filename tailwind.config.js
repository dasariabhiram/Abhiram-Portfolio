/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        black: "#000",
        silver: "#bcc1ca",
        white: "#fff",
        indianred: "#e05858",
        darkslategray: "#323842",
        dimgray: "#595e69",

      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        epilogue: "Epilogue",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      fontSize: {
        sm: "14px",
        xl: "20px",
        base: "16px",
        "47xl": "66px",
        "21xl": "40px",
        "34xl": "53px",
        inherit: "inherit",
      },
      screens: {
        xs: "450px",
        lg: {
          max: "1200px",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
