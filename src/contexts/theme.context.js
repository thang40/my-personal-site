import React from "react";
export const THEMES = {
  DARK: "dark",
  LIGHT: "light"
};

export const themeContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {}
});
