import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) {
    console.error("❌ Error: AuthContext es null. ¿Está AuthProvider envolviendo la app?");
    return;
  }

  const { user, loading } = auth;

  useEffect(() => {
    if (!loading && !user) {
      console.log("🔄 Redirigiendo a la página de inicio...");
      navigate("/");
    }
  }, [loading, user, navigate]);
};

export default useAuthRedirect;
