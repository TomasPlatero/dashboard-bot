import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/me`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo datos del usuario:", error);
    return null;
  }
};
