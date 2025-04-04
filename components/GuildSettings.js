import React from 'react';

export default function GuildSettings({ user }) {
  const isBattleNetLinked = user?.battlenet_linked; // o como se llame tu campo real

  return (
    <div className="space-y-6 px-6 py-4">
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          🎯 Configuración de Hermandad
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          {isBattleNetLinked
            ? 'Tu cuenta de Battle.net está vinculada. Pronto podrás seleccionar la hermandad que deseas gestionar.'
            : 'Vincula tu cuenta de Battle.net y selecciona la hermandad que deseas gestionar. Esto permitirá sincronizar rangos y miembros automáticamente.'}
        </p>

        {isBattleNetLinked ? (
          <div className="p-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-500 text-sm italic mb-6">
            [Aquí irá el selector de hermandad vía Battle.net cuando esté disponible]
          </div>
        ) : (
          <button
            onClick={() => alert('Funcionalidad próximamente')}
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow"
          >
            🔗 Vincular Battle.net
          </button>
        )}
      </div>
    </div>
  );
}
