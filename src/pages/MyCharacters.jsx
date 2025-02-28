import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper, CircularProgress, Toolbar, List, ListItem, ListItemText, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { AuthContext } from "../context/AuthContext";

const MyCharacters = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación automáticamente
  const { user } = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.userId) {
      fetchCharacters(user.userId);
    }
  }, [user]);

  const fetchCharacters = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/characters/user/${userId}`, {
        method: "GET",
        credentials: "include", // 🔹 Permite el uso de cookies HTTP-only
      });

      if (!response.ok) {
        console.error("❌ No autorizado o error al obtener personajes.");
        setCharacters([]);
      } else {
        const data = await response.json();
        setCharacters(data);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Sidebar />
      <Toolbar />
      <Typography variant="h4" gutterBottom>Mis Personajes</Typography>
      {loading ? (
        <CircularProgress />
      ) : characters.length > 0 ? (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <List>
            {characters.map((char) => (
              <ListItem key={char.id} secondaryAction={
                <Button variant="contained" color="secondary" size="small">
                  Actualizar
                </Button>
              }>
                <ListItemText
                  primary={`${char.name} - ${char.realm} (${char.region.toUpperCase()})`}
                  secondary={`Clase: ${char.class} | Ilvl: ${char.ilvl} | M+ Score: ${char.mythicScore}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography>No tienes personajes vinculados.</Typography>
      )}
    </Container>
  );
};

export default MyCharacters;