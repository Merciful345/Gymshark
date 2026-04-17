'use client';

import Header from '@/components/Header';
import { members, payments, attendanceToday, monthlyRevenue, weeklyAttendance, memberGrowth } from '@/lib/mockData';
import { Users, CreditCard, ClipboardList, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts';

const activeMembers = members.filter(m => m.status === 'activo').length;
const expiredMembers = members.filter(m => m.status === 'vencido').length;
const pendingPayments = payments.filter(p => p.status === 'pendiente' || p.status === 'vencido').length;
const totalRevenue = payments.filter(p => p.status === 'pagado').reduce((a, p) => a + p.amount, 0);

const StatCard = ({ icon: Icon, label, value, sub, color }: {
  icon: React.ElementType; label: string; value: string; sub: string; color: string;
}) => (
  <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${color}15`, color }}>
        {sub}
      </span>
    </div>
    <p className="text-2xl font-bold text-white mb-0.5">{value}</p>
    <p className="text-sm" style={{ color: '#6b7280' }}>{label}</p>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header title="Dashboard" subtitle="Resumen general del gimnasio" />

      <div className="flex-1 p-6 space-y-6">

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users} label="Socios activos" value={String(activeMembers)} sub={`${expiredMembers} vencidos`} color="#dc2626" />
          <StatCard icon={CreditCard} label="Ingresos del mes" value={`$${(totalRevenue / 1000).toFixed(0)}K`} sub="+18K vs ant." color="#22c55e" />
          <StatCard icon={ClipboardList} label="Asistencia hoy" value={String(attendanceToday.length)} sub="de 190 socios" color="#3b82f6" />
          <StatCard icon={AlertCircle} label="Pagos pendientes" value={String(pendingPayments)} sub="requieren atención" color="#f59e0b" />
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Revenue chart */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-semibold text-white">Ingresos mensuales</p>
                <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>Últimos 6 meses</p>
              </div>
              <TrendingUp size={18} style={{ color: '#22c55e' }} />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={monthlyRevenue}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }}
                  formatter={(v) => [v ? `$${Number(v).toLocaleString()}` : '0', 'Ingresos']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={2} fill="url(#revenueGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance chart */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-semibold text-white">Asistencia semanal</p>
                <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>Esta semana</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyAttendance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }}
                  formatter={(v) => [v, 'Asistencias']}
                />
                <Bar dataKey="count" fill="#dc2626" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Recent payments */}
          <div className="lg:col-span-2 p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-white">Últimos pagos</p>
              <Link href="/payments" className="text-xs font-medium" style={{ color: '#dc2626' }}>Ver todos</Link>
            </div>
            <div className="space-y-3">
              {payments.slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between py-2"
                  style={{ borderBottom: '1px solid #374151' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: '#dc262620', color: '#dc2626' }}>
                      {p.memberName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{p.memberName}</p>
                      <p className="text-xs" style={{ color: '#6b7280' }}>{p.plan} · {p.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">${p.amount.toLocaleString()}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium`}
                      style={{
                        backgroundColor: p.status === 'pagado' ? '#16a34a20' : p.status === 'pendiente' ? '#f59e0b20' : '#dc262620',
                        color: p.status === 'pagado' ? '#22c55e' : p.status === 'pendiente' ? '#f59e0b' : '#dc2626',
                      }}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's attendance */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-white">Asistencia hoy</p>
              <Link href="/attendance" className="text-xs font-medium" style={{ color: '#dc2626' }}>Ver todo</Link>
            </div>
            <div className="space-y-3">
              {attendanceToday.map((a) => (
                <div key={a.id} className="flex items-center gap-3">
                  <CheckCircle size={14} style={{ color: '#22c55e' }} className="flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{a.memberName}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{a.plan}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: '#6b7280' }}>
                    <Clock size={11} />
                    {a.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Member growth */}
        <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-semibold text-white">Crecimiento de socios</p>
              <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>Últimos 6 meses</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-white">190</p>
              <p className="text-xs" style={{ color: '#22c55e' }}>+48 socios</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={memberGrowth}>
              <defs>
                <linearGradient id="membersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} domain={[130, 200]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#f9fafb' }}
                formatter={(v) => [v, 'Socios']}
              />
              <Area type="monotone" dataKey="members" stroke="#3b82f6" strokeWidth={2} fill="url(#membersGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
