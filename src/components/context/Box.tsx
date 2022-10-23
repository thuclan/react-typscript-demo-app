import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Box() {
  const theme = useContext(ThemeContext);
  //   console.log("theme :>> ", theme);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Box
    </div>
  );
}

export default Box;
