import { Container, Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a Asistente Dashboard
        </Typography>
        <Typography variant="body1">
          Por favor, inicia sesión para continuar.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
