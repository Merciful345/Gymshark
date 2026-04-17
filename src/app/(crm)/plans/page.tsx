'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { plans } from '@/lib/mockData';
import { Users, CheckCircle, Plus, Edit, Trash2 } from 'lucide-react';

export default function PlansPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <Header title="Planes y Membresías" subtitle="Gestioná los planes disponibles en el gimnasio" />

      <div className="flex-1 p-6 space-y-6">

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map(p => (
            <div key={p.id} className="p-4 rounded-2xl text-center"
              style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
              <p className="text-2xl font-bold text-white">{p.members}</p>
              <p className="text-xs mt-1" style={{ color: p.color }}>{p.name}</p>
            </div>
          ))}
        </div>

        {/* Header toolbar */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-white">Planes activos ({plans.length})</p>
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: '#dc2626' }}>
            <Plus size={15} /> Crear plan
          </button>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map(p => (
            <div key={p.id} className="rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: '#1f2937', border: `1px solid ${p.color}30` }}>
              {/* Color header */}
              <div className="px-5 py-4" style={{ backgroundColor: `${p.color}15`, borderBottom: `1px solid ${p.color}30` }}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{p.duration}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-lg" style={{ color: '#6b7280' }}><Edit size={13} /></button>
                    <button className="p-1.5 rounded-lg" style={{ color: '#6b7280' }}><Trash2 size={13} /></button>
                  </div>
                </div>
                <p className="text-3xl font-extrabold mt-3" style={{ color: p.color }}>
                  ${p.price.toLocaleString()}
                </p>
              </div>

              {/* Features */}
              <div className="px-5 py-4 flex-1">
                <ul className="space-y-2">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                      <span style={{ color: '#d1d5db' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: '1px solid #374151' }}>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: '#9ca3af' }}>
                  <Users size={13} />
                  <span>{p.members} socios</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Activo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue by plan */}
        <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <p className="font-semibold text-white mb-4">Ingresos estimados por plan (mensual)</p>
          <div className="space-y-4">
            {plans.map(p => {
              const revenue = p.price * p.members;
              const maxRevenue = Math.max(...plans.map(pl => pl.price * pl.members));
              const pct = (revenue / maxRevenue) * 100;
              return (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium" style={{ color: '#d1d5db' }}>{p.name}</span>
                    <span className="font-semibold text-white">${revenue.toLocaleString()}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#374151' }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: p.color }} />
                  </div>
                  <p className="text-xs" style={{ color: '#6b7280' }}>{p.members} socios × ${p.price.toLocaleString()}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 flex justify-between" style={{ borderTop: '1px solid #374151' }}>
            <span className="text-sm font-medium" style={{ color: '#9ca3af' }}>Total estimado mensual</span>
            <span className="text-lg font-bold text-white">
              ${plans.reduce((a, p) => a + p.price * p.members, 0).toLocaleString()}
            </span>
          </div>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: '#00000080' }}
          onClick={e => e.target === e.currentTarget && setShowModal(false)}>
          <div className="w-full max-w-md rounded-2xl p-6" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <h2 className="text-lg font-bold text-white mb-5">Crear nuevo plan</h2>
            <div className="space-y-4">
              {[
                { label: 'Nombre del plan', placeholder: 'Ej: Premium', type: 'text' },
                { label: 'Precio mensual ($)', placeholder: '8000', type: 'number' },
                { label: 'Duración', placeholder: '1 mes', type: 'text' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                    style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>Beneficios (uno por línea)</label>
                <textarea rows={3} placeholder="Acceso sala de pesas&#10;Clases grupales&#10;..."
                  className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none resize-none"
                  style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#374151', color: '#9ca3af' }}>Cancelar</button>
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: '#dc2626' }}>Crear plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
