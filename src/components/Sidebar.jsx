import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, CssBaseline, Box, Toolbar } from "@mui/material";
import routes from "../routes";
import ThemeSwitcher from "./ThemeSwitcher";
import SidebarLogo from "./SidebarLogo";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Función para eliminar cookies de sesión
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // 🔹 Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token de sesión en localStorage
    deleteCookie("token"); // 🔹 Borra la cookie de sesión (ajusta el nombre si es diferente)
    navigate("/"); // Redirige a la home
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "background.default",
            color: "text.primary",
          },
        }}
      >
      
        {/* 🔹 Logo centrado en el sidebar */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <SidebarLogo />
        </Box>

        <List sx={{ mt: 2 }}>
          {routes.map((route) => (
            <ListItem
              key={route.path}
              component={Link}
              to={route.path}
              selected={location.pathname === route.path}
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: location.pathname === route.path ? "primary.light" : "transparent",
                "&:hover": { bgcolor: "primary.main", color: "white" },
              }}
            >
              <ListItemText primary={route.name} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}

          {/* 🔹 Botón de cambio de tema */}
          <ListItem sx={{ mt: 2, textAlign: "center" }}>
            <ThemeSwitcher />
          </ListItem>

          {/* 🔹 Botón de cerrar sesión */}
          <ListItem
            component="button"
            onClick={handleLogout} // Llamamos a la función `handleLogout`
            sx={{
              bgcolor: "error.main",
              color: "white",
              mt: 2,
              textAlign: "center",
              "&:hover": { bgcolor: "error.dark" },
            }}
          >
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
