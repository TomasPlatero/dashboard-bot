'use client'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function Login() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )  const router = useRouter()

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'discord' })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button onClick={login} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
        Iniciar sesión con Discord
      </button>
    </div>
  )
}
