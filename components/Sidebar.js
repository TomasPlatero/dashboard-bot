export default function Sidebar({ setView, handleLogout, user }) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <img src={user?.avatar_url} alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm">{user?.name || user?.full_name}</p>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>
      </div>
      <nav className="space-y-4 mt-6">
        <div onClick={() => setView('dashboard')} className="cursor-pointer hover:text-blue-400">Dashboard</div>
        <div onClick={() => setView('user')} className="cursor-pointer hover:text-blue-400">Usuario</div>
        <div onClick={() => setView('ranks')} className="cursor-pointer hover:text-blue-400">Rangos</div>
        <div onClick={handleLogout} className="cursor-pointer hover:text-red-400 mt-6">Cerrar sesión</div>
      </nav>
    </aside>
  )
}
