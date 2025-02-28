import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper, Button, CircularProgress, TextField, MenuItem, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { AuthContext } from "../context/AuthContext";

const mazmorras = [
  "Grieta de Flama Oscura",
  "Lagar de Tragoceniza",
  "Priorato de la Llama Sagrada",
  "El Grajero",
  "Operación: Compuerta (Nueva mazmorra)",
  "Teatro del Dolor",
  "Veta Madre",
  "Operación Mecandria: Taller"
];

const nivelesMíticas = Array.from({ length: 20 }, (_, i) => i + 1);
const indicesMíticas = Array.from({ length: 21 }, (_, i) => i * 200);

const CreateGroup = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación automáticamente
  const { user } = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dungeon, setDungeon] = useState(mazmorras[0]);
  const [level, setLevel] = useState(2);
  const [mythicIndex, setMythicIndex] = useState(200);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.userId) {
      fetchCharacters(user.userId);
    }
  }, [user]);

  const fetchCharacters = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/characters/user/${userId}`, {
        credentials: "include", // 🔹 Enviar cookies al backend
      });

      const data = await response.json();
      if (response.ok) {
        setCharacters(data || []);
        if (data.length > 0) {
          setSelectedCharacter(data[0].id);
        }
      } else {
        console.error("❌ Error obteniendo personajes:", data.error);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  const createGroup = async () => {
    if (!dungeon || !level || !mythicIndex || !selectedCharacter) return;

    try {
      const response = await fetch("http://localhost:3000/api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userId: user.userId,
          dungeon,
          level,
          mythicIndex,
          characterId: selectedCharacter
        }),
      });

      if (response.ok) {
        navigate("/dashboard");
      } else {
        console.error("❌ Error creando grupo:", await response.json());
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Container maxWidth="md">
        <Toolbar />
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center", mt: 3 }}>
          <Typography variant="h5">Crear Grupo</Typography>
          <TextField select fullWidth label="Mazmorra" value={dungeon} onChange={(e) => setDungeon(e.target.value)} sx={{ mt: 2 }}>
            {mazmorras.map((m) => (
              <MenuItem key={m} value={m}>{m}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Nivel de la Mazmorra" value={level} onChange={(e) => setLevel(parseInt(e.target.value))} sx={{ mt: 2 }}>
            {nivelesMíticas.map((lvl) => (
              <MenuItem key={lvl} value={lvl}>{lvl}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Índice de Mítica" value={mythicIndex} onChange={(e) => setMythicIndex(parseInt(e.target.value))} sx={{ mt: 2 }}>
            {indicesMíticas.map((index) => (
              <MenuItem key={index} value={index}>{index}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Seleccionar Personaje" value={selectedCharacter} onChange={(e) => setSelectedCharacter(e.target.value)} sx={{ mt: 2 }}>
            {characters.length > 0 ? (
              characters.map((char) => (
                <MenuItem key={char.id} value={char.id}>{char.name} - {char.class} (iLvl {char.ilvl})</MenuItem>
              ))
            ) : (
              <MenuItem disabled>No hay personajes disponibles</MenuItem>
            )}
          </TextField>
          {loading ? (
            <CircularProgress sx={{ mt: 3 }} />
          ) : (
            <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={createGroup}>Crear Grupo</Button>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default CreateGroup;
