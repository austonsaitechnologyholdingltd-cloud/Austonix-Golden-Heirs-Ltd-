import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070708",
        surface: "#0f0f11",
        card: "#141416",
        border: "#232328",
        muted: "#9ca3af",
        gold: {
          DEFAULT: "#c9a227",
          light: "#e0b93a",
          dark: "#a6851e",
          muted: "rgba(201, 162, 39, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;