import React, { useEffect, useState } from "react";
import { useThemeCtx } from "../store/theme-context";
import "../styles/components/_darkModeToggle.scss";
import { setTheme } from "../utils/themes";
const DarkModeToggle: React.FC = () => {
  const { isToggle, setToggle } = useThemeCtx();
  const [isDark, setIsDark] = useState(false);
  const changeHandler = () => {
    setToggle();
    setIsDark((prevState) => !prevState);
    !isDark ? setTheme("theme-dark") : setTheme("theme-light");
    console.log(document.documentElement.className);
  };
  console.log(isToggle);
  console.log(isDark);
  useEffect(() => {
    setTheme("theme-light");
    console.log(document.documentElement.className);
  }, []);
  return (
    <div className="theme-toggle__container">
      <input
        checked={isToggle}
        onChange={changeHandler}
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
