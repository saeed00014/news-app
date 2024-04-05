import React from "react";
import { useTheme } from "next-themes";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <FaLightbulb /> : <FaRegLightbulb />}
    </button>
  );
};

export default ThemeSwitcher;
