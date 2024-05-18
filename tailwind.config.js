/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#080a0b",
        "custom-gray": "#f0f0f0",
        "custom-gray-light": "#5d5d5b",
        "custom-black": "#030303",
        "pink-600": "#f10574",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      lineHeight: {
        "custom-line-height": "22px",
        28: "28px",
        21: "21px",
        42: "42px",
        6: "24px",
        22: "22px",
      },
      boxShadow: {
        custom: "0px 2px 10px rgba(3, 3, 3, 0.1)",
      },
    },
  },
  plugins: [],
};
