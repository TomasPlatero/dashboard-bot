import React from 'react';

export default function Dashboard({ user }) {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          👋 Bienvenido, <span className="text-blue-600">{user?.name || user?.full_name}</span>
        </h1>
        <p className="text-sm text-gray-500">Tu sesión ha sido validada correctamente.</p>
      </div>
    </div>
  );
}
