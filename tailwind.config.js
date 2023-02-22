/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],

  theme: {
    extend: {
      lineHeight: {
        zero: "0",
      },
      screens: {
        "sm-min": "640px",
        // => @media (min-width: 640px) { ... }

        "md-min": "768px",
        // => @media (min-width: 768px) { ... }

        "lg-min": "1024px",
        // => @media (min-width: 1024px) { ... }

        "xl-min": "1280px",
        // => @media (min-width: 1280px) { ... }

        "sm-max": { max: "639px" },
        // => @media (max-width: 639px) { ... }

        "md-max": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "lg-max": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "xl-max": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
      },
      colors: {
        primary: "var(--primary)",
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        monestral: "var(--monestral)",

        borderColor: "var(--borderColor)",
        input: "var(--input)",

        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",
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
      backgroundImage: {
        pubg: "url('/src/assets/PUBG.png')",
      },
    },
  },
  plugins: [],
};
