'use client'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Login() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'discord' })
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <button onClick={login}>Iniciar sesión con Discord</button>
    </div>
  )
}
