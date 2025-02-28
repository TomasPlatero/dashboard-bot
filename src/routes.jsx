import Dashboard from "./pages/dashboard";
import User from "./pages/UserProfile";
import CreateGroup from "./pages/CreateGroup";
import MyGroups from "./pages/MyGroups";
import ExploreGroups from "./pages/ExploreGroups";
import Characters from "./pages/MyCharacters"; // 🔹 Nueva página de personajes
import { Box } from "@mui/material";

// 🔹 Componente para los iconos de Material Symbols
const MaterialIcon = ({ name, size = 24, color = "inherit", weight = "400" }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: size,
      color: color,
      fontVariationSettings: `'wght' ${weight}`,
      verticalAlign: "middle",
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    {name}
  </span>
);

// 🔹 Array con todas las rutas y su orden en el menú con Material Symbols
const routes = [
  { path: "/dashboard", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="home" /> Inicio</Box>, component: Dashboard, order: 1 },
  { path: "/user", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="person" /> Mi Usuario</Box>, component: User, order: 2 },
  { path: "/create-group", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="shield" /> Crear Grupo</Box>, component: CreateGroup, order: 3 },
  { path: "/my-groups", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="groups" /> Mis Grupos</Box>, component: MyGroups, order: 4 },
  { path: "/explore-groups", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="search" /> Explorar Grupos</Box>, component: ExploreGroups, order: 5 },
  { path: "/characters", name: <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><MaterialIcon name="sports_esports" /> Mis Personajes</Box>, component: Characters, order: 6 }, // 🔹 Nueva ruta
];

// 🔹 Exportamos ordenado por `order`
export default routes.sort((a, b) => a.order - b.order);
