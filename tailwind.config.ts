import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto"
      },
      borderWidth: {
        '10': '10px'
      },
      maxHeight: {
        '2000': '2000px'
      }
    },
  },
  plugins: [],
} satisfies Config;
