import { createTheme } from "@mui/material/styles";

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#b0bec5" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    allVariants: {
      color: "#ffffff", // 🔹 Hace que todo el texto sea blanco por defecto
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff", // 🔹 Blanco por defecto
          textDecoration: "none",
          "&:hover": {
            color: "#90caf9", // 🔹 Azul claro al pasar el ratón
          },
          "&.active": {
            color: "#64b5f6", // 🔹 Azul más claro cuando está activo
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

export default DarkTheme;
