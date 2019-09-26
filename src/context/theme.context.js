import React from "react";
export const THEMES = {
  DARK: "dark",
  LIGHT: "light"
};

export const ThemeContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {}
});
