import { createTheme } from "@mui/material/styles";

const HighContrastTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffcc00" }, // Amarillo fuerte
    secondary: { main: "#ff3300" }, // Rojo fuerte
    background: { default: "#000000", paper: "#222222" },
    text: { primary: "#ffffff", secondary: "#ffcc00" },
  },
  typography: { fontFamily: "'Arial Black', sans-serif" },
});

export default HighContrastTheme;
