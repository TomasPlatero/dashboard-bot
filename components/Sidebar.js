export default function Sidebar({ setView, handleLogout, user }) {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-8">
      <div className="flex items-center space-x-4">
        <img
          src={user?.avatar_url}
          alt="avatar"
          className="w-12 h-12 rounded-full border border-gray-700"
        />
        <div className="truncate">
          <p className="text-sm font-semibold truncate">{user?.name || user?.full_name}</p>
          <p className="text-xs text-gray-400 truncate">{user?.email}</p>
        </div>
      </div>

      <nav className="space-y-3">
        <button onClick={() => setView('dashboard')} className="w-full text-left hover:text-blue-400 transition">🏠 Dashboard</button>
        <button onClick={() => setView('user')} className="w-full text-left hover:text-blue-400 transition">👤 Usuario</button>
        <button onClick={() => setView('guilds')} className="w-full text-left hover:text-blue-400 transition">🎯 Hermandad</button>
        <button onClick={() => setView('ranks')} className="w-full text-left hover:text-blue-400 transition">📊 Rangos</button>
      </nav>

      <div className="border-t border-gray-700 pt-4">
        <button onClick={handleLogout} className="w-full text-left text-red-400 hover:text-red-300 transition">🔓 Cerrar sesión</button>
      </div>
    </aside>
  )
}
