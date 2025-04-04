'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import UserSettings from './UserSettings'
import RankMapping from './RankMapping'

export default function Layout() {
  const supabase = createClientComponentClient()
  const [session, setSession] = useState(null)
  const [view, setView] = useState('dashboard')
  const [serverMessage, setServerMessage] = useState('')

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        window.location.href = '/login'
      } else {
        setSession(session)
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

  const views = {
    dashboard: <Dashboard />,
    user: <UserSettings />,
    ranks: <RankMapping />
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setView={setView} />
      <main style={{ flexGrow: 1, padding: 30 }}>
        <h3>{serverMessage}</h3>
        {views[view]}
      </main>
    </div>
  )
}
