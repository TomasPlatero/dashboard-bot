import { useEffect, useState } from 'react'
import axios from 'axios'

export default function GuildSettings({ user }) {
  const [guilds, setGuilds] = useState([])

  useEffect(() => {
    if (!user?.battlenet_linked) return

    const fetchGuilds = async () => {
      try {
        const MIDDLEWARE_URL = process.env.NEXT_PUBLIC_MIDDLEWARE_URL

        const res = await axios.post(
          `${MIDDLEWARE_URL}/api/sync-guilds`,
          {},
          {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        )

        setGuilds(res.data.inserted)
      } catch (err) {
        console.error('Error sincronizando hermandades:', err)
      }
    }

    fetchGuilds()
  }, [user])

  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}/auth/login?token=${user.token}`
  }


  return (
    <div className="space-y-6 px-6 py-4">
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          🎯 Configuración de Hermandad
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          {user?.battlenet_linked
            ? 'Tu cuenta de Battle.net está vinculada. Selecciona la hermandad que deseas gestionar.'
            : 'Vincula tu cuenta de Battle.net para comenzar la gestión de tu hermandad.'}
        </p>

        {user?.battlenet_linked ? (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Selecciona tu hermandad:</label>
            <select className="w-full p-2 border rounded">
              {guilds.map((name, i) => (
                <option key={i} value={name}>{name}</option>
              ))}
            </select>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow"
          >
            🔗 Iniciar sesión con Battle.net
          </button>
        )}
      </div>
    </div>
  )
}