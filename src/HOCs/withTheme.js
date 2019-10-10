import React, { useContext } from "react";
import { themeContext } from "../contexts";

export const withTheme = Comp => {
  const { theme, toggleTheme } = useContext(themeContext);
  return <Comp theme={theme} changeTheme={toggleTheme} />;
};
