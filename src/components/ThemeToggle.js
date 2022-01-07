import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isLightTheme, toggleThemeHandler } = useContext(ThemeContext);
  return (
    <button onClick={toggleThemeHandler}>
      {isLightTheme ? "Black Theme" : "White Theme"}
    </button>
  );
}
