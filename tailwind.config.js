const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./**/*.js"],
  theme: {
    colors: {
      brand: colors.yellow[500],
      gray: colors.gray,
      twitter: "#1DA1F2",
      strava: "#fc4c02",
      komoot: "#9cde4e",
    },
    fontFamily: {
      serif: ["Noto Serif", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
