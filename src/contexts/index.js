import React from "react";
import { ThemeContextProvider } from "./ThemeContext";

function Provider({ children }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}

export default Provider;
