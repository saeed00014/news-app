import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        moon: "#f1f5f9",
        grass: "rgb(12, 209, 127)",
        ship: "rgb(255, 255, 255)",
        ash: "#94a3b8",
        blood: "#dc2626",
      },
    },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "960px",
      xl: "1280px",
    },
  },
};
export default config;
