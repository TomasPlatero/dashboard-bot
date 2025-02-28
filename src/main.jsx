import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext"; // ✅ Importa AuthProvider
import { ThemeProviderWrapper } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Envuelve toda la app con AuthProvider */}
      <ThemeProviderWrapper>
        <CssBaseline />
        <App />
      </ThemeProviderWrapper>
    </AuthProvider>
  </StrictMode>
);
