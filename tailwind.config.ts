import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        notion: {
          bg: "#ffffff",
          "bg-secondary": "#f7f6f3",
          "bg-hover": "#efefef",
          text: "#37352f",
          "text-secondary": "#787774",
          border: "#e3e2de",
          accent: "#2eaadc",
          red: "#e16259",
          orange: "#d9730d",
          yellow: "#dfab01",
          green: "#0f7b6c",
          blue: "#2eaadc",
          purple: "#6940a5",
          pink: "#ad1a72",
        },
      },
    },
  },
  plugins: [],
};

export default config;
