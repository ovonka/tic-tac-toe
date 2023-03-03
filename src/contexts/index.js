import React from "react";
import { GameContextProvider } from "./GameContext";
import { ThemeContextProvider } from "./ThemeContext";

function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
