"use client";
import { useRouter } from "next/navigation";
import { Supabase } from "../lib/supabase";

export default function Login() {
  const router = useRouter();

  const login = async () => {
    try {
      await Supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
          redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL,
        },
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión. Intenta de nuevo.");
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={login}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
      >
        Iniciar sesión con Discord
      </button>
    </div>
  );
}
