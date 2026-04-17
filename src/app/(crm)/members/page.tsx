'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { members, type MemberStatus } from '@/lib/mockData';
import { Search, Plus, Filter, Phone, Mail, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const statusConfig: Record<MemberStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  activo: { label: 'Activo', color: '#22c55e', bg: '#16a34a20', icon: CheckCircle },
  vencido: { label: 'Vencido', color: '#dc2626', bg: '#dc262620', icon: XCircle },
  pendiente: { label: 'Pendiente', color: '#f59e0b', bg: '#f59e0b20', icon: Clock },
};

const planColors: Record<string, string> = {
  'Básico': '#6b7280',
  'Pro': '#dc2626',
  'Elite': '#f59e0b',
  'Trimestral Pro': '#8b5cf6',
};

export default function MembersPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<MemberStatus | 'todos'>('todos');
  const [showModal, setShowModal] = useState(false);

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'todos' || m.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="flex flex-col flex-1">
      <Header title="Socios" subtitle={`${members.length} miembros registrados`} />

      <div className="flex-1 p-6 space-y-6">

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          {(['activo', 'vencido', 'pendiente'] as MemberStatus[]).map((s) => {
            const count = members.filter(m => m.status === s).length;
            const cfg = statusConfig[s];
            const Icon = cfg.icon;
            return (
              <button key={s} onClick={() => setFilterStatus(filterStatus === s ? 'todos' : s)}
                className="p-4 rounded-2xl text-left transition-all"
                style={{
                  backgroundColor: filterStatus === s ? cfg.bg : '#1f2937',
                  border: `1px solid ${filterStatus === s ? cfg.color + '50' : '#374151'}`,
                }}>
                <Icon size={18} style={{ color: cfg.color }} className="mb-2" />
                <p className="text-2xl font-bold text-white">{count}</p>
                <p className="text-sm" style={{ color: '#9ca3af' }}>Socios {cfg.label.toLowerCase()}s</p>
              </button>
            );
          })}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl"
            style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <Search size={16} style={{ color: '#6b7280' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none text-white placeholder:text-gray-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium"
            style={{ backgroundColor: '#1f2937', border: '1px solid #374151', color: '#9ca3af' }}>
            <Filter size={15} /> Filtros
          </button>
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: '#dc2626' }}>
            <Plus size={15} /> Nuevo socio
          </button>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  {['Socio', 'Plan', 'Estado', 'Vencimiento', 'Asistencias', 'Contacto'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#6b7280' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => {
                  const cfg = statusConfig[m.status];
                  const Icon = cfg.icon;
                  return (
                    <tr key={m.id} className="transition-colors"
                      style={{ borderBottom: '1px solid #374151' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#263144')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: '#dc262620', color: '#dc2626' }}>
                            {m.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{m.name}</p>
                            <p className="text-xs" style={{ color: '#6b7280' }}>{m.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${planColors[m.plan]}20`, color: planColors[m.plan] }}>
                          {m.plan}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <Icon size={13} style={{ color: cfg.color }} />
                          <span className="text-xs font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 text-sm" style={{ color: '#9ca3af' }}>
                          <Calendar size={13} />
                          {new Date(m.expiryDate).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-16 rounded-full overflow-hidden" style={{ backgroundColor: '#374151' }}>
                            <div className="h-full rounded-full" style={{ width: `${Math.min((m.attended / 30) * 100, 100)}%`, backgroundColor: '#dc2626' }} />
                          </div>
                          <span className="text-xs" style={{ color: '#9ca3af' }}>{m.attended}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a href={`tel:${m.phone}`} className="p-1.5 rounded-lg transition-colors"
                            style={{ color: '#6b7280' }}>
                            <Phone size={13} />
                          </a>
                          <a href={`mailto:${m.email}`} className="p-1.5 rounded-lg transition-colors"
                            style={{ color: '#6b7280' }}>
                            <Mail size={13} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 text-xs" style={{ color: '#6b7280', borderTop: '1px solid #374151' }}>
            Mostrando {filtered.length} de {members.length} socios
          </div>
        </div>
      </div>

      {/* Add member modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: '#00000080' }}
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="w-full max-w-md rounded-2xl p-6" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <h2 className="text-lg font-bold text-white mb-5">Nuevo socio</h2>
            <div className="space-y-4">
              {[
                { label: 'Nombre completo', placeholder: 'Ej: Juan García', type: 'text' },
                { label: 'Email', placeholder: 'juan@mail.com', type: 'email' },
                { label: 'Teléfono', placeholder: '11-1234-5678', type: 'tel' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none focus:ring-1"
                    style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>Plan</label>
                <select className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                  style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
                  <option>Básico</option>
                  <option>Pro</option>
                  <option>Elite</option>
                  <option>Trimestral Pro</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#374151', color: '#9ca3af' }}>
                Cancelar
              </button>
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: '#dc2626' }}>
                Guardar socio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
