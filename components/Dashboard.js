export default function Dashboard({ user }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenido, {user?.name || user?.full_name} 👋</h1>
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-2">Configuración de Hermandad</h2>
        <p className="text-sm text-gray-600 mb-4">Este panel permitirá elegir y vincular la hermandad una vez inicies sesión con Battle.net</p>
        <div className="border rounded p-4 text-gray-400 italic">
          [AQUÍ irá el selector de hermandad vía Battle.net cuando esté disponible]
        </div>
      </div>
    </div>
  )
}
