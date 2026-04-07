const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        brand: {
          50: "#eef8ff",
          100: "#d8eeff",
          200: "#b6deff",
          300: "#84c8ff",
          400: "#4aa8ff",
          500: "#1f85ff",
          600: "#1267db",
          700: "#1352b1",
          800: "#15458e",
          900: "#163b74",
        },
        accent: {
          400: "#6ef2d3",
          500: "#38d9b8",
          600: "#1db39b",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148, 163, 184, 0.1), 0 24px 80px rgba(15, 23, 42, 0.45)",
        brand: "0 20px 60px rgba(31, 133, 255, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(31, 133, 255, 0.22), transparent 42%), radial-gradient(circle at 80% 20%, rgba(56, 217, 184, 0.14), transparent 26%)",
      },
    },
  },
  plugins: [],
};
