/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        note: "var(--note)",
        quiet: "var(--quiet)",
        rule: "var(--rule)",
      },
      fontFamily: {
        sans: ['"Martian Grotesk"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "68rem",
      },
    },
  },
  plugins: [],
};
