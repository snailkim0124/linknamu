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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      boxShadow: {
        avatar:
          "0 12px 28px -8px rgba(120, 72, 40, 0.35), 0 2px 6px rgba(120, 72, 40, 0.15), inset 0 1px 1px rgba(255,255,255,0.6)",
        card: "0 8px 24px -12px rgba(120, 72, 40, 0.25)",
        "card-hover": "0 12px 28px -10px rgba(120, 72, 40, 0.32)",
      },
    },
  },
  plugins: [],
};
export default config;
