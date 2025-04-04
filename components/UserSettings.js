export default function UserSettings({ user }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Opciones del usuario</h1>
      <div className="bg-white rounded p-6 shadow">
        <p><strong>Nombre:</strong> {user?.name || user?.full_name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <img src={user?.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mt-4" />
      </div>
    </div>
  )
}
