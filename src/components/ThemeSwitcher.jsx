import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button, Menu, MenuItem } from "@mui/material";

const ThemeSwitcher = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleMenuOpen} color="inherit">
        {themeMode === "dark" ? "🌙" : themeMode === "light" ? "☀️" : "🟡"} Cambiar Tema
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => { setThemeMode("dark"); handleMenuClose(); }}>🌙 Modo Oscuro</MenuItem>
        <MenuItem onClick={() => { setThemeMode("light"); handleMenuClose(); }}>☀️ Modo Claro</MenuItem>
        <MenuItem onClick={() => { setThemeMode("highContrast"); handleMenuClose(); }}>🟡 Alto Contraste</MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
