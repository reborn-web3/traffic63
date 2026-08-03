import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-dark": "var(--paper-dark)",
        "line-blue": "var(--line-blue)",
        "line-blue-light": "var(--line-blue-light)",
        "ink-blue": "var(--ink-blue)",
        "ink-dark": "var(--ink-dark)",
        pencil: "var(--pencil)",
        coral: "var(--coral)",
        "coral-light": "var(--coral-light)",
        "coral-dark": "var(--coral-dark)",
        mint: "var(--mint)",
        "mint-light": "var(--mint-light)",
        lavender: "var(--lavender)",
        "lavender-light": "var(--lavender-light)",
        yellow: "var(--yellow)",
        "yellow-light": "var(--yellow-light)",
        "red-margin": "var(--red-margin)",
      },
      fontFamily: {
        handwritten: ["var(--font-handwritten)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      spacing: {
        "1.25": "5px", // For burger menu span gap
      },
      borderWidth: {
        "1": "1px", // For custom dashed borders
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scribble: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        drawLine: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out infinite 0.5s",
        "float-slow": "float 5s ease-in-out infinite 1s",
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".section-padding": {
          paddingTop: theme("spacing.20"), // 80px
          paddingBottom: theme("spacing.20"), // 80px
          "@media (min-width: 768px)": {
            paddingTop: theme("spacing.24"), // 96px
            paddingBottom: theme("spacing.24"), // 96px
          },
          "@media (min-width: 1024px)": {
            paddingTop: theme("spacing.28"), // 112px
            paddingBottom: theme("spacing.28"), // 112px
          },
        },
      });

      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 20px",
          "@media (min-width: 768px)": {
            padding: "0 40px",
          },
        },
        ".section-label": {
          fontFamily: theme("fontFamily.handwritten"),
          fontSize: "1.3rem",
          color: theme("colors.coral"),
          marginBottom: theme("spacing.2"), // 8px
          display: "block",
        },
        ".section-title": {
          fontFamily: theme("fontFamily.heading"),
          fontSize: "2.6rem",
          fontWeight: theme("fontWeight.extrabold"),
          color: theme("colors.ink-dark"),
          marginBottom: theme("spacing.5"), // 20px
          lineHeight: "1.25",
        },
        ".section-subtitle": {
          fontSize: "1.1rem",
          color: theme("colors.pencil"),
          maxWidth: "600px",
          marginBottom: theme("spacing.15"), // 60px
          lineHeight: "1.7",
        },
        ".reveal": {
          opacity: "0",
          transform: "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          "&.visible": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      });
    }),
  ],
};

export default config;
