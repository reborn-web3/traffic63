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
        paper: "var(--color-paper)",
        "paper-dark": "var(--color-paper-dark)",
        "line-blue": "var(--color-line-blue)",
        "line-blue-light": "var(--color-line-blue-light)",
        "ink-blue": "var(--color-ink-blue)",
        "ink-dark": "var(--color-ink-dark)",
        pencil: "var(--color-pencil)",
        coral: "var(--color-coral)",
        "coral-light": "var(--color-coral-light)",
        "coral-dark": "var(--color-coral-dark)",
        mint: "var(--color-mint)",
        "mint-light": "var(--color-mint-light)",
        lavender: "var(--color-lavender)",
        "lavender-light": "var(--color-lavender-light)",
        yellow: "var(--color-yellow)",
        "yellow-light": "var(--color-yellow-light)",
        "red-margin": "var(--color-red-margin)",
      },
      fontFamily: {
        handwritten: ["var(--font-handwritten)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      borderRadius: {
        notebook: "var(--radius-notebook)",
        "notebook-sm": "var(--radius-notebook-sm)",
        "notebook-lg": "var(--radius-notebook-lg)",
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
          "@screen md": {
            paddingTop: theme("spacing.24"), // 96px
            paddingBottom: theme("spacing.24"), // 96px
          },
          "@screen lg": {
            paddingTop: theme("spacing.28"), // 112px
            paddingBottom: theme("spacing.28"), // 112px
          },
        },
      });

      addComponents({
        ".container": {
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          "@screen md": {
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
