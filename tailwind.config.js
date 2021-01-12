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
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              "text-decoration": "none",
              "border-bottom": `2px solid ${theme("colors.brand")}`,
              "&:hover": {
                color: theme("colors.brand"),
              },
            },
            h1: {
              color: theme("colors.gray.700"),
            },
            h2: {
              color: theme("colors.gray.700"),
            },
            h3: {
              color: theme("colors.gray.700"),
            },
            h4: {
              color: theme("colors.gray.700"),
            },
            h5: {
              color: theme("colors.gray.700"),
            },
            h6: {
              color: theme("colors.gray.700"),
            },
            strong: {
              color: theme("colors.gray.700"),
            },
            thead: {
              color: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
