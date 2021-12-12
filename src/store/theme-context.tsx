import React, { useContext, useState } from "react";

//type definition
type typeDef = {
  isToggle: boolean;
  setToggle: () => void;
};

const ThemeContext = React.createContext<typeDef>({
  isToggle: false,
  setToggle: () => {},
});

const ThemeContextProvider: React.FC = (props) => {
  //1. Set up state
  const [isToggle, setToggle] = useState(false);

  //2. Function to handle theme state
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  //3. Prepare context value
  const themeContextValue: typeDef = {
    isToggle: isToggle,
    setToggle: toggleHandler,
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
