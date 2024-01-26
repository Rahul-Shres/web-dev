// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "custom-theme": {
          colors: {
            // background: "#3a86ff",
            // foreground: "#ffffff",
            primary: {
              DEFAULT: "#1022e5",
              foreground: "#E8F9FD",
            },
          },
          layout: {
            width: {
              default: "10/12",
            },
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
