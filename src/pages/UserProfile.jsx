import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper, CircularProgress, Toolbar, Button, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación automáticamente
  const { user, checkAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const refreshBattleNet = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/refresh-bnet", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        console.log("✅ Battle.net refrescado.");
        checkAuth(); // 🔄 Recargar los datos del usuario
      } else {
        console.error("❌ Error refrescando Battle.net.");
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    }
  };

  const unlinkBattleNet = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/unlink-bnet", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        console.log("✅ Battle.net desvinculado.");
        checkAuth(); // 🔄 Recargar los datos del usuario
      } else {
        console.error("❌ Error al desvincular Battle.net.");
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    }
  };

  const linkBattleNet = () => {
    window.location.href = "http://localhost:3000/api/auth/battle-net";
  };

  return (
    <Container maxWidth="md">
      <Sidebar />
      <Toolbar />
      <Typography variant="h4" gutterBottom>Mi Perfil</Typography>
      {loading ? (
        <CircularProgress />
      ) : user ? (
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h6">Usuario: {user.username}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Battle.net: {user.battleNetId ? "✅ Vinculado" : "❌ No vinculado"}
            </Typography>
            {user.battleNetId ? (
              <>
                <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }} onClick={refreshBattleNet}>
                  🔄 Refrescar
                </Button>
                <Button variant="contained" color="error" size="small" onClick={unlinkBattleNet}>
                  ❌ Desvincular
                </Button>
              </>
            ) : (
              <Button variant="contained" color="primary" size="small" onClick={linkBattleNet}>
                🔗 Vincular Battle.net
              </Button>
            )}
          </Box>
        </Paper>
      ) : (
        <Typography>No se pudo cargar la información del usuario.</Typography>
      )}
    </Container>
  );
};

export default UserProfile;
