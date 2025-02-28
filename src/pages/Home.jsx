import useAuthRedirect from "../hooks/useAuthRedirect";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Typography, Paper, Button } from "@mui/material";

const Home = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación y redirección automáticamente
  const { login } = useContext(AuthContext);

  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center", width: "100%", maxWidth: "500px" }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a Asistente Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para comenzar, inicia sesión con Discord.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={login}>
          Iniciar sesión con Discord
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;