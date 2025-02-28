import { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import themes from "../themes"; // 🔹 Importamos todos los temas

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark"); // 🔹 Modo predeterminado

  // 🔹 Obtiene el tema actual basado en el estado
  const theme = useMemo(() => themes[themeMode] || themes.dark, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
