import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Verifica sesión con el backend
  const checkAuth = useCallback(async () => {
    console.log("🔍 Verificando sesión...");

    try {
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true, // 🔹 Envía cookies automáticamente
      });

      if (response.status === 200) {
        console.log("✅ Usuario autenticado", response.data);
        setUser(response.data);
      } else {
        console.warn("❌ No hay sesión activa.");
        setUser(null);
      }
    } catch (error) {
      console.error("🚨 Error verificando sesión:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // 🔹 Login con Discord
  const login = () => {
    window.location.href = "http://localhost:3000/api/auth/discord"; // 🔹 Redirige al backend para autenticar con Discord
  };

  // 🔹 Login con Battle.net para sincronizar personajes
  const syncBattleNet = () => {
    window.location.href = "http://localhost:3000/api/auth/battle-net"; // 🔹 Redirige al backend para autenticación con Battle.net
  };

  // 🔹 Logout con el backend
  const logout = async () => {
    console.log("🚪 Cierre de sesión...");

    try {
      await axios.post("http://localhost:3000/api/auth/logout", {}, {
        withCredentials: true, // 🔹 Se asegura de que el backend borre la cookie
      });

      setUser(null);
    } catch (error) {
      console.error("🚨 Error en logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, syncBattleNet, logout, checkAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
