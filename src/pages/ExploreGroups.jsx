import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper, Grid, CircularProgress, Button, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { AuthContext } from "../context/AuthContext";

const ExploreGroups = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación automáticamente
  const { user } = useContext(AuthContext);
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllGroups();
  }, []);

  const fetchAllGroups = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/groups", {
        credentials: "include", // 🔹 Enviar cookies al backend
      });
      const data = await response.json();

      if (response.ok) {
        setAllGroups(data || []);
      } else {
        console.error("❌ Error obteniendo grupos:", data.error);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  const joinGroup = async (groupId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/groups/join/${groupId}`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        alert("✅ Te has unido al grupo con éxito.");
        fetchAllGroups();
      } else {
        console.error("❌ Error al unirse al grupo:", await response.json());
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Sidebar />
      <Toolbar />
      <Typography variant="h4" gutterBottom>Explorar Grupos</Typography>
      {loading ? (
        <CircularProgress />
      ) : allGroups.length > 0 ? (
        <Grid container spacing={3}>
          {allGroups.map((group) => (
            <Grid item key={group.id} xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <Typography variant="h6">{group.name}</Typography>
                <Typography variant="body1">{group.description}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => joinGroup(group.id)}>
                  Unirse al grupo
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No hay grupos disponibles.</Typography>
      )}
    </Container>
  );
};

export default ExploreGroups;
