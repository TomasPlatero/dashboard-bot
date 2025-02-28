/** @jsxImportSource @emotion/react */
import { styled } from "@mui/material/styles";
import Sidebar from "../components/Sidebar";
import { Box, Toolbar, Typography, Paper, CircularProgress } from "@mui/material";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// 🔹 Estiliza el contenedor principal con el tema
const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));

// 🔹 Estiliza el área principal del contenido
const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// 🔹 Estiliza la tarjeta del Dashboard
const DashboardCard = styled(Paper)(({ theme }) => ({
  width: "80%",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: "center",
}));

const Dashboard = () => {
  useAuthRedirect(); // 🔹 Maneja autenticación y redirección automáticamente
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <DashboardContainer>
        <Sidebar />
        <Content>
          <CircularProgress />
        </Content>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Toolbar />
        <DashboardCard>
          <Typography variant="h3" color="primary" gutterBottom>
            Bienvenido al Dashboard, {user?.username}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Aquí puedes gestionar tus datos y ver estadísticas.
          </Typography>
        </DashboardCard>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
