export default function Sidebar({ setView }) {
  return (
    <aside style={{
      width: 220,
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: 20,
      height: '100vh'
    }}>
      <h2>Artic Tempest</h2>
      <div style={{ marginTop: 30 }}>
        <div onClick={() => setView('dashboard')} style={{ marginBottom: 10, cursor: 'pointer' }}>Dashboard</div>
        <div onClick={() => setView('user')} style={{ marginBottom: 10, cursor: 'pointer' }}>Usuario</div>
        <div onClick={() => setView('ranks')} style={{ cursor: 'pointer' }}>Rangos</div>
      </div>
    </aside>
  )
}
