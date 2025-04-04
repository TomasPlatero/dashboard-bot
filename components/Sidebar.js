export default function Sidebar({ setView }) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
      <h2 className="text-xl font-semibold">Artic Tempest</h2>
      <nav className="space-y-4">
        <div onClick={() => setView('dashboard')} className="cursor-pointer hover:text-blue-400">Dashboard</div>
        <div onClick={() => setView('user')} className="cursor-pointer hover:text-blue-400">Usuario</div>
        <div onClick={() => setView('ranks')} className="cursor-pointer hover:text-blue-400">Rangos</div>
      </nav>
    </aside>
  )
}
