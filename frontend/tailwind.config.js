const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      safelist: ["ml-3",
      "bg-green-400", "bg-blue-400", "bg-red-400", "bg-blue-500", "bg-yellow-400", "bg-blue-300", "bg-pink-300", "bg-purple-500", "bg-yellow-500", "bg-purple-400", "bg-yellow-200", "text-green-400", "text-blue-400", "text-red-400", "text-blue-500", "text-yellow-400", "text-blue-300", "text-pink-300", "text-purple-500", "text-yellow-500", "text-purple-400", "text-yellow-200"
      ], // ml-3 for toc depth // colors were generated from a function in /src/utils/colors
    },
  },
  theme: {
    extend: {
      margin: {
        "-72": "-18rem",
        "-80": "-20rem",
        "-84": "-21rem",
        "-88": "-22rem",
        "-96": "-24rem",
        "-120": "-30rem",
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundColor: {
        accent: "var(--color-bg-accent)",
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        hover: {
          accent: "var(--color-bg-accent-hover)",
        },
      },
      textColor: {
        white: "#fff",
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        on: {
          accent: "var(--color-text-on-accent)",
        },
        fill: {
          primary: "var(--color-fill-primary)",
          secondary: "var(--color-fill-secondary)",
        },
      },
      divideColor: {
        subtle: "var(--color-bg-secondary)",
      },
      borderColor: {
        accent: "var(--color-text-accent)",
      },
      letterSpacing: {
        widestest: "0.2em",
      },
      opacity: {
        90: ".9",
      },
    },
    typography: {
      default: {
        css: {
          color: "var(--color-text-tertiary)",
          a: {
            color: "var(--color-text-tertiary)",
            "&:hover": {
              color: "var(--color-text-accent)",
            },
          },
          h1: {
            color: "var(--color-text-primary)",
          },
          h2: {
            color: "var(--color-text-accent)",
          },
          h3: {
            color: "var(--color-text-accent)",
          },
          h4: {
            color: "var(--color-text-accent)",
          },
          blockquote: {
            color: "var(--color-text-tertiary)",
          },
          strong: {
            color: "var(--color-text-tertiary)",
          },
          blockquote: {
            borderLeftWidth: "0.25rem",
            borderLeftColor: "var(--color-text-accent)",
          },
          "blockquote p:first-of-type::before": {
            content: "",
          },
          "blockquote p:last-of-type::after": {
            content: "",
          },
          code: {
            color: "var(--color-text-tertiary)",
            fontWeight: "500",
          },
          "code::before": {
            content: "",
          },
          "code::after": {
            content: "",
          },
        },
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.emerald
    }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
}
