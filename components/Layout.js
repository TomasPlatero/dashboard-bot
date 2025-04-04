'use client'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import UserSettings from './UserSettings'
import RankMapping from './RankMapping'

export default function Layout() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const [session, setSession] = useState(null)
  const [userData, setUserData] = useState(null)
  const [view, setView] = useState('dashboard')
  const [serverMessage, setServerMessage] = useState('')

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        window.location.href = '/login'
      } else {
        setSession(session)
        setUserData(session.user.user_metadata)
        const res = await fetch(`${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}/api/ping`, {
          headers: { Authorization: `Bearer ${session.access_token}` }
        })
        const data = await res.json()
        if (res.ok) setServerMessage(data.message)
        else setServerMessage('Error de autenticación')
      }
    }
    getSession()
  }, [])

  if (!session) return null

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  const views = {
    dashboard: <Dashboard user={userData} />,
    user: <UserSettings user={userData} />,
    ranks: <RankMapping />
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setView={setView} handleLogout={handleLogout} user={userData} />
      <main className="flex-grow p-10">
        <h3 className="text-sm text-gray-500 mb-4">{serverMessage}</h3>
        {views[view]}
      </main>
    </div>
  )
}
