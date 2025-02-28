import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper, CircularProgress, Toolbar, Grid2 } from "@mui/material";
import Sidebar from "../components/Sidebar";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { AuthContext } from "../context/AuthContext";

const MyGroups = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación automáticamente
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.userId) {
      fetchGroups();
    }
  }, [user]);

  const fetchGroups = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/groups/mine", {
        credentials: "include", // 🔹 Enviar cookies al backend
      });
      const data = await response.json();

      if (response.ok) {
        setGroups(data || []);
      } else {
        console.error("❌ Error obteniendo mis grupos:", data.error);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Sidebar />
      <Toolbar />
      <Typography variant="h4" gutterBottom>Mis Grupos</Typography>
      {loading ? (
        <CircularProgress />
      ) : groups.length > 0 ? (
        <Grid2 container spacing={3}>
          {groups.map((group) => (
            <Grid2 item key={group.id} xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <Typography variant="h6">{group.name}</Typography>
                <Typography variant="body1">{group.description}</Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography>No tienes grupos creados.</Typography>
      )}
    </Container>
  );
};

export default MyGroups;