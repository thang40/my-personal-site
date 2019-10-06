import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

export const withTheme = Comp => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <Comp theme={theme} changeTheme={toggleTheme} />;
};
