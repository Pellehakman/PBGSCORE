/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],

  theme: {
    extend: {
      screens: {
        "sm-min": "640px",
        // => @media (min-width: 640px) { ... }

        "lg-min": "1024px",
        // => @media (min-width: 1024px) { ... }

        "xl-min": "1280px",
        // => @media (min-width: 1280px) { ... }

        "xl-max": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-max": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "sm-max": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        primary: "var(--primary)",
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",

        borderColor: "var(--borderColor)",
        inputDark: "var(--inputDark)",

        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        menuPrimary: "var(--bg-menu-primary)",
        menuSecondary: "var(--bg-menu-secondary)",
      },
      fontFamily: {
        bebas: ["var(--ff-bebas)"],
        open: ["var(--ff-open)"],
      },
    },
  },
  plugins: [],
};
