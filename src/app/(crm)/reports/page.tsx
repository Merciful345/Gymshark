'use client';

import Header from '@/components/Header';
import { monthlyRevenue, memberGrowth, weeklyAttendance, plans } from '@/lib/mockData';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PLAN_COLORS = ['#6b7280', '#dc2626', '#f59e0b', '#8b5cf6'];

export default function ReportsPage() {
  const planData = plans.map(p => ({ name: p.name, value: p.members }));

  return (
    <div className="flex flex-col flex-1">
      <Header title="Reportes" subtitle="Análisis y métricas del gimnasio" />

      <div className="flex-1 p-6 space-y-6">

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Revenue */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="font-semibold text-white mb-1">Evolución de ingresos</p>
            <p className="text-xs mb-4" style={{ color: '#6b7280' }}>Últimos 6 meses</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={monthlyRevenue}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={v => `$${(v / 1000).toFixed(0)}K`} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }} formatter={(v) => [v ? `$${Number(v).toLocaleString()}` : '0', 'Ingresos']} />
                <Area type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Members growth */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="font-semibold text-white mb-1">Crecimiento de socios</p>
            <p className="text-xs mb-4" style={{ color: '#6b7280' }}>Últimos 6 meses</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={memberGrowth}>
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} domain={[130, 200]} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }} formatter={(v) => [v, 'Socios']} />
                <Area type="monotone" dataKey="members" stroke="#3b82f6" strokeWidth={2} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="font-semibold text-white mb-1">Asistencia semanal</p>
            <p className="text-xs mb-4" style={{ color: '#6b7280' }}>Esta semana</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyAttendance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }} formatter={(v) => [v, 'Asistencias']} />
                <Bar dataKey="count" fill="#dc2626" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Plan distribution */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <p className="font-semibold text-white mb-1">Distribución de planes</p>
            <p className="text-xs mb-4" style={{ color: '#6b7280' }}>Socios por plan</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={planData} cx="50%" cy="50%" innerRadius={55} outerRadius={80}
                  paddingAngle={4} dataKey="value">
                  {planData.map((_, i) => (
                    <Cell key={i} fill={PLAN_COLORS[i % PLAN_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                  labelStyle={{ color: '#f9fafb' }} formatter={(v) => [v, 'Socios']} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, color: '#9ca3af' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
