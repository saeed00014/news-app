import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/**"],
  theme: {
    extend: {
      colors: {
        moon: "#f1f5f9",
        grass: "rgb(12, 209, 127)",
        darkgrass: "#4d7c0f",
        ship: "rgb(255, 255, 255)",
        dark: "rgb(0, 0, 0)",
        ash: "#94a3b8",
        blood: "#dc2626",
        lightblood: "#f87171",
        sun: "#fbbf24",
        water: "#22d3ee",
        darkwater: "#0e7490",
      },
      backgroundImage: {
        ashImage:
          "linear-gradient(to top, rgba(0, 0, 0, .5), rgba(255, 255, 255, 0))",
      },
      boxShadow: {
        dark: "0px 0px 10px 10px",
      },
      keyframes: {
        move: {
          "0%": {left: "100%"},
          "100%": {left: "0"}
        },
      },
    },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "960px",
      xl: "1280px",
      xxl: "1780px",
    },
  },
};
export default config;
