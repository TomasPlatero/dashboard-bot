import { Container, Typography, Paper, Grid2 } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>

      <Grid2 container spacing={3}>
        {/* Tarjeta 1 */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Resumen</Typography>
            <Typography variant="body1">Aquí irá el contenido del resumen.</Typography>
          </Paper>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid2 item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Estadísticas</Typography>
            <Typography variant="body1">Datos estadísticos aquí.</Typography>
          </Paper>
        </Grid2>

        {/* Tarjeta 3 */}
        <Grid2 item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Configuraciones</Typography>
            <Typography variant="body1">Acceso a configuraciones.</Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Dashboard;