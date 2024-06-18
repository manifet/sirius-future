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
        EEEEFF: "#EEEEFF",
        FDFDFF: "#FDFDFF",
        D8ECFF: "#D8ECFF",
        "434B74": "#434B74",
        "E84849": "#E84849",
      },
      boxShadow: {
        header:
          "0 2px 4px rgba(143, 143, 183, 0.07), " +
          "0 7px 7px rgba(143, 143, 183, 0.06), " +
          "0 15px 9px rgba(143, 143, 183, 0.04), " +
          "0 27px 11px rgba(143, 143, 183, 0.01), " +
          "0 42px 12px rgba(143, 143, 183, 0)",
      },
    },
  },
  plugins: [],
};
