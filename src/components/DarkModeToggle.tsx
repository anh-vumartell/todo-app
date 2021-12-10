import React from "react";
import { useThemeCtx } from "../store/theme-context";
import "../styles/components/_darkModeToggle.scss";

const DarkModeToggle: React.FC = () => {
  const { isDark, setTheme } = useThemeCtx();
  const themeChangeHandler = () => {
    setTheme();
  };
  console.log(isDark);

  return (
    <div className="theme-toggle__container">
      <input
        checked={isDark}
        onChange={themeChangeHandler}
        type="checkbox"
        className="theme-toggle__checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
      />
      <label className="theme-toggle__label" htmlFor="toggleSwitch">
        <span className="theme-toggle__track"></span>
        <span className="theme-toggle__switch"></span>
      </label>
    </div>
  );
};
export default DarkModeToggle;
