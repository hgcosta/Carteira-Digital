import React, { createContext, useState, useContext } from "react";

import dark from "../pages/styles/themes/dark";
import light from "../pages/styles/themes/light";

import ChildrenProps from "../utils/interfaceChildren";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secundary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    sucess: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(dark);
  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
