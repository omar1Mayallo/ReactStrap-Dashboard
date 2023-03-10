import React, {createContext, useState} from "react";

//Context
const ThemeContext = createContext();

//Themes
export const themeList = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};
export const lightTheme = themeList.LIGHT;
export const darkTheme = themeList.DARK;

//Provider
export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = (theme) => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
