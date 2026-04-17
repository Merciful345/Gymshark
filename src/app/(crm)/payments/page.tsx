'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { payments, type PaymentStatus } from '@/lib/mockData';
import { Search, CheckCircle, Clock, XCircle, CreditCard, Banknote, ArrowDownUp } from 'lucide-react';

const statusConfig: Record<PaymentStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  pagado: { label: 'Pagado', color: '#22c55e', bg: '#16a34a20', icon: CheckCircle },
  pendiente: { label: 'Pendiente', color: '#f59e0b', bg: '#f59e0b20', icon: Clock },
  vencido: { label: 'Vencido', color: '#dc2626', bg: '#dc262620', icon: XCircle },
};

const methodIcon = (method: string) => {
  if (method === 'Efectivo') return <Banknote size={13} />;
  return <CreditCard size={13} />;
};

export default function PaymentsPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<PaymentStatus | 'todos'>('todos');

  const filtered = payments.filter(p => {
    const matchSearch = p.memberName.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'todos' || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPaid = payments.filter(p => p.status === 'pagado').reduce((a, p) => a + p.amount, 0);
  const totalPending = payments.filter(p => p.status !== 'pagado').reduce((a, p) => a + p.amount, 0);

  return (
    <div className="flex flex-col flex-1">
      <Header title="Pagos" subtitle="Historial y estado de cobros" />

      <div className="flex-1 p-6 space-y-6">

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Cobrado este mes</p>
            <p className="text-3xl font-extrabold text-white">${totalPaid.toLocaleString()}</p>
            <p className="text-xs mt-1" style={{ color: '#22c55e' }}>
              {payments.filter(p => p.status === 'pagado').length} pagos confirmados
            </p>
          </div>
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Pendiente de cobro</p>
            <p className="text-3xl font-extrabold" style={{ color: '#f59e0b' }}>${totalPending.toLocaleString()}</p>
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>
              {payments.filter(p => p.status !== 'pagado').length} pagos por resolver
            </p>
          </div>
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Tasa de cobro</p>
            <p className="text-3xl font-extrabold" style={{ color: '#dc2626' }}>
              {Math.round((payments.filter(p => p.status === 'pagado').length / payments.length) * 100)}%
            </p>
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>de los pagos del mes</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl"
            style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <Search size={16} style={{ color: '#6b7280' }} />
            <input type="text" placeholder="Buscar socio..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none text-white placeholder:text-gray-500" />
          </div>
          <div className="flex gap-2">
            {(['todos', 'pagado', 'pendiente', 'vencido'] as const).map(s => (
              <button key={s} onClick={() => setFilterStatus(s)}
                className="px-3 py-2 rounded-xl text-xs font-medium capitalize transition-all"
                style={{
                  backgroundColor: filterStatus === s ? '#dc2626' : '#1f2937',
                  color: filterStatus === s ? 'white' : '#9ca3af',
                  border: '1px solid',
                  borderColor: filterStatus === s ? '#dc2626' : '#374151',
                }}>
                {s === 'todos' ? 'Todos' : statusConfig[s as PaymentStatus]?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  {['Socio', 'Plan', 'Monto', 'Fecha', 'Método', 'Estado', 'Acciones'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#6b7280' }}>
                      <span className="flex items-center gap-1">{h} {h === 'Monto' && <ArrowDownUp size={10} />}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => {
                  const cfg = statusConfig[p.status];
                  const Icon = cfg.icon;
                  return (
                    <tr key={p.id}
                      style={{ borderBottom: '1px solid #374151' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#263144')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ backgroundColor: '#dc262620', color: '#dc2626' }}>
                            {p.memberName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-medium text-white">{p.memberName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm" style={{ color: '#9ca3af' }}>{p.plan}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-semibold text-white">${p.amount.toLocaleString()}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm" style={{ color: '#9ca3af' }}>
                          {new Date(p.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 text-sm" style={{ color: '#9ca3af' }}>
                          {methodIcon(p.method)} {p.method}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <Icon size={13} style={{ color: cfg.color }} />
                          <span className="text-xs font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {p.status !== 'pagado' && (
                          <button className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                            style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                            Marcar pagado
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 text-xs" style={{ color: '#6b7280', borderTop: '1px solid #374151' }}>
            {filtered.length} registros
          </div>
        </div>

      </div>
    </div>
  );
}
