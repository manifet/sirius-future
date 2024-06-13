/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      circe: '"Circe Rounded", sans-serif',
    },
    extend: {
      colors: {
        323854: "#323854",
        ECECEC: "ECECEC",
        C8C5CD: "#C8C5CD",
        "79747F": "#79747F",
        "8D7FC7": "#8D7FC7",
        "008AFF": "#008AFF",
        "7362BC": "#7362BC",
      },
    },
  },
  plugins: [],
};
