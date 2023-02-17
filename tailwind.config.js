/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],

  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        "xl-m": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-m": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "sm-m": { max: "639px" },
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
