import React, { useContext, useState } from "react";

//type definition
type typeDef = {
  isDark: boolean;
  setTheme: () => void;
};

const ThemeContext = React.createContext<typeDef>({
  isDark: false,
  setTheme: () => {},
});

const ThemeContextProvider: React.FC = (props) => {
  //1. Set up state
  const [isDark, setIsDark] = useState(false);

  //2. Function to handle theme state
  const themeToggleHandler = () => {
    setIsDark((prevState) => !prevState);
  };
  //3. Prepare context value
  const themeContextValue: typeDef = {
    isDark: isDark,
    setTheme: themeToggleHandler,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeCtx = () => {
  return useContext(ThemeContext);
};
export default ThemeContextProvider;
